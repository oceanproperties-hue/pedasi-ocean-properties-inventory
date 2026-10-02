# Pago provisional con tarjeta guardada en Beds24 y cobro con terminal físico

*28 de septiembre de 2026. Decisiones de Lili. Hasta que se configure el pago automático.*

## Decisiones

- **Compra-Click se retira.** Todo el pago va por Beds24: el huésped deja la tarjeta
  (sin cobro en línea) y el equipo la cobra con el terminal físico de BAC. Vale para la
  web y para las reservas del agente (enlace seguro de Beds24).
- **Reserva web: "Collect CC".** Entra confirmada al momento y bloquea la unidad. El
  huésped la recibe como *pendiente de cobro*. En Beds24 la diferencia entre cobrada y
  sin cobrar es la etiqueta de color: "En proceso de cobro" → "Cobrada".
- **Tarjetas:** Visa, Mastercard y American Express. Código de seguridad obligatorio.
- **Plazo de cobro:** 2 horas desde la reserva, con recordatorio a Eugenio y aviso a
  Lili si no hay voucher. De 9 pm a 7 am el plazo empieza a las 7 am.
- **Cobro rechazado:** aviso delicado al huésped por email y WhatsApp: otra tarjeta, o
  autorizar el cobro con su banco (frecuente con tarjetas europeas e internacionales).
  La unidad queda bloqueada 4 horas de cortesía. Después **se libera sin cancelar**
  (la reserva sigue viva; si paga después y la unidad sigue libre, se recupera).
- **Aviso de cobro** (email a reservations@pedasioceanproperties.com + WhatsApp a
  Eugenio): solo para reservas de la web y del agente, nunca de canales. Hasta el 1 oct
  iba a cobros@4rentpanama.com.
- **Voucher:** Eugenio adjunta la foto del voucher del terminal y marca Aprobado o
  Rechazado. Si un voucher imprimiera el número completo de la tarjeta, no se guarda.
- **Mientras la pestaña Reservas de la Staff Console no esté lista:** se activa ya y se
  trabaja a mano con el email de Beds24.
- Aprobado el 28 sep (sesión anterior): el código de seguridad va a
  cobros@4rentpanama.com y solo Lili y Eugenio pueden ver tarjetas.

## Textos aprobados

### 1. Mensaje al terminar la reserva ("Collect CC")

- **ES:** Gracias por su reserva. Hemos recibido los datos de su tarjeta. Su reserva
  queda confirmada, pendiente de cobro. En las próximas horas realizaremos el cargo y le
  enviaremos la confirmación del pago.
- **EN:** Thank you for your reservation. We have received your card details. Your
  reservation is confirmed, pending payment. Within the next few hours we will process
  the charge and send you the payment confirmation.
- **FR:** Merci pour votre réservation. Nous avons bien reçu les données de votre carte.
  Votre réservation est confirmée, en attente de paiement. Dans les prochaines heures,
  nous effectuerons le débit et vous enverrons la confirmation du paiement.

### 2. Instrucciones del formulario de tarjeta (web y enlace del agente)

**ES**

    Complete aquí el pago de su reserva.
    El cargo se realiza en las próximas horas. Recibirá la confirmación por email y, si nos indicó su WhatsApp, también por WhatsApp.
    Pago cifrado y protegido bajo la norma internacional de seguridad para tarjetas. Nunca le pediremos estos datos por teléfono, WhatsApp ni email.
    Visa, Mastercard y American Express.

**EN**

    Complete the payment for your reservation here.
    The charge is processed within the next few hours. You will receive confirmation by email and, if you shared your WhatsApp, by WhatsApp as well.
    Encrypted payment, protected under the international card security standard. We will never ask for these details by phone, WhatsApp or email.
    Visa, Mastercard and American Express.

**FR**

    Finalisez ici le paiement de votre réservation.
    Le débit est effectué dans les prochaines heures. Vous recevrez la confirmation par e-mail et, si vous nous avez indiqué votre WhatsApp, également par WhatsApp.
    Paiement chiffré, protégé selon la norme internationale de sécurité des cartes. Nous ne vous demanderons jamais ces données par téléphone, WhatsApp ou e-mail.
    Visa, Mastercard et American Express.

### 3. Email interno de cobro a reservations@pedasioceanproperties.com (reservas de la web)

