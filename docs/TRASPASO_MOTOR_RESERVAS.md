# Traspaso: motor de reservas de Beds24 (página, pago con tarjeta y aviso de cobro)

*2 de octubre de 2026, 10:30 h de Panamá. Lo escribe la sesión de Claude Code del motor de
reservas, que se cierra. Desde ahora trabaja una sola sesión.*

- **Repositorio:** `oceanproperties-hue/pedasi-ocean-properties-inventory`
- **Rama:** `claude/beds24-booking-page-setup-c3r7n5`
- **Beds24:** propiedad 317406 ("Ocean Properties Aparthotel & Villas"), cuenta 162170.
  Página pública: https://beds24.com/book-oceanproperties
- **Documentos relacionados:**
  - `beds24/pagos-tarjeta.md`: decisiones, textos aprobados y estado del pago con tarjeta;
  - `beds24/villas-precios.md`: plan de precios de las villas;
  - `CLAUDE.md`: reglas de trabajo de Lili.

---

## 1. Qué está hecho

### 1.1 Script de la página de reservas

- **Qué hace.** Da a la página de Beds24 el diseño de la marca (paleta Grégoire, Cormorant y
  Jost, español con "usted").
- **Dónde se carga.** En Beds24, BOOKING ENGINE › PROPERTY BOOKING PAGE › DEVELOPER, campo
  **"Insert in HTML &lt;BODY&gt; bottom"**:
  `<script src="https://assets.pedasioceanproperties.com/brand/booking/booking-page-20261002a.js"></script>`
- **Fuentes**, en `beds24/borrador/`:
  - `part_gate.js`: sello y "powered by" en todas las páginas;
  - `part_amen.js`: comodidades;
  - `part_l2_new.js`: cabecera y colores;
  - `part_l2cards.js`: buscador, tarjetas de unidades y columna derecha;
  - `part_co.js`: página de datos del huésped y pago.
- **Cómo se construye.** `python3 beds24/borrador/build.py` genera
  `beds24/borrador/booking-page-v3.js`. Esa copia se pasa a `beds24/booking-page.js`, que es
  el archivo publicado.
- **Cómo se publica.** Cada versión lleva un nombre nuevo (`booking-page-AAAAMMDDx.js`) y
  nunca se borran las anteriores:
  1. Lili sube el archivo a Bunny, carpeta `brand/booking/`.
  2. Se cambia el nombre en el campo DEVELOPER. Solo se puede en el panel.
  3. Claude Code comprueba la página publicada.
- **Qué incluye la versión publicada** (`booking-page-20261002a.js`, comprobada el 2 oct a
  las 10:05 h de Panamá):
  - **Sello de seguridad** encima de "powered by Beds24", también en el móvil y en "Payment
    Required".
  - **Sección "Pago con tarjeta"**, con nuestro diseño, encima de las condiciones. Antes, la
    tarjeta salía debajo del botón de confirmar.
  - **Etiqueta "CVV"** con el enlace "¿Dónde lo encuentro?". Abre un dibujo del reverso (3
    dígitos de Visa y Mastercard) y del frente (4 dígitos de American Express), en ES/EN/FR.
  - **Aviso de campos obligatorios** antes de enviar, incluido el número de tarjeta.
  - **Buscador:**
    - las noches se calculan solas con las fechas (el selector de Beds24 queda oculto y
      sincronizado);
    - botón **"Buscar"** dorado (Buscar, Search, Rechercher), que actualiza las unidades con
      la función de Beds24 y baja hasta ellas;
    - "Reservación múltiple" se mantiene;
    - por defecto: hoy, 1 noche y 2 adultos (lo hace Beds24).

### 1.2 Arreglo de Visa (`booking-page-20261002a.js`)

- **El fallo.** Lo encontró la reserva de prueba del 1 oct por la noche. Con
  `booking-page-20261001c.js`, un huésped que elegía **Visa** no podía enviar la reserva. El
  aviso de campos obligatorios trataba el valor `0` de una lista como vacío, y en el tipo de
  tarjeta de Beds24 el `0` es Visa.
- **El arreglo** (`part_co.js`, función `noSel`). Una lista está vacía solo si no tiene valor,
  o si vale `0` y la opción elegida es un "seleccione" o un guion.
- **Estado.** Publicado esa misma noche. El 2 oct, Claude Code comprobó en la página real que
  el formulario se envía con Visa. Cortó el envío para no crear otra reserva.

