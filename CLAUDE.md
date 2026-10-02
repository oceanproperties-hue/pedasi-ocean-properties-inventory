# Reglas de trabajo

## Cambios en Beds24 (Lili, 1 oct 2026)

- **Primero la API, después Chrome.** Todo cambio que se pueda hacer por la API V2 de
  Beds24 lo hace Claude Code antes que Chrome. Chrome solo hace lo que la API no permite.
- **Nada se guarda sin aprobación.** Antes de guardar, se enseña a Lili qué va a cambiar
  (el texto o los valores, y la copia de seguridad) y se espera su confirmación.
- **Por la API** (`/properties`): textos de la propiedad (houseRules, generalPolicy,
  cancellationPolicy, guestDetailsHeader, confirmBookingButtonMessage, preguntas,
  descripciones), extras (upsells), reglas de reserva (tipo de reserva, IVA, redondeo),
  pasarelas y ajustes de tarjeta, plantillas template1–8, webhooks, habitaciones,
  precios y disponibilidad (`/inventory`), y reservas (`/bookings`).
- **Solo en el panel** (Chrome o Lili):
  - Auto Actions;
  - el HTML de la página de reservas (DEVELOPER, `<BODY>` bottom);
  - los mensajes de confirmación por tipo de reserva;
  - el título y las instrucciones de la recogida de tarjeta;
  - las etiquetas (Booking Flag Text Values);
  - Host Notifications;
  - Credit Card Security y el resto de ajustes de la cuenta.

- **Lo que Claude Code puede hacer, lo propone y lo hace primero** (Lili, 2 oct 2026). Antes
  de pedir algo a Lili o a Chrome, Claude Code mira si lo puede hacer él con la API, con el
  navegador automático (Playwright) o con un script. Ejemplo: la reserva de prueba la puede
  hacer él con la tarjeta ficticia. A Lili solo se le pide lo que nadie más puede hacer:
  captcha, contraseñas, subir a Bunny mientras no haya clave en el entorno, y decisiones.
  A Chrome, solo lo que exige el panel de Beds24.

## Decisiones de Lili (1 oct 2026)

- **Siempre con cuestionario.** Todo lo que dependa de Lili se le pregunta con opciones de
  respuesta, y siempre con la opción de escribir su propia respuesta si ninguna le sirve.