Beds24 → **Auto Action** (el "Additional Booking Notification Email" solo admite "todas las reservas", canales incluidos).
Disparo: Booking, inmediato; Booking Source = Direct; Referrer = el de la página de reservas (comprobar en la prueba);
estado: todos menos cancelada. Acción: email interno a reservations@ y etiqueta "En proceso de cobro".
Los corchetes son variables de Beds24. Comprobar en la prueba que cada una sale bien.

**Asunto:** Cobrar reserva web [BOOKID] · [GUESTFULLNAME]

    Nueva reserva de la web, pendiente de cobro.

    Abrir la reserva en Beds24 y cobrar: [VIEWBOOKING]

    Reserva: [BOOKID]
    Huésped: [GUESTFULLNAME]
    Móvil: [GUESTMOBILE] · Email: [GUESTEMAIL]
    Unidad: [ROOMNAME]
    Llegada: [FIRSTNIGHT] · Salida: [LEAVINGDAY]

    Precio por noche: [AVBASEPRICE] · Noches: [NUMNIGHT]

    [INVOICETABLE]

    Total a cobrar: [INVOICEBALANCE]

    Plazo: 2 horas. Si la reserva entra entre las 9 pm y las 7 am, el plazo empieza a las 7 am.

    1. Con el terminal delante, pulse el enlace de arriba y vea la tarjeta. Beds24 le pedirá su contraseña y la muestra una sola vez.
    2. Cobre el total en el terminal.
    3. Si sale aprobado: cambie la etiqueta a "Cobrada", anote el pago en la reserva y envíe al huésped la confirmación por email y WhatsApp.
    4. Si sale rechazado: cambie la etiqueta a "Cobro rechazado" y envíe al huésped el aviso. La unidad queda bloqueada 4 horas. Pasado ese tiempo sin otra tarjeta, cambie el estado a Inquiry: la reserva sigue, pero la unidad queda libre.
    5. Envíe la foto del voucher en un email nuevo a reservations@pedasioceanproperties.com, con el número de reserva en el asunto. No responda a este email: la respuesta puede llegar al huésped.

    Nunca anote la tarjeta en papel, chat ni hojas.

- [INVOICETABLE] muestra cada línea (alojamiento, impuesto, extras futuros) y el total.
- [AVBASEPRICE] es la media por noche del alojamiento si las noches tienen precios distintos.
- El email de cobro no se reenvía: el enlace [VIEWBOOKING] da acceso a la reserva.
- Paso 5: el 1 oct cambia la dirección (antes cobros@4rentpanama.com) y se añade "en un
  email nuevo". Pendiente de aprobar.

### 4. Pago confirmado (email y WhatsApp al huésped; a mano hasta que exista la consola)

**ES** — Asunto: Reserva [número de reserva] confirmada

    Su reserva [número de reserva] está confirmada. Hemos realizado el cobro de [total], impuesto turístico incluido.
    Le esperamos en [tipo de alojamiento], del [llegada] al [salida].
    Para cualquier consulta, puede responder a este mensaje.
    Ocean Properties

**EN** — Subject: Reservation [número de reserva] confirmed

    Your reservation [número de reserva] is confirmed. We have processed the charge of [total], tourist tax included.
    We look forward to welcoming you to [tipo de alojamiento], from [llegada] to [salida].
    For any questions, reply to this message.
    Ocean Properties

**FR** — Objet : Réservation [número de reserva] confirmée

    Votre réservation [número de reserva] est confirmée. Nous avons effectué le prélèvement de [total], taxe de séjour incluse.
    Nous vous attendons dans [tipo de alojamiento], du [llegada] au [salida].
    Pour toute question, répondez à ce message.
    Ocean Properties

### 5. Cobro no autorizado (email y WhatsApp al huésped)

**ES** — Asunto: Su reserva [número de reserva], pago pendiente

    Al cobrar su reserva [número de reserva], del [llegada] al [salida], su banco no autorizó el cargo. Es habitual con tarjetas internacionales: algunos bancos piden autorizarlo antes.
    Puede pagar con otra tarjeta en este enlace seguro: [enlace seguro]
    O, tras autorizar el cargo con su banco, usar la misma tarjeta en ese enlace.
    Mantenemos su alojamiento reservado 4 horas, hasta las [hora].
    Para cualquier consulta, puede responder a este mensaje.
    Ocean Properties

**EN** — Subject: Your reservation [número de reserva], payment pending

    When charging your reservation [número de reserva], from [llegada] to [salida], your bank did not authorize the payment. This is common with international cards: some banks require prior approval.
    You can pay with another card at this secure link: [enlace seguro]
    Or, once your bank authorizes the charge, use the same card at that link.
    Your accommodation is held for 4 hours, until [hora].
    For any questions, reply to this message.
    Ocean Properties

