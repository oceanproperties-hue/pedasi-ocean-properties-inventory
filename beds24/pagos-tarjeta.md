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

Beds24 → "Additional Booking Notification Email", solo reservas de la página de reservas.
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
    5. Responda a este email con la foto del voucher.

    Nunca anote la tarjeta en papel, chat ni hojas.

- [INVOICETABLE] muestra cada línea (alojamiento, impuesto, extras futuros) y el total.
- [AVBASEPRICE] es la media por noche del alojamiento si las noches tienen precios distintos.
- cobros@ no se reenvía: el enlace [VIEWBOOKING] da acceso a la reserva.

## Pendientes derivados

- Al configurar extras (upsells): el impuesto turístico 10 % solo sobre el alojamiento;
  los extras con ITBMS 7 %.
