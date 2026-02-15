#!/usr/bin/env python3
"""
build_data.py
CSV verilerini okuyup isleme yapar ve dashboard icin data.js dosyasi uretir.
Kullanim: python build_data.py

v2: gunluk_tahminler.csv ve anomali_sonuclari.csv destegi eklendi.
"""

import pandas as pd
import numpy as np
import json
import os
from datetime import date

# =============================================================================
# YAPILANDIRMA
# =============================================================================

CSV_DIR = os.path.join(os.path.dirname(__file__), "..", "otomasyon_data")
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), "js", "data.js")

# Sehir eslesmeleri (aktarma merkezi adi -> il adi)
SEHIR_ESLESMESI = {
    "AVRUPA": "İstanbul",
    "BAŞKENT": "Çankırı",
    "MERZİFON": "Amasya",
    "TRAKYA": "Edirne",
    "BABAESKİ": "Kırklareli",
    "AFYON": "Afyonkarahisar",
}

# 36 ilin koordinatlari (lat, lng)
KOORDINATLAR = {
    "ADANA":       (37.0000, 35.3213),
    "AFYON":       (38.7507, 30.5567),
    "AKSARAY":     (38.3687, 34.0370),
    "ANKARA":      (39.9334, 32.8597),
    "ANTALYA":     (36.8969, 30.7133),
    "AVRUPA":      (41.0082, 28.9784),
    "AYDIN":       (37.8560, 27.8416),
    "BABAESKİ":    (41.7333, 27.2167),
    "BALIKESİR":   (39.6484, 27.8826),
    "BAŞKENT":     (40.6013, 33.6134),
    "BURSA":       (40.1885, 29.0610),
    "DENİZLİ":     (37.7765, 29.0864),
    "DÜZCE":       (40.8438, 31.1565),
    "DİYARBAKIR":  (37.9144, 40.2306),
    "ELAZIĞ":      (38.6810, 39.2264),
    "ERZURUM":     (39.9055, 41.2658),
    "ESKİŞEHİR":   (39.7767, 30.5206),
    "GAZİANTEP":   (37.0662, 37.3833),
    "HATAY":       (36.4018, 36.3498),
    "KAYSERİ":     (38.7312, 35.4787),
    "KOCAELİ":     (40.8533, 29.8815),
    "KONYA":       (37.8746, 32.4932),
    "MALATYA":     (38.3552, 38.3095),
    "MANİSA":      (38.6191, 27.4289),
    "MARDİN":      (37.3212, 40.7245),
    "MERSİN":      (36.8121, 34.6415),
    "MERZİFON":    (40.6499, 35.8353),
    "MUĞLA":       (37.2153, 28.3636),
    "SAMSUN":      (41.2928, 36.3313),
    "SİVAS":       (39.7477, 37.0179),
    "TRABZON":     (41.0027, 39.7168),
    "TRAKYA":      (41.6818, 26.5623),
    "VAN":         (38.4891, 43.3800),
    "ÇANAKKALE":   (40.1553, 26.4142),
    "İZMİR":       (38.4192, 27.1287),
    "ŞANLIURFA":   (37.1591, 38.7969),
}


def get_sehir_adi(merkez_id):
    """Aktarma merkezi ID'sinden goruntulenecek sehir adini dondurur."""
    if merkez_id in SEHIR_ESLESMESI:
        return SEHIR_ESLESMESI[merkez_id]
    return merkez_id.capitalize() if merkez_id.isascii() else merkez_id.title()


def load_daily_data():
    """gunluk_tahminler.csv dosyasini okur, sadece Validation satirlarini dondurur.
    Dosya yoksa None dondurur."""
    path = os.path.join(CSV_DIR, "gunluk_tahminler.csv")
    if not os.path.exists(path):
        print(f"  [UYARI] gunluk_tahminler.csv bulunamadi: {path}")
        return None
    df = pd.read_csv(path, encoding="utf-8-sig")
    print(f"  gunluk_tahminler.csv okundu: {len(df)} satir")
    df_val = df[df["Veri_Seti"] == "Validation"].copy()
    print(f"  Validation satirlari: {len(df_val)}")
    return df_val


