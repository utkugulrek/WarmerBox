# WarmerBox

WarmerBox proje dosyaları. Bu klasör GitHub deposu (`origin` → `utkugulrek/WarmerBox`, dal `main`). Orijinal dosyaların bir kısmı hâlâ proje kökündeki `Final_Deliverables/`, `2_sunum/`, `1_sunum/`, `Jingle/` ve `img_examples/` klasörlerinde duruyor; buradakiler onların düzenli kopyasıdır.

Son güncelleme: 2026-11-04

## Klasör yapısı

```
WarmerBox/
├── index.html                  Web sitesi giriş sayfası (Vercel kök dizini)
├── css/                        Web sitesi stilleri (fonts.css, style.css)
├── js/                         Web sitesi betikleri: app.js, content.js (TR), content.de.js (DE)
├── app/                        Mobil uygulama prototipi; web sitesi bunu iframe ile gömer
├── assets/
│   ├── img/                    Web sitesi görselleri (ürün, paket, logo, uygulama ekranları)
│   ├── brand/                  Logo kiti (svg + png)
│   ├── fonts/                  Manrope (woff2), css/fonts.css kullanır
│   ├── audio/                  Web sitesi ses efektleri (.wav)
│   └── images/img_examples/    Örnek görseller (web sitesinde referans yok)
├── prototype/                  app/ ile aynı içerik (ayrıntı için aşağıya bak)
├── brand/
│   └── index.html              Marka kimliği rehberi (tek dosya, bağımsız)
├── presentations/
│   ├── final/
│   │   ├── sunum_01/           1. sunum (HEAT-BOX)
│   │   └── sunum_02/           2. sunum (TR + DE pptx)
│   └── speaker-notes/
│       └── sunum_02/           Konuşma notları (TR)
├── documents/
│   ├── strategy/               Strateji ve yapılacaklar belgeleri
│   └── logo/                   Logo dosyaları (pdf, jpg)
├── media/
│   └── jingle/                 Jingle ses dosyaları (.m4a)
├── Final_Deliverables/
│   ├── Fonts/                  Manrope değişken font (OFL)
│   └── README.md               Teslim dosyalarının kısa açıklaması
└── archive/
    └── belirsiz/               Durumu belirsiz dosyalar (Marka_Kimligi_Karisik.pdf)
```

## Sunumları saklama kuralı

Her yeni sunum, mevcut kalıbı izler:

1. Pptx dosyaları `presentations/final/sunum_NN/` altına girer (`NN` iki haneli sıra numarası: 03, 04 ...).
2. Konuşma notları varsa `presentations/speaker-notes/sunum_NN/` altına girer.
3. Eski sunumlar değiştirilmez ve silinmez; yeni sürüm ayrı bir `sunum_NN` klasörü olarak eklenir.
4. Commit mesajında hangi sunumun eklendiği yazılır (ör. `Sunum 3 eklendi`).

Dört sunum planlanıyor; şu an 1 ve 2 tamam, 3 ve 4 gelecek.

## Web sitesi ve uygulama ilişkisi

- Web sitesi (`index.html` + `js/app.js`) uygulama sayfasında `app/index.html?embed=1&lang=...` adresini iframe ile açar. Bu yüzden `app/` klasörünün yolu değiştirilmemeli.
- Görseller `js/app.js` içinde `assets/img/app/<ekran>-<dil>.png` biçiminde dinamik yüklenir (ör. `04-dash-tr.png`).
- Dağıtım: Vercel, kök dizin `index.html`. `brand/` alt sayfa olarak erişilebilir.
- `/app` ve `/prototype` sondaki eğik çizgi olmadan açılırsa göreli `app.css` ve `app.js` kök dizinde aranır ve 404 döner. `vercel.json` bu adresleri `/app/` ve `/prototype/` adreslerine yönlendirir.

## Bilinen sorunlar

- `app/` ve `prototype/` birebir aynı değil. Ses dosyalarında ve iki SVG'de (`wordmark*.svg`) farklılık var; `app-icon.png` de farklı. Boyutlar çoğunlukla aynı olduğu için fark, SVG'lerdeki C2PA manifest kimliği olabilir; içerik farkı doğrulanmadı.
- Yönetim belgeleri (`Decision_Log.md`, `Master_Brand_Strategy.md`, `Project_Progress.md`) bu depoda yok. Hangi sürümün güncel olduğu karar bekliyor.
- `assets/images/img_examples/` içinde commit edilmemiş değişiklikler var (iki dosya yeniden adlandırıldı).
- Depo OneDrive içinde duruyor; `.git` klasörü OneDrive ile eşzamanlanırken çakışma riski taşır.
- `.gitignore` yok. Office geçici dosyaları (`~$*.pptx`) ve `Thumbs.db` gibi dosyalar kazara commit edilebilir.
- Depoda 66 MB civarında ikili dosya var (pptx, wav, pdf, m4a, ttf). Yeni sunumlarla büyüyecek.

## Dağıtım (Vercel)

- Kök dizin `index.html`'dir (web sitesi).
- `prototype/` ve `brand/` alt siteler olarak yayınlanabilir.

## Dosya sahipliği ve notlar

- Dosya adları HTML ve JS içinde referans verildiği için değiştirilmemiştir. Tek istisna `brand/index.html`; eski adı `WarmerBox – Brand Identity Guidelines.html` idi.
- `Marka_Kimligi_Karisik.pdf` arşivde; güncel marka kimliği olup olmadığı netleşene kadar `archive/belirsiz/` altında kalır.