**FR** — Objet : Votre réservation [número de reserva], paiement en attente

    Votre banque n'a pas autorisé le débit de votre réservation [número de reserva], du [llegada] au [salida]. C'est fréquent avec les cartes internationales : certaines banques demandent une autorisation préalable.
    Vous pouvez payer avec une autre carte via ce lien sécurisé : [enlace seguro]
    Ou, après accord de votre banque, utiliser la même carte sur ce lien.
    Votre hébergement reste réservé 4 heures, jusqu'à [hora].
    Pour toute question, répondez à ce message.
    Ocean Properties

- [enlace seguro] = https://beds24.com/bookpay.php?bookid=NÚMERO&g=cc (comprobar en la prueba).
- Si en la prueba la tarjeta no se borra al verla, revisar la frase de "usar la misma tarjeta".

## Ajustes de Beds24 (lectura del 28 sep con la API y Chrome)

| Ajuste | Hoy | Cambio |
|---|---|---|
| Booking Type (Normal y Near Term) | confirmedWithDepositCollection1 (100 %, sin pago → Inquiry) | confirmedWithCreditCard ("Collect CC") — por API |
| Credit Card Collection | Not Used | Prioridad 10 — por API |
| Tarjetas | Visa, Mastercard | + American Express — por API |
| Código de seguridad | No obligatorio | Obligatorio — por API |
| Credit Card Security (cuenta) | Allow Cards | Sin cambio |
| Título de la pasarela (ES/EN/FR) | vacío | Pago con tarjeta · Card payment · Paiement par carte |
| Instruction (ES/EN/FR) | vacío | Texto 2 |
| Confirmation Messages → "Automatic with Credit Card" (ES/EN/FR) | vacío | Texto 1 |
| Booking Flag Text Values | Arrived, Departed, Paid, VIP | + En proceso de cobro,FFA500 · Cobrada,2E7D32 · Cobro rechazado,D32F2F |
| Host Notifications → Additional Booking Notification Email | Disabled (solo Disabled / All Bookings) | Sin cambio: se usa una Auto Action |
| Administrator Email | reservations@pedasioceanproperties.com; las notificaciones responden al email del huésped | Sin cambio |
| Use New Booking Status | Allowed | Sin cambio |
| Account Access (quién ve tarjetas) | pide contraseña | Lili escribe la contraseña; Chrome solo lee |

Pendiente aparte: los mensajes generales de confirmación ("first part" y "last part") solo
tienen texto en inglés; español y francés están vacíos.

## Estado de la configuración (29 sep, noche)

- Guardado y verificado con Chrome: título e instrucciones de la tarjeta (ES/EN/FR),
  mensaje "Automatic with Credit Card" (ES/EN/FR) y las 3 etiquetas nuevas.
- Auto Action "Cobrar reserva web": rellenada (Trigger: Booking · Immediate · Direct ·
  Referer oceanproperties · All Not Cancelled; Messaging: Internal only a cobros@, Reply To
  cobros@, asunto y HTML en ES/EN/FR; Booking: flag "En proceso de cobro" ffa500).
  Se guarda en **Disable** hasta la activación. El 1 oct: pasar el destinatario y el Reply To a
  reservations@pedasioceanproperties.com y cambiar el paso 5.
- Sin aplicar (API): Collect CC, pasarela de tarjeta, Amex y CVV obligatorio. Copia y
  vuelta atrás preparadas en el scratchpad.
- Activación pendiente, con Lili presente: 1) Auto Action a Auto; 2) cambios por API;
  3) reserva de prueba en la web y cancelación.
- La sesión de Chrome se cae cuando otra persona entra con el usuario oppedasi.

## Arquitectura de cobro (decisión de Lili, 1 oct)

Sustituye lo decidido antes para las villas (garantía sin cargo, transferencia con
comprobante y plazo de 24 horas).

- **Todo se cobra con tarjeta, también las villas.** El huésped deja la tarjeta en
  Beds24 (sin cobro en línea). La reserva entra confirmada y pendiente de cobro. El
  equipo cobra el total con el terminal físico. La página de reservas trata igual las
  villas y el aparthotel.
- **El aviso de cobro llega a reservations@pedasioceanproperties.com**, en lugar de
  cobros@4rentpanama.com. Hay que cambiar la Auto Action (destinatario, Reply To y el
  paso 5).