def load_anomaly_data():
    """anomali_sonuclari.csv dosyasini okur. Dosya yoksa None dondurur."""
    path = os.path.join(CSV_DIR, "anomali_sonuclari.csv")
    if not os.path.exists(path):
        print(f"  [UYARI] anomali_sonuclari.csv bulunamadi: {path}")
        return None
    df = pd.read_csv(path, encoding="utf-8-sig")
    print(f"  anomali_sonuclari.csv okundu: {len(df)} satir")
    return df


def build_daily_dict(df_val, merkez_id):
    """Bir merkez icin gunluk tahmin verisini model bazli dict'e cevirir."""
    if df_val is None:
        return {}
    mdf = df_val[df_val["AKTARMA_MERKEZI"] == merkez_id]
    if mdf.empty:
        return {}
    result = {}
    for model_name, gdf in mdf.groupby("Model"):
        gdf = gdf.sort_values("ds").reset_index(drop=True)
        result[model_name] = {
            "ds": gdf["ds"].tolist(),
            "y": [round(v, 2) if pd.notna(v) else None for v in gdf["y"]],
            "y_pred": [round(v, 2) if pd.notna(v) else None for v in gdf["y_pred"]],
        }
    return result


def build_anomaly_dict(df_anom, merkez_id):
    """Bir merkez icin anomali verisini model bazli dict'e cevirir."""
    if df_anom is None:
        return {}
    mdf = df_anom[df_anom["AKTARMA_MERKEZI"] == merkez_id]
    if mdf.empty:
        return {}
    result = {}
    for model_name, gdf in mdf.groupby("Model"):
        gdf = gdf.sort_values("ds").reset_index(drop=True)
        rows = []
        for _, row in gdf.iterrows():
            rows.append({
                "ds": row["ds"],
                "y": round(row["y"], 2) if pd.notna(row["y"]) else None,
                "y_pred": round(row["y_pred"], 2) if pd.notna(row["y_pred"]) else None,
                "votes": int(row["Total_Votes"]),
                "seviye": row["Seviye"],
            })
        result[model_name] = rows
    return result


