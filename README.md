# WarmerBox

WarmerBox proje dosyalarının düzenli kopyası. Orijinal dosyalar proje kökündeki `Final_Deliverables/`, `2_sunum/`, `1_sunum/`, `Jingle/` ve `img_examples/` klasörlerinde yerinde duruyor; bu klasördeki dosyalar onların kopyasıdır.

Son güncelleme: 2026-11-03

## Klasör yapısı

```
WarmerBox/
├── index.html              Web sitesi giriş sayfası
├── css/                    Web sitesi stilleri (fonts.css, style.css)
├── js/                     Web sitesi betikleri (app.js, content.js, content.de.js)
├── app/                    Mobil uygulama prototipi (web sitesi iframe ile gömer)
├── assets/
│   ├── img/                Web sitesi görselleri
│   ├── fonts/              Manrope (woff2)
│   ├── audio/              Ses efektleri
│   ├── brand/              Logo ve marka varlıkları (svg + png)
│   └── images/
│       └── img_examples/   Örnek görseller
├── prototype/              Mobil uygulama prototipi (app/ ile birebir aynı)
├── brand/
│   └── index.html          Marka kimliği rehberi
├── presentations/
│   ├── final/              Final sunumlar (TR, DE)
│   ├── concept/            Konsept sunumları (HEAT-BOX)
│   └── speaker-notes/      Sunum konuşma notları (TR)
├── documents/
│   ├── strategy/           Strateji ve yapılacaklar belgeleri
│   └── logo/               Logo dosyaları
├── media/
│   └── jingle/             Jingle ses dosyaları
├── Final_Deliverables/
│   ├── Fonts/              Manrope değişken font
│   └── README.md
└── archive/
    └── belirsiz/           Durumu belirsiz dosyalar (Marka_Kimligi_Karisik.pdf)
```

## Dağıtım (Vercel)

- Kök dizin `index.html`'dir (web sitesi).
- `prototype/` ve `brand/` alt siteler olarak yayınlanabilir.

## Dosya sahipliği ve notlar

- `app/` ve `prototype/` birebir aynıdır. Web sitesi `app/index.html` dosyasını iframe ile gömdüğü için ikisi de korunur.
- Dosya adları HTML ve JS içinde referans verildiği için değiştirilmemiştir. Tek istisna `brand/index.html`, eski adı `WarmerBox – Brand Identity Guidelines.html` olan dosyadır.
- Yönetim belgeleri (`Decision_Log.md`, `Master_Brand_Strategy.md`, `Project_Progress.md`) bu kopyada yoktur. İki sürüm arasındaki karar bekleniyor.
- `Marka_Kimligi_Karisik.pdf` arşivde; güncel marka kimliği olup olmadığı netleşene kadar `archive/belirsiz/` altında kalır.