- **Voucher:** hasta que exista la pestaña Reservas de la Staff Console, la foto se
  envía en un email nuevo a reservations@, con el número de reserva en el asunto.
- **Transferencia:** solo como alternativa del agente en casos concretos. La web solo
  admite tarjeta.
- **Villas: depósito por daños aparte, además del alquiler.** Falta definir el importe
  por villa y cómo se hace en el terminal: una retención (preautorización), o un cargo
  que se devuelve tras la salida. Depende de si Beds24 sigue mostrando la tarjeta
  después de verla una vez; se comprueba en la reserva de prueba.
- **En la web se reservan todas las villas, también Villa Alborán con precio.** Esto
  cambia la regla de marca anterior ("solo por contacto directo").
- **Cobro automático en línea:** pendiente. Al terminar la configuración se compara
  Banco General, BAC y Tilopay.

Cuando las villas estén en Beds24 (hoy solo están las 7 unidades del aparthotel):
- Comprobar que la Auto Action "Cobrar reserva web" las incluye.
- Añadir el depósito al texto de la tarjeta y al email de cobro.
- Cuadrar los horarios de los T&C: las villas tienen entrada a las 3 pm y salida a las
  12 pm; los T&C dicen 4 pm y 11 am.

## Estado (2 oct)

- **Página de reservas publicada con `booking-page-20261001c.js`**: sello, sección "Pago con
  tarjeta" encima de las condiciones, CVV con "¿Dónde lo encuentro?", noches calculadas con
  las fechas y botón "Buscar". Guardado por Chrome y comprobado por Claude Code y por Chrome.
- **Auto Action "Cobrar reserva web" en Auto.** Envía a reservations@pedasioceanproperties.com
  (destinatario y Reply To) con el paso 5 nuevo en los tres idiomas. Comprobado por Chrome
  al volver a abrirla.
- Ya activos por la API desde el 1 oct: Collect CC, recogida de tarjeta, Amex y CVV
  obligatorio.
- Falta la reserva de prueba: comprobar el email, la etiqueta, el referer y la factura, y
  cancelarla por la API.

## Reserva de prueba (2 oct, noche)

Hecha por Claude Code con el navegador automático y la tarjeta ficticia 4111…1111, sobre la
página publicada:
- **Reserva 94046046**: PRUEBA NO VALIDA NO COBRAR, Estudio Doble Queen, 16→17 feb 2027,
  2 adultos, $149 + impuesto turístico 10 % $14,90 = $163,90.
- **Bien:** estado confirmada ("new"); Direct con referer "oceanproperties"; la Auto Action
  puso la etiqueta "En proceso de cobro" (naranja); la pantalla final y el email al
  huésped muestran el texto 1.
- **Fallo encontrado y corregido:** con `booking-page-20261001c.js`, un huésped que elige
  Visa no podía enviar la reserva, porque el aviso de campos obligatorios trataba el valor 0
  (Visa) como vacío. Arreglo en `booking-page-20261002a.js`, ya subido a Bunny por Lili.
- **Sin resolver:** el aviso interno "Cobrar reserva web" no llegó al buzón conectado (ni
  spam ni papelera), y el email al huésped sí.
- **El email al huésped mezcla inglés y español** ("Dear guest", "Please check your
  details", "Best regards"): faltan los mensajes generales de confirmación en ES y FR.

### Pendientes para el 3 oct

1. **Chrome:** cambiar el nombre del archivo en DEVELOPER de 20261001c a 20261002a.
   Después, Claude Code comprueba la página publicada y que Visa funciona.
2. **Chrome, solo lectura:**
   - que la reserva 94046046 tiene la tarjeta terminada en 1111;
   - si salió el email "Cobrar reserva web" y por qué no llegó.
3. **Cancelar la reserva 94046046 por la API** cuando esté revisada, con el "sí" de Lili.
4. Mensajes generales de confirmación en español y francés (en el panel).
5. Decidir cómo se paga el alquiler de las villas: tarjeta con el terminal, o
   transferencia del 50 %.

## Pendientes derivados

- Cabecera de "datos del huésped" (guestDetailsHeader): se deja vacía (Lili, 1 oct). El
  diseño de la página ya pone "CVV" y el dibujo "¿Dónde lo encuentro?".

- Mensajes generales de confirmación en español y francés (hoy solo inglés).
- Al configurar extras (upsells): el impuesto turístico 10 % solo sobre el alojamiento;
  los extras con ITBMS 7 %.
