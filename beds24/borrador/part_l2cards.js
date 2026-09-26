/* Ocean Properties · Layout 2, página de unidades con la ubicación de bloques de The Peninsula:
   foto baja, buscador en una línea en el móvil, tarjetas con la foto a la izquierda y columna derecha. */
(function(){
 var B=document.body; if(!/\blayout2\b/.test(B.className)||B.classList.contains('op-co')) return;
 var L=(B.className.match(/colorbody-(\w\w)/)||[])[1];
 var D={
  es:{adv:'Ventajas de reservar directo',advItems:[],ad:['adulto','adultos'],ch:['niño','niños']},
  en:{adv:'Benefits of booking direct',advItems:[],ad:['adult','adults'],ch:['child','children']},
  fr:{adv:'Avantages de la réservation directe',advItems:[],ad:['adulte','adultes'],ch:['enfant','enfants']}
 };
 var T=D[L]||D.en, ORDER='b';
 var CHEV='<svg class="op-chev" viewBox="0 0 12 8" width="12" height="8" aria-hidden="true"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
 function el(t,c,h){var e=document.createElement(t); if(c) e.className=c; if(h!=null) e.innerHTML=h; return e;}
 function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
 var P='body.layout2 ';
 var st=el('style'); st.textContent=[
  /* foto de arriba: 300 px; en el móvil no se muestra */
  P+'.b24fullcontainer-proprow1 .carousel,'+P+'.b24fullcontainer-proprow1 .carousel-inner>.item{height:300px!important;max-height:300px}',
  P+'.b24fullcontainer-proprow1 .b24-module{padding-bottom:0!important}',
  P+'.b24fullcontainer-proprow1 .carousel-inner>.item>img{width:100%!important;height:300px!important;object-fit:cover;max-width:none}',
  /* buscador: resumen de una línea (solo móvil) */
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

 /* buscador en el móvil: una línea con fechas y huéspedes que abre los campos */
 var strip=document.getElementById('b24scroller');
 if(strip){
  var sb=el('button','op-strip-sum'); sb.type='button'; sb.setAttribute('aria-expanded','false');
  var val=function(id){var e=document.getElementById(id); return e?e.value:'';};
  var lab=function(id){var l=document.querySelector('label[for='+id+']'); return l?l.textContent.trim():'';};
  var upd=function(){
   var ci=val('inputcheckin'), co=val('inputcheckout'), na=+val('inputnumadult')||0, nc=+val('inputnumchild')||0;
   var d=function(s){return s.replace(/^\S+\s+/,'');};
   var t=(ci?d(ci):lab('inputcheckin'))+' – '+(co?d(co):lab('inputcheckout'));
   if(na) t+=' · '+na+' '+T.ad[na===1?0:1]+(nc?', '+nc+' '+T.ch[nc===1?0:1]:'');
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

 /* tarjeta de cada unidad: foto a la izquierda; nombre, descripción, comodidades y tarifa a la derecha */
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

 /* columna derecha: ventajas, reservas, opiniones y cómo llegar (los bloques de cierre del Layout 2) */
 if(T.advItems.length) side.appendChild(el('div','op-sbox op-adv','<h3>'+esc(T.adv)+'</h3><ul>'+T.advItems.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>'));
 var close=document.querySelector('.op-closing');
 if(close){
  var cols=close.querySelectorAll('.op-in > div');
  [2,1,0].forEach(function(i){ if(cols[i]){var bx=el('div','op-sbox'); bx.appendChild(cols[i]); side.appendChild(bx);} });
  close.classList.add('op-hide');
 }
})();
