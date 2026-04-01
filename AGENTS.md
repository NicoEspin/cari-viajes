## Proyecto

Landing page premium para **Cari Turismo**, empresa de turismo y viajes de Villa Carlos Paz, Córdoba, Argentina.

## Objetivo principal

Construir una landing page **Awwwards-worthy** orientada a **conversión por WhatsApp**.

## Objetivos secundarios

- Posicionar la marca como una opción joven, aventurera y confiable.
- Generar recordación visual fuerte.
- Dejar una base escalable para futuras páginas internas:
  - Excursiones
  - Atractivos en la ciudad
  - Traslados / experiencias especiales
- Dejar la base SEO correctamente planteada desde el inicio.

---

## Stack obligatorio

- Next.js
- TypeScript
- Tailwind CSS
- GSAP

## Skills instaladas y cuándo usarlas

### 1. frontend-design

Usar esta skill siempre que haya que:

- definir layouts
- resolver jerarquía visual
- diseñar secciones
- trabajar dirección estética
- evitar resultados genéricos
- refinar UI de la landing

### 2. gsap-core

Usar esta skill siempre que haya que:

- crear animaciones base
- construir entrance animations
- definir easing, stagger, duration
- animar hero, badges, CTAs, cards y reveals
- mantener calidad visual sin caer en motion innecesario

### 3. seo-audit

Usar esta skill siempre que haya que:

- definir estructura SEO on-page
- revisar headings
- revisar title/meta description
- mejorar semántica
- validar arquitectura de contenido
- optimizar páginas para “excursiones en Carlos Paz”

### 4. vercel-react-best-practices

Usar esta skill siempre que haya que:

- optimizar performance en Next.js
- reducir client JS innecesario
- mejorar bundle
- evitar waterfalls
- decidir server/client boundaries
- revisar rendering y re-render patterns

---

## Identidad del proyecto

### Marca

Cari Turismo

### Territorio

Villa Carlos Paz, Córdoba, Argentina

### Público prioritario

Jóvenes

### Tono

- joven
- aventurero
- fresco
- cercano
- seguro
- con personalidad local

### No queremos

- look corporativo frío
- look de plantilla
- estética de agencia de viajes genérica
- exceso de texto plano
- secciones aburridas o repetitivas
- animaciones sin función
- landing visualmente correcta pero olvidable

---

## Conversión

### CTA principal

**WhatsApp** es la conversión principal y debe dominar toda la experiencia.

### CTA secundario

Instagram funciona solo como apoyo de confianza y presencia de marca.
Nunca debe competir con WhatsApp.

### Regla

Cada sección importante debe tener una salida clara hacia WhatsApp, directa o contextual.

---

## SEO y semántica

### Keyword principal

- excursiones en Carlos Paz

### Requisitos obligatorios

- HTML semántico real
- una sola jerarquía clara de H1/H2/H3
- title y meta description bien pensados
- contenido útil, no relleno
- estructura preparada para enlazado interno futuro
- alt text descriptivo
- performance SEO-friendly desde la primera versión

### Regla

No sacrificar SEO por diseño.
No sacrificar diseño por SEO.
Ambos deben convivir desde el principio.

---

## Dirección visual obligatoria

La landing debe sentirse:

- premium
- editorial
- turística
- dinámica
- joven
- aventurera
- memorable

### Paleta base de marca

- `#048b72`
- `#fccb3e`
- `#ecf93e`

### Tipografías obligatorias

- **Montserrat** para textos
- **Cooper BT** para títulos

### Regla tipográfica

Cooper BT debe usarse con intención:

- hero
- títulos clave
- frases memorables
- acentos de identidad

Montserrat debe sostener:

- cuerpo
- navegación
- botones
- labels
- contenido funcional

### Regla visual

No usar la paleta de forma plana o chillona.
Construir un sistema cromático maduro con:

- fondos
- superficies
- neutrales
- colores de texto
- bordes
- overlays
- estados hover/focus/active

---

## Motion direction

GSAP no se usa para decorar.
GSAP se usa para:

- crear jerarquía
- dar ritmo
- aumentar recordación
- hacer sentir la marca más premium
- mejorar percepción del recorrido

### Sí queremos

- hero reveal fuerte
- entrances con timing elegante
- hover motion sutil pero premium
- transición de bloques con intención
- motion que acompañe la lectura
- pequeños momentos memorables

### No queremos

- scroll hijacking
- animaciones pesadas
- todo moviéndose al mismo tiempo
- delays molestos
- experiencia lenta
- motion que rompa mobile

### Regla

Si una animación no mejora percepción, narrativa o jerarquía, no se implementa.

---

## Mobile-first

El sitio se diseña primero para mobile en términos de decisión de contenido y claridad de uso.

### Prioridades mobile

