/* Ocean Properties \u00b7 Beds24 booking page
   - Comodidades plegables: en todos los layouts.
   - Layout 2: cabecera, titular, tarjetas de unidades, columna derecha y pie.
   - P\u00e1gina de datos del hu\u00e9sped: dise\u00f1o propio solo si el hu\u00e9sped viene del Layout 2.
   Se carga desde BOOKING ENGINE > PROPERTY BOOKING PAGE > DEVELOPER > Insert in HTML <BODY> bottom. */
/* Ocean Properties \u00b7 la p\u00e1gina de datos del hu\u00e9sped no lleva el n\u00famero de layout:
   se recuerda en la pesta\u00f1a si el hu\u00e9sped viene del Layout 2. */
(function(){
 var m=document.body.className.match(/\blayout(\d+)\b/);
 var co=!!document.querySelector('#formbook .b24-guestdetails');
 try{
  if(m){ if(m[1]==='2') sessionStorage.setItem('opL2','1'); else sessionStorage.removeItem('opL2'); }
  else if(co && sessionStorage.getItem('opL2')==='1') document.body.classList.add('layout2','op-co');
 }catch(e){}
})();
/* Ocean Properties \u00b7 comodidades: 6 clave a la vista + "ver todas". */
(function(){
  function run(){
    var m=(document.body.className.match(/colorbody-(\w\w)/)||[])[1]||'es';
    var T={es:['Ver todas las comodidades','Ocultar comodidades'],en:['See all amenities','Hide amenities'],fr:['Voir tous les \u00e9quipements','Masquer les \u00e9quipements']}[m]||['+','\u2212'];
    var KEYS=[['frente a la playa','beachfront','beach front','bord de mer','front de mer','vue sur la plage'],['piscina','pool','piscine'],
      ['cocina','kitchen','cuisine'],['aire acondicionado','air conditioning','climatisation'],['wifi'],['aparcamiento','parking','stationnement']];
    document.querySelectorAll('.b24-features').forEach(function(box){
      if(box.dataset.op) return; box.dataset.op='1';
      var items=[].slice.call(box.querySelectorAll('.b24-featurewell p'));
      var ul=document.createElement('ul'); ul.className='op-key';
      KEYS.forEach(function(words){
        var hit=items.find(function(p){var t=p.textContent.trim().toLowerCase(); return words.some(function(w){return t.indexOf(w)>-1});});
        if(hit){var li=document.createElement('li'); li.textContent=hit.textContent.trim(); ul.appendChild(li);}
      });
      var btn=document.createElement('button'); btn.type='button'; btn.className='op-toggle'; btn.textContent=T[0];
      btn.setAttribute('aria-expanded','false');
      btn.onclick=function(){var open=box.classList.toggle('op-collapsed')===false; btn.textContent=open?T[1]:T[0]; btn.setAttribute('aria-expanded',open?'true':'false');};
      box.classList.add('op-collapsed');
      box.parentNode.insertBefore(btn,box); if(ul.children.length) box.parentNode.insertBefore(ul,btn);
    });
  }
  if(document.readyState!=='loading') run(); else document.addEventListener('DOMContentLoaded',run);
})();
/* Ocean Properties \u00b7 Layout 2 (solo se activa en el Layout 2 y en su p\u00e1gina de datos del hu\u00e9sped) */
(function(){
 if(!/\blayout2\b/.test(document.body.className)) return;
 var L=(document.body.className.match(/colorbody-(\w\w)/)||[])[1]; var D={"en": {"t_disc": "Discover", "t_expl": "Explore", "t_cont": "Contact", "t_soc": "Social", "l_about": "About us", "l_dev": "Developers", "l_media": "Media", "l_res": "Reservations", "l_sales": "Real Estate Enquiries", "l_priv": "Privacy Policy", "l_legal": "Legal", "addr": "Beach Studios Building, Playa Destiladeros, Pedas\u00ed, Azuero Peninsula, Panam\u00e1", "home": "https://pedasioceanproperties.com/", "eyebrow": "Pedas\u00ed \u00b7 Azuero Peninsula \u00b7 Panam\u00e1", "h1": "Beachfront, at Playa Destiladeros.", "lede": "A boutique aparthotel. We have been here since 2009.", "c1": "Getting here", "c2": "Guest reviews", "c3": "Reservations", "g": ["40 min by air from Panama City, with daily flights", "15 min from Pedas\u00ed Airport", "10 min to Pedas\u00ed town", "4 h by road"], "google": "Read on Google"}, "es": {"t_disc": "Descubrir", "t_expl": "Explorar", "t_cont": "Contacto", "t_soc": "Redes", "l_about": "Qui\u00e9nes somos", "l_dev": "Promotores", "l_media": "Prensa", "l_res": "Reservas", "l_sales": "Consultas de bienes ra\u00edces", "l_priv": "Pol\u00edtica de Privacidad", "l_legal": "Aviso legal", "addr": "Beach Studios Building, Playa Destiladeros, Pedas\u00ed, Pen\u00ednsula de Azuero, Panam\u00e1", "home": "https://pedasioceanproperties.com/es/", "eyebrow": "Pedas\u00ed \u00b7 Pen\u00ednsula de Azuero \u00b7 Panam\u00e1", "h1": "Frente al mar, en Playa Destiladeros.", "lede": "Un aparthotel boutique. Estamos aqu\u00ed desde 2009.", "c1": "C\u00f3mo llegar", "c2": "Opiniones", "c3": "Reservas", "g": ["40 min en avi\u00f3n desde Ciudad de Panam\u00e1, con vuelos todos los d\u00edas", "15 min desde el Aeropuerto de Pedas\u00ed", "10 min al pueblo de Pedas\u00ed", "4 h por carretera"], "google": "Leer en Google"}, "fr": {"t_disc": "D\u00e9couvrir", "t_expl": "Explorer", "t_cont": "Contact", "t_soc": "R\u00e9seaux", "l_about": "Qui sommes-nous", "l_dev": "Promoteurs", "l_media": "Presse", "l_res": "R\u00e9servations", "l_sales": "Demandes immobili\u00e8res", "l_priv": "Politique de Confidentialit\u00e9", "l_legal": "Mentions l\u00e9gales", "addr": "Beach Studios Building, Playa Destiladeros, Pedas\u00ed, P\u00e9ninsule d'Azuero, Panam\u00e1", "home": "https://pedasioceanproperties.com/fr/", "eyebrow": "Pedas\u00ed \u00b7 P\u00e9ninsule d'Azuero \u00b7 Panam\u00e1", "h1": "Face \u00e0 la mer, \u00e0 Playa Destiladeros.", "lede": "Un aparthotel boutique. Nous sommes ici depuis 2009.", "c1": "Comment venir", "c2": "Avis des voyageurs", "c3": "R\u00e9servations", "g": ["40 min en avion depuis Panama City, vols quotidiens", "15 min de l'a\u00e9roport de Pedas\u00ed", "10 min du village de Pedas\u00ed", "4 h par la route"], "google": "Lire sur Google"}}; var T=D[L]||D.en;
 var LOGO='https://assets.pedasioceanproperties.com/brand/logos/logotype-white.svg', WA='https://wa.me/50764799595';
 var fx=document.createElement('style'); fx.textContent='body.layout2{overflow-x:hidden}body.layout2 #b24scroller,body.layout2 .b24-bookingstrip{max-width:100%;box-sizing:border-box}'
 +'body.layout2 .op-topbar{display:flex!important;justify-content:space-between;align-items:center;gap:20px;padding:18px 30px!important}'
 +'body.layout2 .op-nav{display:flex;align-items:center;gap:26px}body.layout2 .op-wa-ico{display:none;width:20px;height:20px}body.layout2 .op-topbar a.op-wa .op-wa-num,body.layout2 .op-topbar a.op-wa .op-wa-txt{color:inherit}body.layout2 .op-topbar a.op-wa .op-wa-num span{color:#c9a96e}'
 +'body.layout2 .op-logo{flex:none}'
 +'@media(max-width:767px){body.layout2 .op-topbar{padding:12px 16px!important;gap:12px}body.layout2 .op-logo img{width:118px!important;height:auto!important}body.layout2 .op-nav{gap:12px}body.layout2 .op-wa-num,body.layout2 .op-wa-txt{display:none}body.layout2 .op-wa-ico{display:block}body.layout2 .op-topbar a.op-wa{line-height:0}'
 +'body.layout2 .op-topbar .b24languagedropdown .btn,body.layout2 .op-topbar .b24currencydropdown .btn,body.layout2 .op-topbar a.op-wa{font-size:10px!important;letter-spacing:1.5px!important}}'; document.head.appendChild(fx);
 var css=document.createElement('link'); css.rel='stylesheet'; css.href='https://pedasioceanproperties.com/assets/css/footer.css?v=bcd553b6'; document.head.appendChild(css);
 var bar=document.createElement('header'); bar.className='op-topbar';
 bar.innerHTML='<a class="op-logo" href="'+T.home+'"><img src="'+LOGO+'" width="170" height="36" alt="Ocean Properties"></a><div class="op-nav"><div class="op-left"></div><a class="op-wa" href="'+WA+'" target="_blank" rel="noopener" aria-label="WhatsApp +507 6479-9595"><svg class="op-wa-ico" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.3 21.7l1.45-5.05A9.5 9.5 0 1 1 7.35 20.3L2.3 21.7z"></path><path transform="translate(12.06 12.05) scale(1.3) translate(-13.14 -12.8)" stroke-width="1.08" d="M10.1 9.8c.16-.37.31-.37.53-.37h.37c.16 0 .31.03.43.37l.53 1.27c.06.19 0 .34-.09.5l-.28.37c-.12.16-.19.31-.06.53a5.15 5.15 0 0 0 2.17 1.95c.22.09.37.06.5-.09l.43-.5c.12-.16.28-.16.43-.09l1.18.59c.19.09.31.19.31.37 0 .37-.16.87-.53 1.12-.37.28-.87.43-1.46.31a7.32 7.32 0 0 1-4.65-4.06c-.31-.71-.22-1.46.19-2.02z"></path></svg><span class="op-wa-txt">WhatsApp</span><span class="op-wa-num"> <span>\u00b7</span> +507 6479-9595</span></a></div>';
 document.body.insertBefore(bar,document.body.firstChild);
 ['.b24languagedropdown','.b24currencydropdown'].forEach(function(s){var e=document.querySelector(s); if(e) bar.querySelector('.op-left').appendChild(e);});
 var intro=document.createElement('section'); intro.className='op-intro';
 intro.innerHTML='<p class="op-eyebrow">'+T.eyebrow+'</p><h1>'+T.h1+'</h1><p class="op-lede">'+T.lede+'</p>';
 var a=document.getElementById('b24scroller-anchor'); if(a) a.parentNode.insertBefore(intro,a);
 var foot=document.querySelector('.b24fullcontainer-footer');
 if(foot){
 var close=document.createElement('section'); close.className='op-closing';
 close.innerHTML='<div class="op-in"><div><h3>'+T.c1+'</h3><ul>'+T.g.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></div>'
  +'<div><h3>'+T.c2+'</h3><div id="TA_cdsratingsonlynarrow285" class="TA_cdsratingsonlynarrow"><ul id="B1SyKRCJ3F" class="TA_links 9gpoxA"><li id="ME9fBXH" class="qie0Xz6wjaDo"><a target="_blank" href="https://www.tripadvisor.com/Hotel_Review-g608651-d15688863-Reviews-Ocean_Properties_Aparthotel_Villas-Pedasi_Los_Santos_Province.html"><img src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg" alt="TripAdvisor"/></a></li></ul></div>'
  +'<p class="op-google"><a href="https://share.google/ztuy9zzo3IK0yf6I1" target="_blank" rel="noopener">'+T.google+'</a></p></div>'
  +'<div><h3>'+T.c3+'</h3><ul><li><a href="'+WA+'" target="_blank" rel="noopener">WhatsApp +507 6479-9595</a></li><li><a href="mailto:reservations@pedasioceanproperties.com">reservations@pedasioceanproperties.com</a></li></ul></div></div>';
 foot.parentNode.insertBefore(close,foot);
 var ta=document.createElement('script'); ta.async=true; ta.setAttribute('data-loadtrk',''); ta.onload=function(){this.loadtrk=true};
 ta.src='https://www.jscache.com/wejs?wtype=cdsratingsonlynarrow&uniq=285&locationId=15688863&lang=en_US&border=false&shadow=false&display_version=2';
 document.body.appendChild(ta);
 }
 var F="<footer class=\"op-footer\"><div class=\"footer-watermark\"><img src=\"https://assets.pedasioceanproperties.com/brand/logos/op-mark-navy-deep.svg\" width=\"340\" height=\"340\" loading=\"lazy\" decoding=\"async\" aria-hidden=\"true\" alt=\"\"></div><div class=\"footer-wrapper\"><div class=\"footer-top\"><div class=\"footer-top-wrapper\"><div class=\"op-footer-logo\"><img src=\"https://assets.pedasioceanproperties.com/brand/logos/op-logo-horizontal-cream.svg\" width=\"150\" height=\"39\" loading=\"lazy\" decoding=\"async\" alt=\"Ocean Properties\"></div><div class=\"footer-top-group\"><div class=\"location\">Ocean Properties Group</div><div class=\"footer-top-group-links\"><div class=\"property-address\">{{addr}}</div></div></div></div></div><div class=\"footer-middle\"><div class=\"quick-link-wrapper\"><div class=\"quick-links\"><div class=\"quick-links-title\">{{t_disc}}</div><ul><li><a href=\"https://pedasioceanproperties.com/about/\">{{l_about}}</a></li><li><a href=\"https://pedasioceanproperties.com/developers/\">{{l_dev}}</a></li><li><a href=\"https://pedasioceanproperties.com/media/\">{{l_media}}</a></li></ul></div><div class=\"quick-links\"><div class=\"quick-links-title\">{{t_expl}}</div><ul><li><a href=\"https://book.pedasioceanproperties.com/\">OP Aparthotel &amp; Villas</a></li><li><a href=\"https://pedasioceanproperties.com/invest/\">OP Capital</a></li></ul></div><div class=\"quick-links quick-links--contact\"><div class=\"quick-links-title\">{{t_cont}}</div><ul><li><a href=\"mailto:reservations@pedasioceanproperties.com\" title=\"reservations@pedasioceanproperties.com\" aria-label=\"Reservations \u2014 reservations@pedasioceanproperties.com\">{{l_res}}</a></li><li><a href=\"mailto:sales@pedasioceanproperties.com\" title=\"sales@pedasioceanproperties.com\" aria-label=\"Real Estate Enquiries \u2014 sales@pedasioceanproperties.com\">{{l_sales}}</a></li></ul></div><div class=\"quick-links quick-links--social\"><div class=\"quick-links-title\">{{t_soc}}</div><div class=\"social-row\"><a href=\"https://facebook.com/pedasioceanproperties\" target=\"_blank\" rel=\"noopener\" aria-label=\"Facebook\"><svg class=\"social-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"4.5\"></rect><path d=\"M14.7 7.8h-1.4c-1 0-1.6.6-1.6 1.6v8.8\"></path><path d=\"M9.6 12.2h4.7\"></path></svg></a><a href=\"https://instagram.com/pedasioceanproperties\" target=\"_blank\" rel=\"noopener\" aria-label=\"Instagram\"><svg class=\"social-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"4.5\"></rect><circle cx=\"12\" cy=\"12\" r=\"3.9\"></circle><path d=\"M16.7 7.3h.01\"></path></svg></a><a href=\"https://tiktok.com/@oceanpropertiespedasi\" target=\"_blank\" rel=\"noopener\" aria-label=\"TikTok\"><svg class=\"social-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"4.5\"></rect><path d=\"M13.4 7.3c.3 1.5 1.2 2.3 2.7 2.4\"></path><path d=\"M13.4 7.3v6.6a2.6 2.6 0 1 1-2.2-2.6\"></path></svg></a><a href=\"https://www.youtube.com/@pedasioceanproperties\" target=\"_blank\" rel=\"noopener\" aria-label=\"YouTube\"><svg class=\"social-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"4.5\"></rect><path d=\"M10 8.7L15.4 12l-5.4 3.3z\"></path></svg></a><a href=\"https://www.linkedin.com/in/azucenalopez/\" target=\"_blank\" rel=\"noopener\" aria-label=\"LinkedIn\"><svg class=\"social-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"4.5\"></rect><path d=\"M7.6 10.6v6\"></path><path d=\"M7.6 7.7h.01\"></path><path d=\"M11.4 16.6v-6\"></path><path d=\"M11.4 13.3a2.4 2.4 0 0 1 4.9 0v3.3\"></path></svg></a><a href=\"https://wa.me/50764799595\" target=\"_blank\" rel=\"noopener\" aria-label=\"WhatsApp +507 6479-9595\"><svg class=\"social-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M2.3 21.7l1.45-5.05A9.5 9.5 0 1 1 7.35 20.3L2.3 21.7z\"></path><path transform=\"translate(12.06 12.05) scale(1.3) translate(-13.14 -12.8)\" stroke-width=\"1.08\" d=\"M10.1 9.8c.16-.37.31-.37.53-.37h.37c.16 0 .31.03.43.37l.53 1.27c.06.19 0 .34-.09.5l-.28.37c-.12.16-.19.31-.06.53a5.15 5.15 0 0 0 2.17 1.95c.22.09.37.06.5-.09l.43-.5c.12-.16.28-.16.43-.09l1.18.59c.19.09.31.19.31.37 0 .37-.16.87-.53 1.12-.37.28-.87.43-1.46.31a7.32 7.32 0 0 1-4.65-4.06c-.31-.71-.22-1.46.19-2.02z\"></path></svg></a></div></div></div><div class=\"footer-bottom\"><div class=\"utility-nav\"><div class=\"utility-nav-title\">\u00a9 2026 Ocean Properties Group</div><ul class=\"utility-nav-wrapper\"><li><a href=\"https://pedasioceanproperties.com/privacy/\">{{l_priv}}</a></li><li><a href=\"https://pedasioceanproperties.com/legal/\">{{l_legal}}</a></li></ul></div></div></div></div></footer>"; var w=document.createElement('div'); w.innerHTML=F.replace(/\{\{(\w+)\}\}/g,function(m,k){return T[k]||m});
 if(foot) foot.parentNode.insertBefore(w.firstChild,foot);
 else { var it=document.querySelector('.innertube'); if(it) it.parentNode.insertBefore(w.firstChild,it.nextSibling); }
})();
/* Ocean Properties \u00b7 Layout 2, p\u00e1gina de unidades con la ubicaci\u00f3n de bloques de The Peninsula:
   foto baja, buscador en una l\u00ednea en el m\u00f3vil, tarjetas con la foto a la izquierda y columna derecha. */
