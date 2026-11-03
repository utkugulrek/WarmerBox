(function(){
"use strict";
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const P=new URLSearchParams(location.search);
const I={
tr:{
"side.sub":"Tıklanabilir konsept prototip. Gerçek donanım bağlantısı yoktur; sıcaklık ve süre değerleri tasarım varsayımıdır.",
"side.note":"İpucu: Splash → Onboarding → Giriş akışını sırayla deneyin. Bildirimlerde “Demo: Çocuk ısıtma istedi” ile ebeveyn akışını başlatın.",
"slogan":"Eat on your terms.","splash.tap":"Devam etmek için dokun",
"scr.1":"Splash","scr.2":"Onboarding","scr.3":"Giriş / Kayıt","scr.4":"Ana sayfa","scr.5":"Cihaz bağlantısı","scr.6":"Sıcaklık kontrolü","scr.7":"Isıtma zamanlayıcı","scr.8":"Pil durumu","scr.9":"Bildirimler","scr.10":"Profil ve ayarlar","scr.11":"Ebeveyn modu","scr.12":"Çocuk profili",
"onb.skip":"Atla","onb.next":"Devam","onb.start":"Başla",
"onb.t1":"Planla","onb.d1":"Yemeğini çelik kaba koy, uygulamadan saati seç.",
"onb.t2":"Taşı","onb.d2":"Priz gerekmez. Kendi kabın, kendi saatin seninle.",
"onb.t3":"Ye","onb.d3":"Tam zamanında sıcak. Hazır olunca bildirim gelir.",
"auth.in":"Giriş yap","auth.up":"Kayıt ol","auth.sub":"Öğününü planla, her yerde sıcak ye.","auth.name":"Ad","auth.mail":"E-posta","auth.pw":"Şifre","auth.parent":"Ebeveyn hesabı (WarmerBox Kids)","auth.or":"veya","auth.demo":"Demo: gerçek hesap oluşturulmaz. Kişisel veriler konsept gereği saklanmaz.",
"auth.tin":"Tekrar hoş geldin","auth.tup":"Hesap oluştur","auth.bin":"Giriş yap","auth.bup":"Hesap oluştur",
"dash.hi":"Merhaba, Elif","dash.title":"Bugünkü öğünün","dash.conn":"Bağlı · %72","dash.t":"Sıcaklık","dash.r":"Hazır olma","dash.b":"Pil","dash.k":"Ebeveyn modu","dash.k2":"Kids","dash.today":"Bugün","dash.l1":"Kap yerleştirildi","dash.l2":"Isıtma başlar","dash.l3":"Yemeğin hazır",
"dash.cold":"Soğuk","dash.heat":"Isınıyor","dash.ready":"Hazır","dash.cta0":"Isıtmayı planla","dash.cta1":"İlerlemeyi gör","dash.cta2":"Yeni öğün planla",
"con.title":"Cihazını bağla","con.scan":"Yakındaki cihazlar aranıyor…","con.hint":"Cihazı aç: tuşa 3 saniye bas, halka yanıp sönsün.","con.sig":"Sinyal güçlü","con.sig2":"Sinyal orta","con.btn":"Bağlan","con.ok":"Bağlandı","con.cont":"Devam et","con.cl":"WarmerBox Classic hazır. İlk öğününü planlayabilirsin.","con.ki":"WarmerBox Kids bağlandı. Ebeveyn modunda kuralları belirle.",
"tmp.title":"Sıcaklık kontrolü","tmp.prof":"Profiller","tmp.safe":"Güvenlik (konsept): kapak açılınca ısıtma durur, aşırı ısınmada cihaz kendini kapatır.","tmp.apply":"Uygula","tmp.p1":"Ilık","tmp.p2":"Standart","tmp.p3":"Sıcak","tmp.done":"Sıcaklık ayarlandı",
"tim.title":"Isıtma zamanlayıcı","tim.q":"Yemeğin ne zaman hazır olsun?","tim.meal":"Yemek türü","tim.m1":"Çorba","tim.m2":"Ana yemek","tim.m3":"Yoğun yemek","tim.plan":"Planlanan başlangıç (tahmini)","tim.assume":"Süre tasarım varsayımıdır; yemek miktarına göre değişir.","tim.go":"Isıtmayı başlat","tim.target":"Hedef","tim.ready":"Hazır","tim.pil":"Pil","tim.stop":"Durdur","tim.speed":"Demo hızı: 25 dakika ≈ 20 saniye","tim.left":"kalan süre","tim.started":"Isıtma başladı","tim.at":"saatinde hazır.","tim.stopped":"Isıtma durduruldu",
"bat.title":"Pil durumu","bat.meals":"Kalan ısıtma","bat.m1":"≈ 1 öğün","bat.charge":"Şarj (USB-C)","bat.off":"Kapalı","bat.on":"Şarj oluyor","bat.week":"Bu hafta","bat.low":"Düşük pil demosu","bat.note":"Pil değerleri konsept amaçlıdır: 1 şarj ≈ 1 öğün hedeflenir.","bat.sub":"Bugünkü öğün için yeterli","bat.sublow":"Akşam şarj etmeyi unutma","bat.subchg":"Şarj oluyor · tahmini 1 sa 20 dk","bat.plug":"Şarjı aç","bat.unplug":"Şarjı kapat","bat.m0":"< 1 öğün",
"not.title":"Bildirimler","not.all":"Tümü","not.kids":"Ebeveyn","not.demo":"Demo: Çocuk ısıtma istedi","not.set":"Bildirim ayarları",
"n.ready":"Yemeğin hazır","n.ready2":"Afiyet olsun!","n.start":"Isıtma başladı","n.start2":"12:30’da hazır.","n.bat":"Pil %20","n.bat2":"Akşam şarj etmeyi unutma.","n.lid":"Kapak açık","n.lid2":"Isıtma durdu.","n.kreq":"Ece ısıtma istedi","n.kreq2":"Öğle yemeği · 45°C. Onaylıyor musun?","n.kdone":"Ece’nin yemeği ısıtıldı","n.kdone2":"45°C · ebeveyn onaylı","n.kgo":"Ece’nin yemeği ısıtılıyor","n.kgo2":"Onayladın. Yaklaşık 20 dk.","n.kno":"İstek reddedildi","n.kno2":"Ece bilgilendirildi.","n.ok":"Onayla","n.no":"Reddet","n.now":"şimdi","n.min":"1 dk önce","n.yest":"Dün",
"set.start":"Isıtma başladı","set.ready":"Yemek hazır","set.bat":"Pil düşük","set.lid":"Kapak açık","set.kid":"Ebeveyn uyarıları","set.quiet":"Sessiz saatler (22:00 – 07:00)",
"pro.title":"Profil ve ayarlar","pro.dev":"Cihazlarım","pro.on":"Bağlı","pro.kid":"Ebeveyn modu","pro.set":"Ayarlar","pro.lang":"Dil","pro.unit":"Sıcaklık birimi","pro.notif":"Bildirimler","pro.par":"Ebeveyn modu","pro.par2":"Kids cihazını yönet","pro.priv":"Gizlilik","pro.priv2":"Yalnızca gerekli veri; KVKK / DSGVO uyumlu tasarım hedefi","pro.help":"Yardım ve iletişim","pro.out":"Çıkış yap",
"par.title":"Ebeveyn modu","par.on":"Bağlı","par.ctl":"Isıtma kontrolü","par.lim":"Kullanım sınırları","par.max":"Maks. sıcaklık","par.maxd":"Kids tasarım sınırı 50°C. Değer, çocuk için servis sıcaklığı hedefidir; sağlık veya gıda güvenliği iddiası değildir.","par.win":"İzinli saatler","par.day":"Günlük en fazla","par.day2":"2 ısıtma · her biri en fazla 30 dk","par.hist":"Kullanım","par.histb":"Kullanım geçmişini aç","par.add":"Yeni Kids cihazı bağla",
"par.s1":"Isıtmayı onayıma bağla","par.s1d":"Çocuk tuşa basınca sana istek gelir.","par.s2":"Cihazı uzaktan kilitle","par.s2d":"Kilitliyken ısıtma başlamaz.","par.s3":"Isıtma başladı bildirimi","par.s4":"Yemek hazır bildirimi","par.s5":"Kapak açık uyarısı","par.s6":"Pil düşük uyarısı",
"par.pin":"Ebeveyn PIN’i","par.pind":"Ebeveyn moduna girmek için PIN gir. (Demo: 1234)","par.open":"Aç","par.locked":"Kids cihazı kilitlendi","par.unlocked":"Kilit açıldı","par.pair":"Kids cihazını bağla","par.paird":"Cihazdaki 6 haneli eşleştirme kodunu gir.","par.paired":"Kids cihazı ebeveyn hesabına bağlandı","par.bind":"Bağla",
"chi.title":"Çocuk profili","chi.sub":"3. sınıf · WarmerBox Kids WB-91C7","chi.meal":"Öğle öğünü","chi.max":"Maks. sıcaklık","chi.days":"Okul günleri","chi.hist":"Kullanım geçmişi",
"d.1":"Pzt","d.2":"Sal","d.3":"Çar","d.4":"Per","d.5":"Cum","d.6":"Cmt","d.7":"Paz",
"h.a":"Ebeveyn onayladı","h.b":"Zamanlanmış ısıtma","h.c":"İstek reddedildi","h.today":"Bugün","h.yest":"Dün","h.tue":"Salı","h.mon":"Pazartesi","h.now":"Şimdi","h.sum":"Bu hafta: {n} ısıtma, 1 reddedilen istek",
"tab.home":"Ana sayfa","tab.heat":"Isıtma","tab.notif":"Bildirim","tab.prof":"Profil",
"demo.tag":"Konsept prototip","snd":"Ses","snd.on":"Açık","snd.off":"Kapalı"
},
de:{
"side.sub":"Klickbarer Konzept-Prototyp. Es gibt keine echte Hardware-Verbindung; Temperaturen und Zeiten sind Design-Annahmen.",
"side.note":"Tipp: Probiere Splash → Onboarding → Login der Reihe nach. Starte im Bereich Mitteilungen die Demo „Kind möchte aufwärmen“.",
"slogan":"Eat on your terms.","splash.tap":"Zum Starten tippen",
"scr.1":"Splash","scr.2":"Onboarding","scr.3":"Login / Registrierung","scr.4":"Startseite","scr.5":"Gerät verbinden","scr.6":"Temperatur","scr.7":"Aufwärm-Timer","scr.8":"Akkustand","scr.9":"Mitteilungen","scr.10":"Profil & Einstellungen","scr.11":"Eltern-Modus","scr.12":"Kinderprofil",
"onb.skip":"Überspringen","onb.next":"Weiter","onb.start":"Los geht’s",
"onb.t1":"Planen","onb.d1":"Leg dein Essen in den Edelstahlbehälter und wähl die Uhrzeit in der App.",
"onb.t2":"Mitnehmen","onb.d2":"Keine Steckdose nötig. Dein Behälter, deine Zeit.",
"onb.t3":"Essen","onb.d3":"Pünktlich warm. Du bekommst eine Mitteilung, wenn es fertig ist.",
"auth.in":"Anmelden","auth.up":"Registrieren","auth.sub":"Plane dein Essen und iss überall warm.","auth.name":"Name","auth.mail":"E-Mail","auth.pw":"Passwort","auth.parent":"Eltern-Konto (WarmerBox Kids)","auth.or":"oder","auth.demo":"Demo: Es wird kein echtes Konto erstellt. Persönliche Daten werden im Konzept nicht gespeichert.",
"auth.tin":"Willkommen zurück","auth.tup":"Konto erstellen","auth.bin":"Anmelden","auth.bup":"Konto erstellen",
"dash.hi":"Hallo, Elif","dash.title":"Dein Essen heute","dash.conn":"Verbunden · 72 %","dash.t":"Temperatur","dash.r":"Fertig um","dash.b":"Akku","dash.k":"Eltern-Modus","dash.k2":"Kids","dash.today":"Heute","dash.l1":"Behälter eingelegt","dash.l2":"Aufwärmen startet","dash.l3":"Dein Essen ist fertig",
"dash.cold":"Kalt","dash.heat":"Wärmt auf","dash.ready":"Fertig","dash.cta0":"Aufwärmen planen","dash.cta1":"Fortschritt ansehen","dash.cta2":"Neues Essen planen",
"con.title":"Gerät verbinden","con.scan":"Suche nach Geräten in der Nähe …","con.hint":"Gerät einschalten: Taste 3 Sekunden drücken, bis der Ring blinkt.","con.sig":"Signal stark","con.sig2":"Signal mittel","con.btn":"Verbinden","con.ok":"Verbunden","con.cont":"Weiter","con.cl":"WarmerBox Classic ist bereit. Du kannst dein erstes Essen planen.","con.ki":"WarmerBox Kids ist verbunden. Lege im Eltern-Modus die Regeln fest.",
"tmp.title":"Temperatur","tmp.prof":"Profile","tmp.safe":"Sicherheit (Konzept): Beim Öffnen des Deckels stoppt das Aufwärmen. Bei Überhitzung schaltet sich das Gerät aus.","tmp.apply":"Übernehmen","tmp.p1":"Lauwarm","tmp.p2":"Standard","tmp.p3":"Heiß","tmp.done":"Temperatur gespeichert",
"tim.title":"Aufwärm-Timer","tim.q":"Wann soll dein Essen fertig sein?","tim.meal":"Art des Essens","tim.m1":"Suppe","tim.m2":"Hauptgericht","tim.m3":"Dichtes Essen","tim.plan":"Geplanter Start (geschätzt)","tim.assume":"Die Zeit ist eine Design-Annahme und hängt von der Menge ab.","tim.go":"Aufwärmen starten","tim.target":"Ziel","tim.ready":"Fertig","tim.pil":"Akku","tim.stop":"Stoppen","tim.speed":"Demo-Tempo: 25 Minuten ≈ 20 Sekunden","tim.left":"Restzeit","tim.started":"Aufwärmen gestartet","tim.at":"Uhr fertig.","tim.stopped":"Aufwärmen gestoppt",
"bat.title":"Akkustand","bat.meals":"Noch möglich","bat.m1":"≈ 1 Mahlzeit","bat.charge":"Laden (USB-C)","bat.off":"Aus","bat.on":"Lädt","bat.week":"Diese Woche","bat.low":"Demo: Akku niedrig","bat.note":"Die Akkuwerte sind ein Konzept: Ziel ist 1 Ladung ≈ 1 Mahlzeit.","bat.sub":"Reicht für das Essen heute","bat.sublow":"Lade ihn heute Abend auf","bat.subchg":"Lädt · geschätzt 1 Std. 20 Min.","bat.plug":"Laden starten","bat.unplug":"Laden beenden","bat.m0":"< 1 Mahlzeit",
"not.title":"Mitteilungen","not.all":"Alle","not.kids":"Eltern","not.demo":"Demo: Kind möchte aufwärmen","not.set":"Einstellungen",
"n.ready":"Dein Essen ist fertig","n.ready2":"Guten Appetit!","n.start":"Aufwärmen gestartet","n.start2":"Um 12:30 Uhr fertig.","n.bat":"Akku bei 20 %","n.bat2":"Lade ihn heute Abend auf.","n.lid":"Deckel offen","n.lid2":"Aufwärmen gestoppt.","n.kreq":"Ece möchte aufwärmen","n.kreq2":"Mittagessen · 45°C. Erlaubst du es?","n.kdone":"Eces Essen wurde aufgewärmt","n.kdone2":"45°C · von dir erlaubt","n.kgo":"Eces Essen wird aufgewärmt","n.kgo2":"Du hast erlaubt. Etwa 20 Min.","n.kno":"Anfrage abgelehnt","n.kno2":"Ece wurde informiert.","n.ok":"Erlauben","n.no":"Ablehnen","n.now":"jetzt","n.min":"vor 1 Min.","n.yest":"Gestern",
"set.start":"Aufwärmen gestartet","set.ready":"Essen fertig","set.bat":"Akku niedrig","set.lid":"Deckel offen","set.kid":"Eltern-Hinweise","set.quiet":"Ruhezeiten (22:00 – 07:00)",
"pro.title":"Profil & Einstellungen","pro.dev":"Meine Geräte","pro.on":"Verbunden","pro.kid":"Eltern-Modus","pro.set":"Einstellungen","pro.lang":"Sprache","pro.unit":"Temperatur-Einheit","pro.notif":"Mitteilungen","pro.par":"Eltern-Modus","pro.par2":"Kids-Gerät verwalten","pro.priv":"Datenschutz","pro.priv2":"Nur nötige Daten; Ziel: DSGVO-konformes Design","pro.help":"Hilfe & Kontakt","pro.out":"Abmelden",
"par.title":"Eltern-Modus","par.on":"Verbunden","par.ctl":"Aufwärmen steuern","par.lim":"Nutzungsgrenzen","par.max":"Max. Temperatur","par.maxd":"Das Kids-Design begrenzt auf 50°C. Der Wert ist ein Ziel für die Serviertemperatur für Kinder, kein Gesundheits- oder Lebensmittelsicherheits-Versprechen.","par.win":"Erlaubte Zeiten","par.day":"Pro Tag maximal","par.day2":"2-mal aufwärmen · je höchstens 30 Min.","par.hist":"Nutzung","par.histb":"Nutzungsverlauf öffnen","par.add":"Neues Kids-Gerät verbinden",
"par.s1":"Aufwärmen nur mit meiner Erlaubnis","par.s1d":"Drückt das Kind die Taste, kommt eine Anfrage an dich.","par.s2":"Gerät aus der Ferne sperren","par.s2d":"Bei Sperre startet kein Aufwärmen.","par.s3":"Mitteilung: Aufwärmen gestartet","par.s4":"Mitteilung: Essen fertig","par.s5":"Warnung: Deckel offen","par.s6":"Warnung: Akku niedrig",
"par.pin":"Eltern-PIN","par.pind":"Gib deine PIN ein, um den Eltern-Modus zu öffnen. (Demo: 1234)","par.open":"Öffnen","par.locked":"Kids-Gerät gesperrt","par.unlocked":"Sperre aufgehoben","par.pair":"Kids-Gerät verbinden","par.paird":"Gib den 6-stelligen Kopplungscode vom Gerät ein.","par.paired":"Kids-Gerät mit dem Eltern-Konto verbunden","par.bind":"Verbinden",
"chi.title":"Kinderprofil","chi.sub":"3. Klasse · WarmerBox Kids WB-91C7","chi.meal":"Mittagessen","chi.max":"Max. Temperatur","chi.days":"Schultage","chi.hist":"Nutzungsverlauf",
"d.1":"Mo","d.2":"Di","d.3":"Mi","d.4":"Do","d.5":"Fr","d.6":"Sa","d.7":"So",
"h.a":"Von dir erlaubt","h.b":"Geplantes Aufwärmen","h.c":"Anfrage abgelehnt","h.today":"Heute","h.yest":"Gestern","h.tue":"Dienstag","h.mon":"Montag","h.now":"Jetzt","h.sum":"Diese Woche: {n}-mal aufgewärmt, 1 Anfrage abgelehnt",
"tab.home":"Start","tab.heat":"Aufwärmen","tab.notif":"Mitteilung","tab.prof":"Profil",
"demo.tag":"Konzept-Prototyp","snd":"Ton","snd.on":"An","snd.off":"Aus"
}};
let lang=(P.get("lang")==="de")?"de":"tr";
let unit="C",sound=P.get("nosound")?false:true;
const S={temp:65,rh:12,rm:30,meal:2,heat:"idle",pct:0,bat:72,chg:false,sw:{s1:true,s2:false,s3:true,s4:true,s5:true,s6:true},maxT:45,sets:{start:true,ready:true,bat:true,lid:true,kid:true,quiet:false},
 notifs:[{id:"req0",k:"kreq",kids:true,time:"n.min",act:true},{id:"n1",k:"lid",time:"n.yest",tm:"12:41"},{id:"n2",k:"bat",time:"n.yest",tm:"18:02"},{id:"n3",k:"start",time:"n.yest",tm:"12:05"},{id:"n4",k:"kdone",kids:true,time:"n.yest",tm:"12:20"}],
 hist:[{d:"h.today",tm:"12:05",deg:45,r:"h.a"},{d:"h.yest",tm:"12:10",deg:45,r:"h.b"},{d:"h.tue",tm:"12:08",no:true,r:"h.c"},{d:"h.mon",tm:"12:06",deg:40,r:"h.a"}],nf:"all"};
const t=k=>(I[lang][k]!==undefined?I[lang][k]:(I.tr[k]!==undefined?I.tr[k]:k));
const T=c=>unit==="C"?Math.round(c)+"°C":Math.round(c*9/5+32)+"°F";
const pad=n=>String(n).padStart(2,"0");
const hm=(h,m)=>pad(((h%24)+24)%24)+":"+pad(m);
const LEAD=[20,25,30];
/* sound */
const snd={};
function play(n){if(!sound)return;try{snd[n]=snd[n]||new Audio("assets/audio/"+n+".wav");snd[n].currentTime=0;const p=snd[n].play();if(p&&p.catch)p.catch(()=>{});}catch(e){}}
/* rings */
function mkRing(el,size,stroke,opts){opts=opts||{};const r=(size-stroke)/2,C=2*Math.PI*r;el.style.width=el.style.height=size+"px";
 el.innerHTML='<svg width="'+size+'" height="'+size+'" viewBox="0 0 '+size+' '+size+'"><circle class="trk" cx="'+size/2+'" cy="'+size/2+'" r="'+r+'" fill="none" stroke-width="'+stroke+'"/><circle class="arc" cx="'+size/2+'" cy="'+size/2+'" r="'+r+'" fill="none" stroke-width="'+stroke+'" stroke-linecap="round" stroke-dasharray="'+C+'" stroke-dashoffset="'+C+'" transform="rotate(-90 '+size/2+' '+size/2+')"/></svg><div class="c"></div>';
 el._C=C;return el}
function setRing(el,pct,html){const a=$(".arc",el);a.style.strokeDashoffset=el._C*(1-Math.max(0,Math.min(1,pct)));if(html!==undefined)$(".c",el).innerHTML=html}
/* i18n apply */
function applyI18n(){document.documentElement.lang=lang;$$("[data-i18n]").forEach(e=>{e.textContent=t(e.dataset.i18n)});$$("[data-lang]").forEach(b=>b.classList.toggle("on",b.dataset.lang===lang));renderAll()}
/* nav */
let cur="splash",ids=["splash","onb","auth","dash","connect","temp","timer","battery","notif","profile","parent","child"];
function go(id,opts){if(!document.getElementById("s-"+id))return;opts=opts||{};
 if(id==="parent"&&!opts.noPin&&cur!=="child"){cur0(id);return pinSheet()}
 cur0(id)}
function cur0(id){cur=id;$$(".screen").forEach(s=>s.classList.toggle("on",s.id==="s-"+id));$$("#toc button").forEach(b=>b.classList.toggle("on",b.dataset.id===id));$$("[data-tabs] button").forEach(b=>b.classList.toggle("on",b.dataset.g===id||(id==="battery"&&b.dataset.g==="dash")));
 if(id==="connect")conReset();renderAll();closeSheet()}
document.addEventListener("click",e=>{const g=e.target.closest("[data-go]");if(g&&!g.disabled){if(cur==="splash"||g.dataset.go)go(g.dataset.go)}});
/* tabs */
function buildTabs(){const items=[["dash","i-home","tab.home"],["timer","i-flame","tab.heat"],["notif","i-bell","tab.notif"],["profile","i-user","tab.prof"]];const pend=S.notifs.filter(n=>n.act).length;
 $$("[data-tabs]").forEach(n=>{n.innerHTML=items.map(i=>'<button data-g="'+i[0]+'" data-go="'+i[0]+'" class="'+(cur===i[0]?"on":"")+'"><svg class="i"><use href="#'+i[1]+'"/></svg><span>'+t(i[2])+'</span>'+(i[0]==="notif"&&pend?'<span class="bd">'+pend+'</span>':"")+'</button>').join("")})}
/* toc */
function buildToc(){$("#toc").innerHTML=ids.map((id,i)=>'<li><button data-id="'+id+'" class="'+(cur===id?"on":"")+'"><i>'+(i+1)+'</i>'+t("scr."+(i+1))+'</button></li>').join("")}
$("#toc").addEventListener("click",e=>{const b=e.target.closest("button");if(b)go(b.dataset.id,{noPin:true})});
/* banner */
let bt;function banner(title,sub,icon,sn){$("#bannerT").textContent=title;$("#bannerS").textContent=sub||"";$("#bannerIc").innerHTML='<use href="#'+(icon||"i-bell")+'"/>';const b=$("#banner");b.classList.add("show");clearTimeout(bt);bt=setTimeout(()=>b.classList.remove("show"),3600);if(sn)play(sn)}
/* sheet */
function openSheet(ti,de,html){$("#shT").textContent=ti;$("#shD").textContent=de;$("#shBody").innerHTML=html;$("#sheet").classList.add("on");$("#sheetBg").classList.add("on")}
function closeSheet(){$("#sheet").classList.remove("on");$("#sheetBg").classList.remove("on")}
$("#sheetBg").addEventListener("click",()=>{closeSheet()});
function pinSheet(){openSheet(t("par.pin"),t("par.pind"),'<div class="pin"><i class="f">•</i><i class="f">•</i><i class="f">•</i><i class="f">•</i></div><button class="btn dk" id="pinOk">'+t("par.open")+'</button>');$("#pinOk").onclick=()=>{closeSheet();go("parent",{noPin:true})}}
/* dashboard */
function renderDash(){const el=$("#dashRing");if(!el._C)mkRing(el,196,16);
 const h=S.heat;let pct,c;
 if(h==="idle"){pct=.06;c='<span class="num" style="font-size:34px">'+t("dash.cold")+'</span><span class="mut" style="font-weight:700;margin-top:6px">22°C'.replace("22°C",T(22))+'</span>'}
 else if(h==="heating"){const cur=22+(S.temp-22)*S.pct;pct=S.pct;c='<span class="num" style="font-size:44px">'+T(cur)+'</span><span style="font-weight:800;color:var(--ember);margin-top:6px">'+t("dash.heat")+'</span>'}
 else{pct=1;c='<span class="num" style="font-size:44px">'+T(S.temp)+'</span><span style="font-weight:800;margin-top:6px;color:var(--ok)">'+t("dash.ready")+'</span>'}
 setRing(el,pct,c);$("#dashCta").textContent=t(h==="idle"?"dash.cta0":h==="heating"?"dash.cta1":"dash.cta2");
 $("#dashCta").dataset.go="timer";$("#dashTemp").textContent=T(S.temp);$("#dashTime").textContent=hm(S.rh,S.rm);$("#dashReady").textContent=hm(S.rh,S.rm);$("#dashStart").textContent=startStr();
 $("#dashConn").textContent=t("dash.conn").replace("72",S.bat);$("#dashDot").style.display=S.notifs.some(n=>n.act)?"block":"none"}
function startStr(){let m=S.rh*60+S.rm-LEAD[S.meal];return hm(Math.floor(m/60),((m%60)+60)%60)}
/* connect */
function conReset(){$("#conScan").style.display="block";$("#conOk").style.display="none"}
$$("[data-dev]").forEach(b=>b.addEventListener("click",()=>{const kid=b.dataset.dev==="kids";b.querySelector(".btn").textContent="…";setTimeout(()=>{b.querySelector(".btn").textContent=t("con.btn");$("#conScan").style.display="none";$("#conOk").style.display="block";const r=$("#conRing");mkRing(r,150,14);setRing(r,1,'<svg class="i" style="width:48px;height:48px;color:var(--ok);stroke-width:2.5"><use href="#i-check"/></svg>');$("#conOkD").textContent=t(kid?"con.ki":"con.cl");const bt=$("#conOk .btn");bt.dataset.go=kid?"parent":"dash";bt.onclick=null;play("wb_heat_start")},kid?900:1100)}));
/* temp */
function renderTemp(){const el=$("#tempRing");if(!el._C)mkRing(el,200,16);const v=+$("#tempRange").value;setRing(el,(v-45)/30,'<span class="num" style="font-size:54px">'+T(v)+'</span>');$("#tempRange").style.setProperty("--p",((v-45)/30*100)+"%");
 $("#tempChips").innerHTML=[[55,"tmp.p1"],[65,"tmp.p2"],[72,"tmp.p3"]].map(p=>'<button class="chip '+(v===p[0]?"on":"")+'" data-v="'+p[0]+'">'+t(p[1])+" · "+T(p[0])+"</button>").join("");$("#tempApply").textContent=t("tmp.apply")}
$("#tempRange").addEventListener("input",renderTemp);
$("#tempChips").addEventListener("click",e=>{const b=e.target.closest("[data-v]");if(b){$("#tempRange").value=b.dataset.v;renderTemp()}});
$("#tempApply").addEventListener("click",()=>{S.temp=+$("#tempRange").value;go("dash");banner(t("tmp.done"),T(S.temp),"i-therm")});
/* timer */
function renderTimer(){$("#timeBig").textContent=hm(S.rh,S.rm);$("#startAt").textContent=startStr();$("#mealChips").innerHTML=[0,1,2].map(i=>'<button class="chip '+(S.meal===i?"on":"")+'" data-m="'+i+'">'+t("tim.m"+(i+1))+" · ~"+LEAD[i]+" dk</button>").join("").replace(/dk/g,lang==="de"?"Min.":"dk");
 $("#timGo").textContent=t("tim.go");$("#timSet").style.display=S.heat==="idle"?"block":"none";$("#timRun").style.display=S.heat==="idle"?"none":"block";
 if(S.heat!=="idle"){const el=$("#runRing");if(!el._C)mkRing(el,230,18);const left=Math.round(LEAD[S.meal]*60*(1-S.pct));const cur=22+(S.temp-22)*S.pct;
  if(S.heat==="ready"){setRing(el,1,'<svg class="i" style="width:44px;height:44px;color:var(--ok);stroke-width:2.5"><use href="#i-check"/></svg><span class="num" style="font-size:30px;margin-top:6px">'+T(S.temp)+'</span>');$("#runLbl").textContent=t("n.ready")+". "+t("n.ready2")}
  else{setRing(el,S.pct,'<span class="num" style="font-size:52px">'+pad(Math.floor(left/60))+':'+pad(left%60)+'</span><span class="mut" style="font-weight:700;margin-top:6px">'+t("tim.left")+'</span>');$("#runLbl").textContent=T(cur)+" → "+T(S.temp)}
  $("#runTarget").textContent=T(S.temp);$("#runReady").textContent=hm(S.rh,S.rm);$("#runBat").textContent=(lang==="de"?S.bat+" %":"%"+S.bat)} }
function stepTime(d){let m=S.rh*60+S.rm+d;S.rh=Math.floor((m+1440)%1440/60);S.rm=((m%60)+60)%60;renderTimer();renderDash()}
$("#hM").onclick=()=>stepTime(-15);$("#hP").onclick=()=>stepTime(15);
$("#mealChips").addEventListener("click",e=>{const b=e.target.closest("[data-m]");if(b){S.meal=+b.dataset.m;renderTimer();renderDash()}});
let tick;const DEMO_MS=20000;
function startHeat(from){clearInterval(tick);S.heat="heating";S.pct=from||0;play("wb_heat_start");banner(t("tim.started"),hm(S.rh,S.rm)+" "+t("tim.at"),"i-flame");renderAll();if(P.get("freeze"))return;let t0=performance.now()-S.pct*DEMO_MS;tick=setInterval(()=>{S.pct=Math.min(1,(performance.now()-t0)/DEMO_MS);if(S.pct>=1){clearInterval(tick);S.heat="ready";play("wb_ready");S.notifs.unshift({id:"r"+Date.now(),k:"ready",time:"n.now"});banner(t("n.ready"),t("n.ready2"),"i-check")}renderDash();renderTimer();renderNotif()},250)}
$("#timGo").onclick=()=>startHeat(0);
$("#timStop").onclick=()=>{clearInterval(tick);const was=S.heat;S.heat="idle";S.pct=0;if(was!=="ready")banner(t("tim.stopped"),"","i-x");renderAll()};
$("#dashCta").addEventListener("click",()=>{if(S.heat==="ready"){S.heat="idle";S.pct=0;renderAll()}});
/* battery */
function renderBattery(){const b=S.bat;$("#batFill").style.width=b+"%";$("#batPct").textContent=(lang==="de"?b+" %":"%"+b);$("#batSub").textContent=t(S.chg?"bat.subchg":b<=25?"bat.sublow":"bat.sub");$("#batChg").textContent=t(S.chg?"bat.on":"bat.off");$("#batToggle").textContent=t(S.chg?"bat.unplug":"bat.plug");$("#batLow").textContent=t("bat.low");$("#weekDays").innerHTML=[1,2,3,4,5,6,7].map(i=>"<span>"+t("d."+i)+"</span>").join("");$(".card .battery b")}
$("#batToggle").onclick=()=>{S.chg=!S.chg;if(S.chg){S.bat=Math.max(S.bat,20);}renderAll()};
$("#batLow").onclick=()=>{S.bat=20;S.chg=false;S.notifs.unshift({id:"b"+Date.now(),k:"bat",time:"n.now"});banner(t("n.bat"),t("n.bat2"),"i-battery","wb_battery_low");renderAll()};
/* notifications */
function renderNotif(){const ic={ready:"i-check",start:"i-flame",bat:"i-battery",lid:"i-lid",kreq:"i-child",kdone:"i-child",kgo:"i-child",kno:"i-x"};
 const list=S.notifs.filter(n=>S.nf==="all"||n.kids);$("#notList").innerHTML=list.map(n=>'<div class="li" style="align-items:flex-start"><div class="ic" style="'+(n.act?"background:var(--sky)":n.k==="ready"?"background:#FDDDD1":"")+'"><svg class="i"><use href="#'+ic[n.k]+'"/></svg></div><div class="t"><b>'+t("n."+n.k)+'</b><span>'+t("n."+n.k+"2")+'</span>'+(n.act?'<div style="display:flex;gap:8px;margin-top:10px"><button class="btn pri sm2" data-a="ok" data-id="'+n.id+'">'+t("n.ok")+'</button><button class="btn out sm2" data-a="no" data-id="'+n.id+'">'+t("n.no")+'</button></div>':"")+'</div><span class="mut" style="font-size:12px;white-space:nowrap">'+(n.tm?t(n.time)+" "+n.tm:t(n.time))+'</span></div>').join("");
 $$("#notSeg button").forEach(b=>b.classList.toggle("on",b.dataset.f===S.nf));
 $("#notSet").innerHTML=[["start","set.start"],["ready","set.ready"],["bat","set.bat"],["lid","set.lid"],["kid","set.kid"],["quiet","set.quiet"]].map(s=>'<div class="li"><div class="t"><b style="font-weight:600">'+t(s[1])+'</b></div><button class="sw '+(S.sets[s[0]]?"on":"")+'" data-set="'+s[0]+'" role="switch" aria-checked="'+S.sets[s[0]]+'"></button></div>').join("");$("#demoReq").textContent=t("not.demo")}
$("#notSeg").addEventListener("click",e=>{const b=e.target.closest("[data-f]");if(b){S.nf=b.dataset.f;renderNotif()}});
$("#notList").addEventListener("click",e=>{const b=e.target.closest("[data-a]");if(!b)return;const n=S.notifs.find(x=>x.id===b.dataset.id);if(!n)return;if(b.dataset.a==="ok"){n.k="kgo";n.act=false;n.time="n.now";S.hist.unshift({d:"h.today",tm:hm(12,6),deg:S.maxT,r:"h.a"});banner(t("n.kgo"),t("n.kgo2"),"i-child","wb_parent_notify")}else{n.k="kno";n.act=false;n.time="n.now";S.hist.unshift({d:"h.today",tm:hm(12,6),no:true,r:"h.c"});banner(t("n.kno"),t("n.kno2"),"i-x")}renderAll()});
$("#notSet").addEventListener("click",e=>{const b=e.target.closest("[data-set]");if(b){S.sets[b.dataset.set]=!S.sets[b.dataset.set];renderNotif()}});
$("#demoReq").onclick=()=>{if(!S.notifs.some(n=>n.act)){S.notifs.unshift({id:"q"+Date.now(),k:"kreq",kids:true,time:"n.now",act:true})}banner(t("n.kreq"),t("n.kreq2"),"i-child","wb_parent_notify");renderAll()};
/* profile */
$("#unitSeg").addEventListener("click",e=>{const b=e.target.closest("[data-u]");if(b){unit=b.dataset.u;$$("#unitSeg button").forEach(x=>x.classList.toggle("on",x===b));renderAll()}});
/* parent */
function renderParent(){const rows=[["s1","i-lock","par.s1","par.s1d"],["s2","i-shield","par.s2","par.s2d"],["s3","i-flame","par.s3"],["s4","i-check","par.s4"],["s5","i-lid","par.s5"],["s6","i-battery","par.s6"]];
 $("#parSw").innerHTML=rows.map(r=>'<div class="li"><div class="ic"><svg class="i"><use href="#'+r[1]+'"/></svg></div><div class="t"><b style="font-weight:700">'+t(r[2])+'</b>'+(r[3]?"<span>"+t(r[3])+"</span>":"")+'</div><button class="sw '+(S.sw[r[0]]?"on":"")+'" data-sw="'+r[0]+'" role="switch" aria-checked="'+S.sw[r[0]]+'"></button></div>').join("");
 $("#maxRange").value=S.maxT;$("#maxRange").style.setProperty("--p",((S.maxT-40)/10*100)+"%");$("#maxT").textContent=T(S.maxT);$("#chiMax").textContent=T(S.maxT)}
$("#parSw").addEventListener("click",e=>{const b=e.target.closest("[data-sw]");if(!b)return;const k=b.dataset.sw;S.sw[k]=!S.sw[k];if(k==="s2")banner(t(S.sw[k]?"par.locked":"par.unlocked"),"WarmerBox Kids","i-lock");renderParent()});
$("#maxRange").addEventListener("input",e=>{S.maxT=+e.target.value;renderParent()});
$("#addKid").onclick=()=>{openSheet(t("par.pair"),t("par.paird"),'<div class="pin"><i class="f">4</i><i class="f">8</i><i class="f">2</i><i class="f">9</i><i class="f">1</i><i class="f">3</i></div><button class="btn dk" id="pairOk">'+t("par.bind")+'</button>');$("#pairOk").onclick=()=>{closeSheet();banner(t("par.paired"),"WarmerBox Kids · WB-91C7","i-child","wb_parent_notify")}};
/* child */
function renderChild(){$("#weekSum").textContent=t("h.sum").replace("{n}",S.hist.filter(h=>!h.no).length);$("#histList").innerHTML=S.hist.map(h=>'<div class="h '+(h.no?"no":"")+'"><b>'+t(h.d)+" "+h.tm+(h.deg?" · "+T(h.deg):"")+'</b><span>'+t(h.r)+'</span></div>').join("");
 $("#dayChips").innerHTML=[1,2,3,4,5,6,7].map(i=>'<span class="chip '+(i<=5?"on":"")+'" style="padding:8px 12px">'+t("d."+i)+"</span>").join("");
 $("#avCh").innerHTML=[["#7DB4C8","Sky"],["#8C9A80","Sage"],["#F4622C","Ember"],["#E8C02E","Sun"]].map(c=>'<button aria-label="'+c[1]+'" data-c="'+c[0]+'" style="width:30px;height:30px;border-radius:50%;background:'+c[0]+';border:3px solid var(--paper);box-shadow:0 0 0 2px var(--line)"></button>').join("")}
$("#avCh").addEventListener("click",e=>{const b=e.target.closest("[data-c]");if(b)$$("#s-child .av, #s-parent .av").forEach(a=>a.style.background=b.dataset.c)});
/* onboarding */
let ob=0;function renderOnb(){const r=$("#onbRing");if(!r._C)mkRing(r,170,15);setRing(r,[.08,.62,1][ob],ob===2?'<svg class="i" style="width:40px;height:40px;color:var(--ok);stroke-width:2.5"><use href="#i-check"/></svg>':ob===1?'<svg class="i" style="width:40px;height:40px"><use href="#i-bowl"/></svg>':'<svg class="i" style="width:40px;height:40px"><use href="#i-clock"/></svg>');$("#onbT").textContent=t("onb.t"+(ob+1));$("#onbD").textContent=t("onb.d"+(ob+1));$$("#onbDots i").forEach((d,i)=>d.classList.toggle("on",i===ob));$("#onbNext").textContent=t(ob===2?"onb.start":"onb.next")}
$("#onbNext").onclick=()=>{if(ob<2){ob++;renderOnb()}else go("auth")};
/* auth */
let am="in";function renderAuth(){$("#authT").textContent=t(am==="in"?"auth.tin":"auth.tup");$("#authGo").textContent=t(am==="in"?"auth.bin":"auth.bup");$("#fName").style.display=am==="up"?"block":"none";$$("#authSeg button").forEach(b=>b.classList.toggle("on",b.dataset.m===am))}
$("#authSeg").addEventListener("click",e=>{const b=e.target.closest("[data-m]");if(b){am=b.dataset.m;renderAuth()}});
$("#parentChk").addEventListener("click",e=>{e.preventDefault();$("#parentSw").classList.toggle("on")});
/* splash */
function renderSplash(){const r=$("#splashRing");if(!r._C){mkRing(r,96,10);setRing(r,.05,'<span style="width:12px;height:12px;border-radius:50%;background:#E9EEEC;display:block"></span>')}}
let splashT;function splashAnim(){const r=$("#splashRing");let p=.05;const iv=setInterval(()=>{p+=.04;setRing(r,p>1?1:p);if(p>1.1)clearInterval(iv)},60)}
/* lang buttons */
document.addEventListener("click",e=>{const b=e.target.closest("[data-lang]");if(b&&b.dataset.lang!==lang){lang=b.dataset.lang;buildToc();applyI18n();buildSound()}});
function buildSound(){let b=$("#sndBtn");if(!b){b=document.createElement("button");b.id="sndBtn";b.className="chip";b.style.cssText="margin:0 0 16px 10px;background:#2b312e;color:#cfd6d2;border:0";$(".side .lang").after(b);b.onclick=()=>{sound=!sound;buildSound()}}b.textContent=t("snd")+": "+t(sound?"snd.on":"snd.off")}
function renderAll(){buildTabs();renderDash();renderTemp();renderTimer();renderBattery();renderNotif();renderParent();renderChild();renderOnb();renderAuth();renderSplash()}
/* fit */
function fit(){const f=$("#frame");if(document.body.classList.contains("bare")){f.style.transform="";f.style.margin="0";return}const s=Math.min(1,(innerHeight-24)/844,(innerWidth-(document.body.classList.contains("embed")?0:innerWidth>760?348:0))/390);f.style.transform="scale("+s+")";f.style.margin=((844*s-844)/2)+"px "+((390*s-390)/2)+"px"}
addEventListener("resize",fit);
if(P.get("bare"))document.body.classList.add("bare");if(P.get("embed"))document.body.classList.add("embed");
if(P.get("state")==="heating"){S.heat="heating";S.pct=.62}else if(P.get("state")==="ready"){S.heat="ready";S.pct=1}
if(P.get("charging")){S.chg=true}
buildToc();applyI18n();buildSound();fit();
const first=P.get("screen");
if(first&&ids.includes(first)){cur0(first);if(S.heat==="heating"&&!P.get("freeze"))startHeat(S.pct)}
else{cur0("splash");splashAnim();setTimeout(()=>{if(cur==="splash")go("onb")},2600);$("#s-splash").addEventListener("click",()=>{play("wb_app_open");go("onb")})}
$("#demoTag").style.display=P.get("bare")?"none":"block";
})();