### 1.3 Ajustes de Beds24 hechos por la API (1 oct, con copia de seguridad)

| Ajuste | Antes | Ahora |
|---|---|---|
| `bookingRules.bookingType` y `bookingNearType` | `confirmedWithDepositCollection1` | `confirmedWithCreditCard` ("Collect CC": entra confirmada, sin cobro en línea) |
| `paymentGateways.creditCard` | no usada | activa, prioridad 10 |
| `cardSettings.cardAcceptAmex` | false | true |
| `cardSettings.cardRequireCVV` | false | true |
| `bookingExceptionalType` | `blackoutPeriod` | sin cambio |

Las copias de seguridad estaban en el scratchpad de la sesión, que se pierde al cerrarla. Para
volver atrás basta la columna "Antes".

### 1.4 Regla automática "Cobrar reserva web" y etiqueta "En proceso de cobro"

- **Auto Action "Cobrar reserva web"** (ID 626313), en Settings › Guest Management › Auto
  Actions.
  - **Estado:** Trigger Action **Auto** desde el 1 oct por la noche.
  - **Disparo:** evento Booking, inmediato (+0 h), ventana de 1 día, Booking Source = Direct,
    Referer `oceanproperties`, todas las reservas menos las canceladas.
  - **Pestaña Booking:** pone la etiqueta **"En proceso de cobro"**, color `ffa500`.
  - **Pestaña Messaging:** "Internal only". Internal Email Address y Email Reply To:
    `reservations@pedasioceanproperties.com` (antes, `cobros@4rentpanama.com`).
  - **Asunto:** "Cobrar reserva web [BOOKID] · [GUESTFULLNAME]".
  - **Texto:** el HTML en español es el mismo en los tres idiomas, con el texto 3 de
    `beds24/pagos-tarjeta.md`. El paso 5 dice: "5. Envíe la foto del voucher en un email
    nuevo a reservations@pedasioceanproperties.com, con el número de reserva en el asunto.
    No responda a este email: la respuesta puede llegar al huésped."
- **Etiquetas** (Booking Flag Text Values): `En proceso de cobro,FFA500`,
  `Cobrada,2E7D32` y `Cobro rechazado,D32F2F`.
