// Flujo real: página de unidades (Layout 2) -> Reservar -> página de datos del huésped. No envía ninguna reserva.
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
const fs = require('fs');
const SITE = '/home/user/pedasioceanproperties-site';
const LOCAL = {
  'https://assets.pedasioceanproperties.com/brand/logos/op-logo-horizontal-cream.svg': SITE + '/SUBIR-A-BUNNY/brand/op-logo-horizontal-cream.svg',
  'https://assets.pedasioceanproperties.com/brand/logos/op-mark-navy-deep.svg': SITE + '/SUBIR-A-BUNNY/brand/op-mark-navy-deep.svg',
  'https://assets.pedasioceanproperties.com/brand/logos/logotype-white.svg': SITE + '/SUBIR-A-BUNNY/brand/op-logo-horizontal-cream.svg',
  'https://assets.pedasioceanproperties.com/brand/logos/logotype-black.svg': SITE + '/SUBIR-A-BUNNY/brand/op-mark-navy-deep.svg',
};
(async () => {
  const [js, w, h, prefix, lang] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +w, height: +h } });
  const errors = []; p.on('pageerror', e => errors.push(String(e)));
  let posted = false;
  await p.route('**/*', async route => {
    const r = route.request(), u = r.url();
    if (!/^https?:/.test(u)) return route.continue();
    if (r.method() === 'POST' && /booking2\.php/.test(u) && (r.postData() || '').includes('bookbook')) { posted = true; return route.abort(); } // nunca enviar el formulario
    if (u.startsWith('https://assets.pedasioceanproperties.com/brand/booking/booking-page.js')) return route.fulfill({ status: 200, contentType: 'application/javascript', body: fs.readFileSync(js) });
    if (u.startsWith('https://pedasioceanproperties.com/assets/css/footer.css')) return route.fulfill({ status: 200, contentType: 'text/css', body: fs.readFileSync(SITE + '/PARA-EL-HOSTING/assets/css/footer.css') });
    if (LOCAL[u]) return route.fulfill({ status: 200, contentType: 'image/svg+xml', body: fs.readFileSync(LOCAL[u]) });
    if (/pedasioceanproperties\.com|jscache\.com|tripadvisor/.test(u)) return route.abort();
    try {
      const hd = { ...r.headers() }; delete hd['host'];
      const res = await fetch(u, { method: r.method(), headers: hd, body: r.postDataBuffer() || undefined, redirect: 'manual' });
      const body = Buffer.from(await res.arrayBuffer()); const rh = {};
      res.headers.forEach((v, k) => { if (!['content-encoding', 'content-length', 'transfer-encoding'].includes(k)) rh[k] = v; });
      await route.fulfill({ status: res.status, headers: rh, body });
    } catch (e) { await route.abort(); }
  });
  await p.goto(`https://beds24.com/booking2.php?propid=317406&layout=2&lang=${lang||'es'}&checkin_hide=2026-11-15&numnight=3&numadult=2`, { waitUntil: 'load', timeout: 90000 });
  await p.waitForFunction(() => /\d/.test((document.getElementById('ptval1-660742-2') || {}).textContent || ''), null, { timeout: 30000 }).catch(() => {});
  const stored = await p.evaluate(() => { const b = document.getElementById('brbut1-660742'); b.click(); return true; });
  await p.waitForLoadState('load'); await p.waitForTimeout(3000);
  const info = await p.evaluate(() => ({ body: document.body.className, url: location.href.slice(0, 80), nights: sessionStorage.getItem('opNights'), docW: document.documentElement.scrollWidth, inForm: [...document.querySelectorAll('input[name],select[name],textarea[name]')].filter(e => !e.closest('#formbook')).map(e => e.name) }));
  await p.screenshot({ path: prefix + '-1.png', fullPage: true });
  // desplegables abiertos y errores al salir de campos vacíos (sin enviar nada)
  await p.evaluate(() => { document.querySelectorAll('.op-lnk').forEach(b => b.click()); const h = document.querySelector('.op-acc-h'); if (h) h.click();
    ['guestfirstname', 'guestemail'].forEach(n => { const f = document.querySelector('[name=' + n + ']'); if (f) { f.focus(); f.blur(); } }); });
  await p.waitForTimeout(500);
  await p.screenshot({ path: prefix + '-2.png', fullPage: true });
  console.log(JSON.stringify({ info, posted, errors }, null, 1));
  await b.close();
})();
