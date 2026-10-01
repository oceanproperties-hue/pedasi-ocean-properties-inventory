# Villas en la página de reservas de Beds24, con el precio de Luisa y Reservas

*1 de octubre de 2026. Lili eligió la página de Beds24 (nuestro diseño) para las villas, con
la condición de que el precio sea el de la calculadora. Plan aprobado por Lili el 1 oct.*

**Reparto (Lili, 1 oct): todo lo hace CC, la sesión de la PWA.** Crea la villa, la
configura en Beds24 y envía los precios desde Supabase. Esta sesión solo revisa la página de
reservas y comprueba que los precios coincidan. Sigue abierto cómo se paga el alquiler de
las villas: tarjeta con el terminal, o transferencia del 50 %.

## Reglas de la calculadora (ocean-properties-pwa, `packages/villas/src/alboran.ts`)

- Dos temporadas: baja (16 abr – 22 dic) y alta (23 dic – 15 abr), en `villa_tarifas`.
- Cada temporada tiene cuatro precios por noche: estancia de 5–6 noches o de 7 y más,
  noche normal o festiva.
- Noche festiva: la de cada fecha de `villa_festivos` y la noche anterior.
- Semana completa: de cada 7 noches, la de menor precio no se cobra.
- ITBMS 7 % sobre el alquiler, sin el impuesto turístico del 10 %.
- Mínimo 5 noches, máximo 12 huéspedes (niños incluidos), 14 días de antelación.

## Cómo hacerlo en Beds24

| Regla | En Beds24 |
|---|---|
| Precio por noche, temporada y festivo | Dos precios diarios: "5–6 noches" (estancia mín. 5, máx. 6) y "7 y más" (mín. 7). El valor de cada fecha se envía por la API desde las tablas de Supabase. |
| Semana completa | Descuento único ("once-off") por cada 7 noches: uno a 7, otro a 14, otro a 21 y otro a 28. Se suman. Importe: la noche normal de "7 y más" de la temporada (1.300 / 2.000), una regla por temporada. |
| ITBMS 7 % | Impuesto de la propiedad de la villa (propiedad aparte, sin el 10 %). |
| 5 noches, 12 huéspedes, 14 días | Estancia mínima, máximo de personas y antelación mínima de la propiedad. |
| Entrada y salida | 15:00 y 12:00. |
| Cambios de tarifas o festivos | Cuando un administrador edita las tablas en la Staff Console, y cada noche, se reenvían los precios a Beds24. |

## Simulación (`borrador/villa_sim.py`)

Cada llegada del 15 oct 2026 al 31 dic 2027, con estancias de 5 a 28 noches:

- **De 5 a 14 noches:** coincide en el 98,2 % de las estancias.
- **De 5 a 28 noches:** coincide en el 95,8 %.
- **Todas las diferencias son estancias que cruzan el cambio de temporada** (22→23 dic o
  15→16 abr). En ellas, la noche más barata es de la otra temporada, y Beds24 descuenta
  la de la temporada de llegada.
- Para esas estancias, una de dos:
  - después de reservar, se corrige el precio de la reserva al de la calculadora por la
    API;
  - o el equipo lo revisa a mano.

## Por comprobar en Beds24, con la villa creada y antes de publicarla

- Que el descuento único se aplica sobre los precios diarios y que se suma a 14, 21 y 28
  noches.
- Que el descuento se elige por la fecha de llegada.
- Que el precio de la página coincide con la calculadora en un ejemplo de cada temporada,
  con y sin festivos.
