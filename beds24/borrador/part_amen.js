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
