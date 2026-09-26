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