(function(){
 var B=document.body; if(!/\blayout2\b/.test(B.className)||B.classList.contains('op-co')) return;
 var L=(B.className.match(/colorbody-(\w\w)/)||[])[1];
 var D={
  es:{adv:'Ventajas de reservar directo',advItems:[],ad:['adulto','adultos'],ch:['ni\u00f1o','ni\u00f1os']},
  en:{adv:'Benefits of booking direct',advItems:[],ad:['adult','adults'],ch:['child','children']},
  fr:{adv:'Avantages de la r\u00e9servation directe',advItems:[],ad:['adulte','adultes'],ch:['enfant','enfants']}
 };
 var T=D[L]||D.en, ORDER='b';
 var CHEV='<svg class="op-chev" viewBox="0 0 12 8" width="12" height="8" aria-hidden="true"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
 function el(t,c,h){var e=document.createElement(t); if(c) e.className=c; if(h!=null) e.innerHTML=h; return e;}
 function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
 var P='body.layout2 ';
 var st=el('style'); st.textContent=[
  /* foto de arriba: 300 px; en el m\u00f3vil no se muestra */
  P+'.b24fullcontainer-proprow1 .carousel,'+P+'.b24fullcontainer-proprow1 .carousel-inner>.item{height:300px!important;max-height:300px}',
  P+'.b24fullcontainer-proprow1 .b24-module{padding-bottom:0!important}',
  P+'.b24fullcontainer-proprow1 .carousel-inner>.item>img{width:100%!important;height:300px!important;object-fit:cover;max-width:none}',
  /* buscador: resumen de una l\u00ednea (solo m\u00f3vil) */
  P+'button.op-strip-sum{display:none!important}',
  /* rejilla: unidades + columna derecha */
  P+'.op-rgrid{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:32px;align-items:start;margin-top:28px}',
  P+'.op-rmain .b24panel-room,'+P+'.op-rmain .b24panel-room.border{border:0!important;padding:0!important;margin:0 0 16px!important;background:#fff!important}',
  P+'.op-rmain .b24panel-room>.panel-body{padding:0!important}',
  P+'.op-rcard{display:grid;grid-template-columns:40% minmax(0,1fr)}',
  P+'.op-rc-l .b24-room-slider{width:100%!important;float:none!important;padding:0!important}',
  P+'.op-rc-l .carousel{height:auto!important;max-height:none}',
  P+'.op-rc-l .carousel-inner>.item{aspect-ratio:3/2;height:auto!important}',
  P+'.op-rc-l .carousel-inner>.item>img{width:100%!important;height:100%!important;object-fit:cover;max-width:none}',
  P+'.op-rc-r{padding:24px 28px 26px;min-width:0}',
  P+'.op-rc-r .at_roomnametext{display:block!important;font-size:28px!important;line-height:1.15;margin:0 0 12px}',
  P+'.op-rc-r .b24-room-module{width:auto!important;float:none!important;padding:0!important}',
  P+'.op-rc-r .b24-room-desc{font-size:15px!important;line-height:1.7!important;margin:0 0 14px}',
  P+'.op-rc-r .op-key{margin:0 0 8px}',
  P+'.op-rc-r .offer{border-top:1px solid #ddd4c6;margin-top:18px;padding-top:16px}',
  P+'.op-rc-r .at_offername{font-family:"Jost",sans-serif;font-size:18px;color:#876c3a;display:inline-block;border-bottom:1px solid #876c3a;margin:0 0 8px;line-height:1.4}',
  P+'.op-rate{display:flex!important;justify-content:space-between;align-items:flex-start;gap:18px;margin:0!important}',
  P+'.op-rate:before,'+P+'.op-rate:after{display:none!important}',
  P+'.op-rate>div{width:auto!important;float:none!important;padding:0!important}',
  P+'.op-rate .b24-offer-summary{flex:1;min-width:0}',
  P+'.op-rate .at_offersummary{font-size:14px;line-height:1.6;color:#16202e}',
  P+'.op-rate .at_offersummary ul{margin:0;padding-left:18px}',
  P+'.op-rate .b24-offer-select{flex:none;text-align:right}',
  P+'.op-rate .at_roomofferprice{text-align:right}',
  P+'.op-rate .b24-roombuttondiv .at_bookingbut{float:none!important;margin-top:10px;height:48px;padding:0 30px!important}',
  P+'.op-rc-r .b24-offer-pricetable,'+P+'.op-rc-r .b24-offer-detail,'+P+'.op-rc-r hr[id^=offerlinebreak]{display:none!important}',
  P+'.op-rc-r .b24-offer-cal{margin-top:8px;font-size:12.8px}',
  P+'.op-hide{display:none!important}',
  P+'.op-rside .op-sbox{background:#fff;padding:24px 26px;margin:0 0 16px}',
  P+'.op-rside h3{font-family:"Jost",sans-serif!important;font-weight:400!important;font-size:12px!important;letter-spacing:3px;text-transform:uppercase;color:#876c3a!important;margin:0 0 12px}',
  P+'.op-rside ul{list-style:none;margin:0;padding:0}',
  P+'.op-rside li,'+P+'.op-rside p{font-family:"Jost",sans-serif;font-size:14px;line-height:1.75;color:#16202e;margin:0}',
  P+'.op-rside .op-adv li{padding-left:18px;position:relative;margin:0 0 6px}',
  P+'.op-rside .op-adv li:before{content:"";position:absolute;left:0;top:.85em;width:10px;height:1px;background:#876c3a}',
  '@media(max-width:991px){'+P+'.op-rgrid{grid-template-columns:minmax(0,1fr) 280px;gap:22px}'+P+'.op-rcard{grid-template-columns:1fr}}',
  '@media(max-width:767px){',
  P+'.b24fullcontainer-proprow1{display:none!important}',
  P+'button.op-strip-sum{display:flex!important;width:100%;justify-content:space-between;align-items:center;gap:12px;background:#0c1d35!important;border:0!important;padding:16px 18px!important;color:#faf7f2!important;font-family:"Jost",sans-serif!important;font-size:14px!important;letter-spacing:0!important;text-transform:none!important;text-align:left}',
  P+'.op-strip-sum .op-chev{color:#c9a96e;flex:none;transition:transform .2s}',
  P+'#b24scroller:not(.op-open){display:none!important}',
  P+'.op-strip-sum[aria-expanded=true] .op-chev{transform:rotate(180deg)}',
  P+'.op-rgrid{display:block;margin-top:18px}',
  P+'.op-rc-r{padding:18px 18px 20px}',
  P+'.op-rc-r .at_roomnametext{font-size:26px!important}',
  P+'.op-rate{flex-direction:column;align-items:stretch}',
  P+'.op-rate .b24-offer-select,'+P+'.op-rate .at_roomofferprice{text-align:left}',
  P+'.op-rate .b24-offer-select{width:100%!important}',
  P+'.op-rate .b24-roombuttondiv .at_bookingbut{width:100%!important;float:none!important}',
  '}'
 ].join('\n'); document.head.appendChild(st);

 /* orden de arriba: a) foto, buscador, titular; b) foto, titular, buscador */
 var intro=document.querySelector('.op-intro'), selc=document.getElementById('b24scroller-fullcontainer');
 if(ORDER==='a'&&intro&&selc) selc.parentNode.insertBefore(intro,selc.nextSibling);

 /* buscador en el m\u00f3vil: una l\u00ednea con fechas y hu\u00e9spedes que abre los campos */
 var strip=document.getElementById('b24scroller');
 if(strip){
  var sb=el('button','op-strip-sum'); sb.type='button'; sb.setAttribute('aria-expanded','false');
  var val=function(id){var e=document.getElementById(id); return e?e.value:'';};
  var lab=function(id){var l=document.querySelector('label[for='+id+']'); return l?l.textContent.trim():'';};
  var upd=function(){
   var ci=val('inputcheckin'), co=val('inputcheckout'), na=+val('inputnumadult')||0, nc=+val('inputnumchild')||0;
   var d=function(s){return s.replace(/^\S+\s+/,'');};
   var t=(ci?d(ci):lab('inputcheckin'))+' \u2013 '+(co?d(co):lab('inputcheckout'));
   if(na) t+=' \u00b7 '+na+' '+T.ad[na===1?0:1]+(nc?', '+nc+' '+T.ch[nc===1?0:1]:'');
   sb.innerHTML='<span>'+esc(t)+'</span>'+CHEV;
  };
  upd(); strip.parentNode.insertBefore(sb,strip);
  sb.onclick=function(){var o=strip.classList.toggle('op-open'); sb.setAttribute('aria-expanded',o);};
  strip.addEventListener('change',function(){setTimeout(upd,0);});
  if(window.jQuery) jQuery('#checkin,#checkout').on('dp.change',function(){setTimeout(upd,0);});
 }

 /* unidades a la izquierda, columna derecha */
 var rc=document.querySelector('.b24fullcontainer-rooms > .container'); if(!rc) return;
 var grid=el('div','op-rgrid'), main=el('div','op-rmain'), side=el('aside','op-rside');
 [].slice.call(rc.children).forEach(function(c){main.appendChild(c);});
 grid.appendChild(main); grid.appendChild(side); rc.appendChild(grid);

 /* tarjeta de cada unidad: foto a la izquierda; nombre, descripci\u00f3n, comodidades y tarifa a la derecha */
 [].slice.call(main.querySelectorAll('.b24room')).forEach(function(room){
  var body=room.querySelector('.panel-body'), head=room.querySelector('.panel-heading'); if(!body) return;
  var card=el('div','op-rcard'), left=el('div','op-rc-l'), right=el('div','op-rc-r');
  var slider=body.querySelector('.b24-room-slider'); if(slider) left.appendChild(slider);
  if(head) [].slice.call(head.children).forEach(function(c){right.appendChild(c);});
  var desc=body.querySelector('.b24-room-desc'); if(desc) right.appendChild(desc);
  var feat=body.querySelector('.b24-features'); if(feat) right.appendChild(feat.parentNode);
  [].slice.call(body.querySelectorAll('.offer,[id^=ajaxroomnooffer]')).forEach(function(o){
   right.appendChild(o);
   var on=o.querySelector('.at_offername'); if(on&&!on.textContent.trim()) on.classList.add('op-hide');
   var sm=o.querySelector('.b24-offer-summary'); if(sm&&sm.parentNode) sm.parentNode.classList.add('op-rate');
  });
  card.appendChild(left); card.appendChild(right); body.insertBefore(card,body.firstChild);
  if(head) head.classList.add('op-hide');
 });

 /* columna derecha: ventajas, reservas, opiniones y c\u00f3mo llegar (los bloques de cierre del Layout 2) */
 if(T.advItems.length) side.appendChild(el('div','op-sbox op-adv','<h3>'+esc(T.adv)+'</h3><ul>'+T.advItems.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>'));
 var close=document.querySelector('.op-closing');
 if(close){
  var cols=close.querySelectorAll('.op-in > div');
  [2,1,0].forEach(function(i){ if(cols[i]){var bx=el('div','op-sbox'); bx.appendChild(cols[i]); side.appendChild(bx);} });
  close.classList.add('op-hide');
 }
})();
/* Ocean Properties \u00b7 p\u00e1gina de datos del hu\u00e9sped (checkout), con la ubicaci\u00f3n de bloques de The Peninsula.
   Solo se activa con body.op-co (ver arriba). Los campos, precios y botones son los de Beds24: solo se mueven. */
(function(){
 var B=document.body; if(!B.classList.contains('op-co')) return;
 var form=document.getElementById('formbook'); if(!form) return;
 var det=form.querySelector('.b24-bookingdetails'), gd=form.querySelector('.b24-guestdetails'); if(!det||!gd) return;
 var L=(B.className.match(/colorbody-(\w\w)/)||[])[1];
 var D={
  es:{title:'Confirmar reserva',contact:'Datos de contacto',req:'* Obligatorio',help:'Enviaremos la confirmaci\u00f3n a este correo.',
   stay:'Tu estancia',pay:'Pago',payText:'',pol:'Pol\u00edticas',ack:'Aceptaci\u00f3n',price:'Detalle del precio',
   arr:'Llegada',dep:'Salida',guests:'Hu\u00e9spedes',nt:['noche','noches'],ad:['adulto','adultos'],ch:['ni\u00f1o','ni\u00f1os'],unit:'Unidad',
   times:'Check-in: 16:00 \u2013 24:00 \u00b7 Check-out: hasta las 11:00',polHead:'TARIFA NO REEMBOLSABLE',
   pols:[['Pago por adelantado:','Para garantizar su reserva, se requiere el pago total del coste de su estancia en el momento de realizar la reserva.'],
    ['Cancelaci\u00f3n y cambios:','Esta reserva no se puede cancelar, modificar ni reembolsar bajo ninguna circunstancia. En caso de no presentarse (no-show) o de realizar cambios en su reserva, se aplicar\u00e1 un cargo equivalente al 100% del coste total de su estancia a su tarjeta de cr\u00e9dito.'],
    ['Flexibilidad de fechas:','Tenga en cuenta que esta tarifa no permite cambios en las fechas de su estancia. El pago realizado por esta reserva no es reembolsable bajo ninguna circunstancia.'],
    ['Verificaci\u00f3n de la tarjeta de cr\u00e9dito:','Al momento del check-in, se solicitar\u00e1 la presentaci\u00f3n de la tarjeta de cr\u00e9dito utilizada para el pago con fines de verificaci\u00f3n.']]},
  en:{title:'Confirm booking',contact:'Contact details',req:'* Required',help:'We will send the confirmation to this email.',
   stay:'Your stay',pay:'Payment',payText:'',pol:'Policies',ack:'Acknowledgement',price:'Price details',
   arr:'Arrival',dep:'Departure',guests:'Guests',nt:['night','nights'],ad:['adult','adults'],ch:['child','children'],unit:'Unit',
   times:'Check-in: 16:00 \u2013 24:00 \u00b7 Check-out: by 11:00',polHead:'NON REFUNDABLE.',
   pols:[['Prepayment:','To secure your reservation, full payment of the total cost of your stay is required at the time of booking.'],
    ['Cancellation and Changes:','This reservation cannot be canceled, modified, or refunded under any circumstances. In the event of a no-show or changes to your reservation, a charge equivalent to 100% of the total cost of your stay will be applied to your credit card.'],
    ['Date Flexibility:','Please note that this rate does not allow changes to the date of your stay. The payment made for this reservation is non-refundable under any circumstances.'],
    ['Credit Card Verification:','Upon check-in, the presentation of the credit card used for payment will be requested for verification purposes.']]},
  fr:{title:'Confirmer la r\u00e9servation',contact:'Coordonn\u00e9es',req:'* Obligatoire',help:'Nous enverrons la confirmation \u00e0 cette adresse e-mail.',
   stay:'Votre s\u00e9jour',pay:'Paiement',payText:'',pol:'Conditions',ack:'Acceptation',price:'D\u00e9tail du prix',
   arr:'Arriv\u00e9e',dep:'D\u00e9part',guests:'Voyageurs',nt:['nuit','nuits'],ad:['adulte','adultes'],ch:['enfant','enfants'],unit:'Logement',
   times:'Check-in : 16:00 \u2013 24:00 \u00b7 Check-out : jusqu\u2019\u00e0 11:00',polHead:'TARIF NON REMBOURSABLE',
   pols:[['Pr\u00e9paiement :','Pour garantir votre r\u00e9servation, le paiement int\u00e9gral du montant total de votre s\u00e9jour est requis au moment de la r\u00e9servation.'],
    ['Annulation et modifications :','Cette r\u00e9servation ne peut \u00eatre annul\u00e9e, modifi\u00e9e ou rembours\u00e9e en aucun cas. En cas de non-pr\u00e9sentation (no-show) ou de modification de votre r\u00e9servation, des frais \u00e9quivalents \u00e0 100 % du montant total de votre s\u00e9jour seront pr\u00e9lev\u00e9s sur votre carte de cr\u00e9dit.'],
    ['Flexibilit\u00e9 des dates :','Veuillez noter que ce tarif ne permet aucun changement de dates pour votre s\u00e9jour. Le paiement effectu\u00e9 pour cette r\u00e9servation est non remboursable en aucun cas.'],
    ['V\u00e9rification de la carte de cr\u00e9dit :','Lors de l\u2019enregistrement (check-in), la pr\u00e9sentation de la carte de cr\u00e9dit utilis\u00e9e pour le paiement sera demand\u00e9e \u00e0 des fins de v\u00e9rification.']]}
 };
 var T=D[L]||D.en;
 var CHEV='<svg class="op-chev" viewBox="0 0 12 8" width="12" height="8" aria-hidden="true"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
 var ARROW='<svg viewBox="0 0 32 16" width="32" height="16" aria-hidden="true"><path d="M31 8H2M9 1L2 8l7 7" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
 var LOCK='<svg viewBox="0 0 14 16" width="12" height="14" aria-hidden="true"><rect x="1.5" y="7" width="11" height="8" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M4 7V4.5a3 3 0 0 1 6 0V7" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
 function lockUrl(c){return 'url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16"><rect x="1.5" y="7" width="11" height="8" fill="none" stroke="'+c+'" stroke-width="1.2"/><path d="M4 7V4.5a3 3 0 0 1 6 0V7" fill="none" stroke="'+c+'" stroke-width="1.2"/></svg>')+'")';}
 var SEL='url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8"><path d="M1 1.5l5 5 5-5" fill="none" stroke="#876c3a" stroke-width="1.2"/></svg>')+'")';
 function el(t,c,h){var e=document.createElement(t); if(c) e.className=c; if(h!=null) e.innerHTML=h; return e;}
 function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
 function fields(n){return !!n.querySelector('input:not([type=hidden]),select,textarea');}

 var fo=document.createElement('link'); fo.rel='stylesheet'; fo.href='https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap'; document.head.appendChild(fo);
 var P='body.op-co ';
 var st=el('style'); st.textContent=[
  P+'#bookingpage{padding-bottom:10px}',
  P+'.op-co-head{display:flex;align-items:center;gap:18px;margin:46px 0 28px}',
  P+'.op-co-head h1{font-family:"Cormorant Garamond",Georgia,serif!important;font-weight:300!important;font-size:44px!important;line-height:1.1;color:#0c1d35!important;margin:0}',
  P+'.op-co-back{display:inline-flex;align-items:center;color:#876c3a!important;text-decoration:none!important;line-height:0}',
  P+'.op-co-grid{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:32px;align-items:start}',
  P+'.op-card{background:#fff;padding:30px 32px 32px;margin:0 0 16px}',
  P+'.op-card-h{display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin:0 0 22px}',
  P+'.op-card-h h2{display:flex;align-items:center;gap:10px;font-family:"Jost",sans-serif!important;font-weight:400!important;font-size:12px!important;letter-spacing:3px;text-transform:uppercase;color:#876c3a!important;margin:0}',
  P+'.op-req{font-size:12px;color:#46535f}',
  P+'.op-fields{display:grid;grid-template-columns:1fr 1fr;gap:16px}',
  P+'.op-fields .questionrow{margin:0!important}',
  P+'.op-f>.col-sm-4{display:none}',
  P+'.op-f>.col-sm-8,'+P+'.op-acc-row>.col-sm-8{width:auto;float:none;padding:0}',
  P+'.op-f .booktextdiv{position:relative}',
  P+'.op-f .form-control{height:56px!important;min-height:56px;padding:22px 16px 6px!important;font-size:16px!important;line-height:1.4!important;border:1px solid #ddd4c6!important;background-color:#fff!important;border-radius:0!important;box-shadow:none!important;color:#16202e!important}',
  P+'.op-f .form-control:focus,'+P+'.op-acc-row textarea:focus{border-color:#876c3a!important;outline:0}',
  P+'.op-f select.form-control{-webkit-appearance:none;appearance:none;background:#fff '+SEL+' no-repeat right 16px center/12px 8px!important;padding-right:40px!important}',
  P+'.op-fl{position:absolute;left:17px;top:17px;margin:0;font-family:"Jost",sans-serif;font-weight:400;font-size:15px;line-height:1.3;color:#46535f;pointer-events:none;transition:top .15s,font-size .15s}',
  P+'.op-fl em{font-style:normal;color:#876c3a;margin-left:3px}',
  P+'.op-f .form-control:focus+.op-fl,'+P+'.op-f .form-control:not(:placeholder-shown)+.op-fl,'+P+'.op-f-sel .op-fl{top:7px;font-size:11px;letter-spacing:.4px}',
  P+'.op-help{display:block;font-size:12px;color:#46535f;margin-top:6px}',
  P+'.op-acc-row{grid-column:1/-1;border-top:1px solid #ddd4c6}',
  P+'.op-acc-row>.col-sm-4{display:none}',
  P+'.op-acc-row:not(.op-open)>.col-sm-8{display:none}',
  P+'button.op-acc{display:flex!important;width:100%;justify-content:space-between;align-items:center;background:none!important;border:0!important;padding:18px 0!important;color:#16202e!important;font-family:"Jost",sans-serif!important;font-size:15px!important;letter-spacing:0!important;text-transform:none!important}',
  P+'.op-acc .op-chev{color:#876c3a;transition:transform .2s}',
  P+'.op-open>.op-acc .op-chev,'+P+'.op-co-side.op-open .op-sum .op-chev{transform:rotate(180deg)}',
  P+'.op-acc-row textarea{height:110px!important;padding:14px 16px!important;border:1px solid #ddd4c6!important;border-radius:0!important;box-shadow:none!important;margin-bottom:6px}',
  P+'.op-pay-t{margin:0;font-size:15px;line-height:1.7;color:#16202e}',
  P+'.op-pol-box{background:#faf7f2;padding:22px 24px;font-size:14px;line-height:1.7;color:#16202e}',
  P+'.op-pol-box p{margin:0 0 10px}',
  P+'.op-pol-box p:last-child{margin:0}',
  P+'.op-pol-box h3{font-family:"Jost",sans-serif!important;font-weight:500!important;font-size:12px!important;letter-spacing:2px;text-transform:uppercase;color:#0c1d35!important;margin:18px 0 10px}',
  P+'.op-pol-box strong{font-weight:500;color:#0c1d35}',
  P+'.op-c-ack .questionrow{display:flex;gap:12px;align-items:flex-start;margin:0 0 12px!important}',
  P+'.op-c-ack .questionrow>div{width:auto;float:none;padding:0}',
  P+'.op-c-ack .questionrow>.col-sm-4{order:2;font-size:14px;line-height:1.6;color:#16202e}',
  P+'.op-c-ack .booktextdiv{line-height:0}',
  P+'.op-c-ack input[type=checkbox]{width:18px;height:18px;margin:2px 0 0;accent-color:#0c1d35}',
  P+'.op-c-ack a{color:#876c3a!important;text-decoration:underline!important}',
  P+'.op-c-ack .requiredfield{display:none}',
  P+'.op-actions{display:flex;flex-direction:column;align-items:flex-end;gap:10px;margin:10px 0 64px}',
  P+'.book_confirmbooking{float:none!important;margin:0!important;text-align:right}',
  P+'input.book_confirmbookingbut{height:52px;padding:0 58px 0 36px!important;background:#0c1d35 '+lockUrl('#faf7f2')+' no-repeat right 30px center/12px 14px!important;color:#faf7f2!important;border:1px solid #0c1d35!important;border-radius:0!important;box-shadow:none!important;font-family:"Jost",sans-serif!important;font-weight:400!important;font-size:12px!important;letter-spacing:3px;text-transform:uppercase;transition:background-color .3s,color .3s}',
  P+'input.book_confirmbookingbut:hover{background-color:transparent!important;background-image:'+lockUrl('#0c1d35')+'!important;color:#0c1d35!important}',
  P+'.book_securelogo{text-align:right}',
  P+'.book_securelogo img{height:44px;width:auto}',
  P+'.op-co-side{position:sticky;top:24px}',
  P+'.op-price{background:#fff;border:1px solid #876c3a;padding:26px 26px 22px}',
  P+'.op-price-h{font-family:"Jost",sans-serif;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#876c3a;margin:0 0 16px}',
  P+'.op-price .panel-body{padding:0!important}',
  P+'.op-price .at_roomnametext{display:block!important;font-size:26px!important;line-height:1.2;margin:0 0 14px}',
  P+'.op-price .row:before,'+P+'.op-price .row:after{display:none}',
  P+'.op-price .row{display:flex;justify-content:space-between;gap:14px;margin:0 0 6px;font-size:14px;line-height:1.5}',
  P+'.op-price .row>div{width:auto;float:none;padding:0;font-weight:400!important}',
  P+'.op-price .op-kv>div:first-child{color:#46535f;white-space:nowrap}',
  P+'.op-price .op-kv>div:last-child{text-align:right}',
  P+'.op-price .op-nights{border-top:1px solid #ddd4c6;padding-top:12px;margin-top:12px}',
  P+'.op-price .op-nights .pull-right{float:none!important}',
  P+'.op-price .b24-checkout-divder{border-color:#ddd4c6!important;margin:14px 0 12px}',
  P+'.op-price .totalpricerow{align-items:baseline;margin:0}',
  P+'.op-price .totalpricerow>div:first-child{font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#0c1d35}',
  P+'.op-price .totalpricerow>div:last-child{font-family:"Jost",sans-serif;font-weight:300!important;font-size:28px;line-height:1.2;color:#0c1d35}',
  P+'.op-hide,'+P+'.at_roomqtyselector:empty,'+P+'.at_offername:empty{display:none!important}',
  P+'button.op-sum{display:none!important}',
  '@media(max-width:991px){'+P+'.op-co-grid{grid-template-columns:minmax(0,1fr) 300px;gap:24px}}',
  '@media(max-width:767px){',
  P+'#bookingpage{padding-left:16px;padding-right:16px}',
  P+'.op-co-head{margin:26px 0 18px;gap:14px}',
  P+'.op-co-head h1{font-size:32px!important}',
  P+'.op-co-grid{display:flex;flex-direction:column;align-items:stretch;gap:0}',
  P+'.op-co-side{order:-1;position:static;margin:0 0 16px}',
  P+'button.op-sum{display:flex!important;width:100%;align-items:center;gap:12px;background:#fff!important;border:1px solid #876c3a!important;padding:14px 16px!important;color:#0c1d35!important;font-family:"Jost",sans-serif!important;font-size:14px!important;letter-spacing:0!important;text-transform:none!important;text-align:left}',
  P+'.op-sum-u{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
  P+'.op-sum-t{font-weight:400;white-space:nowrap}',
  P+'.op-sum .op-chev{color:#876c3a;transition:transform .2s}',
  P+'.op-co-side:not(.op-open) .op-price{display:none}',
  P+'.op-co-side.op-open .op-price{border-top:0}',
  P+'.op-card{padding:22px 18px 24px}',
  P+'.op-fields{grid-template-columns:1fr}',
  P+'.op-pol-box{padding:18px}',
  P+'.op-actions{align-items:stretch;margin-bottom:44px}',
  P+'.book_confirmbooking{text-align:center}',
  P+'input.book_confirmbookingbut{width:100%}',
  P+'.book_securelogo{text-align:center}',
  '}'
 ].join('\n'); document.head.appendChild(st);

 /* t\u00edtulo con la flecha de "Atr\u00e1s" de Beds24 */
 var bk=document.querySelector('.book_bookingbackright a,.book_bookingback a');
 var head=el('div','op-co-head');
 if(bk){var a=el('a','op-co-back',ARROW); a.href=bk.href; a.setAttribute('aria-label',bk.textContent.trim()); head.appendChild(a);}
 head.appendChild(el('h1',null,esc(T.title)));
 var ssi=document.getElementById('selectorstripinfo'); if(ssi) ssi.parentNode.classList.add('op-hide');
 form.parentNode.insertBefore(head,form);

 /* rejilla: columna principal + detalle del precio */
 var grid=el('div','op-co-grid'), main=el('div','op-co-main'), side=el('aside','op-co-side');
 grid.appendChild(main); grid.appendChild(side);
 var row1=det.parentNode; form.insertBefore(grid,row1);
 function card(cls,title,extra){var c=el('section','op-card '+cls); c.appendChild(el('div','op-card-h','<h2>'+title+'</h2>'+(extra||''))); main.appendChild(c); return c;}

 var cC=card('op-c-contact',esc(T.contact),'<span class="op-req">'+esc(T.req)+'</span>'), fC=el('div','op-fields'); cC.appendChild(fC);
 var cS=card('op-c-stay',esc(T.stay)), fS=el('div','op-fields'); cS.appendChild(fS);
 var ack=[];
 [].slice.call(gd.querySelectorAll('.questionrow')).forEach(function(r){
  var lab=r.querySelector('.col-sm-4'), f=r.querySelector('input:not([type=hidden]),select,textarea'); if(!lab||!f) return;
  if(f.type==='checkbox'||f.type==='radio'){ack.push(r); return;}
  var req=!!lab.querySelector('.requiredfield'), txt=lab.textContent.replace(/\*/g,'').replace(/\u00a0/g,' ').trim();
  var stay=/questionrow-(guestarrivaltime|guestcomments)\b/.test(r.className);
  if(f.tagName==='TEXTAREA'){
   r.classList.add('op-acc-row'); if(f.value.trim()) r.classList.add('op-open');
   var tg=el('button','op-acc','<span>'+esc(txt)+'</span>'+CHEV); tg.type='button'; tg.setAttribute('aria-expanded',r.classList.contains('op-open'));
   tg.onclick=function(){var o=r.classList.toggle('op-open'); tg.setAttribute('aria-expanded',o); if(o) f.focus();};
   r.insertBefore(tg,r.firstChild); (stay?fS:fC).appendChild(r); return;
  }
  var box=f.parentNode, fl=f;
  if(/questionrow-guestarrivaltime\b/.test(r.className) && f.tagName==='INPUT'){
   /* hora de llegada: desplegable de 16:00 a 24:00; guarda en el mismo campo de Beds24 */
   var s=el('select','bookselect form-control'); s.id='op-arrival';
   var ph=document.querySelector('#guestcountry2 option'); s.appendChild(new Option(ph?ph.textContent:'\u2014',''));
   for(var h=16;h<=24;h++){s.appendChild(new Option(h+':00',h+':00')); if(h<24) s.appendChild(new Option(h+':30',h+':30'));}
   if(f.value && !s.querySelector('option[value="'+f.value.replace(/"/g,'')+'"]')) s.appendChild(new Option(f.value,f.value));
   s.value=f.value; s.onchange=function(){f.value=s.value;}; f.type='hidden'; box.insertBefore(s,f); fl=s;
  }
  r.classList.add('op-f'); if(fl.tagName==='SELECT') r.classList.add('op-f-sel'); else fl.setAttribute('placeholder',' ');
  var l=el('label','op-fl',esc(txt)+(req?'<em>*</em>':'')); l.htmlFor=fl.id; box.appendChild(l);
  if(/questionrow-guestemail\b/.test(r.className)) r.querySelector('.col-sm-8').appendChild(el('small','op-help',esc(T.help)));
  (stay?fS:fC).appendChild(r);
 });
 if(!fS.children.length) cS.classList.add('op-hide');

 /* pago: l\u00ednea de texto hasta que haya pasarela */
 if(T.payText){var cPay=card('op-c-pay',esc(T.pay)+LOCK); cPay.appendChild(el('p','op-pay-t',T.payText));}

 /* pol\u00edticas */
 var units=[].map.call(det.querySelectorAll('.panel-body .at_roomnametext'),function(e){return e.textContent.trim();}).filter(Boolean);
 var cP=card('op-c-pol',esc(T.pol)); cP.id='op-pol';
 cP.appendChild(el('div','op-pol-box','<p>'+esc(T.times)+'</p>'+(units.length?'<p>'+esc(T.unit)+': '+esc(units.join(', '))+'</p>':'')
  +'<h3>'+esc(T.polHead)+'</h3>'+T.pols.map(function(p){return '<p><strong>'+esc(p[0])+'</strong> '+esc(p[1])+'</p>';}).join('')));

 /* aceptaci\u00f3n: casillas (preguntas personalizadas de Beds24) */
 if(ack.length){var cA=card('op-c-ack',esc(T.ack)); ack.forEach(function(r){cA.appendChild(r);});}

 /* lo que Beds24 a\u00f1ada en el futuro y no se haya colocado arriba, se queda a la vista */
 if(fields(gd)) main.insertBefore(gd,cP); else gd.classList.add('op-hide');

 /* bot\u00f3n de Beds24 y sello de seguridad */
 var acts=el('div','op-actions'); main.appendChild(acts);
 var cb=form.querySelector('.book_confirmbooking'); if(cb) acts.appendChild(cb);
 var seal=document.querySelector('.book_securelogo'); if(seal){var sr=seal.parentNode.parentNode; acts.appendChild(seal); if(sr&&!fields(sr)) sr.classList.add('op-hide');}

 /* detalle del precio (el panel de Beds24, sin foto) */
 var pb=det.querySelector('.panel-body'), price=el('div','op-price');
 price.appendChild(el('p','op-price-h',esc(T.price)));
 if(pb){
  price.appendChild(pb);
  var nights=+((form.querySelector('input[name=numnight]')||{}).value||0), na=0, nc=0, di=0;
  [].slice.call(pb.children).forEach(function(c){
   if(c.tagName==='INPUT'){ if(/^na\d/.test(c.id)) na=+c.value||0; if(/^nc\d/.test(c.id)) nc=+c.value||0; return; }
   if(c.classList.contains('at_roomnametext')){di=0; return;}
   if(!c.classList.contains('row')||c.classList.contains('totalpricerow')) return;
   if(c.querySelector('img')){c.classList.add('op-hide'); return;}
   var k=c.children[0], v=c.children[1]; if(!k||!v) return;
   c.classList.add('op-kv');
   var amt=c.querySelector('.bookingpageamount');
   if(c.querySelector('.glyphicon-user')||amt){
    var pd=amt?amt.parentNode:null;
    k.textContent=T.guests;
    v.textContent=na+' '+T.ad[na===1?0:1]+(nc?', '+nc+' '+T.ch[nc===1?0:1]:'');
    if(nights||pd){var nr=el('div','row op-kv op-nights'); nr.appendChild(el('div',null,nights?esc(nights+' '+T.nt[nights===1?0:1]):'')); var nv=el('div'); if(pd) nv.appendChild(pd); nr.appendChild(nv); c.parentNode.insertBefore(nr,c.nextSibling);}
   } else { k.textContent=di===0?T.arr:T.dep; di++; }
  });
 }
 var sum=el('button','op-sum'); sum.type='button'; sum.setAttribute('aria-expanded','false');
 var tot=price.querySelector('#totaldispprice');
 function sumTxt(){var cur=price.querySelector('.totalpricerow .bookingpagecurrency'); sum.innerHTML='<span class="op-sum-u">'+esc(units.join(', '))+'</span><span class="op-sum-t">'+esc((cur?cur.textContent:'')+(tot?tot.textContent:''))+'</span>'+CHEV;}
 sumTxt(); if(tot&&window.MutationObserver) new MutationObserver(sumTxt).observe(tot,{childList:true,characterData:true,subtree:true});
 sum.onclick=function(){var o=side.classList.toggle('op-open'); sum.setAttribute('aria-expanded',o);};
 side.appendChild(sum); side.appendChild(price);
 det.classList.add('op-hide');
 if(!fields(row1)) row1.classList.add('op-hide');
})();