- **Recogida de tarjeta:** título e instrucciones en ES/EN/FR (texto 2).
- **Mensaje "Automatic with Credit Card":** en ES/EN/FR (texto 1, "…confirmada, pendiente de
  cobro…").

### 1.5 Reserva de prueba (1 oct, 20:44 h de Panamá)

Claude Code la hizo con el navegador automático y la tarjeta ficticia 4111 1111 1111 1111
(titular PRUEBA, CVV 123, 12/2029):

- **Reserva 94046046:** PRUEBA NO VALIDA NO COBRAR, Estudio Doble Queen, 16 → 17 feb 2027,
  2 adultos, móvil ficticio +507 6000-0000, email `reservations@pedasioceanproperties.com`.
- **Comprobado por la API:**
  - estado `new` (confirmada);
  - Direct, con referer `oceanproperties`;
  - etiqueta "En proceso de cobro";
  - factura: $149,00 de alojamiento + $14,90 de "Impuesto turístico 10%" = **$163,90**.
- **La pantalla final y el email al huésped** muestran el texto 1. Ver en el apartado 2.3 el
  problema de idiomas.
- **La parte "Booking" de la Auto Action** se ejecutó (etiqueta puesta). **El email no salió**
  (apartado 2.1).
- **El filtro funciona.** El 1 oct a las 23:32 entró la reserva 94049900 (King Suite, 4–30
  oct), creada por el equipo en el panel (referer `oppedasi`). La Auto Action no la marcó.

---

## 2. Qué está pendiente y en qué punto

### 2.1 Correo de salida de Beds24 y aviso "Cobrar reserva web" en cola

- **Situación.** En la reserva 94046046, pestaña Mail & Actions:
  - "Booking · Auto · Cobrar reserva web": **done** a las 20:44;
  - "Email · Auto · Cobrar reserva web": **pending**, con botón "Send Now";
  - no hay ningún error;
  - el único email enviado es el "Booking Confirmation Message".
- **En el buzón.** El 2 oct a las 10:05 el aviso tampoco estaba en el correo conectado (que
  recibe lo que llega a reservations@), ni en spam ni en la papelera.
- **Causa probable.** Según la wiki de Beds24, los emails de las Auto Actions solo se envían
  si está configurado **SETTINGS › ACCOUNT › OUTGOING EMAIL** (correo propio por SMTP,
  Mailgun, o Gmail con contraseña de aplicación). Además, se procesan por lotes, no en el
  momento. Fuentes:
  - https://wiki.beds24.com/index.php/Auto_Actions
  - https://wiki.beds24.com/index.php/Outgoing_Email
- **En qué punto está.** Se pidió a Chrome (sin respuesta todavía) que lea, sin cambiar nada:
  1. qué hay en OUTGOING EMAIL y con qué remitente;
  2. el motivo que da Beds24 en la línea "pending" de la reserva.
- **Siguiente paso.**
  - Si falta el correo de salida, Lili tiene que conectarlo, porque hacen falta la
    contraseña de aplicación del buzón o los datos SMTP, y solo ella puede ponerlos.
  - Después, "Send Test Email". El aviso pendiente debería salir en el siguiente lote.
  - Comprobar que llega a reservations@ con el desglose y el enlace [VIEWBOOKING].
- **Mientras tanto,** las reservas de la web reciben la etiqueta naranja, pero **nadie recibe
  el aviso de cobro**. Hay que revisar a mano en Beds24 las reservas con la etiqueta "En
  proceso de cobro".

### 2.2 Cambio de contraseña para ver tarjetas

- **Situación.** En la reserva 94046046, la sección Card solo muestra "Password change
  required at Settings > Account > Account Access".
- **Consecuencia.** Mientras Lili no cambie la contraseña ahí, **nadie puede ver las
  tarjetas** para cobrarlas con el terminal. Tampoco se ha podido comprobar que la tarjeta de
  prueba (terminada en 1111) quedó guardada.
- Solo puede hacerlo Lili. Aprobado el 28 sep: solo Lili y Eugenio ven tarjetas.

### 2.3 Emails al huésped que mezclan idiomas

- **Situación.** El email de confirmación de la prueba mezcla inglés y español:
  - "Dear guest" y "Thank you for choosing…", en inglés;
  - el texto 1, en español;
  - "Please check your details", con etiquetas en inglés (Reference Number, Room, Arrival…);
  - "Best regards", en inglés.
- **Causa.** Los mensajes generales de confirmación ("first part" y "last part") solo tienen
  texto en inglés. Español y francés están vacíos.
- **Siguiente paso.**
  1. Redactar el texto en ES y FR, con la redacción de Azucena y aprobado por Lili.
  2. Ponerlo en el panel, en SETTINGS › … › Confirmation Messages. La API no lo expone.

### 2.4 Reserva de prueba 94046046

- **Decisión de Lili** (2 oct): mantenerla hasta que salga el aviso "Cobrar reserva web", para
  comprobarlo con ella.
- **Después,** cancelarla por la API con el "sí" de Lili:
  `POST /bookings` con `[{"id": 94046046, "status": "cancelled"}]`. Comprobar que no sale un
  email de cancelación a un huésped real (el email de la reserva es reservations@).
- **Eugenio y Reservas no deben cobrarla.**

### 2.5 Otros pendientes conocidos

- **Villas:** precios en Beds24 y forma de pago. Los lleva la sesión de la PWA, por decisión
  de Lili del 1 y 2 oct. Ver `beds24/villas-precios.md`.
- **CVV.** Hay que comprobar si Beds24 guarda el CVV con "Credit Card Security = Allow Cards".
  Según la wiki, solo con "Email CCV" se envía el CVV cifrado. Hay que preguntar a Eugenio si
  el terminal de BAC pide el CVV al teclear la tarjeta.
- **Términos y Condiciones:** la versión del Guest Hub tiene 21.222 caracteres y no cabe en
  General Policy (máximo 20.000). Falta decidir cómo publicarla. Las Normas de la casa
  (House Rules) en tres idiomas y para los canales siguen pendientes.
- **Página final después de reservar**, con nuestro diseño (hoy es la de Beds24), y el texto
  "Ventajas de reservar directo".
- **Staff Console, pestaña "Reservas":** para no entrar en Beds24; el voucher se adjunta y se
  marca Aprobado o Rechazado.
- **WhatsApp a Eugenio** para cada cobro.
- **Extras (upsells),** cuando se configuren: el impuesto turístico del 10 % solo sobre el
  alojamiento; los extras llevan ITBMS 7 %.
- **Subir a Bunny sin Lili:** hace falta la clave de la zona de almacenamiento en la
  configuración del entorno (`BUNNY_STORAGE_KEY` y `BUNNY_STORAGE_ZONE`). Nunca en el chat.
- **Cobro automático en línea** (Banco General, BAC o Tilopay): se analizará al terminar la
  configuración.

---

## 3. Instrucciones a Chrome y lo que cambió Chrome

Chrome trabaja en el panel de Beds24 con el usuario de Lili. Si alguien más entra con el mismo
usuario, la sesión se cae. El captcha del inicio de sesión lo resuelve Lili. Antes de cada
"Save", Chrome enseña la pantalla y espera el "sí" de Lili.

| Fecha (Panamá) | Instrucción | Resultado |
|---|---|---|
| 28–29 sep | Auditoría de solo lectura de los ajustes de tarjeta, notificaciones y Auto Actions | Hecha. Credit Card Security = "Allow Cards". Administrator Email = reservations@. Additional Booking Notification Email solo admite Disabled o All Bookings. |
| 29 sep | Guardar el título y las instrucciones de la tarjeta (ES/EN/FR), el mensaje "Automatic with Credit Card" (ES/EN/FR) y las 3 etiquetas | **Guardado** y verificado. |
| 29 sep | Crear la Auto Action "Cobrar reserva web" | **Creada en Disable**, entonces con destino cobros@4rentpanama.com. |
| 30 sep – 1 oct | Probar el formulario de reserva | Encontró la tarjeta debajo del botón de confirmar (lo arregló la versión 20261001c). No puede escribir números de tarjeta. |
| 1 oct | Cambiar DEVELOPER a 20261001b y la Auto Action a reservations@ + Auto | **No guardado:** se cerró la pestaña y la extensión dejó de responder. |
| 1 oct, noche | Cambiar DEVELOPER a 20261001c | El primer Save no guardó (texto cambiado por código; luego el permiso estaba bloqueado). Con el permiso habilitado por Lili, escrito con el teclado: **guardado**. |
| 1 oct, noche | Auto Action: Trigger Auto; Internal Email y Reply To a reservations@; paso 5 nuevo en los 3 idiomas | **Guardado** y verificado al volver a abrirla. Sin tocar el asunto, el texto plano ni el disparo. |
| 1 oct, noche | Rellenar la reserva de prueba sin confirmarla | Rellenada hasta la tarjeta. No se usó: la reserva la hizo Claude Code. |
| 1 oct, noche | Cambiar DEVELOPER a 20261002a (arreglo de Visa) | El primer Save falló y el segundo **guardó**. Verificado por Chrome y por Claude Code. |
| 1 oct, noche | Solo leer la reserva 94046046 y la Auto Action | Tarjeta no visible (falta el cambio de contraseña). Email "pending". Sin errores. No pulsó "Send Now" ni "Test". |
| 2 oct, mañana | Solo leer OUTGOING EMAIL y el motivo del "pending" | **Sin respuesta todavía.** |

---

## 4. Notas técnicas para seguir

- **API V2 de Beds24.** `GET https://beds24.com/api/v2/authentication/token` devuelve un token
  sin enviar cabecera, porque el proxy del entorno añade la credencial. El token no se
  imprime ni se guarda en el repositorio.
  - Para leer textos en todos los idiomas: `?includeTexts=all&includeLanguages=all`.
  - `POST /properties` combina campos y no reemplaza la propiedad entera.
- **Qué no expone la API:** las Auto Actions, el HTML de DEVELOPER, los mensajes de
  confirmación, el título y las instrucciones de la tarjeta, las etiquetas, Host
  Notifications y los ajustes de la cuenta. Eso solo se hace en el panel.
- **Bunny.** Desde el contenedor no se puede abrir `assets.pedasioceanproperties.com`: el
  proxy lo bloquea.
  - Para probar la página con Playwright, hay que servir el `.js` desde la copia local.
  - Chromium no confía en la CA del proxy, así que las peticiones se hacen con `fetch` de Node
    y se devuelven con `route.fulfill`.
  - Los scripts de prueba (`paypreview.cjs`, `searchpreview.cjs`, `booktest.cjs`) estaban en
    el scratchpad de la sesión y se pierden al cerrarla. `booktest.cjs` hace una reserva de
    prueba en modo `dry` (corta el POST que contiene `bookbook`) o `submit`.
- **Reservas de prueba:** solo con autorización expresa de Lili, con nombre "PRUEBA NO VALIDA
  NO COBRAR", tarjeta ficticia y email reservations@.
