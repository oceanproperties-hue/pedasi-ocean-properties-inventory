// Vista previa: carga la página real de Beds24 y sirve el script nuevo en lugar del de Bunny.
// uso: node shot4.cjs <url> <salida.png> <ancho> <alto> <script.js> [fullPage=1] [clickSelector]
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
const fs = require('fs');
const SITE = '/home/user/pedasioceanproperties-site';
const LOCAL = {
  'https://assets.pedasioceanproperties.com/brand/logos/op-logo-horizontal-cream.svg': [SITE + '/SUBIR-A-BUNNY/brand/op-logo-horizontal-cream.svg', 'image/svg+xml'],
  'https://assets.pedasioceanproperties.com/brand/logos/op-mark-navy-deep.svg': [SITE + '/SUBIR-A-BUNNY/brand/op-mark-navy-deep.svg', 'image/svg+xml'],
  // sin acceso desde aquí al logotype: en la vista previa se usa el horizontal crema en su lugar
  'https://assets.pedasioceanproperties.com/brand/logos/logotype-white.svg': [SITE + '/SUBIR-A-BUNNY/brand/op-logo-horizontal-cream.svg', 'image/svg+xml'],
};
(async () => {
  const [url, out, w, h, js, full, click] = process.argv.slice(2);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 1 });
  if (!process.env.NOFLAG) await p.addInitScript(() => { try { sessionStorage.setItem('opL2', '1'); } catch (e) {} });
  const errors = [];
  p.on('pageerror', e => errors.push(String(e)));
  await p.route('**/*', async route => {
    const r = route.request(), u = r.url();
    if (!/^https?:/.test(u)) return route.continue();
    if (u.startsWith('https://assets.pedasioceanproperties.com/brand/booking/booking-page.js'))
      return route.fulfill({ status: 200, contentType: 'application/javascript', body: fs.readFileSync(js) });
    if (u.startsWith('https://pedasioceanproperties.com/assets/css/footer.css'))
      return route.fulfill({ status: 200, contentType: 'text/css', body: fs.readFileSync(SITE + '/PARA-EL-HOSTING/assets/css/footer.css') });
    if (LOCAL[u]) return route.fulfill({ status: 200, contentType: LOCAL[u][1], body: fs.readFileSync(LOCAL[u][0]) });
    if (/pedasioceanproperties\.com|jscache\.com|tripadvisor/.test(u)) return route.abort();
    try {
      const hdrs = { ...r.headers() }; delete hdrs['host'];
      const res = await fetch(u, { method: r.method(), headers: hdrs, body: r.postDataBuffer() || undefined, redirect: 'manual' });
      const body = Buffer.from(await res.arrayBuffer());
      const rh = {}; res.headers.forEach((v, k) => { if (!['content-encoding', 'content-length', 'transfer-encoding'].includes(k)) rh[k] = v; });
      await route.fulfill({ status: res.status, headers: rh, body });
    } catch (e) { await route.abort(); }
  });
  await p.goto(url, { waitUntil: 'load', timeout: 90000 });
  await p.waitForTimeout(2500);
  if (click) { await p.click(click); await p.waitForTimeout(600); }
  await p.screenshot({ path: out, fullPage: full !== '0' });
  const info = await p.evaluate(() => ({
    body: document.body.className,
    docW: document.documentElement.scrollWidth, winW: innerWidth,
    formInputs: [...document.querySelectorAll('#formbook input,#formbook select,#formbook textarea')].filter(e => e.name).map(e => e.name + '=' + (e.type === 'hidden' ? 'h' : 'v')).join(' '),
    outsideForm: [...document.querySelectorAll('input[name],select[name],textarea[name]')].filter(e => !e.closest('#formbook')).map(e => e.name),
    fonts: [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + ' ' + f.weight).join(', ')
  }));
  console.log(JSON.stringify({ info, errors }, null, 1));
  await b.close();
})();
