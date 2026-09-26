# Construye booking-page-v3.js (ASCII, con \u) y las versiones de vista previa.
head='''/* Ocean Properties \\u00b7 Beds24 booking page
   - Comodidades plegables: en todos los layouts.
   - Layout 2: cabecera, titular, tarjetas de unidades, columna derecha y pie.
   - P\\u00e1gina de datos del hu\\u00e9sped: dise\\u00f1o propio solo si el hu\\u00e9sped viene del Layout 2.
   Se carga desde BOOKING ENGINE > PROPERTY BOOKING PAGE > DEVELOPER > Insert in HTML <BODY> bottom. */
'''
parts=[open(p,encoding='utf-8').read() for p in ['part_gate.js','part_amen.js','part_l2_new.js','part_l2cards.js','part_co.js']]
s=head+''.join(p if p.endswith('\n') else p+'\n' for p in parts)
asc=lambda x:''.join(c if ord(c)<128 else '\\u%04x'%ord(c) for c in x)
out=asc(s)
open('booking-page-v3.js','w',encoding='ascii').write(out)

def must(a,b,src):
    assert src.count(a)==1, a
    return src.replace(a,b)
# --- vista previa (solo para capturas; no se publica) ---
ack='''(function(){var p=document.querySelector('.b24-guestdetails .panel-body'); if(!p) return; var d=document.createElement('div');
d.innerHTML='<div class="row questionrow questionrow-guestcustomq1"><div class="col-sm-4"><span class="requiredfield">*</span> &nbsp;He le\\u00eddo y acepto la <a href="#op-pol">pol\\u00edtica de cancelaci\\u00f3n</a> y la <a href="https://pedasioceanproperties.com/privacy/" target="_blank">pol\\u00edtica de privacidad</a>.</div><div class="col-sm-8 col-xs-12"><div class="booktextdiv"><input type="checkbox" id="op-mock-ack"></div></div></div>';
p.appendChild(d.firstChild);})();
'''
rate='''(function(){[].forEach.call(document.querySelectorAll('.b24room .offer'),function(o){var n=o.querySelector('.at_offername'),s=o.querySelector('.at_offersummary');
if(n) n.textContent='Tarifa no reembolsable'; if(s) s.innerHTML='<ul><li>Pago total al reservar.</li><li>No admite cancelaciones, cambios ni reembolsos.</li></ul>';});})();
'''
pv=must("stay:'Tu estancia',pay:'Pago',payText:''","stay:'Tu estancia',pay:'Pago',payText:'[Aqu\\u00ed va tu l\\u00ednea sobre c\\u00f3mo se paga]'",out)
pv=must("es:{adv:'Ventajas de reservar directo',advItems:[]","es:{adv:'Ventajas de reservar directo',advItems:['[Ventaja 1: tu texto]','[Ventaja 2: tu texto]','[Ventaja 3: tu texto]']",pv)
open('preview.js','w').write(ack+rate+pv)
open('preview-b-sin-tarifa.js','w').write(ack+pv)
open('preview-a.js','w').write(ack+rate+must("ORDER='b'","ORDER='a'",pv))
print(len(out))
