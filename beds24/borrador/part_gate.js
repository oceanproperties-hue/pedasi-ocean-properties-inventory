/* Ocean Properties · la página de datos del huésped no lleva el número de layout:
   se recuerda en la pestaña si el huésped viene del Layout 2. */
(function(){
 var m=document.body.className.match(/\blayout(\d+)\b/);
 var co=!!document.querySelector('#formbook .b24-guestdetails');
 try{
  if(m){ if(m[1]==='2') sessionStorage.setItem('opL2','1'); else sessionStorage.removeItem('opL2'); }
  else if(co && sessionStorage.getItem('opL2')==='1') document.body.classList.add('layout2','op-co');
 }catch(e){}
})();
/* Sello de seguridad justo encima de "powered by Beds24" en las páginas sin diseño propio
   (p. ej. la de pago tras solicitar la reserva). La página de datos del huésped lo coloca ella misma. */
(function(){
 if(document.body.classList.contains('op-co')) return;
 var seal=document.querySelector('.book_securelogo'), pw=document.querySelector('.book_poweredby');
 if(!seal||!pw||seal.contains(pw)||pw.contains(seal)) return;
 var old=seal.parentNode;
 pw.parentNode.insertBefore(seal,pw);
 if(old&&old!==pw.parentNode&&!old.textContent.trim()&&!old.querySelector('img,input,button,select,textarea,a')) old.style.display='none';
 var st=document.createElement('style');
 st.textContent='.book_securelogo{float:none!important;display:block!important;width:auto!important;text-align:right;margin:24px 0 6px}.book_securelogo img{height:40px;width:auto}.book_poweredby{float:none!important;text-align:right}';
 document.head.appendChild(st);
})();
