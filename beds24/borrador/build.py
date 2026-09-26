head='''/* Ocean Properties \\u00b7 Beds24 booking page
   - Comodidades plegables: en todos los layouts.
   - Cabecera, titular, cierre y pie: solo en el Layout 2.
   - P\\u00e1gina de datos del hu\\u00e9sped: dise\\u00f1o propio solo si el hu\\u00e9sped viene del Layout 2.
   Se carga desde BOOKING ENGINE > PROPERTY BOOKING PAGE > DEVELOPER > Insert in HTML <BODY> bottom. */
'''
parts=[open(p,encoding='utf-8').read() for p in ['part_gate.js','part_amen.js','part_l2_new.js','part_co.js']]
s=head+''.join(p if p.endswith('\n') else p+'\n' for p in parts)
out=''.join(c if ord(c)<128 else '\\u%04x'%ord(c) for c in s)
open('booking-page-v3.js','w',encoding='ascii').write(out)
mock='''(function(){var p=document.querySelector('.b24-guestdetails .panel-body'); if(!p) return; var d=document.createElement('div');
d.innerHTML='<div class="row questionrow questionrow-guestcustomq1"><div class="col-sm-4"><span class="requiredfield">*</span> &nbsp;He le\\u00eddo y acepto la <a href="#op-pol">pol\\u00edtica de cancelaci\\u00f3n</a> y la <a href="https://pedasioceanproperties.com/privacy/" target="_blank">pol\\u00edtica de privacidad</a>.</div><div class="col-sm-8 col-xs-12"><div class="booktextdiv"><input type="checkbox" id="op-mock-ack"></div></div></div>';
p.appendChild(d.firstChild);})();
'''
pv=out.replace("stay:'Tu estancia',pay:'Pago',payText:''","stay:'Tu estancia',pay:'Pago',payText:'[Aqu\\u00ed va tu l\\u00ednea sobre c\\u00f3mo se paga]'")
assert pv!=out
open('preview.js','w').write(mock+pv)
print(len(out))
