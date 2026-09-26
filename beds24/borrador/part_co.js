/* Ocean Properties · página de datos del huésped (checkout), con la ubicación de bloques de The Peninsula.
   Solo se activa con body.op-co (ver arriba). Los campos, precios y botones son los de Beds24: solo se mueven. */
(function(){
 var B=document.body; if(!B.classList.contains('op-co')) return;
 var form=document.getElementById('formbook'); if(!form) return;
 var det=form.querySelector('.b24-bookingdetails'), gd=form.querySelector('.b24-guestdetails'); if(!det||!gd) return;
 var L=(B.className.match(/colorbody-(\w\w)/)||[])[1];
 var D={
  es:{title:'Confirmar reserva',contact:'Datos de contacto',req:'* Obligatorio',help:'Enviaremos la confirmación a este correo.',
   stay:'Tu estancia',pay:'Pago',payText:'',pol:'Políticas',ack:'Aceptación',price:'Detalle del precio',
   arr:'Llegada',dep:'Salida',guests:'Huéspedes',nt:['noche','noches'],ad:['adulto','adultos'],ch:['niño','niños'],unit:'Unidad',
   times:'Check-in: 16:00 – 24:00 · Check-out: hasta las 11:00',polHead:'TARIFA NO REEMBOLSABLE',
   pols:[['Pago por adelantado:','Para garantizar su reserva, se requiere el pago total del coste de su estancia en el momento de realizar la reserva.'],
    ['Cancelación y cambios:','Esta reserva no se puede cancelar, modificar ni reembolsar bajo ninguna circunstancia. En caso de no presentarse (no-show) o de realizar cambios en su reserva, se aplicará un cargo equivalente al 100% del coste total de su estancia a su tarjeta de crédito.'],
    ['Flexibilidad de fechas:','Tenga en cuenta que esta tarifa no permite cambios en las fechas de su estancia. El pago realizado por esta reserva no es reembolsable bajo ninguna circunstancia.'],
    ['Verificación de la tarjeta de crédito:','Al momento del check-in, se solicitará la presentación de la tarjeta de crédito utilizada para el pago con fines de verificación.']]},
  en:{title:'Confirm booking',contact:'Contact details',req:'* Required',help:'We will send the confirmation to this email.',
   stay:'Your stay',pay:'Payment',payText:'',pol:'Policies',ack:'Acknowledgement',price:'Price details',
   arr:'Arrival',dep:'Departure',guests:'Guests',nt:['night','nights'],ad:['adult','adults'],ch:['child','children'],unit:'Unit',
   times:'Check-in: 16:00 – 24:00 · Check-out: by 11:00',polHead:'NON REFUNDABLE.',
   pols:[['Prepayment:','To secure your reservation, full payment of the total cost of your stay is required at the time of booking.'],
    ['Cancellation and Changes:','This reservation cannot be canceled, modified, or refunded under any circumstances. In the event of a no-show or changes to your reservation, a charge equivalent to 100% of the total cost of your stay will be applied to your credit card.'],
    ['Date Flexibility:','Please note that this rate does not allow changes to the date of your stay. The payment made for this reservation is non-refundable under any circumstances.'],
    ['Credit Card Verification:','Upon check-in, the presentation of the credit card used for payment will be requested for verification purposes.']]},
  fr:{title:'Confirmer la réservation',contact:'Coordonnées',req:'* Obligatoire',help:'Nous enverrons la confirmation à cette adresse e-mail.',
   stay:'Votre séjour',pay:'Paiement',payText:'',pol:'Conditions',ack:'Acceptation',price:'Détail du prix',
   arr:'Arrivée',dep:'Départ',guests:'Voyageurs',nt:['nuit','nuits'],ad:['adulte','adultes'],ch:['enfant','enfants'],unit:'Logement',
   times:'Check-in : 16:00 – 24:00 · Check-out : jusqu’à 11:00',polHead:'TARIF NON REMBOURSABLE',
   pols:[['Prépaiement :','Pour garantir votre réservation, le paiement intégral du montant total de votre séjour est requis au moment de la réservation.'],
    ['Annulation et modifications :','Cette réservation ne peut être annulée, modifiée ou remboursée en aucun cas. En cas de non-présentation (no-show) ou de modification de votre réservation, des frais équivalents à 100 % du montant total de votre séjour seront prélevés sur votre carte de crédit.'],
    ['Flexibilité des dates :','Veuillez noter que ce tarif ne permet aucun changement de dates pour votre séjour. Le paiement effectué pour cette réservation est non remboursable en aucun cas.'],
    ['Vérification de la carte de crédit :','Lors de l’enregistrement (check-in), la présentation de la carte de crédit utilisée pour le paiement sera demandée à des fins de vérification.']]}
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

 /* título con la flecha de "Atrás" de Beds24 */
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
  var req=!!lab.querySelector('.requiredfield'), txt=lab.textContent.replace(/\*/g,'').replace(/ /g,' ').trim();
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
   var ph=document.querySelector('#guestcountry2 option'); s.appendChild(new Option(ph?ph.textContent:'—',''));
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

 /* pago: línea de texto hasta que haya pasarela */
 if(T.payText){var cPay=card('op-c-pay',esc(T.pay)+LOCK); cPay.appendChild(el('p','op-pay-t',T.payText));}

 /* políticas */
 var units=[].map.call(det.querySelectorAll('.panel-body .at_roomnametext'),function(e){return e.textContent.trim();}).filter(Boolean);
 var cP=card('op-c-pol',esc(T.pol)); cP.id='op-pol';
 cP.appendChild(el('div','op-pol-box','<p>'+esc(T.times)+'</p>'+(units.length?'<p>'+esc(T.unit)+': '+esc(units.join(', '))+'</p>':'')
  +'<h3>'+esc(T.polHead)+'</h3>'+T.pols.map(function(p){return '<p><strong>'+esc(p[0])+'</strong> '+esc(p[1])+'</p>';}).join('')));

 /* aceptación: casillas (preguntas personalizadas de Beds24) */
 if(ack.length){var cA=card('op-c-ack',esc(T.ack)); ack.forEach(function(r){cA.appendChild(r);});}

 /* lo que Beds24 añada en el futuro y no se haya colocado arriba, se queda a la vista */
 if(fields(gd)) main.insertBefore(gd,cP); else gd.classList.add('op-hide');

 /* botón de Beds24 y sello de seguridad */
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
