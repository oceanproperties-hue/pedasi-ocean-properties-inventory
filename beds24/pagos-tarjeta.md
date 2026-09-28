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
- **Aviso de cobro** (email a cobros@4rentpanama.com + WhatsApp a Eugenio): solo para
  reservas de la web y del agente, nunca de canales.
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

### 3. Email interno a cobros@4rentpanama.com (reservas de la web)

Beds24 → **Auto Action** (el "Additional Booking Notification Email" solo admite "todas las reservas", canales incluidos).
Disparo: Booking, inmediato; Booking Source = Direct; Referrer = el de la página de reservas (comprobar en la prueba);
estado: todos menos cancelada. Acción: email interno a cobros@ y etiqueta "En proceso de cobro".
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
    5. Envíe la foto del voucher a cobros@4rentpanama.com, con el número de reserva en el asunto. No responda a este email: la respuesta puede llegar al huésped.

    Nunca anote la tarjeta en papel, chat ni hojas.

- [INVOICETABLE] muestra cada línea (alojamiento, impuesto, extras futuros) y el total.
- [AVBASEPRICE] es la media por noche del alojamiento si las noches tienen precios distintos.
- cobros@ no se reenvía: el enlace [VIEWBOOKING] da acceso a la reserva.

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

## Pendientes derivados

- Mensajes generales de confirmación en español y francés (hoy solo inglés).
- Al configurar extras (upsells): el impuesto turístico 10 % solo sobre el alojamiento;
  los extras con ITBMS 7 %.