- CTA de WhatsApp visible
- lectura rápida
- jerarquía inmediata
- scroll claro
- performance alta
- botones cómodos
- contenido escaneable
- impacto visual sin sobrecarga

### Regla

La versión mobile no es una adaptación tardía.
Es parte central de la estrategia porque el público prioritario es joven.

---

## Contenido inicial de la home

La home no debe intentar vender todo.
Debe seleccionar highlights con criterio.

### Secciones base esperadas

- Header / Navbar
- Hero
- Propuesta de valor
- Highlights de experiencias / excursiones
- Beneficios / diferenciales
- Bloque de confianza
- CTA fuerte a WhatsApp
- Instagram como apoyo
- FAQ
- Footer

### Regla

La home debe actuar como:

- pieza de marca
- pieza de conversión
- puerta de entrada a páginas futuras

---

## Oferta disponible para usar estratégicamente

La marca trabaja con:

- atractivos en la ciudad
- excursiones
- city tours
- experiencias para grupos
- traslados especiales

Ejemplos actuales:

- City Tour Lacustre
- Bar de Hielo + Mundo Irreal
- Aerosilla
- City Bus Turístico para grupos
- Valle de Punilla
- Dique Los Molinos + Villa General Belgrano
- La Cumbrecita + Villa General Belgrano
- Altas Cumbres con Los Túneles
- Cascada Escondida
- Traslados especiales

### Regla

No listar todo como catálogo plano.
Curar highlights para la home.
Pensar escalabilidad hacia páginas específicas.

---

## Implementación técnica

### App structure esperada

Usar Next.js con estructura limpia y escalable.

### Reglas

- separar secciones en componentes
- separar UI reusable de sections
- centralizar contenido editable cuando convenga
- evitar lógica innecesaria en componentes visuales
- mantener naming claro y consistente
- evitar dependencias innecesarias
- preferir composición simple y mantenible

### Ideal structure

- `app/`
- `components/layout`
- `components/sections`
- `components/ui`
- `content/`
- `lib/`
- `hooks/`
- `styles/`

### Regla

Cada sección debe poder evolucionar sin romper el resto de la landing.

---

## Performance rules

Siempre aplicar criterio de performance desde la primera implementación.

### Obligatorio

- minimizar client components
- usar Server Components cuando tenga sentido
- evitar bundles innecesarios
- lazy load donde aporte
- optimizar imágenes
- no meter librerías visuales innecesarias
- usar GSAP con limpieza correcta
- evitar re-renders gratuitos
- respetar Core Web Vitals

### Regla

Toda decisión visual debe justificarse también en costo de rendimiento.

---

## Accesibilidad mínima obligatoria

- contraste suficiente
- focus states visibles
- botones y links claros
- jerarquía semántica
- textos legibles
- reduced motion contemplado
- navegación razonable con teclado
- alt text real
- evitar usar color como única señal

---

## Flujo de trabajo del agente

### Antes de codear

1. Entender el objetivo comercial.
2. Revisar el PRD y traducirlo a una arquitectura concreta.
3. Definir plan de implementación por etapas.
4. Identificar qué partes requieren cada skill.
5. Confirmar estructura de componentes antes de empezar.

### Durante el desarrollo

1. Resolver primero estructura, layout y sistema visual.
2. Después contenido y jerarquía.
3. Después motion.
4. Después refinamiento responsive.
5. Después SEO, performance y accesibilidad audit.

### Antes de cerrar una tarea

Siempre validar:

- ¿Se ve distintivo o se ve genérico?
- ¿Convierte a WhatsApp con claridad?
- ¿Respeta el tono joven y aventurero?
- ¿Se siente premium?
- ¿Mantiene semántica correcta?
- ¿Mantiene buena performance?
- ¿La experiencia mobile está bien resuelta?

---

## Primera versión esperada

La primera versión puede usar un componente visual de prueba en zonas donde todavía no haya fotografía final.
Aun así, debe sentirse intencional y de alto nivel.

### Regla

No usar placeholders mediocres.
Incluso los bloques temporales deben respetar la dirección de arte del proyecto.

---

## Qué debe evitar el agente

- UI genérica estilo SaaS
- componentes visualmente reciclados
- abuso de cards iguales
- demasiados colores saturados sin jerarquía
- exceso de texto sin ritmo
- GSAP usado como adorno
- estructura semántica pobre
- mala separación entre diseño y contenido
- dependencia excesiva de client-side rendering
- decisiones visuales sin criterio de conversión

---

## Entregable esperado del agente

Una landing page premium, escalable y lista para evolucionar, que:

- se vea memorable
- convierta por WhatsApp
- esté bien resuelta en mobile
- tenga base SEO sólida
- use Next.js + Tailwind + GSAP con criterio
- se sienta Awwwards-worthy sin perder foco comercial
