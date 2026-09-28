/* Ocean Properties · página de datos del huésped (checkout), con la misma estructura que el checkout de The Peninsula.
   Paleta oficial de Grégoire (navy #112c4e, oro #d7af74; #876c3a para texto pequeño sobre claro). Jost nunca por encima de 400.
   Solo se activa con body.op-co (ver arriba). Campos, importes y botón son los de Beds24: se mueven y se leen, no se sustituyen. */
(function(){
 var B=document.body; if(!B.classList.contains('op-co')) return;
 var form=document.getElementById('formbook'); if(!form) return;
 var det=form.querySelector('.b24-bookingdetails'), gd=form.querySelector('.b24-guestdetails'); if(!det||!gd) return;
 var L=(B.className.match(/colorbody-(\w\w)/)||[])[1];
 var D={
  es:{title:'Confirmar reserva',contact:'Datos de contacto',req:'* Obligatorio',help:'Enviaremos la confirmación a este correo.',
   stay:'Su estancia',companion:'Acompañante (opcional)',pol:'Políticas',ack:'Aceptación',price:'Detalle del precio',
   nt:['noche','noches'],ad:['adulto','adultos'],ch:['niño','niños'],total:'Total',taxInc:'Impuesto turístico incluido',
   add:'Añadir otra unidad',err:'Este campo es obligatorio.',prefix:'Prefijo',honor:['Tratamiento',['Sr.','Sra.']],unit:'Unidad',
   ci:['Check-in','16:00 – 24:00'],co:['Check-out','hasta las 11:00'],polHead:'Tarifa no reembolsable',
   pols:[['Pago por adelantado:','Para garantizar su reserva, se requiere el pago total del coste de su estancia en el momento de realizar la reserva.'],
    ['Cancelación y cambios:','Esta reserva no se puede cancelar, modificar ni reembolsar bajo ninguna circunstancia. En caso de no presentarse (no-show) o de realizar cambios en su reserva, se aplicará un cargo equivalente al 100% del coste total de su estancia a su tarjeta de crédito.'],
    ['Flexibilidad de fechas:','Tenga en cuenta que esta tarifa no permite cambios en las fechas de su estancia. El pago realizado por esta reserva no es reembolsable bajo ninguna circunstancia.'],
    ['Verificación de la tarjeta de crédito:','Al momento del check-in, se solicitará la presentación de la tarjeta de crédito utilizada para el pago con fines de verificación.']]},
  en:{title:'Confirm booking',contact:'Contact details',req:'* Required',help:'We will send the confirmation to this email.',
   stay:'Your stay',companion:'Companion (optional)',pol:'Policies',ack:'Acknowledgement',price:'Price details',
   nt:['night','nights'],ad:['adult','adults'],ch:['child','children'],total:'Total',taxInc:'Tourist tax included',
   add:'Add another unit',err:'This field is required.',prefix:'Country code',honor:['Title',['Mr','Mrs','Ms']],unit:'Unit',
   ci:['Check-in','16:00 – 24:00'],co:['Check-out','by 11:00'],polHead:'Non refundable.',
   pols:[['Prepayment:','To secure your reservation, full payment of the total cost of your stay is required at the time of booking.'],
    ['Cancellation and Changes:','This reservation cannot be canceled, modified, or refunded under any circumstances. In the event of a no-show or changes to your reservation, a charge equivalent to 100% of the total cost of your stay will be applied to your credit card.'],
    ['Date Flexibility:','Please note that this rate does not allow changes to the date of your stay. The payment made for this reservation is non-refundable under any circumstances.'],
    ['Credit Card Verification:','Upon check-in, the presentation of the credit card used for payment will be requested for verification purposes.']]},
  fr:{title:'Confirmer la réservation',contact:'Coordonnées',req:'* Obligatoire',help:'Nous enverrons la confirmation à cette adresse e-mail.',
   stay:'Votre séjour',companion:'Accompagnant (facultatif)',pol:'Conditions',ack:'Acceptation',price:'Détail du prix',
   nt:['nuit','nuits'],ad:['adulte','adultes'],ch:['enfant','enfants'],total:'Total',taxInc:'Taxe de séjour incluse',
   add:'Ajouter un logement',err:'Ce champ est obligatoire.',prefix:'Indicatif',honor:['Civilité',['M.','Mme']],unit:'Logement',
   ci:['Check-in','16:00 – 24:00'],co:['Check-out','jusqu’à 11:00'],polHead:'Tarif non remboursable',
   pols:[['Prépaiement :','Pour garantir votre réservation, le paiement intégral du montant total de votre séjour est requis au moment de la réservation.'],
    ['Annulation et modifications :','Cette réservation ne peut être annulée, modifiée ou remboursée en aucun cas. En cas de non-présentation (no-show) ou de modification de votre réservation, des frais équivalents à 100 % du montant total de votre séjour seront prélevés sur votre carte de crédit.'],
    ['Flexibilité des dates :','Veuillez noter que ce tarif ne permet aucun changement de dates pour votre séjour. Le paiement effectué pour cette réservation est non remboursable en aucun cas.'],
    ['Vérification de la carte de crédit :','Lors de l’enregistrement (check-in), la présentation de la carte de crédit utilisée pour le paiement sera demandée à des fins de vérification.']]}
 };
 var T=D[L]||D.en;
 /* preguntas personalizadas de Beds24 que forman la fila "Acompañante" (se crean el día de publicar) */
 var COMPANION=['guestcustq2','guestcustq3'];
 /* prefijos de país del móvil (ISO + código); el nombre del país lo pone el navegador en el idioma de la página */
 var DIAL='AF93 AL355 DZ213 AD376 AO244 AI1264 AG1268 AR54 AM374 AW297 AU61 AT43 AZ994 BS1242 BH973 BD880 BB1246 BY375 BE32 BZ501 BJ229 BM1441 BT975 BO591 BQ599 BA387 BW267 BR55 VG1284 BN673 BG359 BF226 BI257 KH855 CM237 CA1 CV238 KY1345 CF236 TD235 CL56 CN86 CO57 KM269 CG242 CD243 CR506 CI225 HR385 CU53 CW599 CY357 CZ420 DK45 DJ253 DM1767 DO1809 EC593 EG20 SV503 GQ240 ER291 EE372 SZ268 ET251 FO298 FJ679 FI358 FR33 GF594 PF689 GA241 GM220 GE995 DE49 GH233 GI350 GR30 GL299 GD1473 GP590 GU1671 GT502 GN224 GW245 GY592 HT509 HN504 HK852 HU36 IS354 IN91 ID62 IR98 IQ964 IE353 IL972 IT39 JM1876 JP81 JO962 KZ7 KE254 KI686 KW965 KG996 LA856 LV371 LB961 LS266 LR231 LY218 LI423 LT370 LU352 MO853 MG261 MW265 MY60 MV960 ML223 MT356 MH692 MQ596 MR222 MU230 MX52 FM691 MD373 MC377 MN976 ME382 MS1664 MA212 MZ258 MM95 NA264 NR674 NP977 NL31 NC687 NZ64 NI505 NE227 NG234 KP850 MK389 NO47 OM968 PK92 PW680 PS970 PA507 PG675 PY595 PE51 PH63 PL48 PT351 PR1787 QA974 RE262 RO40 RU7 RW250 KN1869 LC1758 VC1784 WS685 SM378 ST239 SA966 SN221 RS381 SC248 SL232 SG65 SX1721 SK421 SI386 SB677 SO252 ZA27 KR82 SS211 ES34 LK94 SD249 SR597 SE46 CH41 SY963 TW886 TJ992 TZ255 TH66 TL670 TG228 TO676 TT1868 TN216 TR90 TM993 TC1649 TV688 UG256 UA380 AE971 GB44 US1 UY598 VI1340 UZ998 VU678 VA39 VE58 VN84 YE967 ZM260 ZW263'.split(' ');
 var FLAGS='https://cdn.jsdelivr.net/npm/flag-icons@7.5.0/flags/4x3/';
 function sortOpts(sel,keep){ /* orden alfabético sin distinguir acentos ni mayúsculas; "keep" primeras opciones se quedan arriba */
  var fixed=[].slice.call(sel.options,0,keep), rest=[].slice.call(sel.options,keep), seen={};
  rest=rest.filter(function(o){if(seen[o.value]) return false; seen[o.value]=1; return true;});
  rest.forEach(function(o){o.text=o.text.charAt(0).toUpperCase()+o.text.slice(1);});
  rest.sort(function(a,b){return a.text.localeCompare(b.text,L||'es',{sensitivity:'base'});});
  var v=sel.value; sel.innerHTML=''; fixed.concat(rest).forEach(function(o){sel.appendChild(o);}); sel.value=v;
 }
 var CHEV='<svg class="op-chev" viewBox="0 0 12 8" width="12" height="8" aria-hidden="true"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
 var ARROW='<svg viewBox="0 0 32 16" width="32" height="16" aria-hidden="true"><path d="M31 8H2M9 1L2 8l7 7" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';
 function svgUrl(inner,vb){return 'url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="'+vb+'">'+inner+'</svg>')+'")';}
 function lock(c){return svgUrl('<rect x="1.5" y="7" width="11" height="8" fill="none" stroke="'+c+'" stroke-width="1.2"/><path d="M4 7V4.5a3 3 0 0 1 6 0V7" fill="none" stroke="'+c+'" stroke-width="1.2"/>','0 0 14 16');}
 var SEL=svgUrl('<path d="M1 1.5l5 5 5-5" fill="none" stroke="#876c3a" stroke-width="1.2"/>','0 0 12 8');
 function el(t,c,h){var e=document.createElement(t); if(c) e.className=c; if(h!=null) e.innerHTML=h; return e;}
 function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
 function txt(n){return n?n.textContent.replace(/\s+/g,' ').trim():'';}
 function fields(n){return !!n.querySelector('input:not([type=hidden]),select,textarea');}

 var N='#112c4e',G='#d7af74',A='#876c3a',I='#16202e',S='#46535f',R='#ddd4c6',C='#faf7f2',PB='#f4efe6',E='#912018';
 var P='body.op-co ';
 var st=el('style'); st.textContent=[
  /* cabecera blanca con línea fina, como Peninsula */
  P+'.op-topbar{background:#fff!important;border-bottom:1px solid '+R+';min-height:85px;padding:0 30px!important}',
  P+'.op-topbar a.op-mb,'+P+'.op-topbar a.op-wa{color:'+I+'!important}',
  P+'.op-topbar a.op-wa .op-wa-txt,'+P+'.op-topbar a.op-wa .op-wa-num{color:'+I+'!important}',
  P+'.op-topbar a.op-wa .op-wa-num span{color:'+A+'!important}',
  P+'#bookingpage{width:auto!important;max-width:1280px;margin:0 auto;padding:0 16px 8px!important}',
  P+'.op-co-head{display:flex;align-items:center;gap:16px;margin:32px 0 24px}',
  P+'.op-co-head h1{font-family:"Cormorant Garamond",Georgia,serif!important;font-weight:400!important;font-size:36px!important;line-height:44px;letter-spacing:.04em;text-transform:uppercase;color:'+I+'!important;margin:0}',
  P+'.op-co-back{display:inline-flex;align-items:center;color:'+A+'!important;text-decoration:none!important;line-height:0}',
  P+'.op-co-grid{display:grid;grid-template-columns:minmax(0,853fr) minmax(0,411fr);gap:16px;align-items:start}',
  P+'.op-card{background:#fff;padding:24px;margin:0 0 16px}',
  P+'.op-card-h{display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin:0 0 20px}',
  P+'.op-card-h h2{font-family:"Jost",sans-serif!important;font-weight:300!important;font-size:12px!important;letter-spacing:4.5px;text-transform:uppercase;color:'+A+'!important;margin:0}',
  P+'.op-card-t{font-family:"Cormorant Garamond",Georgia,serif!important;font-weight:400!important;font-size:26px!important;line-height:1.2;color:'+I+'!important;margin:0 0 16px}',
  P+'.op-req{font-size:12px;color:'+S+'}',
  /* campos: 56 px, borde fino, etiqueta flotante */
  P+'.op-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}',
  P+'.op-pair{display:grid;grid-template-columns:138px minmax(0,1fr)}',
  P+'.op-pair>.op-f+.op-f .form-control{margin-left:-1px;width:calc(100% + 1px)}',
  P+'.op-f{margin:0!important;min-width:0}',
  P+'.op-f>.col-sm-4{display:none}',
  P+'.op-f>.col-sm-8{width:auto;float:none;padding:0}',
  P+'.op-f .booktextdiv{position:relative}',
  P+'.op-f .form-control{height:56px!important;min-height:56px;padding:22px 12px 6px!important;font-family:"Jost",sans-serif!important;font-weight:400!important;font-size:15px!important;line-height:1.4!important;color:'+I+'!important;background-color:#fff!important;border:1px solid '+R+'!important;border-radius:0!important;box-shadow:none!important}',
  P+'.op-f .form-control:focus{border-color:'+N+'!important;box-shadow:inset 0 0 0 1px '+N+'!important;outline:0;position:relative;z-index:1}',
  P+'.op-f select.form-control{-webkit-appearance:none;appearance:none;background:#fff '+SEL+' no-repeat right 14px center/12px 8px!important;padding-right:36px!important}',
  P+'.op-fl{position:absolute;left:13px;top:18px;margin:0;font-family:"Jost",sans-serif;font-weight:400;font-size:15px;line-height:1.3;color:'+S+';pointer-events:none;transition:top .12s,font-size .12s;z-index:2}',
  P+'.op-fl em{font-style:normal;color:'+A+';margin-left:3px}',
  P+'.op-f .form-control:focus~.op-fl,'+P+'.op-f .form-control:not(:placeholder-shown)~.op-fl,'+P+'.op-f-sel .op-fl{top:7px;font-size:12px}',
  P+'.op-help{display:block;font-size:12px;line-height:1.5;color:'+S+';margin-top:6px}',
  P+'.op-phone{display:grid;grid-template-columns:112px minmax(0,1fr)}',
  P+'.op-phone-w{position:relative;height:56px}',
  P+'button.op-dial-btn{display:block!important;position:relative;width:100%;height:56px;background:#fff '+SEL+' no-repeat right 10px center/10px 7px!important;border:1px solid '+R+'!important;border-right:0!important;padding:0!important;text-align:left;cursor:pointer;text-transform:none!important;letter-spacing:0!important;color:'+I+'!important;font-size:15px!important}',
  P+'button.op-dial-btn:focus-visible,'+P+'button.op-dial-btn[aria-expanded=true]{border-color:'+N+'!important;box-shadow:inset 0 0 0 1px '+N+'!important;outline:0}',
  P+'.op-dial-l{position:absolute;left:13px;top:7px;font-family:"Jost",sans-serif;font-size:12px;color:'+S+'}',
  P+'.op-dial-v{position:absolute;left:13px;top:26px;display:flex;align-items:center;gap:8px;font-family:"Jost",sans-serif;font-size:15px;line-height:1;color:'+I+'}',
  P+'.op-flag{width:20px;height:15px;object-fit:cover;box-shadow:0 0 0 1px rgba(22,32,46,.12);flex:none}',
  P+'.op-dial-list{position:absolute;left:0;top:100%;z-index:30;width:330px;max-width:calc(100vw - 32px);max-height:300px;overflow-y:auto;margin:4px 0 0;padding:6px 0;list-style:none;background:#fff;border:1px solid '+R+';box-shadow:0 12px 32px rgba(17,44,78,.12)}',
  P+'.op-dial-list li{display:flex;align-items:center;gap:10px;padding:9px 14px;font-family:"Jost",sans-serif;font-size:14px;line-height:1.3;color:'+I+';cursor:pointer;outline:0}',
  P+'.op-dial-list li:hover,'+P+'.op-dial-list li:focus{background:'+C+'}',
  P+'.op-dial-list li[aria-selected=true]{background:'+PB+';color:'+N+'}',
  P+'.op-dn{flex:1;min-width:0}',
  P+'.op-dc{color:'+S+';font-variant-numeric:tabular-nums;white-space:nowrap}',
  P+'.op-err .form-control,'+P+'.op-err button.op-dial-btn{border-color:'+E+'!important;box-shadow:inset 0 0 0 1px '+E+'!important}',
  P+'.op-errbar{display:none;background:'+E+';color:#fff;font-size:12px;line-height:1.4;padding:8px 12px}',
  P+'.op-err .op-errbar{display:block}',
  /* filas plegables, como las de Peninsula */
  P+'.op-acc{border:1px solid '+R+'}',
  P+'.op-acc-i+.op-acc-i{border-top:1px solid '+R+'}',
  P+'button.op-acc-h{display:flex!important;width:100%;min-height:58px;justify-content:space-between;align-items:center;background:#fff!important;border:0!important;padding:0 17px!important;color:'+I+'!important;font-family:"Jost",sans-serif!important;font-weight:400!important;font-size:16px!important;letter-spacing:0!important;text-transform:none!important;text-align:left}',
  P+'button.op-acc-h:hover{background:#fff!important;color:'+I+'!important}',
  P+'.op-acc-h .op-chev{color:'+A+';flex:none;transition:transform .2s}',
  P+'.op-acc-i.op-open>.op-acc-h .op-chev{transform:rotate(180deg)}',
  P+'.op-acc-b{display:none;padding:0 17px 17px}',
  P+'.op-acc-i.op-open>.op-acc-b{display:block}',
  P+'.op-acc-b .op-grid{gap:16px}',
  P+'.op-acc-b textarea{width:100%;min-height:110px;border:1px solid '+R+'!important;border-radius:0!important;box-shadow:none!important;padding:14px 12px!important;font-family:"Jost",sans-serif!important;font-size:15px!important;color:'+I+'!important}',
  P+'.op-acc-b .questionrow{margin:0!important}',
  P+'.op-acc-b .questionrow>.col-sm-4{display:none}',
  P+'.op-acc-b .questionrow>.col-sm-8{width:auto;float:none;padding:0}',
  /* políticas */
  P+'.op-pol-box{background:'+PB+';padding:16px 20px;font-family:"Jost",sans-serif;font-weight:400;font-size:15px;line-height:1.7;color:'+I+'}',
  P+'.op-pol-box p{margin:0 0 10px}',
  P+'.op-pol-box p:last-child{margin:0}',
  P+'.op-pol-2{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:0 0 14px}',
  P+'.op-k{display:block;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:'+S+';line-height:1.6}',
  P+'.op-v{display:block;font-size:16px;color:'+N+'}',
  P+'.op-pol-u{margin:0 0 14px}',
  P+'.op-pol-h{font-size:12px;letter-spacing:3px;text-transform:uppercase;color:'+N+';margin:0 0 10px}',
  P+'.op-pol-box em{font-family:"Cormorant Garamond",Georgia,serif;font-style:italic;font-size:17px;color:'+N+'}',
  /* aceptación */
  P+'.op-c-ack .questionrow{display:flex;flex-wrap:wrap;gap:10px;align-items:flex-start;margin:0 0 12px!important}',
  P+'.op-c-ack .questionrow>.op-errbar{flex-basis:100%;order:3;padding:8px 12px}',
  P+'.op-c-ack .questionrow>.col-sm-4{flex:1;min-width:0}',
  P+'.op-c-ack .questionrow>div{width:auto;float:none;padding:0}',
  P+'.op-c-ack .questionrow>.col-sm-4{order:2;font-size:16px;line-height:25px;color:'+I+'}',
  P+'.op-c-ack .booktextdiv{line-height:0}',
  P+'.op-c-ack input[type=checkbox]{-webkit-appearance:none;appearance:none;width:18px;height:18px;margin:3px 0 0;border:1px solid '+R+';border-radius:2px;background:#fff;cursor:pointer}',
  P+'.op-c-ack input[type=checkbox]:checked{background:'+N+' '+svgUrl('<path d="M2 6.5l3 3 6-7" fill="none" stroke="#fff" stroke-width="1.6"/>','0 0 13 12')+' no-repeat center/11px 10px;border-color:'+N+'}',
  P+'.op-c-ack input[type=checkbox]:focus-visible{outline:2px solid '+N+';outline-offset:2px}',
  P+'.op-c-ack a{color:'+A+'!important;text-decoration:none!important;border-bottom:1px solid '+A+'}',
  P+'.op-c-ack .requiredfield{display:none}',
  P+'.op-c-ack .op-err input[type=checkbox]{border-color:'+E+'}',
  /* botón de confirmar: azul marino, a la derecha, fuera de las tarjetas */
  P+'.op-actions{display:flex;justify-content:flex-end;margin:0 0 48px}',
  P+'.book_confirmbooking{float:none!important;margin:0!important;text-align:right}',
  P+'input.book_confirmbookingbut{height:48px;min-width:202px;padding:0 48px 0 26px!important;background:'+N+' '+lock('#fff')+' no-repeat right 22px center/11px 13px!important;color:#fff!important;border:1px solid '+N+'!important;border-radius:0!important;box-shadow:none!important;font-family:"Jost",sans-serif!important;font-weight:400!important;font-size:12px!important;letter-spacing:3px;text-transform:uppercase;transition:background-color .1s,color .1s}',
  P+'input.book_confirmbookingbut:hover{background-color:#fff!important;background-image:'+lock(N)+'!important;color:'+N+'!important}',
  P+'.book_bookingback{display:none}',
  /* detalle del precio */
  P+'.op-co-side{position:sticky;top:16px}',
  P+'.op-price-l{font-family:"Jost",sans-serif;font-weight:400;font-size:16px;color:'+I+';margin:0 0 8px}',
  P+'.op-price{background:#fff;border:1px solid '+G+';padding:16px}',
  P+'.op-pr{display:flex;justify-content:space-between;align-items:baseline;gap:12px;font-size:15px;line-height:1.5;color:'+I+';margin:0 0 8px}',
  P+'.op-pr:last-child{margin:0}',
  P+'.op-pr-n{color:'+S+';font-size:14px;margin-top:-6px}',
  P+'.op-num{font-variant-numeric:lining-nums tabular-nums;font-weight:300;white-space:nowrap}',
  P+'button.op-lnk{background:none!important;border:0!important;padding:0!important;color:'+A+'!important;font-family:"Jost",sans-serif!important;font-weight:400!important;font-size:15px!important;letter-spacing:0!important;text-transform:none!important;cursor:pointer;text-align:left}',
  P+'button.op-lnk:after{content:"\\203A";display:inline-block;margin-left:6px;transition:transform .2s}',
  P+'.op-open>button.op-lnk:after,'+P+'button.op-lnk[aria-expanded=true]:after{transform:rotate(90deg)}',
  P+'.op-sub{display:none;margin:-2px 0 10px;padding:0 0 0 12px;border-left:1px solid '+R+'}',
  P+'.op-sub.op-open{display:block}',
  P+'.op-sub .op-pr{font-size:14px;color:'+S+';margin:0 0 4px}',
  P+'.op-tot{display:flex;justify-content:space-between;align-items:baseline;margin:16px 0 4px;font-family:"Jost",sans-serif;font-weight:300;font-size:24px;color:'+I+'}',
  P+'.op-tot-n{font-size:16px;color:'+S+';margin:0 0 16px}',
  P+'a.op-add{display:block;height:48px;line-height:46px;text-align:center;background:#fff;border:1px solid '+G+';color:'+A+'!important;text-decoration:none!important;font-family:"Jost",sans-serif;font-weight:400;font-size:12px;letter-spacing:3px;text-transform:uppercase;transition:background-color .1s}',
  P+'a.op-add:hover{background:'+C+'}',
  P+'.book_securelogo{float:none!important;display:block!important;width:auto!important;text-align:right;margin:24px 0 6px}',
  P+'.book_poweredby{float:none!important;text-align:right;margin:0 0 16px}',
  P+'.book_securelogo img{height:40px;width:auto}',
  P+'.op-hide{display:none!important}',
  '@media(max-width:991px){'+P+'.op-co-grid{grid-template-columns:minmax(0,1fr) 320px}'+P+'.op-grid{grid-template-columns:1fr}}',
  '@media(max-width:400px){'+P+'.op-co-head h1{font-size:24px!important;line-height:30px}}',
  '@media(max-width:767px){',
  P+'.op-topbar{min-height:61px;padding:0 16px!important}',
  P+'#bookingpage{padding:0 16px!important}',
  P+'.op-co-head{margin:22px 0 16px;gap:12px}',
  P+'.op-co-head h1{font-size:28px!important;line-height:34px}',
  P+'.op-co-head h1{min-width:0;overflow-wrap:break-word}',
  P+'.op-co-grid{display:block}',
  P+'.op-co-side{position:static;margin:0 0 32px}',
  P+'.op-card{padding:18px 16px}',
  P+'.op-pair{grid-template-columns:104px minmax(0,1fr)}',
  P+'.op-pol-2{grid-template-columns:1fr 1fr}',
  P+'.op-actions{display:block;margin:0 0 24px}',
  P+'input.book_confirmbookingbut{width:100%}',
  P+'.book_securelogo{text-align:center}',
  '}'
 ].join('\n'); document.head.appendChild(st);

 /* título con la flecha de "Atrás" de Beds24 */
 var bk=document.querySelector('.book_bookingbackright a,.book_bookingback a'), back=bk?bk.href:null;
 var head=el('div','op-co-head');
 if(bk){var a=el('a','op-co-back',ARROW); a.href=back; a.setAttribute('aria-label',txt(bk)); head.appendChild(a);}
 head.appendChild(el('h1',null,esc(T.title)));
 var ssi=document.getElementById('selectorstripinfo'); if(ssi) ssi.parentNode.classList.add('op-hide');
 form.parentNode.insertBefore(head,form);

 var grid=el('div','op-co-grid'), main=el('div','op-co-main'), side=el('aside','op-co-side');
 grid.appendChild(main); grid.appendChild(side);
 var row1=det.parentNode; form.insertBefore(grid,row1);
 function card(cls,h,t){var c=el('section','op-card '+cls); if(h) c.appendChild(el('div','op-card-h',h)); if(t) c.appendChild(el('h2','op-card-t',esc(t))); main.appendChild(c); return c;}

 /* preguntas de Beds24 por clave: guestfirstname, guestname, guestemail, guestmobile, guestcountry2, guestarrivaltime, guestcomments… */
 var rows={}, order=[];
 [].slice.call(gd.querySelectorAll('.questionrow')).forEach(function(r){var m=r.className.match(/questionrow-(\S+)/); if(m){rows[m[1]]=r; order.push(m[1]);}});
 function take(k){var r=rows[k]; delete rows[k]; return r;}
 function input(r){return r&&r.querySelector('input:not([type=hidden]),select,textarea');}
 function label(r){var l=r&&r.querySelector('.col-sm-4'); return l?l.textContent.replace(/\*/g,'').replace(/ /g,' ').trim():'';}
 function required(r){return !!(r&&r.querySelector('.col-sm-4 .requiredfield'));}
 function floaty(r){ /* campo con etiqueta flotante y barra de error */
  if(!r) return null; var f=input(r); if(!f) return null;
  var box=f.parentNode, req=required(r);
  if(f.tagName!=='TEXTAREA'&&f.type!=='checkbox') f.classList.add('form-control');
  r.classList.add('op-f'); if(req) r.classList.add('op-required');
  if(f.tagName==='SELECT') r.classList.add('op-f-sel'); else f.setAttribute('placeholder',' ');
  var l=el('label','op-fl',esc(label(r))+(req?'<em>*</em>':'')); l.htmlFor=f.id; box.appendChild(l);
  r.querySelector('.col-sm-8').appendChild(el('div','op-errbar',esc(T.err)));
  return r;
 }

 /* datos de contacto: tratamiento + nombre | apellidos · móvil | correo · país */
 var cC=card('op-c-contact','<h2>'+esc(T.contact)+'</h2><span class="op-req">'+esc(T.req)+'</span>'), gC=el('div','op-grid'); cC.appendChild(gC);
 var tr=take('guesttitle'), tf=input(tr);
 if(tf&&tf.tagName==='INPUT'){
  var ts=el('select','bookselect form-control'); ts.id='op-title'; ts.appendChild(new Option('—',''));
  T.honor[1].forEach(function(v){ts.appendChild(new Option(v,v));});
  if(tf.value&&T.honor[1].indexOf(tf.value)<0) ts.appendChild(new Option(tf.value,tf.value));
  ts.value=tf.value; ts.onchange=function(){tf.value=ts.value;}; tf.type='hidden'; tf.parentNode.insertBefore(ts,tf);
  var tl=tr.querySelector('.col-sm-4'); if(tl) tl.textContent=T.honor[0];
 }
 var tit=floaty(tr), fn=floaty(take('guestfirstname'));
 if(tit&&fn){var pair=el('div','op-pair'); pair.appendChild(tit); pair.appendChild(fn); gC.appendChild(pair);} else if(fn) gC.appendChild(fn);
 var ln=floaty(take('guestname')); if(ln) gC.appendChild(ln);
 var mob=take('guestmobile'), mf=input(mob);
 if(mob&&mf){
  floaty(mob);
  /* prefijo: bandera + (código), lista por orden alfabético y Panamá por defecto; se guarda delante del número */
  var w=el('div','op-phone'), dw=el('div','op-phone-w');
  var names=null; try{names=new Intl.DisplayNames([L||'es'],{type:'region'});}catch(x){}
  var list=DIAL.map(function(d){var iso=d.slice(0,2); return {iso:iso,code:'+'+d.slice(2),name:(names&&names.of(iso))||iso};})
   .sort(function(a,b){return a.name.localeCompare(b.name,L||'es',{sensitivity:'base'});});
  var pc=list.filter(function(c){return c.iso==='PA';})[0]||list[0];
  function flag(iso,lazy){return '<img class="op-flag" '+(lazy?'data-src':'src')+'="'+FLAGS+iso.toLowerCase()+'.svg" alt="" width="20" height="15">';}
  var btn=el('button','op-dial-btn'); btn.type='button'; btn.setAttribute('aria-haspopup','listbox'); btn.setAttribute('aria-expanded','false');
  function paint(){btn.innerHTML='<span class="op-dial-l">'+esc(T.prefix)+'</span><span class="op-dial-v">'+flag(pc.iso)+'<span>'+esc(pc.code)+'</span></span>'; btn.setAttribute('aria-label',T.prefix+': '+pc.name+' '+pc.code);}
  var ul=el('ul','op-dial-list'); ul.setAttribute('role','listbox'); ul.setAttribute('aria-label',T.prefix); ul.hidden=true;
  ul.innerHTML=list.map(function(c,i){return '<li role="option" tabindex="-1" data-i="'+i+'" aria-selected="'+(c===pc)+'">'+flag(c.iso,true)+'<span class="op-dn">'+esc(c.name)+'</span><span class="op-dc">('+esc(c.code)+')</span></li>';}).join('');
  var items=ul.children, loaded=false;
  function open(){if(!loaded){[].forEach.call(ul.querySelectorAll('img[data-src]'),function(im){im.src=im.getAttribute('data-src');}); loaded=true;} ul.hidden=false; btn.setAttribute('aria-expanded','true'); var it=items[list.indexOf(pc)]; it.focus({preventScroll:true}); ul.scrollTop=it.offsetTop-ul.clientHeight/2;}
  function close(back){ul.hidden=true; btn.setAttribute('aria-expanded','false'); if(back) btn.focus();}
  function pick(i){pc=list[i]; [].forEach.call(items,function(li,k){li.setAttribute('aria-selected',k===i);}); paint(); close(true);}
  function plain(t){return t.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();}
  btn.onclick=function(){ul.hidden?open():close();};
  btn.onkeydown=function(e){if(e.key==='ArrowDown'){e.preventDefault(); open();}};
  ul.onclick=function(e){var li=e.target.closest('li'); if(li) pick(+li.getAttribute('data-i'));};
  ul.onkeydown=function(e){var a=document.activeElement, i=a&&a.parentNode===ul?+a.getAttribute('data-i'):0;
   if(e.key==='ArrowDown'){e.preventDefault(); (items[i+1]||items[i]).focus();}
   else if(e.key==='ArrowUp'){e.preventDefault(); (items[i-1]||items[i]).focus();}
   else if(e.key==='Enter'||e.key===' '){e.preventDefault(); pick(i);}
   else if(e.key==='Escape'){close(true);} else if(e.key==='Tab'){close();}
   else if(e.key.length===1){var ch=plain(e.key); for(var k=1;k<=list.length;k++){var j=(i+k)%list.length; if(plain(list[j].name).charAt(0)===ch){items[j].focus(); break;}}}};
  document.addEventListener('click',function(e){if(!ul.hidden&&!dw.contains(e.target)) close();});
  paint(); dw.appendChild(btn); dw.appendChild(ul);
  var bx=mf.parentNode; bx.parentNode.insertBefore(w,bx); w.appendChild(dw); w.appendChild(bx);
  form.addEventListener('submit',function(e){if(e.defaultPrevented) return; var v=mf.value.trim(); if(v&&v.charAt(0)!=='+') mf.value=pc.code+' '+v;});
  gC.appendChild(mob);
 }
 var em=floaty(take('guestemail')); if(em){em.querySelector('.col-sm-8').insertBefore(el('small','op-help',esc(T.help)),em.querySelector('.op-errbar')); gC.appendChild(em);}
 var ctr=take('guestcountry2'), cf=input(ctr);
 if(cf&&cf.tagName==='SELECT'){sortOpts(cf,1); if(!cf.value||cf.value==='0'){[].some.call(cf.options,function(o){if(/^panam[aá]$/i.test(o.text.trim())){cf.value=o.value; return true;}});}}
 var ct=floaty(ctr); if(ct) gC.appendChild(ct);

 /* su estancia: filas plegables (hora de llegada, acompañante, comentarios) */
 var cS=card('op-c-stay','<h2>'+esc(T.stay)+'</h2>'), acc=el('div','op-acc'); cS.appendChild(acc);
 function accItem(title,body,open){
  var it=el('div','op-acc-i'+(open?' op-open':'')), h=el('button','op-acc-h','<span>'+esc(title)+'</span>'+CHEV), b=el('div','op-acc-b');
  h.type='button'; h.setAttribute('aria-expanded',open?'true':'false');
  h.onclick=function(){var o=it.classList.toggle('op-open'); h.setAttribute('aria-expanded',o);};
  b.appendChild(body); it.appendChild(h); it.appendChild(b); acc.appendChild(it); return it;
 }
 var ar=take('guestarrivaltime'), af=input(ar);
 if(ar&&af){
  var arLabel=label(ar);
  if(af.tagName==='INPUT'){ /* desplegable de 16:00 a 24:00 que escribe en el mismo campo de Beds24 */
   var s=el('select','bookselect form-control'); s.id='op-arrival';
   var ph=document.querySelector('#guestcountry2 option'); s.appendChild(new Option(ph?ph.textContent:'—',''));
   for(var h=16;h<=24;h++){s.appendChild(new Option(h+':00',h+':00')); if(h<24) s.appendChild(new Option(h+':30',h+':30'));}
   if(af.value&&!s.querySelector('option[value="'+af.value.replace(/"/g,'')+'"]')) s.appendChild(new Option(af.value,af.value));
   s.value=af.value; s.onchange=function(){af.value=s.value;}; af.type='hidden'; af.parentNode.insertBefore(s,af);
  }
  floaty(ar); accItem(arLabel,ar,!!af.value);
 }
 var comp=COMPANION.map(take).filter(Boolean);
 if(comp.length){var cg=el('div','op-grid'); comp.forEach(function(r){cg.appendChild(floaty(r));}); accItem(T.companion,cg,comp.some(function(r){return input(r).value;}));}
 var cm=take('guestcomments'), cf=input(cm);
 if(cm&&cf){accItem(label(cm),cm,!!cf.value.trim());}
 /* el resto de preguntas: casillas a Aceptación, lo demás a Tu estancia */
 var ackRows=[];
 order.forEach(function(k){var r=rows[k]; if(!r) return; var f=input(r); if(!f) return; delete rows[k];
  if(f.type==='checkbox'||f.type==='radio'){ackRows.push(r); r.appendChild(el('div','op-errbar',esc(T.err)));}
  else {var g=el('div','op-grid'); g.appendChild(floaty(r)); accItem(label(r),g,!!f.value);} });
 if(!acc.children.length) cS.classList.add('op-hide');

 /* políticas */
 var pb=det.querySelector('.panel-body');
 var units=pb?[].map.call(pb.querySelectorAll('.at_roomnametext'),txt).filter(Boolean):[];
 var cP=card('op-c-pol',null,T.pol); cP.id='op-pol';
 cP.appendChild(el('div','op-pol-box',
  '<div class="op-pol-2"><div><span class="op-k">'+esc(T.ci[0])+'</span><span class="op-v">'+esc(T.ci[1])+'</span></div><div><span class="op-k">'+esc(T.co[0])+'</span><span class="op-v">'+esc(T.co[1])+'</span></div></div>'
  +(units.length?'<div class="op-pol-u"><span class="op-k">'+esc(T.unit)+'</span><span class="op-v">'+esc(units.join(', '))+'</span></div>':'')
  +'<p class="op-pol-h">'+esc(T.polHead)+'</p>'+T.pols.map(function(p){return '<p><em>'+esc(p[0])+'</em> '+esc(p[1])+'</p>';}).join('')));

 /* aceptación: casillas (preguntas personalizadas de Beds24) */
 if(ackRows.length){var cA=card('op-c-ack',null,T.ack); ackRows.forEach(function(r){cA.appendChild(r);});}

 /* lo que Beds24 añada y no se haya colocado, a la vista (después de mover las casillas) */
 if(fields(gd)) main.insertBefore(gd,cP); else gd.classList.add('op-hide');

 /* botón de Beds24 */
 var acts=el('div','op-actions'); main.appendChild(acts);
 var cb=form.querySelector('.book_confirmbooking'); if(cb) acts.appendChild(cb);

 /* comprobación antes de enviar: campos obligatorios vacíos y casillas sin marcar */
 function bad(r){var f=input(r); if(!f) return false; if(f.type==='checkbox') return !f.checked; return !String(f.value||'').trim()||(f.tagName==='SELECT'&&(f.value==='0'||f.value===''));}
 function check(r){var b=bad(r); r.classList.toggle('op-err',b); return !b;}
 var reqRows=[].slice.call(main.querySelectorAll('.op-required')).concat(ackRows.filter(required));
 reqRows.forEach(function(r){var f=input(r); f.addEventListener(f.type==='checkbox'?'change':'blur',function(){check(r);}); f.addEventListener('input',function(){if(r.classList.contains('op-err')) check(r);});});
 form.addEventListener('submit',function(e){
  var first=null; reqRows.forEach(function(r){if(!check(r)&&!first) first=r;});
  if(first){e.preventDefault(); var pw=document.getElementById('pleasewaitimg'); if(pw) pw.classList.add('hidden'); first.scrollIntoView({behavior:'smooth',block:'center'}); var f=input(first); if(f) f.focus({preventScroll:true});}
 },true);

 /* detalle del precio, con los importes que calcula Beds24 */
 var cur=txt(det.querySelector('.bookingpagecurrency'))||'$';
 var dec=(txt(det.querySelector('#totaldispprice')).match(/[.,](?=\d{2}$)/)||[','])[0];
 function num(s){s=String(s||'').replace(/[^\d.,]/g,''); if(dec===',') s=s.replace(/\./g,'').replace(',','.'); else s=s.replace(/,/g,''); return parseFloat(s)||0;}
 function fmt(v){var p=v.toFixed(2).split('.'), i=p[0].replace(/\B(?=(\d{3})+(?!\d))/g,dec===','?'.':','); return cur+i+dec+p[1];}
 var fv=function(n){var e=form.querySelector('input[name='+n+']'); return e?e.value:'';};
 var first=fv('firstnight'), out=fv('checkout'), nights=+fv('numnight')||0;
 function day(iso,opt){var d=iso.split('-'); if(d.length<3) return ''; try{return new Date(Date.UTC(+d[0],+d[1]-1,+d[2])).toLocaleDateString(L||'en',Object.assign({timeZone:'UTC'},opt));}catch(x){return iso;}}
 function addDays(iso,n){var d=iso.split('-'), t=new Date(Date.UTC(+d[0],+d[1]-1,+d[2]+n)); return t.toISOString().slice(0,10);}
 var stored={}; try{stored=JSON.parse(sessionStorage.getItem('opNights')||'{}');}catch(x){}
 var price=el('div','op-price');
 function render(){
  var h='', na=0, nc=0, rid=null;
  if(pb) [].slice.call(pb.children).forEach(function(c){
   if(c.tagName==='INPUT'){var m=c.id.match(/^n([ac])\d+-(\d+)-/); if(m){if(m[1]==='a') na+=+c.value||0; else nc+=+c.value||0; rid=m[2];} return;}
   if(c.classList.contains('at_roomnametext')){
    var amt=null, n=c.nextElementSibling;
    while(n&&!n.classList.contains('at_roomnametext')&&!n.classList.contains('totalpricerow')){var a=n.querySelector&&n.querySelector('[id$=drprice]'); if(a){amt=a; break;} n=n.nextElementSibling;}
    var ofn=txt(c.parentNode.querySelector('.at_offername'));
    h+='<div class="op-pr"><span>'+esc(txt(c))+'</span><span class="op-num">'+(amt?esc(cur+txt(amt)):'')+'</span></div>';
    if(ofn) h+='<div class="op-pr op-pr-n"><span>'+esc(ofn)+'</span></div>';
    var sn=stored[rid], ok=sn&&sn.n===nights&&sn.p&&sn.p.length===nights&&sn.p.every(function(x){return /\d/.test(x);})&&(!sn.ci||sn.ci===first);
    var nl=nights+' '+T.nt[nights===1?0:1];
    if(ok){
     h+='<div class="op-pr"><button type="button" class="op-lnk" data-t="op-sn" aria-expanded="false">'+esc(nl)+'</button></div><div class="op-sub" id="op-sn">'
      +sn.p.map(function(p,i){return '<div class="op-pr"><span>'+esc(day(addDays(first,i),{weekday:'short',day:'numeric',month:'short',year:'numeric'}))+'</span><span class="op-num">'+esc(p.replace(/\s/g,''))+'</span></div>';}).join('')+'</div>';
    } else h+='<div class="op-pr"><span>'+esc(nl)+'</span></div>';
   }
  });
  var ups=[].slice.call(det.querySelectorAll('[id^=zupsellrow]')).filter(function(u){return !u.classList.contains('hidden');});
  ups.forEach(function(u){h+='<div class="op-pr"><span>'+esc(txt(u.querySelector('.b24-upsellname')))+'</span><span class="op-num">'+esc(cur+txt(u.querySelector('.bookingpageamount')))+'</span></div>';});
  if(first&&out) h+='<div class="op-pr"><span>'+esc(day(first,{weekday:'short',day:'numeric',month:'short',year:'numeric'})+' – '+day(out,{weekday:'short',day:'numeric',month:'short',year:'numeric'}))+'</span></div>';
  if(na) h+='<div class="op-pr"><span>'+esc(na+' '+T.ad[na===1?0:1]+(nc?', '+nc+' '+T.ch[nc===1?0:1]:''))+'</span></div>';
  price.innerHTML=h;
  [].forEach.call(price.querySelectorAll('.op-lnk'),function(b){b.onclick=function(){var s=document.getElementById(b.getAttribute('data-t')); var o=s.classList.toggle('op-open'); b.setAttribute('aria-expanded',o);};});
  var t=det.querySelector('#totaldispprice'); tot.innerHTML='<span>'+esc(T.total)+'</span><span class="op-num">'+esc(cur+txt(t))+'</span>';
 }
 var tot=el('div','op-tot');
 side.appendChild(el('p','op-price-l',esc(T.price))); side.appendChild(price); side.appendChild(tot);
 if(ups0()) side.appendChild(el('p','op-tot-n',esc(T.taxInc)));
 function ups0(){return !![].filter.call(det.querySelectorAll('[id^=zupsellrow]'),function(u){return !u.classList.contains('hidden');}).length;}
 if(back){var ad=el('a','op-add',esc(T.add)); ad.href=back; side.appendChild(ad);}
 render();
 var tEl=det.querySelector('#totaldispprice'); if(tEl&&window.MutationObserver) new MutationObserver(render).observe(tEl,{childList:true,characterData:true,subtree:true});
 det.classList.add('op-hide');
 if(!fields(row1)) row1.classList.add('op-hide');

 /* sello de seguridad justo encima de "powered by Beds24" */
 var seal=document.querySelector('.book_securelogo'), pw=document.querySelector('.book_poweredby');
 if(seal){var sr=seal.parentNode&&seal.parentNode.parentNode; if(pw) pw.parentNode.insertBefore(seal,pw); if(sr&&sr.classList&&!fields(sr)) sr.classList.add('op-hide');}
})();