def main():
    # --- 1. ANA CSV OKU ---
    csv_path = os.path.join(CSV_DIR, "otomasyon_checkpoint.csv")
    print(f"CSV okunuyor: {csv_path}")
    df = pd.read_csv(csv_path, encoding="utf-8-sig")
    print(f"  Toplam satir: {len(df)}")

    # --- 2. TSMixer (HATA) SATIRLARINI FILTRELE ---
    df = df[df["Kategori"] != "HATA"].copy()
    print(f"  TSMixer filtrelendi, kalan: {len(df)}")

    # --- 3. NaN SATIRLARINI CIKAR ---
    df = df.dropna(subset=["Validation_WMAE", "Holdout_Hata_Orani_%"]).copy()
    print(f"  NaN filtrelendi, kalan: {len(df)}")

    # --- 4. YENI CSV'LERI OKU ---
    print("\nEk veri kaynaklari:")
    df_daily = load_daily_data()
    df_anomaly = load_anomaly_data()
    has_detail = df_daily is not None

    # --- 5. HER MERKEZ ICIN RANKING VE TOP 3 ---
    merkezler_data = []
    merkez_ids = sorted(df["AKTARMA_MERKEZI"].unique())
    print(f"\n{len(merkez_ids)} aktarma merkezi isleniyor...")

    for merkez_id in merkez_ids:
        mdf = df[df["AKTARMA_MERKEZI"] == merkez_id].copy()

        # WMAE sirala (kucukten buyuge), rank ver
        mdf = mdf.sort_values("Validation_WMAE").reset_index(drop=True)
        mdf["wmae_rank"] = range(1, len(mdf) + 1)

        # Hata orani sirala (kucukten buyuge), rank ver
        mdf = mdf.sort_values("Holdout_Hata_Orani_%").reset_index(drop=True)
        mdf["hata_rank"] = range(1, len(mdf) + 1)

        # Kombine puan
        mdf["kombine"] = mdf["wmae_rank"] + mdf["hata_rank"]

        # Top 3 (kombine puana gore)
        mdf_sorted = mdf.sort_values("kombine").reset_index(drop=True)
        top3 = mdf_sorted.head(3)

        # Tahmini Desi: Hata orani en dusuk 3 modelin tahmin ortalamasi
        mdf_by_hata = mdf.sort_values("Holdout_Hata_Orani_%").head(3)
        tahmini_desi = mdf_by_hata["Holdout_Tahmin_Toplam"].mean()

        # Gercek toplam (her model icin ayni)
        gercek_toplam = mdf["Holdout_Gercek_Toplam"].iloc[0]

        # Top 3 en dusuk hata modellerinin ortalama hata orani
        ort_hata = mdf_by_hata["Holdout_Hata_Orani_%"].mean()

        # Koordinat
        lat, lng = KOORDINATLAR.get(merkez_id, (39.0, 35.0))

        # Top 3 modeller listesi
        top3_list = []
        for _, row in top3.iterrows():
            top3_list.append({
                "model": row["Model"],
                "wmae_rank": int(row["wmae_rank"]),
                "hata_rank": int(row["hata_rank"]),
                "kombine": int(row["kombine"]),
                "wmae": round(row["Validation_WMAE"], 4),
                "hata": round(row["Holdout_Hata_Orani_%"], 2),
                "tahmin": round(row["Holdout_Tahmin_Toplam"], 0),
            })

        # Tum modeller listesi (WMAE sirasiyla)
        tum_list = []
        for _, row in mdf.sort_values("Validation_WMAE").iterrows():
            tum_list.append({
                "model": row["Model"],
                "kategori": row["Kategori"],
                "wmae": round(row["Validation_WMAE"], 4),
                "wmae_rank": int(row["wmae_rank"]),
                "hata": round(row["Holdout_Hata_Orani_%"], 2),
                "hata_rank": int(row["hata_rank"]),
                "kombine": int(row["kombine"]),
                "tahmin_toplam": round(row["Holdout_Tahmin_Toplam"], 0),
                "gercek_toplam": round(row["Holdout_Gercek_Toplam"], 0),
                "fark": round(row["Holdout_Fark"], 0),
            })

        # Gunluk tahmin ve anomali verileri
        daily = build_daily_dict(df_daily, merkez_id)
        anomali = build_anomaly_dict(df_anomaly, merkez_id)

        merkez_obj = {
            "id": merkez_id,
            "sehir": get_sehir_adi(merkez_id),
            "lat": lat,
            "lng": lng,
            "gercek_toplam": round(gercek_toplam, 0),
            "tahmini_desi": round(tahmini_desi, 0),
            "ort_hata": round(ort_hata, 2),
            "top3_models": top3_list,
            "tum_modeller": tum_list,
            "daily": daily,
            "anomali": anomali,
        }

        merkezler_data.append(merkez_obj)

    # --- 6. META BILGI ---
    model_listesi = sorted(df["Model"].unique().tolist())

    output = {
        "merkezler": merkezler_data,
        "meta": {
            "toplam_merkez": len(merkezler_data),
            "model_listesi": model_listesi,
            "guncelleme": str(date.today()),
            "has_detail": has_detail,
        },
    }

    # --- 7. data.js DOSYASINA YAZ ---
    json_str = json.dumps(output, ensure_ascii=False, indent=2)
    js_content = f"const DASHBOARD_DATA = {json_str};\n"

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"\n{OUTPUT_PATH} olusturuldu!")
    print(f"  {len(merkezler_data)} merkez, {len(model_listesi)} model")
    print(f"  Detay verisi (gunluk/anomali): {'EVET' if has_detail else 'HAYIR'}")

    # Ozet
    desi_values = [m["tahmini_desi"] for m in merkezler_data]
    print(f"  Min tahmini desi: {min(desi_values):,.0f}")
    print(f"  Max tahmini desi: {max(desi_values):,.0f}")

    daily_counts = sum(1 for m in merkezler_data if m["daily"])
    anomaly_counts = sum(1 for m in merkezler_data if m["anomali"])
    print(f"  Gunluk veri olan merkez: {daily_counts}")
    print(f"  Anomali verisi olan merkez: {anomaly_counts}")


if __name__ == "__main__":
    main()
