const DASHBOARD_DATA = {
  "merkezler": [
    {
      "id": "ADANA",
      "sehir": "Adana",
      "lat": 37.0,
      "lng": 35.3213,
      "gercek_toplam": 1656513.0,
      "tahmini_desi": 1486541.0,
      "ort_hata": 10.5,
      "top3_models": [
        {
          "model": "Stacked_LSTM",
          "wmae_rank": 2,
          "hata_rank": 1,
          "kombine": 3,
          "wmae": 0.3548,
          "hata": 0.36,
          "tahmin": 1662483.0
        },
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 1,
          "hata_rank": 3,
          "kombine": 4,
          "wmae": 0.2962,
          "hata": 15.74,
          "tahmin": 1395833.0
        },
        {
          "model": "NBEATS",
          "wmae_rank": 7,
          "hata_rank": 2,
          "kombine": 9,
          "wmae": 0.4869,
          "hata": 15.41,
          "tahmin": 1401309.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.2962,
          "wmae_rank": 1,
          "hata": 15.74,
          "hata_rank": 3,
          "kombine": 4,
          "tahmin_toplam": 1395833.0,
          "gercek_toplam": 1656513.0,
          "fark": -260681.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3548,
          "wmae_rank": 2,
          "hata": 0.36,
          "hata_rank": 1,
          "kombine": 3,
          "tahmin_toplam": 1662483.0,
          "gercek_toplam": 1656513.0,
          "fark": 5969.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.3584,
          "wmae_rank": 3,
          "hata": 47.07,
          "hata_rank": 9,
          "kombine": 12,
          "tahmin_toplam": 876841.0,
          "gercek_toplam": 1656513.0,
          "fark": -779672.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.3688,
          "wmae_rank": 4,
          "hata": 33.97,
          "hata_rank": 7,
          "kombine": 11,
          "tahmin_toplam": 1093815.0,
          "gercek_toplam": 1656513.0,
          "fark": -562698.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.4333,
          "wmae_rank": 5,
          "hata": 26.12,
          "hata_rank": 5,
          "kombine": 10,
          "tahmin_toplam": 1223850.0,
          "gercek_toplam": 1656513.0,
          "fark": -432664.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.4656,
          "wmae_rank": 6,
          "hata": 26.83,
          "hata_rank": 6,
          "kombine": 12,
          "tahmin_toplam": 1212128.0,
          "gercek_toplam": 1656513.0,
          "fark": -444385.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.4869,
          "wmae_rank": 7,
          "hata": 15.41,
          "hata_rank": 2,
          "kombine": 9,
          "tahmin_toplam": 1401309.0,
          "gercek_toplam": 1656513.0,
          "fark": -255204.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.5255,
          "wmae_rank": 8,
          "hata": 24.47,
          "hata_rank": 4,
          "kombine": 12,
          "tahmin_toplam": 1251208.0,
          "gercek_toplam": 1656513.0,
          "fark": -405306.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.541,
          "wmae_rank": 9,
          "hata": 37.65,
          "hata_rank": 8,
          "kombine": 17,
          "tahmin_toplam": 1032765.0,
          "gercek_toplam": 1656513.0,
          "fark": -623748.0
        }
      ]
    },
    {
      "id": "AFYON",
      "sehir": "Afyonkarahisar",
      "lat": 38.7507,
      "lng": 30.5567,
      "gercek_toplam": 1206523.0,
      "tahmini_desi": 1180325.0,
      "ort_hata": 6.4,
      "top3_models": [
        {
          "model": "PatchTST",
          "wmae_rank": 2,
          "hata_rank": 4,
          "kombine": 6,
          "wmae": 0.3273,
          "hata": 12.62,
          "tahmin": 1054305.0
        },
        {
          "model": "Prophet",
          "wmae_rank": 1,
          "hata_rank": 7,
          "kombine": 8,
          "wmae": 0.2912,
          "hata": 18.99,
          "tahmin": 977456.0
        },
        {
          "model": "NBEATS",
          "wmae_rank": 8,
          "hata_rank": 1,
          "kombine": 9,
          "wmae": 0.4357,
          "hata": 1.46,
          "tahmin": 1188858.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.2912,
          "wmae_rank": 1,
          "hata": 18.99,
          "hata_rank": 7,
          "kombine": 8,
          "tahmin_toplam": 977456.0,
          "gercek_toplam": 1206523.0,
          "fark": -229067.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.3273,
          "wmae_rank": 2,
          "hata": 12.62,
          "hata_rank": 4,
          "kombine": 6,
          "tahmin_toplam": 1054305.0,
          "gercek_toplam": 1206523.0,
          "fark": -152217.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3295,
          "wmae_rank": 3,
          "hata": 18.64,
          "hata_rank": 6,
          "kombine": 9,
          "tahmin_toplam": 981623.0,
          "gercek_toplam": 1206523.0,
          "fark": -224900.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3337,
          "wmae_rank": 4,
          "hata": 20.07,
          "hata_rank": 8,
          "kombine": 12,
          "tahmin_toplam": 964434.0,
          "gercek_toplam": 1206523.0,
          "fark": -242089.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.3357,
          "wmae_rank": 5,
          "hata": 13.7,
          "hata_rank": 5,
          "kombine": 10,
          "tahmin_toplam": 1041212.0,
          "gercek_toplam": 1206523.0,
          "fark": -165311.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.3593,
          "wmae_rank": 6,
          "hata": 39.2,
          "hata_rank": 9,
          "kombine": 15,
          "tahmin_toplam": 733593.0,
          "gercek_toplam": 1206523.0,
          "fark": -472930.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.4018,
          "wmae_rank": 7,
          "hata": 11.4,
          "hata_rank": 3,
          "kombine": 10,
          "tahmin_toplam": 1069016.0,
          "gercek_toplam": 1206523.0,
          "fark": -137507.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.4357,
          "wmae_rank": 8,
          "hata": 1.46,
          "hata_rank": 1,
          "kombine": 9,
          "tahmin_toplam": 1188858.0,
          "gercek_toplam": 1206523.0,
          "fark": -17665.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.4609,
          "wmae_rank": 9,
          "hata": 6.35,
          "hata_rank": 2,
          "kombine": 11,
          "tahmin_toplam": 1283103.0,
          "gercek_toplam": 1206523.0,
          "fark": 76580.0
        }
      ]
    },
    {
      "id": "AKSARAY",
      "sehir": "Aksaray",
      "lat": 38.3687,
      "lng": 34.037,
      "gercek_toplam": 1197525.0,
      "tahmini_desi": 1073667.0,
      "ort_hata": 10.34,
      "top3_models": [
        {
          "model": "PatchTST",
          "wmae_rank": 2,
          "hata_rank": 3,
          "kombine": 5,
          "wmae": 0.3031,
          "hata": 15.36,
          "tahmin": 1013625.0
        },
        {
          "model": "TiDE",
          "wmae_rank": 1,
          "hata_rank": 6,
          "kombine": 7,
          "wmae": 0.2884,
          "hata": 20.46,
          "tahmin": 952529.0
        },
        {
          "model": "NHITS",
          "wmae_rank": 7,
          "hata_rank": 1,
          "kombine": 8,
          "wmae": 0.4542,
          "hata": 6.27,
          "tahmin": 1122484.0
        }
      ],
      "tum_modeller": [
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.2884,
          "wmae_rank": 1,
          "hata": 20.46,
          "hata_rank": 6,
          "kombine": 7,
          "tahmin_toplam": 952529.0,
          "gercek_toplam": 1197525.0,
          "fark": -244996.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.3031,
          "wmae_rank": 2,
          "hata": 15.36,
          "hata_rank": 3,
          "kombine": 5,
          "tahmin_toplam": 1013625.0,
          "gercek_toplam": 1197525.0,
          "fark": -183899.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.3099,
          "wmae_rank": 3,
          "hata": 19.67,
          "hata_rank": 5,
          "kombine": 8,
          "tahmin_toplam": 961981.0,
          "gercek_toplam": 1197525.0,
          "fark": -235543.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3215,
          "wmae_rank": 4,
          "hata": 21.74,
          "hata_rank": 7,
          "kombine": 11,
          "tahmin_toplam": 937136.0,
          "gercek_toplam": 1197525.0,
          "fark": -260389.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.3515,
          "wmae_rank": 5,
          "hata": 39.85,
          "hata_rank": 9,
          "kombine": 14,
          "tahmin_toplam": 720358.0,
          "gercek_toplam": 1197525.0,
          "fark": -477167.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3624,
          "wmae_rank": 6,
          "hata": 21.78,
          "hata_rank": 8,
          "kombine": 14,
          "tahmin_toplam": 936678.0,
          "gercek_toplam": 1197525.0,
          "fark": -260846.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.4542,
          "wmae_rank": 7,
          "hata": 6.27,
          "hata_rank": 1,
          "kombine": 8,
          "tahmin_toplam": 1122484.0,
          "gercek_toplam": 1197525.0,
          "fark": -75041.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.5162,
          "wmae_rank": 8,
          "hata": 9.41,
          "hata_rank": 2,
          "kombine": 10,
          "tahmin_toplam": 1084891.0,
          "gercek_toplam": 1197525.0,
          "fark": -112633.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.5241,
          "wmae_rank": 9,
          "hata": 17.98,
          "hata_rank": 4,
          "kombine": 13,
          "tahmin_toplam": 982153.0,
          "gercek_toplam": 1197525.0,
          "fark": -215371.0
        }
      ]
    },
    {
      "id": "ANKARA",
      "sehir": "Ankara",
      "lat": 39.9334,
      "lng": 32.8597,
      "gercek_toplam": 12331238.0,
      "tahmini_desi": 12313916.0,
      "ort_hata": 2.6,
      "top3_models": [
        {
          "model": "Stacked_LSTM",
          "wmae_rank": 3,
          "hata_rank": 1,
          "kombine": 4,
          "wmae": 0.1726,
          "hata": 0.27,
          "tahmin": 12364272.0
        },
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 2,
          "hata_rank": 3,
          "kombine": 5,
          "wmae": 0.1568,
          "hata": 4.12,
          "tahmin": 11823585.0
        },
        {
          "model": "Prophet",
          "wmae_rank": 7,
          "hata_rank": 2,
          "kombine": 9,
          "wmae": 0.1933,
          "hata": 3.43,
          "tahmin": 12753890.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.1524,
          "wmae_rank": 1,
          "hata": 14.88,
          "hata_rank": 9,
          "kombine": 10,
          "tahmin_toplam": 10496183.0,
          "gercek_toplam": 12331238.0,
          "fark": -1835055.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.1568,
          "wmae_rank": 2,
          "hata": 4.12,
          "hata_rank": 3,
          "kombine": 5,
          "tahmin_toplam": 11823585.0,
          "gercek_toplam": 12331238.0,
          "fark": -507653.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.1726,
          "wmae_rank": 3,
          "hata": 0.27,
          "hata_rank": 1,
          "kombine": 4,
          "tahmin_toplam": 12364272.0,
          "gercek_toplam": 12331238.0,
          "fark": 33034.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.179,
          "wmae_rank": 4,
          "hata": 11.48,
          "hata_rank": 7,
          "kombine": 11,
          "tahmin_toplam": 10915472.0,
          "gercek_toplam": 12331238.0,
          "fark": -1415766.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.183,
          "wmae_rank": 5,
          "hata": 5.51,
          "hata_rank": 5,
          "kombine": 10,
          "tahmin_toplam": 11651179.0,
          "gercek_toplam": 12331238.0,
          "fark": -680059.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.1895,
          "wmae_rank": 6,
          "hata": 5.31,
          "hata_rank": 4,
          "kombine": 10,
          "tahmin_toplam": 11676041.0,
          "gercek_toplam": 12331238.0,
          "fark": -655197.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.1933,
          "wmae_rank": 7,
          "hata": 3.43,
          "hata_rank": 2,
          "kombine": 9,
          "tahmin_toplam": 12753890.0,
          "gercek_toplam": 12331238.0,
          "fark": 422652.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.2282,
          "wmae_rank": 8,
          "hata": 14.83,
          "hata_rank": 8,
          "kombine": 16,
          "tahmin_toplam": 10502394.0,
          "gercek_toplam": 12331238.0,
          "fark": -1828844.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.3086,
          "wmae_rank": 9,
          "hata": 6.11,
          "hata_rank": 6,
          "kombine": 15,
          "tahmin_toplam": 11577805.0,
          "gercek_toplam": 12331238.0,
          "fark": -753433.0
        }
      ]
    },
    {
      "id": "ANTALYA",
      "sehir": "Antalya",
      "lat": 36.8969,
      "lng": 30.7133,
      "gercek_toplam": 2167710.0,
      "tahmini_desi": 2104516.0,
      "ort_hata": 3.89,
      "top3_models": [
        {
          "model": "NHITS",
          "wmae_rank": 7,
          "hata_rank": 1,
          "kombine": 8,
          "wmae": 0.3568,
          "hata": 1.46,
          "tahmin": 2199331.0
        },
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 4,
          "hata_rank": 4,
          "kombine": 8,
          "wmae": 0.2919,
          "hata": 11.12,
          "tahmin": 1926686.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 2,
          "hata_rank": 6,
          "kombine": 8,
          "wmae": 0.2635,
          "hata": 12.85,
          "tahmin": 1889087.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.2417,
          "wmae_rank": 1,
          "hata": 17.05,
          "hata_rank": 8,
          "kombine": 9,
          "tahmin_toplam": 1798170.0,
          "gercek_toplam": 2167710.0,
          "fark": -369540.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.2635,
          "wmae_rank": 2,
          "hata": 12.85,
          "hata_rank": 6,
          "kombine": 8,
          "tahmin_toplam": 1889087.0,
          "gercek_toplam": 2167710.0,
          "fark": -278623.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.2794,
          "wmae_rank": 3,
          "hata": 12.96,
          "hata_rank": 7,
          "kombine": 10,
          "tahmin_toplam": 1886679.0,
          "gercek_toplam": 2167710.0,
          "fark": -281031.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.2919,
          "wmae_rank": 4,
          "hata": 11.12,
          "hata_rank": 4,
          "kombine": 8,
          "tahmin_toplam": 1926686.0,
          "gercek_toplam": 2167710.0,
          "fark": -241024.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3149,
          "wmae_rank": 5,
          "hata": 11.97,
          "hata_rank": 5,
          "kombine": 10,
          "tahmin_toplam": 1908133.0,
          "gercek_toplam": 2167710.0,
          "fark": -259577.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.3465,
          "wmae_rank": 6,
          "hata": 5.36,
          "hata_rank": 3,
          "kombine": 9,
          "tahmin_toplam": 2051444.0,
          "gercek_toplam": 2167710.0,
          "fark": -116266.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.3568,
          "wmae_rank": 7,
          "hata": 1.46,
          "hata_rank": 1,
          "kombine": 8,
          "tahmin_toplam": 2199331.0,
          "gercek_toplam": 2167710.0,
          "fark": 31621.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.3781,
          "wmae_rank": 8,
          "hata": 4.84,
          "hata_rank": 2,
          "kombine": 10,
          "tahmin_toplam": 2062774.0,
          "gercek_toplam": 2167710.0,
          "fark": -104936.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.6838,
          "wmae_rank": 9,
          "hata": 36.9,
          "hata_rank": 9,
          "kombine": 18,
          "tahmin_toplam": 2967563.0,
          "gercek_toplam": 2167710.0,
          "fark": 799853.0
        }
      ]
    },
    {
      "id": "AVRUPA",
      "sehir": "İstanbul",
      "lat": 41.0082,
      "lng": 28.9784,
      "gercek_toplam": 20185391.0,
      "tahmini_desi": 21418921.0,
      "ort_hata": 6.11,
      "top3_models": [
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 2,
          "hata_rank": 1,
          "kombine": 3,
          "wmae": 0.108,
          "hata": 2.74,
          "tahmin": 20738354.0
        },
        {
          "model": "Chronos-2",
          "wmae_rank": 5,
          "hata_rank": 2,
          "kombine": 7,
          "wmae": 0.1278,
          "hata": 6.99,
          "tahmin": 21597034.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 3,
          "hata_rank": 5,
          "kombine": 8,
          "wmae": 0.1187,
          "hata": 16.67,
          "tahmin": 23550328.0
        }
      ],
      "tum_modeller": [
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.097,
          "wmae_rank": 1,
          "hata": 39.51,
          "hata_rank": 8,
          "kombine": 9,
          "tahmin_toplam": 28160476.0,
          "gercek_toplam": 20185391.0,
          "fark": 7975085.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.108,
          "wmae_rank": 2,
          "hata": 2.74,
          "hata_rank": 1,
          "kombine": 3,
          "tahmin_toplam": 20738354.0,
          "gercek_toplam": 20185391.0,
          "fark": 552963.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.1187,
          "wmae_rank": 3,
          "hata": 16.67,
          "hata_rank": 5,
          "kombine": 8,
          "tahmin_toplam": 23550328.0,
          "gercek_toplam": 20185391.0,
          "fark": 3364937.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.1232,
          "wmae_rank": 4,
          "hata": 16.68,
          "hata_rank": 6,
          "kombine": 10,
          "tahmin_toplam": 23552636.0,
          "gercek_toplam": 20185391.0,
          "fark": 3367245.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.1278,
          "wmae_rank": 5,
          "hata": 6.99,
          "hata_rank": 2,
          "kombine": 7,
          "tahmin_toplam": 21597034.0,
          "gercek_toplam": 20185391.0,
          "fark": 1411643.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.1604,
          "wmae_rank": 6,
          "hata": 18.29,
          "hata_rank": 7,
          "kombine": 13,
          "tahmin_toplam": 23877948.0,
          "gercek_toplam": 20185391.0,
          "fark": 3692557.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.1651,
          "wmae_rank": 7,
          "hata": 8.6,
          "hata_rank": 3,
          "kombine": 10,
          "tahmin_toplam": 21921374.0,
          "gercek_toplam": 20185391.0,
          "fark": 1735983.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.2109,
          "wmae_rank": 8,
          "hata": 10.68,
          "hata_rank": 4,
          "kombine": 12,
          "tahmin_toplam": 22342188.0,
          "gercek_toplam": 20185391.0,
          "fark": 2156797.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.3814,
          "wmae_rank": 9,
          "hata": 84.54,
          "hata_rank": 9,
          "kombine": 18,
          "tahmin_toplam": 3120111.0,
          "gercek_toplam": 20185391.0,
          "fark": -17065280.0
        }
      ]
    },
    {
      "id": "AYDIN",
      "sehir": "Aydin",
      "lat": 37.856,
      "lng": 27.8416,
      "gercek_toplam": 744631.0,
      "tahmini_desi": 753086.0,
      "ort_hata": 1.89,
      "top3_models": [
        {
          "model": "NHITS",
          "wmae_rank": 6,
          "hata_rank": 1,
          "kombine": 7,
          "wmae": 0.4592,
          "hata": 1.13,
          "tahmin": 736233.0
        },
        {
          "model": "NBEATS",
          "wmae_rank": 5,
          "hata_rank": 2,
          "kombine": 7,
          "wmae": 0.4445,
          "hata": 2.19,
          "tahmin": 760929.0
        },
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 4,
          "hata_rank": 3,
          "kombine": 7,
          "wmae": 0.4432,
          "hata": 2.35,
          "tahmin": 762095.0
        }
      ],
      "tum_modeller": [
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.3809,
          "wmae_rank": 1,
          "hata": 11.67,
          "hata_rank": 6,
          "kombine": 7,
          "tahmin_toplam": 657703.0,
          "gercek_toplam": 744631.0,
          "fark": -86928.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.3949,
          "wmae_rank": 2,
          "hata": 12.42,
          "hata_rank": 7,
          "kombine": 9,
          "tahmin_toplam": 652178.0,
          "gercek_toplam": 744631.0,
          "fark": -92453.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.3999,
          "wmae_rank": 3,
          "hata": 45.47,
          "hata_rank": 8,
          "kombine": 11,
          "tahmin_toplam": 406036.0,
          "gercek_toplam": 744631.0,
          "fark": -338595.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.4432,
          "wmae_rank": 4,
          "hata": 2.35,
          "hata_rank": 3,
          "kombine": 7,
          "tahmin_toplam": 762095.0,
          "gercek_toplam": 744631.0,
          "fark": 17464.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.4445,
          "wmae_rank": 5,
          "hata": 2.19,
          "hata_rank": 2,
          "kombine": 7,
          "tahmin_toplam": 760929.0,
          "gercek_toplam": 744631.0,
          "fark": 16298.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.4592,
          "wmae_rank": 6,
          "hata": 1.13,
          "hata_rank": 1,
          "kombine": 7,
          "tahmin_toplam": 736233.0,
          "gercek_toplam": 744631.0,
          "fark": -8398.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.4933,
          "wmae_rank": 7,
          "hata": 10.63,
          "hata_rank": 5,
          "kombine": 12,
          "tahmin_toplam": 823806.0,
          "gercek_toplam": 744631.0,
          "fark": 79175.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.5729,
          "wmae_rank": 8,
          "hata": 4.12,
          "hata_rank": 4,
          "kombine": 12,
          "tahmin_toplam": 713962.0,
          "gercek_toplam": 744631.0,
          "fark": -30669.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 1.4561,
          "wmae_rank": 9,
          "hata": 50.52,
          "hata_rank": 9,
          "kombine": 18,
          "tahmin_toplam": 368407.0,
          "gercek_toplam": 744631.0,
          "fark": -376224.0
        }
      ]
    },
    {
      "id": "BABAESKİ",
      "sehir": "Kırklareli",
      "lat": 41.7333,
      "lng": 27.2167,
      "gercek_toplam": 909107.0,
      "tahmini_desi": 862382.0,
      "ort_hata": 9.24,
      "top3_models": [
        {
          "model": "NHITS",
          "wmae_rank": 1,
          "hata_rank": 4,
          "kombine": 5,
          "wmae": 0.3022,
          "hata": 13.14,
          "tahmin": 789619.0
        },
        {
          "model": "NBEATS",
          "wmae_rank": 5,
          "hata_rank": 1,
          "kombine": 6,
          "wmae": 0.3727,
          "hata": 6.15,
          "tahmin": 965024.0
        },
        {
          "model": "TiDE",
          "wmae_rank": 4,
          "hata_rank": 5,
          "kombine": 9,
          "wmae": 0.3675,
          "hata": 14.08,
          "tahmin": 781115.0
        }
      ],
      "tum_modeller": [
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.3022,
          "wmae_rank": 1,
          "hata": 13.14,
          "hata_rank": 4,
          "kombine": 5,
          "tahmin_toplam": 789619.0,
          "gercek_toplam": 909107.0,
          "fark": -119488.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.3503,
          "wmae_rank": 2,
          "hata": 37.18,
          "hata_rank": 8,
          "kombine": 10,
          "tahmin_toplam": 571094.0,
          "gercek_toplam": 909107.0,
          "fark": -338013.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3526,
          "wmae_rank": 3,
          "hata": 26.76,
          "hata_rank": 6,
          "kombine": 9,
          "tahmin_toplam": 665874.0,
          "gercek_toplam": 909107.0,
          "fark": -243233.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.3675,
          "wmae_rank": 4,
          "hata": 14.08,
          "hata_rank": 5,
          "kombine": 9,
          "tahmin_toplam": 781115.0,
          "gercek_toplam": 909107.0,
          "fark": -127992.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.3727,
          "wmae_rank": 5,
          "hata": 6.15,
          "hata_rank": 1,
          "kombine": 6,
          "tahmin_toplam": 965024.0,
          "gercek_toplam": 909107.0,
          "fark": 55917.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3945,
          "wmae_rank": 6,
          "hata": 28.16,
          "hata_rank": 7,
          "kombine": 13,
          "tahmin_toplam": 653105.0,
          "gercek_toplam": 909107.0,
          "fark": -256002.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.4007,
          "wmae_rank": 7,
          "hata": 12.41,
          "hata_rank": 3,
          "kombine": 10,
          "tahmin_toplam": 796244.0,
          "gercek_toplam": 909107.0,
          "fark": -112863.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.4732,
          "wmae_rank": 8,
          "hata": 9.15,
          "hata_rank": 2,
          "kombine": 10,
          "tahmin_toplam": 825879.0,
          "gercek_toplam": 909107.0,
          "fark": -83228.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.6397,
          "wmae_rank": 9,
          "hata": 69.67,
          "hata_rank": 9,
          "kombine": 18,
          "tahmin_toplam": 275712.0,
          "gercek_toplam": 909107.0,
          "fark": -633395.0
        }
      ]
    },
    {
      "id": "BALIKESİR",
      "sehir": "Balikesi̇r",
      "lat": 39.6484,
      "lng": 27.8826,
      "gercek_toplam": 1554710.0,
      "tahmini_desi": 1227803.0,
      "ort_hata": 21.03,
      "top3_models": [
        {
          "model": "PatchTST",
          "wmae_rank": 2,
          "hata_rank": 4,
          "kombine": 6,
          "wmae": 0.3555,
          "hata": 24.78,
          "tahmin": 1169487.0
        },
        {
          "model": "Prophet",
          "wmae_rank": 5,
          "hata_rank": 2,
          "kombine": 7,
          "wmae": 0.3679,
          "hata": 19.46,
          "tahmin": 1252228.0
        },
        {
          "model": "TiDE",
          "wmae_rank": 3,
          "hata_rank": 5,
          "kombine": 8,
          "wmae": 0.3604,
          "hata": 26.91,
          "tahmin": 1136265.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.3484,
          "wmae_rank": 1,
          "hata": 53.32,
          "hata_rank": 9,
          "kombine": 10,
          "tahmin_toplam": 725738.0,
          "gercek_toplam": 1554710.0,
          "fark": -828973.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.3555,
          "wmae_rank": 2,
          "hata": 24.78,
          "hata_rank": 4,
          "kombine": 6,
          "tahmin_toplam": 1169487.0,
          "gercek_toplam": 1554710.0,
          "fark": -385223.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.3604,
          "wmae_rank": 3,
          "hata": 26.91,
          "hata_rank": 5,
          "kombine": 8,
          "tahmin_toplam": 1136265.0,
          "gercek_toplam": 1554710.0,
          "fark": -418445.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3668,
          "wmae_rank": 4,
          "hata": 27.71,
          "hata_rank": 6,
          "kombine": 10,
          "tahmin_toplam": 1123954.0,
          "gercek_toplam": 1554710.0,
          "fark": -430757.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.3679,
          "wmae_rank": 5,
          "hata": 19.46,
          "hata_rank": 2,
          "kombine": 7,
          "tahmin_toplam": 1252228.0,
          "gercek_toplam": 1554710.0,
          "fark": -302483.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3744,
          "wmae_rank": 6,
          "hata": 24.28,
          "hata_rank": 3,
          "kombine": 9,
          "tahmin_toplam": 1177213.0,
          "gercek_toplam": 1554710.0,
          "fark": -377497.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.3839,
          "wmae_rank": 7,
          "hata": 37.29,
          "hata_rank": 8,
          "kombine": 15,
          "tahmin_toplam": 975021.0,
          "gercek_toplam": 1554710.0,
          "fark": -579689.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.4014,
          "wmae_rank": 8,
          "hata": 35.51,
          "hata_rank": 7,
          "kombine": 15,
          "tahmin_toplam": 1002560.0,
          "gercek_toplam": 1554710.0,
          "fark": -552150.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.4771,
          "wmae_rank": 9,
          "hata": 19.34,
          "hata_rank": 1,
          "kombine": 10,
          "tahmin_toplam": 1253968.0,
          "gercek_toplam": 1554710.0,
          "fark": -300743.0
        }
      ]
    },
    {
      "id": "BAŞKENT",
      "sehir": "Çankırı",
      "lat": 40.6013,
      "lng": 33.6134,
      "gercek_toplam": 641858.0,
      "tahmini_desi": 632415.0,
      "ort_hata": 3.68,
      "top3_models": [
        {
          "model": "PatchTST",
          "wmae_rank": 4,
          "hata_rank": 1,
          "kombine": 5,
          "wmae": 0.3387,
          "hata": 2.79,
          "tahmin": 623974.0
        },
        {
          "model": "Prophet",
          "wmae_rank": 1,
          "hata_rank": 6,
          "kombine": 7,
          "wmae": 0.3161,
          "hata": 11.48,
          "tahmin": 715526.0
        },
        {
          "model": "DLinear",
          "wmae_rank": 7,
          "hata_rank": 3,
          "kombine": 10,
          "wmae": 0.4493,
          "hata": 4.95,
          "tahmin": 610107.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.3161,
          "wmae_rank": 1,
          "hata": 11.48,
          "hata_rank": 6,
          "kombine": 7,
          "tahmin_toplam": 715526.0,
          "gercek_toplam": 641858.0,
          "fark": 73669.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.3266,
          "wmae_rank": 2,
          "hata": 27.33,
          "hata_rank": 9,
          "kombine": 11,
          "tahmin_toplam": 466454.0,
          "gercek_toplam": 641858.0,
          "fark": -175404.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3382,
          "wmae_rank": 3,
          "hata": 12.87,
          "hata_rank": 7,
          "kombine": 10,
          "tahmin_toplam": 559232.0,
          "gercek_toplam": 641858.0,
          "fark": -82626.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.3387,
          "wmae_rank": 4,
          "hata": 2.79,
          "hata_rank": 1,
          "kombine": 5,
          "tahmin_toplam": 623974.0,
          "gercek_toplam": 641858.0,
          "fark": -17884.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3388,
          "wmae_rank": 5,
          "hata": 15.33,
          "hata_rank": 8,
          "kombine": 13,
          "tahmin_toplam": 543444.0,
          "gercek_toplam": 641858.0,
          "fark": -98413.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.3516,
          "wmae_rank": 6,
          "hata": 7.32,
          "hata_rank": 4,
          "kombine": 10,
          "tahmin_toplam": 594847.0,
          "gercek_toplam": 641858.0,
          "fark": -47010.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.4493,
          "wmae_rank": 7,
          "hata": 4.95,
          "hata_rank": 3,
          "kombine": 10,
          "tahmin_toplam": 610107.0,
          "gercek_toplam": 641858.0,
          "fark": -31751.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.4798,
          "wmae_rank": 8,
          "hata": 7.51,
          "hata_rank": 5,
          "kombine": 13,
          "tahmin_toplam": 593682.0,
          "gercek_toplam": 641858.0,
          "fark": -48175.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.5518,
          "wmae_rank": 9,
          "hata": 3.32,
          "hata_rank": 2,
          "kombine": 11,
          "tahmin_toplam": 663164.0,
          "gercek_toplam": 641858.0,
          "fark": 21307.0
        }
      ]
    },
    {
      "id": "BURSA",
      "sehir": "Bursa",
      "lat": 40.1885,
      "lng": 29.061,
      "gercek_toplam": 5833645.0,
      "tahmini_desi": 5375190.0,
      "ort_hata": 7.86,
      "top3_models": [
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 3,
          "hata_rank": 1,
          "kombine": 4,
          "wmae": 0.2005,
          "hata": 5.01,
          "tahmin": 5541442.0
        },
        {
          "model": "Stacked_LSTM",
          "wmae_rank": 1,
          "hata_rank": 3,
          "kombine": 4,
          "wmae": 0.1872,
          "hata": 11.43,
          "tahmin": 5166979.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 5,
          "hata_rank": 5,
          "kombine": 10,
          "wmae": 0.2065,
          "hata": 14.35,
          "tahmin": 4996696.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.1872,
          "wmae_rank": 1,
          "hata": 11.43,
          "hata_rank": 3,
          "kombine": 4,
          "tahmin_toplam": 5166979.0,
          "gercek_toplam": 5833645.0,
          "fark": -666666.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.2004,
          "wmae_rank": 2,
          "hata": 20.42,
          "hata_rank": 8,
          "kombine": 10,
          "tahmin_toplam": 4642135.0,
          "gercek_toplam": 5833645.0,
          "fark": -1191510.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.2005,
          "wmae_rank": 3,
          "hata": 5.01,
          "hata_rank": 1,
          "kombine": 4,
          "tahmin_toplam": 5541442.0,
          "gercek_toplam": 5833645.0,
          "fark": -292202.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.2054,
          "wmae_rank": 4,
          "hata": 14.66,
          "hata_rank": 6,
          "kombine": 10,
          "tahmin_toplam": 4978375.0,
          "gercek_toplam": 5833645.0,
          "fark": -855269.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.2065,
          "wmae_rank": 5,
          "hata": 14.35,
          "hata_rank": 5,
          "kombine": 10,
          "tahmin_toplam": 4996696.0,
          "gercek_toplam": 5833645.0,
          "fark": -836949.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.2165,
          "wmae_rank": 6,
          "hata": 15.14,
          "hata_rank": 7,
          "kombine": 13,
          "tahmin_toplam": 4950247.0,
          "gercek_toplam": 5833645.0,
          "fark": -883398.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.2567,
          "wmae_rank": 7,
          "hata": 22.39,
          "hata_rank": 9,
          "kombine": 16,
          "tahmin_toplam": 4527516.0,
          "gercek_toplam": 5833645.0,
          "fark": -1306129.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.2618,
          "wmae_rank": 8,
          "hata": 11.57,
          "hata_rank": 4,
          "kombine": 12,
          "tahmin_toplam": 5158940.0,
          "gercek_toplam": 5833645.0,
          "fark": -674704.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.3129,
          "wmae_rank": 9,
          "hata": 7.14,
          "hata_rank": 2,
          "kombine": 11,
          "tahmin_toplam": 5417150.0,
          "gercek_toplam": 5833645.0,
          "fark": -416495.0
        }
      ]
    },
    {
      "id": "DENİZLİ",
      "sehir": "Deni̇zli̇",
      "lat": 37.7765,
      "lng": 29.0864,
      "gercek_toplam": 623239.0,
      "tahmini_desi": 537204.0,
      "ort_hata": 14.48,
      "top3_models": [
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 1,
          "hata_rank": 5,
          "kombine": 6,
          "wmae": 0.4924,
          "hata": 22.35,
          "tahmin": 483935.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 4,
          "hata_rank": 3,
          "kombine": 7,
          "wmae": 0.5114,
          "hata": 21.54,
          "tahmin": 489012.0
        },
        {
          "model": "NHITS",
          "wmae_rank": 6,
          "hata_rank": 2,
          "kombine": 8,
          "wmae": 0.5543,
          "hata": 20.89,
          "tahmin": 493019.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.4924,
          "wmae_rank": 1,
          "hata": 22.35,
          "hata_rank": 5,
          "kombine": 6,
          "tahmin_toplam": 483935.0,
          "gercek_toplam": 623239.0,
          "fark": -139304.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.5005,
          "wmae_rank": 2,
          "hata": 23.03,
          "hata_rank": 6,
          "kombine": 8,
          "tahmin_toplam": 479681.0,
          "gercek_toplam": 623239.0,
          "fark": -143558.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.5014,
          "wmae_rank": 3,
          "hata": 56.82,
          "hata_rank": 9,
          "kombine": 12,
          "tahmin_toplam": 269099.0,
          "gercek_toplam": 623239.0,
          "fark": -354140.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.5114,
          "wmae_rank": 4,
          "hata": 21.54,
          "hata_rank": 3,
          "kombine": 7,
          "tahmin_toplam": 489012.0,
          "gercek_toplam": 623239.0,
          "fark": -134227.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.5414,
          "wmae_rank": 5,
          "hata": 31.42,
          "hata_rank": 8,
          "kombine": 13,
          "tahmin_toplam": 427422.0,
          "gercek_toplam": 623239.0,
          "fark": -195817.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.5543,
          "wmae_rank": 6,
          "hata": 20.89,
          "hata_rank": 2,
          "kombine": 8,
          "tahmin_toplam": 493019.0,
          "gercek_toplam": 623239.0,
          "fark": -130221.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.5811,
          "wmae_rank": 7,
          "hata": 23.28,
          "hata_rank": 7,
          "kombine": 14,
          "tahmin_toplam": 478178.0,
          "gercek_toplam": 623239.0,
          "fark": -145061.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.6431,
          "wmae_rank": 8,
          "hata": 22.35,
          "hata_rank": 4,
          "kombine": 12,
          "tahmin_toplam": 483966.0,
          "gercek_toplam": 623239.0,
          "fark": -139273.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 1.3058,
          "wmae_rank": 9,
          "hata": 1.02,
          "hata_rank": 1,
          "kombine": 10,
          "tahmin_toplam": 629581.0,
          "gercek_toplam": 623239.0,
          "fark": 6342.0
        }
      ]
    },
    {
      "id": "DÜZCE",
      "sehir": "Düzce",
      "lat": 40.8438,
      "lng": 31.1565,
      "gercek_toplam": 2121943.0,
      "tahmini_desi": 2006762.0,
      "ort_hata": 5.43,
      "top3_models": [
        {
          "model": "Stacked_LSTM",
          "wmae_rank": 1,
          "hata_rank": 4,
          "kombine": 5,
          "wmae": 0.2483,
          "hata": 7.41,
          "tahmin": 1964625.0
        },
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 2,
          "hata_rank": 5,
          "kombine": 7,
          "wmae": 0.269,
          "hata": 8.88,
          "tahmin": 1933494.0
        },
        {
          "model": "DLinear",
          "wmae_rank": 7,
          "hata_rank": 1,
          "kombine": 8,
          "wmae": 0.441,
          "hata": 2.63,
          "tahmin": 2066118.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.2483,
          "wmae_rank": 1,
          "hata": 7.41,
          "hata_rank": 4,
          "kombine": 5,
          "tahmin_toplam": 1964625.0,
          "gercek_toplam": 2121943.0,
          "fark": -157318.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.269,
          "wmae_rank": 2,
          "hata": 8.88,
          "hata_rank": 5,
          "kombine": 7,
          "tahmin_toplam": 1933494.0,
          "gercek_toplam": 2121943.0,
          "fark": -188449.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.2919,
          "wmae_rank": 3,
          "hata": 26.42,
          "hata_rank": 9,
          "kombine": 12,
          "tahmin_toplam": 1561259.0,
          "gercek_toplam": 2121943.0,
          "fark": -560684.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.3254,
          "wmae_rank": 4,
          "hata": 11.79,
          "hata_rank": 8,
          "kombine": 12,
          "tahmin_toplam": 1871734.0,
          "gercek_toplam": 2121943.0,
          "fark": -250210.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.3687,
          "wmae_rank": 5,
          "hata": 11.48,
          "hata_rank": 7,
          "kombine": 12,
          "tahmin_toplam": 1878273.0,
          "gercek_toplam": 2121943.0,
          "fark": -243670.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.4002,
          "wmae_rank": 6,
          "hata": 10.99,
          "hata_rank": 6,
          "kombine": 12,
          "tahmin_toplam": 1888756.0,
          "gercek_toplam": 2121943.0,
          "fark": -233187.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.441,
          "wmae_rank": 7,
          "hata": 2.63,
          "hata_rank": 1,
          "kombine": 8,
          "tahmin_toplam": 2066118.0,
          "gercek_toplam": 2121943.0,
          "fark": -55825.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.4434,
          "wmae_rank": 8,
          "hata": 7.26,
          "hata_rank": 3,
          "kombine": 11,
          "tahmin_toplam": 1967955.0,
          "gercek_toplam": 2121943.0,
          "fark": -153988.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.5216,
          "wmae_rank": 9,
          "hata": 6.4,
          "hata_rank": 2,
          "kombine": 11,
          "tahmin_toplam": 1986214.0,
          "gercek_toplam": 2121943.0,
          "fark": -135729.0
        }
      ]
    },
    {
      "id": "DİYARBAKIR",
      "sehir": "Di̇yarbakir",
      "lat": 37.9144,
      "lng": 40.2306,
      "gercek_toplam": 2461751.0,
      "tahmini_desi": 2342894.0,
      "ort_hata": 11.74,
      "top3_models": [
        {
          "model": "Stacked_LSTM",
          "wmae_rank": 5,
          "hata_rank": 1,
          "kombine": 6,
          "wmae": 0.3369,
          "hata": 9.19,
          "tahmin": 2235462.0
        },
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 3,
          "hata_rank": 3,
          "kombine": 6,
          "wmae": 0.3207,
          "hata": 15.66,
          "tahmin": 2076189.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 2,
          "hata_rank": 7,
          "kombine": 9,
          "wmae": 0.2993,
          "hata": 20.84,
          "tahmin": 1948714.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.2924,
          "wmae_rank": 1,
          "hata": 39.01,
          "hata_rank": 9,
          "kombine": 10,
          "tahmin_toplam": 1501505.0,
          "gercek_toplam": 2461751.0,
          "fark": -960246.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.2993,
          "wmae_rank": 2,
          "hata": 20.84,
          "hata_rank": 7,
          "kombine": 9,
          "tahmin_toplam": 1948714.0,
          "gercek_toplam": 2461751.0,
          "fark": -513037.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3207,
          "wmae_rank": 3,
          "hata": 15.66,
          "hata_rank": 3,
          "kombine": 6,
          "tahmin_toplam": 2076189.0,
          "gercek_toplam": 2461751.0,
          "fark": -385562.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.3272,
          "wmae_rank": 4,
          "hata": 17.85,
          "hata_rank": 6,
          "kombine": 10,
          "tahmin_toplam": 2022416.0,
          "gercek_toplam": 2461751.0,
          "fark": -439335.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3369,
          "wmae_rank": 5,
          "hata": 9.19,
          "hata_rank": 1,
          "kombine": 6,
          "tahmin_toplam": 2235462.0,
          "gercek_toplam": 2461751.0,
          "fark": -226288.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.3724,
          "wmae_rank": 6,
          "hata": 21.0,
          "hata_rank": 8,
          "kombine": 14,
          "tahmin_toplam": 1944727.0,
          "gercek_toplam": 2461751.0,
          "fark": -517024.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.3832,
          "wmae_rank": 7,
          "hata": 16.13,
          "hata_rank": 5,
          "kombine": 12,
          "tahmin_toplam": 2064564.0,
          "gercek_toplam": 2461751.0,
          "fark": -397187.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.3991,
          "wmae_rank": 8,
          "hata": 15.79,
          "hata_rank": 4,
          "kombine": 12,
          "tahmin_toplam": 2073108.0,
          "gercek_toplam": 2461751.0,
          "fark": -388642.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.4257,
          "wmae_rank": 9,
          "hata": 10.37,
          "hata_rank": 2,
          "kombine": 11,
          "tahmin_toplam": 2717030.0,
          "gercek_toplam": 2461751.0,
          "fark": 255279.0
        }
      ]
    },
    {
      "id": "ELAZIĞ",
      "sehir": "Elaziğ",
      "lat": 38.681,
      "lng": 39.2264,
      "gercek_toplam": 1302229.0,
      "tahmini_desi": 1262648.0,
      "ort_hata": 7.04,
      "top3_models": [
        {
          "model": "TiDE",
          "wmae_rank": 3,
          "hata_rank": 4,
          "kombine": 7,
          "wmae": 0.3741,
          "hata": 8.01,
          "tahmin": 1197916.0
        },
        {
          "model": "NBEATS",
          "wmae_rank": 7,
          "hata_rank": 1,
          "kombine": 8,
          "wmae": 0.6186,
          "hata": 6.0,
          "tahmin": 1380376.0
        },
        {
          "model": "Prophet",
          "wmae_rank": 5,
          "hata_rank": 3,
          "kombine": 8,
          "wmae": 0.3993,
          "hata": 7.65,
          "tahmin": 1202635.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.2854,
          "wmae_rank": 1,
          "hata": 33.05,
          "hata_rank": 9,
          "kombine": 10,
          "tahmin_toplam": 871825.0,
          "gercek_toplam": 1302229.0,
          "fark": -430404.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3132,
          "wmae_rank": 2,
          "hata": 14.42,
          "hata_rank": 8,
          "kombine": 10,
          "tahmin_toplam": 1114502.0,
          "gercek_toplam": 1302229.0,
          "fark": -187728.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.3741,
          "wmae_rank": 3,
          "hata": 8.01,
          "hata_rank": 4,
          "kombine": 7,
          "tahmin_toplam": 1197916.0,
          "gercek_toplam": 1302229.0,
          "fark": -104313.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3768,
          "wmae_rank": 4,
          "hata": 8.28,
          "hata_rank": 5,
          "kombine": 9,
          "tahmin_toplam": 1194362.0,
          "gercek_toplam": 1302229.0,
          "fark": -107867.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.3993,
          "wmae_rank": 5,
          "hata": 7.65,
          "hata_rank": 3,
          "kombine": 8,
          "tahmin_toplam": 1202635.0,
          "gercek_toplam": 1302229.0,
          "fark": -99594.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.4074,
          "wmae_rank": 6,
          "hata": 12.71,
          "hata_rank": 7,
          "kombine": 13,
          "tahmin_toplam": 1136658.0,
          "gercek_toplam": 1302229.0,
          "fark": -165571.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.6186,
          "wmae_rank": 7,
          "hata": 6.0,
          "hata_rank": 1,
          "kombine": 8,
          "tahmin_toplam": 1380376.0,
          "gercek_toplam": 1302229.0,
          "fark": 78146.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.6588,
          "wmae_rank": 8,
          "hata": 7.47,
          "hata_rank": 2,
          "kombine": 10,
          "tahmin_toplam": 1204932.0,
          "gercek_toplam": 1302229.0,
          "fark": -97297.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.715,
          "wmae_rank": 9,
          "hata": 11.49,
          "hata_rank": 6,
          "kombine": 15,
          "tahmin_toplam": 1451889.0,
          "gercek_toplam": 1302229.0,
          "fark": 149660.0
        }
      ]
    },
    {
      "id": "ERZURUM",
      "sehir": "Erzurum",
      "lat": 39.9055,
      "lng": 41.2658,
      "gercek_toplam": 627260.0,
      "tahmini_desi": 647487.0,
      "ort_hata": 3.22,
      "top3_models": [
        {
          "model": "PatchTST",
          "wmae_rank": 3,
          "hata_rank": 1,
          "kombine": 4,
          "wmae": 0.432,
          "hata": 2.42,
          "tahmin": 642464.0
        },
        {
          "model": "TiDE",
          "wmae_rank": 2,
          "hata_rank": 2,
          "kombine": 4,
          "wmae": 0.4303,
          "hata": 2.58,
          "tahmin": 643463.0
        },
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 1,
          "hata_rank": 3,
          "kombine": 4,
          "wmae": 0.4187,
          "hata": 4.67,
          "tahmin": 656535.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.4187,
          "wmae_rank": 1,
          "hata": 4.67,
          "hata_rank": 3,
          "kombine": 4,
          "tahmin_toplam": 656535.0,
          "gercek_toplam": 627260.0,
          "fark": 29275.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.4303,
          "wmae_rank": 2,
          "hata": 2.58,
          "hata_rank": 2,
          "kombine": 4,
          "tahmin_toplam": 643463.0,
          "gercek_toplam": 627260.0,
          "fark": 16203.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.432,
          "wmae_rank": 3,
          "hata": 2.42,
          "hata_rank": 1,
          "kombine": 4,
          "tahmin_toplam": 642464.0,
          "gercek_toplam": 627260.0,
          "fark": 15204.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.4501,
          "wmae_rank": 4,
          "hata": 36.02,
          "hata_rank": 8,
          "kombine": 12,
          "tahmin_toplam": 401328.0,
          "gercek_toplam": 627260.0,
          "fark": -225932.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.4652,
          "wmae_rank": 5,
          "hata": 30.45,
          "hata_rank": 7,
          "kombine": 12,
          "tahmin_toplam": 436267.0,
          "gercek_toplam": 627260.0,
          "fark": -190993.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.5339,
          "wmae_rank": 6,
          "hata": 22.71,
          "hata_rank": 6,
          "kombine": 12,
          "tahmin_toplam": 484818.0,
          "gercek_toplam": 627260.0,
          "fark": -142442.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.5431,
          "wmae_rank": 7,
          "hata": 13.41,
          "hata_rank": 4,
          "kombine": 11,
          "tahmin_toplam": 543117.0,
          "gercek_toplam": 627260.0,
          "fark": -84143.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.5446,
          "wmae_rank": 8,
          "hata": 55.93,
          "hata_rank": 9,
          "kombine": 17,
          "tahmin_toplam": 276444.0,
          "gercek_toplam": 627260.0,
          "fark": -350816.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.6329,
          "wmae_rank": 9,
          "hata": 15.06,
          "hata_rank": 5,
          "kombine": 14,
          "tahmin_toplam": 721756.0,
          "gercek_toplam": 627260.0,
          "fark": 94496.0
        }
      ]
    },
    {
      "id": "ESKİŞEHİR",
      "sehir": "Eski̇şehi̇r",
      "lat": 39.7767,
      "lng": 30.5206,
      "gercek_toplam": 754128.0,
      "tahmini_desi": 818646.0,
      "ort_hata": 8.56,
      "top3_models": [
        {
          "model": "PatchTST",
          "wmae_rank": 2,
          "hata_rank": 1,
          "kombine": 3,
          "wmae": 0.3373,
          "hata": 7.83,
          "tahmin": 813204.0
        },
        {
          "model": "Stacked_LSTM",
          "wmae_rank": 1,
          "hata_rank": 3,
          "kombine": 4,
          "wmae": 0.3134,
          "hata": 9.33,
          "tahmin": 824501.0
        },
        {
          "model": "TiDE",
          "wmae_rank": 3,
          "hata_rank": 4,
          "kombine": 7,
          "wmae": 0.3396,
          "hata": 9.85,
          "tahmin": 828400.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3134,
          "wmae_rank": 1,
          "hata": 9.33,
          "hata_rank": 3,
          "kombine": 4,
          "tahmin_toplam": 824501.0,
          "gercek_toplam": 754128.0,
          "fark": 70373.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.3373,
          "wmae_rank": 2,
          "hata": 7.83,
          "hata_rank": 1,
          "kombine": 3,
          "tahmin_toplam": 813204.0,
          "gercek_toplam": 754128.0,
          "fark": 59077.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.3396,
          "wmae_rank": 3,
          "hata": 9.85,
          "hata_rank": 4,
          "kombine": 7,
          "tahmin_toplam": 828400.0,
          "gercek_toplam": 754128.0,
          "fark": 74272.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.3419,
          "wmae_rank": 4,
          "hata": 17.81,
          "hata_rank": 6,
          "kombine": 10,
          "tahmin_toplam": 619810.0,
          "gercek_toplam": 754128.0,
          "fark": -134318.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3729,
          "wmae_rank": 5,
          "hata": 22.15,
          "hata_rank": 7,
          "kombine": 12,
          "tahmin_toplam": 921168.0,
          "gercek_toplam": 754128.0,
          "fark": 167040.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.4044,
          "wmae_rank": 6,
          "hata": 37.71,
          "hata_rank": 9,
          "kombine": 15,
          "tahmin_toplam": 1038479.0,
          "gercek_toplam": 754128.0,
          "fark": 284351.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.47,
          "wmae_rank": 7,
          "hata": 8.5,
          "hata_rank": 2,
          "kombine": 9,
          "tahmin_toplam": 818232.0,
          "gercek_toplam": 754128.0,
          "fark": 64104.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.4768,
          "wmae_rank": 8,
          "hata": 24.43,
          "hata_rank": 8,
          "kombine": 16,
          "tahmin_toplam": 938361.0,
          "gercek_toplam": 754128.0,
          "fark": 184233.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.5043,
          "wmae_rank": 9,
          "hata": 17.64,
          "hata_rank": 5,
          "kombine": 14,
          "tahmin_toplam": 887172.0,
          "gercek_toplam": 754128.0,
          "fark": 133045.0
        }
      ]
    },
    {
      "id": "GAZİANTEP",
      "sehir": "Gazi̇antep",
      "lat": 37.0662,
      "lng": 37.3833,
      "gercek_toplam": 7315426.0,
      "tahmini_desi": 6639063.0,
      "ort_hata": 9.25,
      "top3_models": [
        {
          "model": "TiDE",
          "wmae_rank": 3,
          "hata_rank": 3,
          "kombine": 6,
          "wmae": 0.2181,
          "hata": 11.83,
          "tahmin": 6449888.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 2,
          "hata_rank": 5,
          "kombine": 7,
          "wmae": 0.2165,
          "hata": 12.87,
          "tahmin": 6373862.0
        },
        {
          "model": "Chronos-2",
          "wmae_rank": 1,
          "hata_rank": 8,
          "kombine": 9,
          "wmae": 0.2142,
          "hata": 26.13,
          "tahmin": 5404136.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.2142,
          "wmae_rank": 1,
          "hata": 26.13,
          "hata_rank": 8,
          "kombine": 9,
          "tahmin_toplam": 5404136.0,
          "gercek_toplam": 7315426.0,
          "fark": -1911290.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.2165,
          "wmae_rank": 2,
          "hata": 12.87,
          "hata_rank": 5,
          "kombine": 7,
          "tahmin_toplam": 6373862.0,
          "gercek_toplam": 7315426.0,
          "fark": -941564.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.2181,
          "wmae_rank": 3,
          "hata": 11.83,
          "hata_rank": 3,
          "kombine": 6,
          "tahmin_toplam": 6449888.0,
          "gercek_toplam": 7315426.0,
          "fark": -865538.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.2254,
          "wmae_rank": 4,
          "hata": 14.94,
          "hata_rank": 6,
          "kombine": 10,
          "tahmin_toplam": 6222826.0,
          "gercek_toplam": 7315426.0,
          "fark": -1092600.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.2322,
          "wmae_rank": 5,
          "hata": 26.19,
          "hata_rank": 9,
          "kombine": 14,
          "tahmin_toplam": 5399645.0,
          "gercek_toplam": 7315426.0,
          "fark": -1915781.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.2394,
          "wmae_rank": 6,
          "hata": 18.13,
          "hata_rank": 7,
          "kombine": 13,
          "tahmin_toplam": 5989180.0,
          "gercek_toplam": 7315426.0,
          "fark": -1326246.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.2408,
          "wmae_rank": 7,
          "hata": 12.08,
          "hata_rank": 4,
          "kombine": 11,
          "tahmin_toplam": 6431509.0,
          "gercek_toplam": 7315426.0,
          "fark": -883917.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.2534,
          "wmae_rank": 8,
          "hata": 9.29,
          "hata_rank": 2,
          "kombine": 10,
          "tahmin_toplam": 6635934.0,
          "gercek_toplam": 7315426.0,
          "fark": -679492.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.3357,
          "wmae_rank": 9,
          "hata": 6.62,
          "hata_rank": 1,
          "kombine": 10,
          "tahmin_toplam": 6831366.0,
          "gercek_toplam": 7315426.0,
          "fark": -484060.0
        }
      ]
    },
    {
      "id": "HATAY",
      "sehir": "Hatay",
      "lat": 36.4018,
      "lng": 36.3498,
      "gercek_toplam": 2379808.0,
      "tahmini_desi": 2288658.0,
      "ort_hata": 6.62,
      "top3_models": [
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 2,
          "hata_rank": 3,
          "kombine": 5,
          "wmae": 0.4902,
          "hata": 8.31,
          "tahmin": 2181971.0
        },
        {
          "model": "TiDE",
          "wmae_rank": 6,
          "hata_rank": 2,
          "kombine": 8,
          "wmae": 1.5228,
          "hata": 7.37,
          "tahmin": 2204534.0
        },
        {
          "model": "Chronos-2",
          "wmae_rank": 1,
          "hata_rank": 7,
          "kombine": 8,
          "wmae": 0.4746,
          "hata": 57.68,
          "tahmin": 1007155.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.4746,
          "wmae_rank": 1,
          "hata": 57.68,
          "hata_rank": 7,
          "kombine": 8,
          "tahmin_toplam": 1007155.0,
          "gercek_toplam": 2379808.0,
          "fark": -1372654.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.4902,
          "wmae_rank": 2,
          "hata": 8.31,
          "hata_rank": 3,
          "kombine": 5,
          "tahmin_toplam": 2181971.0,
          "gercek_toplam": 2379808.0,
          "fark": -197837.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.5121,
          "wmae_rank": 3,
          "hata": 33.08,
          "hata_rank": 6,
          "kombine": 9,
          "tahmin_toplam": 1592594.0,
          "gercek_toplam": 2379808.0,
          "fark": -787214.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.6854,
          "wmae_rank": 4,
          "hata": 16.69,
          "hata_rank": 5,
          "kombine": 9,
          "tahmin_toplam": 1982638.0,
          "gercek_toplam": 2379808.0,
          "fark": -397170.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 1.2235,
          "wmae_rank": 5,
          "hata": 8.72,
          "hata_rank": 4,
          "kombine": 9,
          "tahmin_toplam": 2172195.0,
          "gercek_toplam": 2379808.0,
          "fark": -207613.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 1.5228,
          "wmae_rank": 6,
          "hata": 7.37,
          "hata_rank": 2,
          "kombine": 8,
          "tahmin_toplam": 2204534.0,
          "gercek_toplam": 2379808.0,
          "fark": -175275.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 2.2679,
          "wmae_rank": 7,
          "hata": 65.86,
          "hata_rank": 8,
          "kombine": 15,
          "tahmin_toplam": 3947131.0,
          "gercek_toplam": 2379808.0,
          "fark": 1567323.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 2.5135,
          "wmae_rank": 8,
          "hata": 4.19,
          "hata_rank": 1,
          "kombine": 9,
          "tahmin_toplam": 2479470.0,
          "gercek_toplam": 2379808.0,
          "fark": 99662.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 3.9658,
          "wmae_rank": 9,
          "hata": 138.9,
          "hata_rank": 9,
          "kombine": 18,
          "tahmin_toplam": 5685298.0,
          "gercek_toplam": 2379808.0,
          "fark": 3305490.0
        }
      ]
    },
    {
      "id": "KAYSERİ",
      "sehir": "Kayseri̇",
      "lat": 38.7312,
      "lng": 35.4787,
      "gercek_toplam": 3820766.0,
      "tahmini_desi": 3904916.0,
      "ort_hata": 4.79,
      "top3_models": [
        {
          "model": "Stacked_LSTM",
          "wmae_rank": 1,
          "hata_rank": 2,
          "kombine": 3,
          "wmae": 0.4158,
          "hata": 4.11,
          "tahmin": 3977687.0
        },
        {
          "model": "Prophet",
          "wmae_rank": 3,
          "hata_rank": 1,
          "kombine": 4,
          "wmae": 0.4428,
          "hata": 3.88,
          "tahmin": 3672497.0
        },
        {
          "model": "TiDE",
          "wmae_rank": 5,
          "hata_rank": 3,
          "kombine": 8,
          "wmae": 0.4887,
          "hata": 6.38,
          "tahmin": 4064565.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.4158,
          "wmae_rank": 1,
          "hata": 4.11,
          "hata_rank": 2,
          "kombine": 3,
          "tahmin_toplam": 3977687.0,
          "gercek_toplam": 3820766.0,
          "fark": 156921.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.429,
          "wmae_rank": 2,
          "hata": 17.92,
          "hata_rank": 8,
          "kombine": 10,
          "tahmin_toplam": 3135997.0,
          "gercek_toplam": 3820766.0,
          "fark": -684769.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.4428,
          "wmae_rank": 3,
          "hata": 3.88,
          "hata_rank": 1,
          "kombine": 4,
          "tahmin_toplam": 3672497.0,
          "gercek_toplam": 3820766.0,
          "fark": -148270.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.4728,
          "wmae_rank": 4,
          "hata": 60.18,
          "hata_rank": 9,
          "kombine": 13,
          "tahmin_toplam": 1521371.0,
          "gercek_toplam": 3820766.0,
          "fark": -2299395.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.4887,
          "wmae_rank": 5,
          "hata": 6.38,
          "hata_rank": 3,
          "kombine": 8,
          "tahmin_toplam": 4064565.0,
          "gercek_toplam": 3820766.0,
          "fark": 243799.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.4904,
          "wmae_rank": 6,
          "hata": 8.59,
          "hata_rank": 4,
          "kombine": 10,
          "tahmin_toplam": 4149064.0,
          "gercek_toplam": 3820766.0,
          "fark": 328297.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.5159,
          "wmae_rank": 7,
          "hata": 12.12,
          "hata_rank": 6,
          "kombine": 13,
          "tahmin_toplam": 4283760.0,
          "gercek_toplam": 3820766.0,
          "fark": 462994.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.591,
          "wmae_rank": 8,
          "hata": 17.02,
          "hata_rank": 7,
          "kombine": 15,
          "tahmin_toplam": 3170338.0,
          "gercek_toplam": 3820766.0,
          "fark": -650428.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.7799,
          "wmae_rank": 9,
          "hata": 9.94,
          "hata_rank": 5,
          "kombine": 14,
          "tahmin_toplam": 4200382.0,
          "gercek_toplam": 3820766.0,
          "fark": 379616.0
        }
      ]
    },
    {
      "id": "KOCAELİ",
      "sehir": "Kocaeli̇",
      "lat": 40.8533,
      "lng": 29.8815,
      "gercek_toplam": 6763692.0,
      "tahmini_desi": 6883146.0,
      "ort_hata": 2.91,
      "top3_models": [
        {
          "model": "Chronos-2",
          "wmae_rank": 1,
          "hata_rank": 3,
          "kombine": 4,
          "wmae": 0.2171,
          "hata": 7.02,
          "tahmin": 7238354.0
        },
        {
          "model": "Stacked_LSTM",
          "wmae_rank": 4,
          "hata_rank": 2,
          "kombine": 6,
          "wmae": 0.2645,
          "hata": 1.08,
          "tahmin": 6690548.0
        },
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 6,
          "hata_rank": 1,
          "kombine": 7,
          "wmae": 0.3034,
          "hata": 0.64,
          "tahmin": 6720536.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.2171,
          "wmae_rank": 1,
          "hata": 7.02,
          "hata_rank": 3,
          "kombine": 4,
          "tahmin_toplam": 7238354.0,
          "gercek_toplam": 6763692.0,
          "fark": 474662.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.2246,
          "wmae_rank": 2,
          "hata": 16.43,
          "hata_rank": 5,
          "kombine": 7,
          "tahmin_toplam": 7874648.0,
          "gercek_toplam": 6763692.0,
          "fark": 1110955.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.2315,
          "wmae_rank": 3,
          "hata": 14.28,
          "hata_rank": 4,
          "kombine": 7,
          "tahmin_toplam": 7729636.0,
          "gercek_toplam": 6763692.0,
          "fark": 965944.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.2645,
          "wmae_rank": 4,
          "hata": 1.08,
          "hata_rank": 2,
          "kombine": 6,
          "tahmin_toplam": 6690548.0,
          "gercek_toplam": 6763692.0,
          "fark": -73144.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.281,
          "wmae_rank": 5,
          "hata": 32.72,
          "hata_rank": 7,
          "kombine": 12,
          "tahmin_toplam": 8976531.0,
          "gercek_toplam": 6763692.0,
          "fark": 2212839.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3034,
          "wmae_rank": 6,
          "hata": 0.64,
          "hata_rank": 1,
          "kombine": 7,
          "tahmin_toplam": 6720536.0,
          "gercek_toplam": 6763692.0,
          "fark": -43156.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.3134,
          "wmae_rank": 7,
          "hata": 53.53,
          "hata_rank": 9,
          "kombine": 16,
          "tahmin_toplam": 10384558.0,
          "gercek_toplam": 6763692.0,
          "fark": 3620866.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.3652,
          "wmae_rank": 8,
          "hata": 21.19,
          "hata_rank": 6,
          "kombine": 14,
          "tahmin_toplam": 8197224.0,
          "gercek_toplam": 6763692.0,
          "fark": 1433531.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.4637,
          "wmae_rank": 9,
          "hata": 42.98,
          "hata_rank": 8,
          "kombine": 17,
          "tahmin_toplam": 3856620.0,
          "gercek_toplam": 6763692.0,
          "fark": -2907072.0
        }
      ]
    },
    {
      "id": "KONYA",
      "sehir": "Konya",
      "lat": 37.8746,
      "lng": 32.4932,
      "gercek_toplam": 1324565.0,
      "tahmini_desi": 1247216.0,
      "ort_hata": 5.84,
      "top3_models": [
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 6,
          "hata_rank": 2,
          "kombine": 8,
          "wmae": 0.4567,
          "hata": 6.51,
          "tahmin": 1238378.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 2,
          "hata_rank": 6,
          "kombine": 8,
          "wmae": 0.4109,
          "hata": 16.31,
          "tahmin": 1108485.0
        },
        {
          "model": "NBEATS",
          "wmae_rank": 8,
          "hata_rank": 1,
          "kombine": 9,
          "wmae": 0.5333,
          "hata": 3.95,
          "tahmin": 1272208.0
        }
      ],
      "tum_modeller": [
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.4002,
          "wmae_rank": 1,
          "hata": 19.01,
          "hata_rank": 8,
          "kombine": 9,
          "tahmin_toplam": 1072726.0,
          "gercek_toplam": 1324565.0,
          "fark": -251839.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.4109,
          "wmae_rank": 2,
          "hata": 16.31,
          "hata_rank": 6,
          "kombine": 8,
          "tahmin_toplam": 1108485.0,
          "gercek_toplam": 1324565.0,
          "fark": -216080.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.434,
          "wmae_rank": 3,
          "hata": 49.49,
          "hata_rank": 9,
          "kombine": 12,
          "tahmin_toplam": 669043.0,
          "gercek_toplam": 1324565.0,
          "fark": -655521.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.437,
          "wmae_rank": 4,
          "hata": 16.69,
          "hata_rank": 7,
          "kombine": 11,
          "tahmin_toplam": 1103452.0,
          "gercek_toplam": 1324565.0,
          "fark": -221113.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.4444,
          "wmae_rank": 5,
          "hata": 8.37,
          "hata_rank": 4,
          "kombine": 9,
          "tahmin_toplam": 1213647.0,
          "gercek_toplam": 1324565.0,
          "fark": -110917.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.4567,
          "wmae_rank": 6,
          "hata": 6.51,
          "hata_rank": 2,
          "kombine": 8,
          "tahmin_toplam": 1238378.0,
          "gercek_toplam": 1324565.0,
          "fark": -86186.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.5199,
          "wmae_rank": 7,
          "hata": 7.06,
          "hata_rank": 3,
          "kombine": 10,
          "tahmin_toplam": 1231062.0,
          "gercek_toplam": 1324565.0,
          "fark": -93502.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.5333,
          "wmae_rank": 8,
          "hata": 3.95,
          "hata_rank": 1,
          "kombine": 9,
          "tahmin_toplam": 1272208.0,
          "gercek_toplam": 1324565.0,
          "fark": -52356.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.5483,
          "wmae_rank": 9,
          "hata": 16.28,
          "hata_rank": 5,
          "kombine": 14,
          "tahmin_toplam": 1108918.0,
          "gercek_toplam": 1324565.0,
          "fark": -215646.0
        }
      ]
    },
    {
      "id": "MALATYA",
      "sehir": "Malatya",
      "lat": 38.3552,
      "lng": 38.3095,
      "gercek_toplam": 583616.0,
      "tahmini_desi": 625784.0,
      "ort_hata": 8.02,
      "top3_models": [
        {
          "model": "Stacked_LSTM",
          "wmae_rank": 2,
          "hata_rank": 1,
          "kombine": 3,
          "wmae": 0.5734,
          "hata": 1.19,
          "tahmin": 576666.0
        },
        {
          "model": "TiDE",
          "wmae_rank": 1,
          "hata_rank": 4,
          "kombine": 5,
          "wmae": 0.5683,
          "hata": 12.83,
          "tahmin": 658499.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 3,
          "hata_rank": 3,
          "kombine": 6,
          "wmae": 0.5752,
          "hata": 11.68,
          "tahmin": 651770.0
        }
      ],
      "tum_modeller": [
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.5683,
          "wmae_rank": 1,
          "hata": 12.83,
          "hata_rank": 4,
          "kombine": 5,
          "tahmin_toplam": 658499.0,
          "gercek_toplam": 583616.0,
          "fark": 74883.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.5734,
          "wmae_rank": 2,
          "hata": 1.19,
          "hata_rank": 1,
          "kombine": 3,
          "tahmin_toplam": 576666.0,
          "gercek_toplam": 583616.0,
          "fark": -6950.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.5752,
          "wmae_rank": 3,
          "hata": 11.68,
          "hata_rank": 3,
          "kombine": 6,
          "tahmin_toplam": 651770.0,
          "gercek_toplam": 583616.0,
          "fark": 68153.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.5855,
          "wmae_rank": 4,
          "hata": 27.77,
          "hata_rank": 6,
          "kombine": 10,
          "tahmin_toplam": 421528.0,
          "gercek_toplam": 583616.0,
          "fark": -162089.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.5892,
          "wmae_rank": 5,
          "hata": 56.0,
          "hata_rank": 8,
          "kombine": 13,
          "tahmin_toplam": 910448.0,
          "gercek_toplam": 583616.0,
          "fark": 326832.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.623,
          "wmae_rank": 6,
          "hata": 75.31,
          "hata_rank": 9,
          "kombine": 15,
          "tahmin_toplam": 1023111.0,
          "gercek_toplam": 583616.0,
          "fark": 439494.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.6314,
          "wmae_rank": 7,
          "hata": 11.19,
          "hata_rank": 2,
          "kombine": 9,
          "tahmin_toplam": 648918.0,
          "gercek_toplam": 583616.0,
          "fark": 65301.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.6349,
          "wmae_rank": 8,
          "hata": 52.42,
          "hata_rank": 7,
          "kombine": 15,
          "tahmin_toplam": 277712.0,
          "gercek_toplam": 583616.0,
          "fark": -305904.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.7571,
          "wmae_rank": 9,
          "hata": 18.41,
          "hata_rank": 5,
          "kombine": 14,
          "tahmin_toplam": 691068.0,
          "gercek_toplam": 583616.0,
          "fark": 107452.0
        }
      ]
    },
    {
      "id": "MANİSA",
      "sehir": "Mani̇sa",
      "lat": 38.6191,
      "lng": 27.4289,
      "gercek_toplam": 2512701.0,
      "tahmini_desi": 2494000.0,
      "ort_hata": 2.63,
      "top3_models": [
        {
          "model": "NHITS",
          "wmae_rank": 5,
          "hata_rank": 3,
          "kombine": 8,
          "wmae": 0.356,
          "hata": 2.88,
          "tahmin": 2440246.0
        },
        {
          "model": "TiDE",
          "wmae_rank": 4,
          "hata_rank": 5,
          "kombine": 9,
          "wmae": 0.3469,
          "hata": 9.03,
          "tahmin": 2285681.0
        },
        {
          "model": "Stacked_LSTM",
          "wmae_rank": 1,
          "hata_rank": 8,
          "kombine": 9,
          "wmae": 0.3088,
          "hata": 20.94,
          "tahmin": 1986456.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3088,
          "wmae_rank": 1,
          "hata": 20.94,
          "hata_rank": 8,
          "kombine": 9,
          "tahmin_toplam": 1986456.0,
          "gercek_toplam": 2512701.0,
          "fark": -526246.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.3281,
          "wmae_rank": 2,
          "hata": 27.03,
          "hata_rank": 9,
          "kombine": 11,
          "tahmin_toplam": 1833514.0,
          "gercek_toplam": 2512701.0,
          "fark": -679187.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3287,
          "wmae_rank": 3,
          "hata": 20.38,
          "hata_rank": 7,
          "kombine": 10,
          "tahmin_toplam": 2000635.0,
          "gercek_toplam": 2512701.0,
          "fark": -512066.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.3469,
          "wmae_rank": 4,
          "hata": 9.03,
          "hata_rank": 5,
          "kombine": 9,
          "tahmin_toplam": 2285681.0,
          "gercek_toplam": 2512701.0,
          "fark": -227020.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.356,
          "wmae_rank": 5,
          "hata": 2.88,
          "hata_rank": 3,
          "kombine": 8,
          "tahmin_toplam": 2440246.0,
          "gercek_toplam": 2512701.0,
          "fark": -72455.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.3699,
          "wmae_rank": 6,
          "hata": 6.04,
          "hata_rank": 4,
          "kombine": 10,
          "tahmin_toplam": 2360940.0,
          "gercek_toplam": 2512701.0,
          "fark": -151761.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.4673,
          "wmae_rank": 7,
          "hata": 17.07,
          "hata_rank": 6,
          "kombine": 13,
          "tahmin_toplam": 2941691.0,
          "gercek_toplam": 2512701.0,
          "fark": 428990.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.4679,
          "wmae_rank": 8,
          "hata": 2.82,
          "hata_rank": 2,
          "kombine": 10,
          "tahmin_toplam": 2583637.0,
          "gercek_toplam": 2512701.0,
          "fark": 70936.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.5408,
          "wmae_rank": 9,
          "hata": 2.17,
          "hata_rank": 1,
          "kombine": 10,
          "tahmin_toplam": 2458117.0,
          "gercek_toplam": 2512701.0,
          "fark": -54584.0
        }
      ]
    },
    {
      "id": "MARDİN",
      "sehir": "Mardi̇n",
      "lat": 37.3212,
      "lng": 40.7245,
      "gercek_toplam": 1343362.0,
      "tahmini_desi": 1270529.0,
      "ort_hata": 5.42,
      "top3_models": [
        {
          "model": "TiDE",
          "wmae_rank": 2,
          "hata_rank": 1,
          "kombine": 3,
          "wmae": 0.3389,
          "hata": 4.79,
          "tahmin": 1279064.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 5,
          "hata_rank": 2,
          "kombine": 7,
          "wmae": 0.3487,
          "hata": 5.72,
          "tahmin": 1266526.0
        },
        {
          "model": "Prophet",
          "wmae_rank": 4,
          "hata_rank": 4,
          "kombine": 8,
          "wmae": 0.3428,
          "hata": 17.03,
          "tahmin": 1114647.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.3351,
          "wmae_rank": 1,
          "hata": 48.53,
          "hata_rank": 7,
          "kombine": 8,
          "tahmin_toplam": 691466.0,
          "gercek_toplam": 1343362.0,
          "fark": -651895.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.3389,
          "wmae_rank": 2,
          "hata": 4.79,
          "hata_rank": 1,
          "kombine": 3,
          "tahmin_toplam": 1279064.0,
          "gercek_toplam": 1343362.0,
          "fark": -64298.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3389,
          "wmae_rank": 3,
          "hata": 72.62,
          "hata_rank": 9,
          "kombine": 12,
          "tahmin_toplam": 367818.0,
          "gercek_toplam": 1343362.0,
          "fark": -975544.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.3428,
          "wmae_rank": 4,
          "hata": 17.03,
          "hata_rank": 4,
          "kombine": 8,
          "tahmin_toplam": 1114647.0,
          "gercek_toplam": 1343362.0,
          "fark": -228714.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.3487,
          "wmae_rank": 5,
          "hata": 5.72,
          "hata_rank": 2,
          "kombine": 7,
          "tahmin_toplam": 1266526.0,
          "gercek_toplam": 1343362.0,
          "fark": -76835.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3527,
          "wmae_rank": 6,
          "hata": 53.46,
          "hata_rank": 8,
          "kombine": 14,
          "tahmin_toplam": 625183.0,
          "gercek_toplam": 1343362.0,
          "fark": -718178.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.4369,
          "wmae_rank": 7,
          "hata": 23.42,
          "hata_rank": 5,
          "kombine": 12,
          "tahmin_toplam": 1658035.0,
          "gercek_toplam": 1343362.0,
          "fark": 314674.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.4712,
          "wmae_rank": 8,
          "hata": 31.97,
          "hata_rank": 6,
          "kombine": 14,
          "tahmin_toplam": 1772827.0,
          "gercek_toplam": 1343362.0,
          "fark": 429466.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.5045,
          "wmae_rank": 9,
          "hata": 5.76,
          "hata_rank": 3,
          "kombine": 12,
          "tahmin_toplam": 1265998.0,
          "gercek_toplam": 1343362.0,
          "fark": -77364.0
        }
      ]
    },
    {
      "id": "MERSİN",
      "sehir": "Mersi̇n",
      "lat": 36.8121,
      "lng": 34.6415,
      "gercek_toplam": 1352025.0,
      "tahmini_desi": 1320957.0,
      "ort_hata": 2.79,
      "top3_models": [
        {
          "model": "TiDE",
          "wmae_rank": 1,
          "hata_rank": 1,
          "kombine": 2,
          "wmae": 0.2407,
          "hata": 0.74,
          "tahmin": 1361984.0
        },
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 3,
          "hata_rank": 3,
          "kombine": 6,
          "wmae": 0.2622,
          "hata": 4.51,
          "tahmin": 1291048.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 2,
          "hata_rank": 4,
          "kombine": 6,
          "wmae": 0.2453,
          "hata": 6.27,
          "tahmin": 1436736.0
        }
      ],
      "tum_modeller": [
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.2407,
          "wmae_rank": 1,
          "hata": 0.74,
          "hata_rank": 1,
          "kombine": 2,
          "tahmin_toplam": 1361984.0,
          "gercek_toplam": 1352025.0,
          "fark": 9959.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.2453,
          "wmae_rank": 2,
          "hata": 6.27,
          "hata_rank": 4,
          "kombine": 6,
          "tahmin_toplam": 1436736.0,
          "gercek_toplam": 1352025.0,
          "fark": 84711.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.2622,
          "wmae_rank": 3,
          "hata": 4.51,
          "hata_rank": 3,
          "kombine": 6,
          "tahmin_toplam": 1291048.0,
          "gercek_toplam": 1352025.0,
          "fark": -60976.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.2797,
          "wmae_rank": 4,
          "hata": 7.36,
          "hata_rank": 5,
          "kombine": 9,
          "tahmin_toplam": 1451588.0,
          "gercek_toplam": 1352025.0,
          "fark": 99564.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.36,
          "wmae_rank": 5,
          "hata": 32.64,
          "hata_rank": 8,
          "kombine": 13,
          "tahmin_toplam": 910693.0,
          "gercek_toplam": 1352025.0,
          "fark": -441332.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.364,
          "wmae_rank": 6,
          "hata": 19.11,
          "hata_rank": 7,
          "kombine": 13,
          "tahmin_toplam": 1610343.0,
          "gercek_toplam": 1352025.0,
          "fark": 258318.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.3829,
          "wmae_rank": 7,
          "hata": 38.35,
          "hata_rank": 9,
          "kombine": 16,
          "tahmin_toplam": 833532.0,
          "gercek_toplam": 1352025.0,
          "fark": -518493.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.3868,
          "wmae_rank": 8,
          "hata": 3.12,
          "hata_rank": 2,
          "kombine": 10,
          "tahmin_toplam": 1309840.0,
          "gercek_toplam": 1352025.0,
          "fark": -42185.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.4598,
          "wmae_rank": 9,
          "hata": 17.78,
          "hata_rank": 6,
          "kombine": 15,
          "tahmin_toplam": 1592407.0,
          "gercek_toplam": 1352025.0,
          "fark": 240382.0
        }
      ]
    },
    {
      "id": "MERZİFON",
      "sehir": "Amasya",
      "lat": 40.6499,
      "lng": 35.8353,
      "gercek_toplam": 1114033.0,
      "tahmini_desi": 1081001.0,
      "ort_hata": 3.69,
      "top3_models": [
        {
          "model": "NBEATS",
          "wmae_rank": 7,
          "hata_rank": 1,
          "kombine": 8,
          "wmae": 0.5063,
          "hata": 1.08,
          "tahmin": 1126097.0
        },
        {
          "model": "TiDE",
          "wmae_rank": 4,
          "hata_rank": 4,
          "kombine": 8,
          "wmae": 0.4416,
          "hata": 6.82,
          "tahmin": 1038054.0
        },
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 1,
          "hata_rank": 7,
          "kombine": 8,
          "wmae": 0.3763,
          "hata": 23.59,
          "tahmin": 851239.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3763,
          "wmae_rank": 1,
          "hata": 23.59,
          "hata_rank": 7,
          "kombine": 8,
          "tahmin_toplam": 851239.0,
          "gercek_toplam": 1114033.0,
          "fark": -262794.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.378,
          "wmae_rank": 2,
          "hata": 24.52,
          "hata_rank": 8,
          "kombine": 10,
          "tahmin_toplam": 840834.0,
          "gercek_toplam": 1114033.0,
          "fark": -273199.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.421,
          "wmae_rank": 3,
          "hata": 29.06,
          "hata_rank": 9,
          "kombine": 12,
          "tahmin_toplam": 790344.0,
          "gercek_toplam": 1114033.0,
          "fark": -323688.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.4416,
          "wmae_rank": 4,
          "hata": 6.82,
          "hata_rank": 4,
          "kombine": 8,
          "tahmin_toplam": 1038054.0,
          "gercek_toplam": 1114033.0,
          "fark": -75979.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.4486,
          "wmae_rank": 5,
          "hata": 9.45,
          "hata_rank": 6,
          "kombine": 11,
          "tahmin_toplam": 1008733.0,
          "gercek_toplam": 1114033.0,
          "fark": -105300.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.4659,
          "wmae_rank": 6,
          "hata": 7.46,
          "hata_rank": 5,
          "kombine": 11,
          "tahmin_toplam": 1197184.0,
          "gercek_toplam": 1114033.0,
          "fark": 83151.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.5063,
          "wmae_rank": 7,
          "hata": 1.08,
          "hata_rank": 1,
          "kombine": 8,
          "tahmin_toplam": 1126097.0,
          "gercek_toplam": 1114033.0,
          "fark": 12064.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.5193,
          "wmae_rank": 8,
          "hata": 5.74,
          "hata_rank": 3,
          "kombine": 11,
          "tahmin_toplam": 1050134.0,
          "gercek_toplam": 1114033.0,
          "fark": -63899.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.5324,
          "wmae_rank": 9,
          "hata": 4.24,
          "hata_rank": 2,
          "kombine": 11,
          "tahmin_toplam": 1066772.0,
          "gercek_toplam": 1114033.0,
          "fark": -47261.0
        }
      ]
    },
    {
      "id": "MUĞLA",
      "sehir": "Muğla",
      "lat": 37.2153,
      "lng": 28.3636,
      "gercek_toplam": 1663710.0,
      "tahmini_desi": 1623436.0,
      "ort_hata": 2.42,
      "top3_models": [
        {
          "model": "Prophet",
          "wmae_rank": 7,
          "hata_rank": 1,
          "kombine": 8,
          "wmae": 0.4191,
          "hata": 0.13,
          "tahmin": 1661481.0
        },
        {
          "model": "Stacked_LSTM",
          "wmae_rank": 5,
          "hata_rank": 3,
          "kombine": 8,
          "wmae": 0.2999,
          "hata": 6.84,
          "tahmin": 1549845.0
        },
        {
          "model": "TiDE",
          "wmae_rank": 3,
          "hata_rank": 5,
          "kombine": 8,
          "wmae": 0.263,
          "hata": 14.25,
          "tahmin": 1426633.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.2615,
          "wmae_rank": 1,
          "hata": 20.85,
          "hata_rank": 9,
          "kombine": 10,
          "tahmin_toplam": 1316892.0,
          "gercek_toplam": 1663710.0,
          "fark": -346818.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.2616,
          "wmae_rank": 2,
          "hata": 15.19,
          "hata_rank": 6,
          "kombine": 8,
          "tahmin_toplam": 1410962.0,
          "gercek_toplam": 1663710.0,
          "fark": -252748.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.263,
          "wmae_rank": 3,
          "hata": 14.25,
          "hata_rank": 5,
          "kombine": 8,
          "tahmin_toplam": 1426633.0,
          "gercek_toplam": 1663710.0,
          "fark": -237077.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.2969,
          "wmae_rank": 4,
          "hata": 15.33,
          "hata_rank": 7,
          "kombine": 11,
          "tahmin_toplam": 1408649.0,
          "gercek_toplam": 1663710.0,
          "fark": -255061.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.2999,
          "wmae_rank": 5,
          "hata": 6.84,
          "hata_rank": 3,
          "kombine": 8,
          "tahmin_toplam": 1549845.0,
          "gercek_toplam": 1663710.0,
          "fark": -113864.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.3936,
          "wmae_rank": 6,
          "hata": 7.38,
          "hata_rank": 4,
          "kombine": 10,
          "tahmin_toplam": 1540956.0,
          "gercek_toplam": 1663710.0,
          "fark": -122753.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.4191,
          "wmae_rank": 7,
          "hata": 0.13,
          "hata_rank": 1,
          "kombine": 8,
          "tahmin_toplam": 1661481.0,
          "gercek_toplam": 1663710.0,
          "fark": -2229.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.4245,
          "wmae_rank": 8,
          "hata": 0.28,
          "hata_rank": 2,
          "kombine": 10,
          "tahmin_toplam": 1658981.0,
          "gercek_toplam": 1663710.0,
          "fark": -4729.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.4318,
          "wmae_rank": 9,
          "hata": 16.54,
          "hata_rank": 8,
          "kombine": 17,
          "tahmin_toplam": 1388492.0,
          "gercek_toplam": 1663710.0,
          "fark": -275218.0
        }
      ]
    },
    {
      "id": "SAMSUN",
      "sehir": "Samsun",
      "lat": 41.2928,
      "lng": 36.3313,
      "gercek_toplam": 3480591.0,
      "tahmini_desi": 3429014.0,
      "ort_hata": 1.52,
      "top3_models": [
        {
          "model": "Chronos-2",
          "wmae_rank": 1,
          "hata_rank": 2,
          "kombine": 3,
          "wmae": 0.1828,
          "hata": 2.09,
          "tahmin": 3407724.0
        },
        {
          "model": "Prophet",
          "wmae_rank": 6,
          "hata_rank": 1,
          "kombine": 7,
          "wmae": 0.298,
          "hata": 0.06,
          "tahmin": 3482798.0
        },
        {
          "model": "TiDE",
          "wmae_rank": 3,
          "hata_rank": 4,
          "kombine": 7,
          "wmae": 0.2076,
          "hata": 5.39,
          "tahmin": 3292867.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.1828,
          "wmae_rank": 1,
          "hata": 2.09,
          "hata_rank": 2,
          "kombine": 3,
          "tahmin_toplam": 3407724.0,
          "gercek_toplam": 3480591.0,
          "fark": -72867.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.195,
          "wmae_rank": 2,
          "hata": 23.62,
          "hata_rank": 9,
          "kombine": 11,
          "tahmin_toplam": 2658412.0,
          "gercek_toplam": 3480591.0,
          "fark": -822180.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.2076,
          "wmae_rank": 3,
          "hata": 5.39,
          "hata_rank": 4,
          "kombine": 7,
          "tahmin_toplam": 3292867.0,
          "gercek_toplam": 3480591.0,
          "fark": -187724.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.2144,
          "wmae_rank": 4,
          "hata": 7.27,
          "hata_rank": 5,
          "kombine": 9,
          "tahmin_toplam": 3227676.0,
          "gercek_toplam": 3480591.0,
          "fark": -252915.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.2691,
          "wmae_rank": 5,
          "hata": 8.81,
          "hata_rank": 6,
          "kombine": 11,
          "tahmin_toplam": 3174100.0,
          "gercek_toplam": 3480591.0,
          "fark": -306491.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.298,
          "wmae_rank": 6,
          "hata": 0.06,
          "hata_rank": 1,
          "kombine": 7,
          "tahmin_toplam": 3482798.0,
          "gercek_toplam": 3480591.0,
          "fark": 2207.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3041,
          "wmae_rank": 7,
          "hata": 13.2,
          "hata_rank": 8,
          "kombine": 15,
          "tahmin_toplam": 3021002.0,
          "gercek_toplam": 3480591.0,
          "fark": -459589.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.3235,
          "wmae_rank": 8,
          "hata": 12.95,
          "hata_rank": 7,
          "kombine": 15,
          "tahmin_toplam": 3029950.0,
          "gercek_toplam": 3480591.0,
          "fark": -450641.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.3253,
          "wmae_rank": 9,
          "hata": 2.42,
          "hata_rank": 3,
          "kombine": 12,
          "tahmin_toplam": 3396520.0,
          "gercek_toplam": 3480591.0,
          "fark": -84071.0
        }
      ]
    },
    {
      "id": "SİVAS",
      "sehir": "Si̇vas",
      "lat": 39.7477,
      "lng": 37.0179,
      "gercek_toplam": 781747.0,
      "tahmini_desi": 693947.0,
      "ort_hata": 11.23,
      "top3_models": [
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 1,
          "hata_rank": 3,
          "kombine": 4,
          "wmae": 0.4759,
          "hata": 17.05,
          "tahmin": 648472.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 3,
          "hata_rank": 2,
          "kombine": 5,
          "wmae": 0.5587,
          "hata": 13.91,
          "tahmin": 672979.0
        },
        {
          "model": "Stacked_LSTM",
          "wmae_rank": 2,
          "hata_rank": 4,
          "kombine": 6,
          "wmae": 0.4938,
          "hata": 20.17,
          "tahmin": 624102.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.4759,
          "wmae_rank": 1,
          "hata": 17.05,
          "hata_rank": 3,
          "kombine": 4,
          "tahmin_toplam": 648472.0,
          "gercek_toplam": 781747.0,
          "fark": -133275.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.4938,
          "wmae_rank": 2,
          "hata": 20.17,
          "hata_rank": 4,
          "kombine": 6,
          "tahmin_toplam": 624102.0,
          "gercek_toplam": 781747.0,
          "fark": -157645.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.5587,
          "wmae_rank": 3,
          "hata": 13.91,
          "hata_rank": 2,
          "kombine": 5,
          "tahmin_toplam": 672979.0,
          "gercek_toplam": 781747.0,
          "fark": -108768.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.568,
          "wmae_rank": 4,
          "hata": 20.8,
          "hata_rank": 5,
          "kombine": 9,
          "tahmin_toplam": 619164.0,
          "gercek_toplam": 781747.0,
          "fark": -162583.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.6057,
          "wmae_rank": 5,
          "hata": 30.27,
          "hata_rank": 8,
          "kombine": 13,
          "tahmin_toplam": 545135.0,
          "gercek_toplam": 781747.0,
          "fark": -236612.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.6087,
          "wmae_rank": 6,
          "hata": 25.9,
          "hata_rank": 7,
          "kombine": 13,
          "tahmin_toplam": 984197.0,
          "gercek_toplam": 781747.0,
          "fark": 202450.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.627,
          "wmae_rank": 7,
          "hata": 22.42,
          "hata_rank": 6,
          "kombine": 13,
          "tahmin_toplam": 606459.0,
          "gercek_toplam": 781747.0,
          "fark": -175288.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.7255,
          "wmae_rank": 8,
          "hata": 56.85,
          "hata_rank": 9,
          "kombine": 17,
          "tahmin_toplam": 337291.0,
          "gercek_toplam": 781747.0,
          "fark": -444456.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.7388,
          "wmae_rank": 9,
          "hata": 2.73,
          "hata_rank": 1,
          "kombine": 10,
          "tahmin_toplam": 760391.0,
          "gercek_toplam": 781747.0,
          "fark": -21356.0
        }
      ]
    },
    {
      "id": "TRABZON",
      "sehir": "Trabzon",
      "lat": 41.0027,
      "lng": 39.7168,
      "gercek_toplam": 1334230.0,
      "tahmini_desi": 1324215.0,
      "ort_hata": 1.84,
      "top3_models": [
        {
          "model": "Prophet",
          "wmae_rank": 1,
          "hata_rank": 3,
          "kombine": 4,
          "wmae": 0.3372,
          "hata": 3.07,
          "tahmin": 1293321.0
        },
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 4,
          "hata_rank": 1,
          "kombine": 5,
          "wmae": 0.3606,
          "hata": 0.83,
          "tahmin": 1323217.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 5,
          "hata_rank": 2,
          "kombine": 7,
          "wmae": 0.3638,
          "hata": 1.64,
          "tahmin": 1356107.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.3372,
          "wmae_rank": 1,
          "hata": 3.07,
          "hata_rank": 3,
          "kombine": 4,
          "tahmin_toplam": 1293321.0,
          "gercek_toplam": 1334230.0,
          "fark": -40909.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.3385,
          "wmae_rank": 2,
          "hata": 10.7,
          "hata_rank": 9,
          "kombine": 11,
          "tahmin_toplam": 1191505.0,
          "gercek_toplam": 1334230.0,
          "fark": -142725.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3465,
          "wmae_rank": 3,
          "hata": 6.14,
          "hata_rank": 5,
          "kombine": 8,
          "tahmin_toplam": 1252318.0,
          "gercek_toplam": 1334230.0,
          "fark": -81912.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3606,
          "wmae_rank": 4,
          "hata": 0.83,
          "hata_rank": 1,
          "kombine": 5,
          "tahmin_toplam": 1323217.0,
          "gercek_toplam": 1334230.0,
          "fark": -11013.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.3638,
          "wmae_rank": 5,
          "hata": 1.64,
          "hata_rank": 2,
          "kombine": 7,
          "tahmin_toplam": 1356107.0,
          "gercek_toplam": 1334230.0,
          "fark": 21877.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.3661,
          "wmae_rank": 6,
          "hata": 3.15,
          "hata_rank": 4,
          "kombine": 10,
          "tahmin_toplam": 1376285.0,
          "gercek_toplam": 1334230.0,
          "fark": 42055.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.3983,
          "wmae_rank": 7,
          "hata": 6.94,
          "hata_rank": 6,
          "kombine": 13,
          "tahmin_toplam": 1241696.0,
          "gercek_toplam": 1334230.0,
          "fark": -92534.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.4038,
          "wmae_rank": 8,
          "hata": 10.35,
          "hata_rank": 7,
          "kombine": 15,
          "tahmin_toplam": 1472262.0,
          "gercek_toplam": 1334230.0,
          "fark": 138032.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.4482,
          "wmae_rank": 9,
          "hata": 10.38,
          "hata_rank": 8,
          "kombine": 17,
          "tahmin_toplam": 1195683.0,
          "gercek_toplam": 1334230.0,
          "fark": -138547.0
        }
      ]
    },
    {
      "id": "TRAKYA",
      "sehir": "Edirne",
      "lat": 41.6818,
      "lng": 26.5623,
      "gercek_toplam": 2043456.0,
      "tahmini_desi": 1846302.0,
      "ort_hata": 9.65,
      "top3_models": [
        {
          "model": "NBEATS",
          "wmae_rank": 5,
          "hata_rank": 1,
          "kombine": 6,
          "wmae": 0.2685,
          "hata": 7.64,
          "tahmin": 1887293.0
        },
        {
          "model": "NHITS",
          "wmae_rank": 3,
          "hata_rank": 3,
          "kombine": 6,
          "wmae": 0.2408,
          "hata": 13.42,
          "tahmin": 1769253.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 2,
          "hata_rank": 5,
          "kombine": 7,
          "wmae": 0.2402,
          "hata": 19.21,
          "tahmin": 1650934.0
        }
      ],
      "tum_modeller": [
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.24,
          "wmae_rank": 1,
          "hata": 20.4,
          "hata_rank": 6,
          "kombine": 7,
          "tahmin_toplam": 1626576.0,
          "gercek_toplam": 2043456.0,
          "fark": -416881.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.2402,
          "wmae_rank": 2,
          "hata": 19.21,
          "hata_rank": 5,
          "kombine": 7,
          "tahmin_toplam": 1650934.0,
          "gercek_toplam": 2043456.0,
          "fark": -392522.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.2408,
          "wmae_rank": 3,
          "hata": 13.42,
          "hata_rank": 3,
          "kombine": 6,
          "tahmin_toplam": 1769253.0,
          "gercek_toplam": 2043456.0,
          "fark": -274204.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.262,
          "wmae_rank": 4,
          "hata": 24.26,
          "hata_rank": 8,
          "kombine": 12,
          "tahmin_toplam": 1547689.0,
          "gercek_toplam": 2043456.0,
          "fark": -495768.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.2685,
          "wmae_rank": 5,
          "hata": 7.64,
          "hata_rank": 1,
          "kombine": 6,
          "tahmin_toplam": 1887293.0,
          "gercek_toplam": 2043456.0,
          "fark": -156163.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3047,
          "wmae_rank": 6,
          "hata": 14.58,
          "hata_rank": 4,
          "kombine": 10,
          "tahmin_toplam": 1745540.0,
          "gercek_toplam": 2043456.0,
          "fark": -297916.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3219,
          "wmae_rank": 7,
          "hata": 7.88,
          "hata_rank": 2,
          "kombine": 9,
          "tahmin_toplam": 1882360.0,
          "gercek_toplam": 2043456.0,
          "fark": -161096.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.371,
          "wmae_rank": 8,
          "hata": 21.1,
          "hata_rank": 7,
          "kombine": 15,
          "tahmin_toplam": 1612276.0,
          "gercek_toplam": 2043456.0,
          "fark": -431181.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.7201,
          "wmae_rank": 9,
          "hata": 74.63,
          "hata_rank": 9,
          "kombine": 18,
          "tahmin_toplam": 518472.0,
          "gercek_toplam": 2043456.0,
          "fark": -1524984.0
        }
      ]
    },
    {
      "id": "VAN",
      "sehir": "Van",
      "lat": 38.4891,
      "lng": 43.38,
      "gercek_toplam": 1083989.0,
      "tahmini_desi": 1054502.0,
      "ort_hata": 4.9,
      "top3_models": [
        {
          "model": "Prophet",
          "wmae_rank": 3,
          "hata_rank": 2,
          "kombine": 5,
          "wmae": 0.3937,
          "hata": 3.27,
          "tahmin": 1119466.0
        },
        {
          "model": "DLinear",
          "wmae_rank": 9,
          "hata_rank": 1,
          "kombine": 10,
          "wmae": 0.5347,
          "hata": 2.59,
          "tahmin": 1055962.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 7,
          "hata_rank": 3,
          "kombine": 10,
          "wmae": 0.4163,
          "hata": 8.85,
          "tahmin": 988080.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.367,
          "wmae_rank": 1,
          "hata": 33.62,
          "hata_rank": 9,
          "kombine": 10,
          "tahmin_toplam": 719582.0,
          "gercek_toplam": 1083989.0,
          "fark": -364407.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3761,
          "wmae_rank": 2,
          "hata": 24.86,
          "hata_rank": 8,
          "kombine": 10,
          "tahmin_toplam": 814475.0,
          "gercek_toplam": 1083989.0,
          "fark": -269514.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.3937,
          "wmae_rank": 3,
          "hata": 3.27,
          "hata_rank": 2,
          "kombine": 5,
          "tahmin_toplam": 1119466.0,
          "gercek_toplam": 1083989.0,
          "fark": 35477.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.3939,
          "wmae_rank": 4,
          "hata": 15.06,
          "hata_rank": 7,
          "kombine": 11,
          "tahmin_toplam": 920721.0,
          "gercek_toplam": 1083989.0,
          "fark": -163267.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.4058,
          "wmae_rank": 5,
          "hata": 14.87,
          "hata_rank": 6,
          "kombine": 11,
          "tahmin_toplam": 922824.0,
          "gercek_toplam": 1083989.0,
          "fark": -161165.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.4081,
          "wmae_rank": 6,
          "hata": 10.92,
          "hata_rank": 4,
          "kombine": 10,
          "tahmin_toplam": 965654.0,
          "gercek_toplam": 1083989.0,
          "fark": -118335.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.4163,
          "wmae_rank": 7,
          "hata": 8.85,
          "hata_rank": 3,
          "kombine": 10,
          "tahmin_toplam": 988080.0,
          "gercek_toplam": 1083989.0,
          "fark": -95909.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.4644,
          "wmae_rank": 8,
          "hata": 12.71,
          "hata_rank": 5,
          "kombine": 13,
          "tahmin_toplam": 946261.0,
          "gercek_toplam": 1083989.0,
          "fark": -137728.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.5347,
          "wmae_rank": 9,
          "hata": 2.59,
          "hata_rank": 1,
          "kombine": 10,
          "tahmin_toplam": 1055962.0,
          "gercek_toplam": 1083989.0,
          "fark": -28027.0
        }
      ]
    },
    {
      "id": "ÇANAKKALE",
      "sehir": "Çanakkale",
      "lat": 40.1553,
      "lng": 26.4142,
      "gercek_toplam": 432734.0,
      "tahmini_desi": 432482.0,
      "ort_hata": 0.75,
      "top3_models": [
        {
          "model": "Prophet",
          "wmae_rank": 3,
          "hata_rank": 2,
          "kombine": 5,
          "wmae": 0.3671,
          "hata": 0.66,
          "tahmin": 429867.0
        },
        {
          "model": "PatchTST",
          "wmae_rank": 6,
          "hata_rank": 3,
          "kombine": 9,
          "wmae": 0.3995,
          "hata": 1.04,
          "tahmin": 437228.0
        },
        {
          "model": "DLinear",
          "wmae_rank": 9,
          "hata_rank": 1,
          "kombine": 10,
          "wmae": 0.5918,
          "hata": 0.55,
          "tahmin": 430350.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.3654,
          "wmae_rank": 1,
          "hata": 32.14,
          "hata_rank": 9,
          "kombine": 10,
          "tahmin_toplam": 293654.0,
          "gercek_toplam": 432734.0,
          "fark": -139080.0
        },
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.3667,
          "wmae_rank": 2,
          "hata": 29.08,
          "hata_rank": 8,
          "kombine": 10,
          "tahmin_toplam": 306899.0,
          "gercek_toplam": 432734.0,
          "fark": -125836.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.3671,
          "wmae_rank": 3,
          "hata": 0.66,
          "hata_rank": 2,
          "kombine": 5,
          "tahmin_toplam": 429867.0,
          "gercek_toplam": 432734.0,
          "fark": -2867.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.3699,
          "wmae_rank": 4,
          "hata": 23.9,
          "hata_rank": 7,
          "kombine": 11,
          "tahmin_toplam": 329300.0,
          "gercek_toplam": 432734.0,
          "fark": -103434.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.3923,
          "wmae_rank": 5,
          "hata": 4.07,
          "hata_rank": 5,
          "kombine": 10,
          "tahmin_toplam": 415116.0,
          "gercek_toplam": 432734.0,
          "fark": -17619.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.3995,
          "wmae_rank": 6,
          "hata": 1.04,
          "hata_rank": 3,
          "kombine": 9,
          "tahmin_toplam": 437228.0,
          "gercek_toplam": 432734.0,
          "fark": 4493.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.4951,
          "wmae_rank": 7,
          "hata": 4.43,
          "hata_rank": 6,
          "kombine": 13,
          "tahmin_toplam": 451897.0,
          "gercek_toplam": 432734.0,
          "fark": 19162.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.5231,
          "wmae_rank": 8,
          "hata": 3.98,
          "hata_rank": 4,
          "kombine": 12,
          "tahmin_toplam": 415509.0,
          "gercek_toplam": 432734.0,
          "fark": -17226.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.5918,
          "wmae_rank": 9,
          "hata": 0.55,
          "hata_rank": 1,
          "kombine": 10,
          "tahmin_toplam": 430350.0,
          "gercek_toplam": 432734.0,
          "fark": -2384.0
        }
      ]
    },
    {
      "id": "İZMİR",
      "sehir": "İzmi̇r",
      "lat": 38.4192,
      "lng": 27.1287,
      "gercek_toplam": 4368340.0,
      "tahmini_desi": 4171139.0,
      "ort_hata": 4.51,
      "top3_models": [
        {
          "model": "NBEATS",
          "wmae_rank": 5,
          "hata_rank": 1,
          "kombine": 6,
          "wmae": 0.3271,
          "hata": 2.67,
          "tahmin": 4251820.0
        },
        {
          "model": "TiDE",
          "wmae_rank": 4,
          "hata_rank": 2,
          "kombine": 6,
          "wmae": 0.324,
          "hata": 5.05,
          "tahmin": 4147788.0
        },
        {
          "model": "Stacked_LSTM",
          "wmae_rank": 2,
          "hata_rank": 5,
          "kombine": 7,
          "wmae": 0.2786,
          "hata": 10.36,
          "tahmin": 3915843.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.2723,
          "wmae_rank": 1,
          "hata": 13.3,
          "hata_rank": 8,
          "kombine": 9,
          "tahmin_toplam": 3787186.0,
          "gercek_toplam": 4368340.0,
          "fark": -581154.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.2786,
          "wmae_rank": 2,
          "hata": 10.36,
          "hata_rank": 5,
          "kombine": 7,
          "tahmin_toplam": 3915843.0,
          "gercek_toplam": 4368340.0,
          "fark": -452497.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.29,
          "wmae_rank": 3,
          "hata": 15.28,
          "hata_rank": 9,
          "kombine": 12,
          "tahmin_toplam": 3700678.0,
          "gercek_toplam": 4368340.0,
          "fark": -667662.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.324,
          "wmae_rank": 4,
          "hata": 5.05,
          "hata_rank": 2,
          "kombine": 6,
          "tahmin_toplam": 4147788.0,
          "gercek_toplam": 4368340.0,
          "fark": -220552.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.3271,
          "wmae_rank": 5,
          "hata": 2.67,
          "hata_rank": 1,
          "kombine": 6,
          "tahmin_toplam": 4251820.0,
          "gercek_toplam": 4368340.0,
          "fark": -116520.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.3312,
          "wmae_rank": 6,
          "hata": 11.45,
          "hata_rank": 6,
          "kombine": 12,
          "tahmin_toplam": 3868102.0,
          "gercek_toplam": 4368340.0,
          "fark": -500238.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.3366,
          "wmae_rank": 7,
          "hata": 5.83,
          "hata_rank": 3,
          "kombine": 10,
          "tahmin_toplam": 4113807.0,
          "gercek_toplam": 4368340.0,
          "fark": -254533.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.3391,
          "wmae_rank": 8,
          "hata": 12.28,
          "hata_rank": 7,
          "kombine": 15,
          "tahmin_toplam": 4904971.0,
          "gercek_toplam": 4368340.0,
          "fark": 536631.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.4076,
          "wmae_rank": 9,
          "hata": 9.81,
          "hata_rank": 4,
          "kombine": 13,
          "tahmin_toplam": 3939707.0,
          "gercek_toplam": 4368340.0,
          "fark": -428633.0
        }
      ]
    },
    {
      "id": "ŞANLIURFA",
      "sehir": "Şanliurfa",
      "lat": 37.1591,
      "lng": 38.7969,
      "gercek_toplam": 784822.0,
      "tahmini_desi": 796662.0,
      "ort_hata": 6.81,
      "top3_models": [
        {
          "model": "PatchTST",
          "wmae_rank": 5,
          "hata_rank": 2,
          "kombine": 7,
          "wmae": 0.6559,
          "hata": 7.53,
          "tahmin": 725715.0
        },
        {
          "model": "Stacked_BiLSTM",
          "wmae_rank": 1,
          "hata_rank": 6,
          "kombine": 7,
          "wmae": 0.5795,
          "hata": 22.58,
          "tahmin": 607574.0
        },
        {
          "model": "DLinear",
          "wmae_rank": 7,
          "hata_rank": 1,
          "kombine": 8,
          "wmae": 0.8504,
          "hata": 0.43,
          "tahmin": 781483.0
        }
      ],
      "tum_modeller": [
        {
          "model": "Stacked_BiLSTM",
          "kategori": "DL",
          "wmae": 0.5795,
          "wmae_rank": 1,
          "hata": 22.58,
          "hata_rank": 6,
          "kombine": 7,
          "tahmin_toplam": 607574.0,
          "gercek_toplam": 784822.0,
          "fark": -177247.0
        },
        {
          "model": "Stacked_LSTM",
          "kategori": "DL",
          "wmae": 0.5933,
          "wmae_rank": 2,
          "hata": 26.34,
          "hata_rank": 7,
          "kombine": 9,
          "tahmin_toplam": 578070.0,
          "gercek_toplam": 784822.0,
          "fark": -206752.0
        },
        {
          "model": "TiDE",
          "kategori": "NeuralForecast",
          "wmae": 0.615,
          "wmae_rank": 3,
          "hata": 18.73,
          "hata_rank": 5,
          "kombine": 8,
          "tahmin_toplam": 637825.0,
          "gercek_toplam": 784822.0,
          "fark": -146997.0
        },
        {
          "model": "Chronos-2",
          "kategori": "Foundation",
          "wmae": 0.6193,
          "wmae_rank": 4,
          "hata": 59.8,
          "hata_rank": 9,
          "kombine": 13,
          "tahmin_toplam": 315469.0,
          "gercek_toplam": 784822.0,
          "fark": -469353.0
        },
        {
          "model": "PatchTST",
          "kategori": "NeuralForecast",
          "wmae": 0.6559,
          "wmae_rank": 5,
          "hata": 7.53,
          "hata_rank": 2,
          "kombine": 7,
          "tahmin_toplam": 725715.0,
          "gercek_toplam": 784822.0,
          "fark": -59107.0
        },
        {
          "model": "NBEATS",
          "kategori": "NeuralForecast",
          "wmae": 0.7209,
          "wmae_rank": 6,
          "hata": 12.97,
          "hata_rank": 4,
          "kombine": 10,
          "tahmin_toplam": 683048.0,
          "gercek_toplam": 784822.0,
          "fark": -101774.0
        },
        {
          "model": "DLinear",
          "kategori": "NeuralForecast",
          "wmae": 0.8504,
          "wmae_rank": 7,
          "hata": 0.43,
          "hata_rank": 1,
          "kombine": 8,
          "tahmin_toplam": 781483.0,
          "gercek_toplam": 784822.0,
          "fark": -3339.0
        },
        {
          "model": "NHITS",
          "kategori": "NeuralForecast",
          "wmae": 0.9086,
          "wmae_rank": 8,
          "hata": 12.48,
          "hata_rank": 3,
          "kombine": 11,
          "tahmin_toplam": 882787.0,
          "gercek_toplam": 784822.0,
          "fark": 97965.0
        },
        {
          "model": "Prophet",
          "kategori": "Prophet",
          "wmae": 0.9625,
          "wmae_rank": 9,
          "hata": 38.44,
          "hata_rank": 8,
          "kombine": 17,
          "tahmin_toplam": 1086520.0,
          "gercek_toplam": 784822.0,
          "fark": 301698.0
        }
      ]
    }
  ],
  "meta": {
    "toplam_merkez": 36,
    "model_listesi": [
      "Chronos-2",
      "DLinear",
      "NBEATS",
      "NHITS",
      "PatchTST",
      "Prophet",
      "Stacked_BiLSTM",
      "Stacked_LSTM",
      "TiDE"
    ],
    "guncelleme": "2026-02-10"
  }
};
