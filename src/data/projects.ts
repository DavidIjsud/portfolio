import {
  drillhubImages,
  hebImages,
  laComerImages,
  loyaltyImages,
  manzanaImages,
  misCuentasImages,
  prestoImages,
} from '../utils/images';
import type { Language } from '../i18n';

export type LocalizedText = Record<Language, string>;

export type ProjectLinks = {
  play?: string;
  app?: string;
  github?: string;
  githubIos?: string;
};

export type ProjectMetrics = {
  downloads?: string;
  rating?: string;
  users?: string;
  team?: string;
};

export type Project = {
  id: string;
  name: string;
  tag: LocalizedText;
  role: LocalizedText;
  category: 'native' | 'flutter' | 'private';
  featured: boolean;
  summary: LocalizedText;
  challenge: LocalizedText;
  approach: LocalizedText;
  result: LocalizedText;
  stack: string[];
  metrics?: ProjectMetrics;
  links?: ProjectLinks;
  images: string[];
  confidential?: boolean;
};

export const projects: Project[] = [
  {
    id: 'groupify',
    name: 'Groupify',
    tag: { en: 'Native · Kotlin + Swift', es: 'Nativo · Kotlin + Swift' },
    role: { en: 'Solo developer', es: 'Desarrollador único' },
    category: 'native',
    featured: true,
    summary: {
      en: 'On-device AI photo search for Android and iOS. Find every photo of a person by face and search the gallery by text.',
      es: 'Búsqueda de fotos con IA en el dispositivo para Android e iOS. Encuentra todas las fotos de una persona por rostro y busca en la galería por texto.',
    },
    challenge: {
      en: 'Finding one person or one moment inside a huge gallery usually means scrolling forever. The goal was to search photos by face and by description without uploading anything to a server.',
      es: 'Encontrar a una persona o un momento en una galería enorme suele significar desplazarse sin fin. El objetivo era buscar fotos por rostro y por descripción sin subir nada a un servidor.',
    },
    approach: {
      en: 'Built both native apps solo, in Kotlin with Jetpack Compose and in Swift with SwiftUI. FaceNet embeddings power on-device face recognition and CLIP models handle text search. All processing stays on the phone, with background indexing, Firebase and AdMob, using Clean Architecture and MVVM.',
      es: 'Construí ambas apps nativas yo solo, en Kotlin con Jetpack Compose y en Swift con SwiftUI. Los embeddings de FaceNet permiten el reconocimiento facial en el dispositivo y los modelos CLIP manejan la búsqueda por texto. Todo el procesamiento ocurre en el celular, con indexación en segundo plano, Firebase y AdMob, usando Arquitectura Limpia y MVVM.',
    },
    result: {
      en: 'Published on Google Play and the App Store as a fully on-device photo search experience.',
      es: 'Publicada en Google Play y App Store como una experiencia de búsqueda de fotos completamente local.',
    },
    stack: ['Kotlin', 'Jetpack Compose', 'Swift', 'SwiftUI', 'ML Kit', 'TensorFlow Lite', 'Core ML', 'ONNX Runtime'],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.palmyrasoft.groupify&hl=es_419',
      app: 'https://apps.apple.com/bo/app/groupify-match-photos/id6760682548?l=en-GB',
      github: 'https://github.com/DavidIjsud/Groupify',
      githubIos: 'https://github.com/DavidIjsud/GroupifyIOS',
    },
    images: [
      '/images/groupify/shot-1.png',
      '/images/groupify/shot-2.png',
      '/images/groupify/shot-3.png',
    ],
  },
  {
    id: 'fumicruz',
    name: 'FumiCruz',
    tag: { en: 'Flutter · Supabase', es: 'Flutter · Supabase' },
    role: { en: 'Solo developer', es: 'Desarrollador único' },
    category: 'flutter',
    featured: true,
    summary: {
      en: 'Field operations app for a pest control company, on Android and iOS.',
      es: 'App de operaciones de campo para una empresa de control de plagas, en Android e iOS.',
    },
    challenge: {
      en: 'Technicians needed to capture service evidence in the field and customers needed a separate place to see their records, without paper or scattered files.',
      es: 'Los técnicos necesitaban registrar evidencia de los servicios en el campo y los clientes un espacio aparte para ver sus registros, sin papel ni archivos dispersos.',
    },
    approach: {
      en: 'As the only developer, built service logging with signature and photos, PDF reports, a calendar of scheduled visits and push notifications. Designed a 15-migration PostgreSQL schema with row level security separating the internal team from the customer portal, and covered the app with 236 automated tests.',
      es: 'Como desarrollador único, implementé el registro de servicios con firma y fotos, reportes en PDF, un calendario de visitas agendadas y notificaciones push. Diseñé un esquema PostgreSQL de 15 migraciones con row level security que separa al equipo interno del portal del cliente, y cubrí la app con 236 pruebas automatizadas.',
    },
    result: {
      en: 'Delivered both apps in 2026 with separate team and customer experiences backed by one secure database.',
      es: 'Entregué ambas apps en 2026 con experiencias separadas para el equipo y los clientes, respaldadas por una sola base de datos segura.',
    },
    stack: ['Flutter', 'Supabase', 'PostgreSQL', 'Row level security', 'PDF reports', 'Push notifications'],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.fumicruz.app&hl=es_419',
      app: 'https://apps.apple.com/bo/app/fumicruz/id6807209270?l=en-GB',
    },
    images: [
      '/images/fumicruz/shot-1.jpg',
      '/images/fumicruz/shot-2.jpg',
      '/images/fumicruz/shot-3.jpg',
    ],
  },
  {
    id: 'uendi-chat',
    name: 'Uendi Chat',
    tag: { en: 'Flutter · Banking', es: 'Flutter · Banca' },
    role: { en: 'Top contributor', es: 'Principal contribuidor' },
    category: 'private',
    featured: true,
    summary: {
      en: "Ueno bank's AI assistant, a Flutter micro-app inside the bank's mobile app.",
      es: 'El asistente con IA de ueno bank, una micro-app Flutter dentro de la app móvil del banco.',
    },
    challenge: {
      en: 'Make an AI banking assistant useful and safe inside the existing bank app, including multi-conversation chat and confirmations for sensitive actions.',
      es: 'Hacer que un asistente bancario con IA sea útil y seguro dentro de la app existente del banco, con chat de múltiples conversaciones y confirmaciones para acciones sensibles.',
    },
    approach: {
      en: 'Built multi-conversation chat, speech-to-text voice input, screenshot attachments and rich Markdown messages. Added human-in-the-loop flows to review and confirm AI-prepared loans and transfers, plus tappable account selection. Raised test coverage to 90% in the micro-app and 80% in the chat SDK with unit, widget and BDD tests, improved GitHub Actions CI, and shipped Java 21 / Spring Boot and TypeScript / Fastify backend features.',
      es: 'Desarrollé chat con múltiples conversaciones, entrada de voz con speech-to-text, envío de capturas y mensajes enriquecidos en Markdown. Añadí flujos human-in-the-loop para revisar y confirmar préstamos y transferencias preparados por la IA, además de selección de cuentas desde el chat. Aumenté la cobertura de pruebas al 90% en la micro-app y al 80% en el SDK del chat con pruebas unitarias, de widgets y BDD, mejoré el CI en GitHub Actions y publicé funcionalidades backend en Java 21 / Spring Boot y TypeScript / Fastify.',
    },
    result: {
      en: 'Shipped inside the bank app with 90% test coverage in the micro-app and 80% in the chat SDK, plus a Figma-to-Flutter agent skill adopted by the team.',
      es: 'Publicado dentro de la app del banco con 90% de cobertura en la micro-app y 80% en el SDK del chat, además de una skill de agente que convierte diseños de Figma en código Flutter, adoptada por el equipo.',
    },
    stack: ['Flutter', 'Riverpod', 'Melos', 'Spring Boot', 'Fastify', 'GitHub Actions'],
    confidential: true,
    images: [],
  },
  {
    id: 'heb',
    name: 'Mi HEB',
    tag: { en: 'Flutter · Retail', es: 'Flutter · Retail' },
    role: { en: 'Mobile engineer', es: 'Ingeniero móvil' },
    category: 'flutter',
    featured: false,
    summary: {
      en: 'The mobile shopping app for one of Mexico’s largest grocery retailers.',
      es: 'La app de compras móvil de uno de los mayores retailers de alimentos de México.',
    },
    challenge: {
      en: 'Serve millions of shoppers with a dependable, easy-to-use mobile experience.',
      es: 'Atender a millones de compradores con una experiencia móvil confiable y fácil de usar.',
    },
    approach: {
      en: 'Contributed to the Android and cross-platform app in a 40-engineer team, focused on feature delivery and release quality.',
      es: 'Contribuí a la app de Android y multiplataforma en un equipo de 40 ingenieros, enfocado en entregar funciones y calidad de lanzamiento.',
    },
    result: {
      en: 'Reached 1M+ downloads, a 4.5 store rating and 1M users.',
      es: 'Alcanzó más de 1M de descargas, 4.5 de calificación y 1M de usuarios.',
    },
    stack: ['Flutter', 'Android', 'Retail'],
    metrics: { downloads: '1M+', rating: '4.5', users: '1M', team: '40' },
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.hebmex.cel&hl=es_CO',
      app: 'https://apps.apple.com/mx/app/mi-h-e-b/id545728013',
    },
    images: [hebImages[12], hebImages[13], hebImages[0]],
  },
  {
    id: 'presto',
    name: 'Presto Latam',
    tag: { en: 'Kotlin · Fintech', es: 'Kotlin · Fintech' },
    role: { en: 'Lead mobile engineer', es: 'Ingeniero mobile líder' },
    category: 'native',
    featured: false,
    summary: {
      en: 'A fintech app for Latin America with native Android and iOS integrations.',
      es: 'Una app fintech para Latinoamérica con integraciones nativas de Android e iOS.',
    },
    challenge: {
      en: 'Build a fintech app that could scale across the region while keeping sensitive payment and location features reliable.',
      es: 'Construir una app fintech que pudiera escalar en la región sin perder confiabilidad en pagos y ubicación.',
    },
    approach: {
      en: 'Led the mobile team building a scalable app with native Kotlin and Swift integrations. Built background location tracking that keeps working with the app closed and secure credit card payment modules. Set up Codemagic CI/CD for tests, builds and store releases, refactored toward Clean Architecture and mentored junior developers.',
      es: 'Lideré el equipo mobile en una app escalable con integraciones nativas en Kotlin y Swift. Desarrollé rastreo de ubicación en segundo plano que sigue funcionando con la app cerrada y módulos seguros de pago con tarjeta. Configuré CI/CD con Codemagic para pruebas, builds y publicación, refactoricé hacia Arquitectura Limpia y fui mentor de desarrolladores junior.',
    },
    result: {
      en: 'Reached 30K+ downloads and a 4.9 store rating with a team of 10.',
      es: 'Alcanzó más de 30K descargas y 4.9 de calificación con un equipo de 10 personas.',
    },
    stack: ['Kotlin', 'Swift', 'Firebase', 'Codemagic', 'Clean Architecture'],
    metrics: { downloads: '30K', rating: '4.9', users: '10K', team: '10' },
    links: { github: 'https://github.com/DavidIjsud/presto-latam' },
    images: [prestoImages[0], prestoImages[1], prestoImages[2]],
  },
  {
    id: 'manzana-verde',
    name: 'Manzana Verde',
    tag: { en: 'Flutter · E-commerce', es: 'Flutter · E-commerce' },
    role: { en: 'Flutter mobile developer', es: 'Desarrollador mobile Flutter' },
    category: 'flutter',
    featured: false,
    summary: {
      en: 'Healthy food delivery app with real-time tracking and route planning for drivers.',
      es: 'App de entrega de alimentos saludables con seguimiento en tiempo real y planificación de rutas para repartidores.',
    },
    challenge: {
      en: 'Make delivery fast and visible, both for customers waiting at home and for drivers on the road.',
      es: 'Hacer que la entrega sea rápida y visible, tanto para los clientes que esperan en casa como para los repartidores en la calle.',
    },
    approach: {
      en: 'Cut app load times by 30% by optimizing state management. Built real-time tracking, route planning and push notifications for the delivery-driver app, and used Firebase Crashlytics to find and fix critical bugs.',
      es: 'Reduje los tiempos de carga de la app en un 30% optimizando el manejo de estado. Desarrollé seguimiento en tiempo real, planificación de rutas y notificaciones push para la app de repartidores, y usé Firebase Crashlytics para detectar y corregir errores críticos.',
    },
    result: {
      en: 'Increased user engagement by 50% through UI, UX and performance improvements.',
      es: 'Aumenté el engagement de los usuarios en un 50% con mejoras de UI, UX y rendimiento.',
    },
    stack: ['Flutter', 'Firebase', 'Crashlytics', 'Push notifications'],
    metrics: { downloads: '100K', rating: '4.7', users: '50K', team: '10' },
    links: {
      play: 'https://play.google.com/store/search?q=Manzana%20Verde&c=apps&hl=es_CO',
      app: 'https://apps.apple.com/bo/app/manzana-verde-healthy-food/id1542798197?l=en-GB',
    },
    images: [manzanaImages[2], manzanaImages[5], manzanaImages[0]],
  },
  {
    id: 'mis-cuentas',
    name: 'Mis cuentas',
    tag: { en: 'Kotlin · Fintech', es: 'Kotlin · Fintech' },
    role: { en: 'Mobile engineer', es: 'Ingeniero móvil' },
    category: 'native',
    featured: false,
    summary: {
      en: 'A personal finance app for users in Bolivia.',
      es: 'Una app de finanzas personales para usuarios en Bolivia.',
    },
    challenge: {
      en: 'Give people a clear view of their accounts and everyday financial activity.',
      es: 'Dar a las personas una vista clara de sus cuentas y actividad financiera diaria.',
    },
    approach: {
      en: 'Contributed to the native Android app within a 20-engineer team, working on account flows and app stability.',
      es: 'Contribuí a la app nativa de Android en un equipo de 20 ingenieros, trabajando en flujos de cuentas y estabilidad.',
    },
    result: {
      en: 'Reached 100K downloads, 80K users and a 3.9 store rating.',
      es: 'Alcanzó 100K descargas, 80K usuarios y 3.9 de calificación.',
    },
    stack: ['Kotlin', 'Android', 'Fintech'],
    metrics: { downloads: '100K', rating: '3.9', users: '80K', team: '20' },
    links: {
      play: 'https://play.google.com/store/apps/details?id=miscuentas.com.bo.miscuentas&hl=es_CO',
      app: 'https://apps.apple.com/bo/app/mis-cuentas-bolivia/id6448075291?l=en-GB',
    },
    images: [misCuentasImages[2], misCuentasImages[7], misCuentasImages[0]],
  },
  {
    id: 'la-comer',
    name: 'La Comer',
    tag: { en: 'Flutter · Retail', es: 'Flutter · Retail' },
    role: { en: 'Mobile engineer', es: 'Ingeniero móvil' },
    category: 'flutter',
    featured: false,
    summary: {
      en: 'The mobile app for a major Mexican supermarket chain.',
      es: 'La app móvil de una importante cadena de supermercados mexicana.',
    },
    challenge: {
      en: 'Support a large shopper base with a fast, dependable mobile experience.',
      es: 'Atender a una gran base de compradores con una experiencia móvil rápida y confiable.',
    },
    approach: {
      en: 'Worked on the Flutter app in a 40-engineer team, focused on feature delivery across Android and iOS.',
      es: 'Trabajé en la app Flutter en un equipo de 40 ingenieros, enfocado en entregar funciones para Android e iOS.',
    },
    result: {
      en: 'Reached 500K downloads, a 4.8 store rating and 400K users.',
      es: 'Alcanzó 500K descargas, 4.8 de calificación y 400K usuarios.',
    },
    stack: ['Flutter', 'Dart', 'Retail'],
    metrics: { downloads: '500K', rating: '4.8', users: '400K', team: '40' },
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.LaComerApp&hl=es_CO',
      app: 'https://apps.apple.com/mx/app/la-comer/id1383866805',
    },
    images: [laComerImages[2], laComerImages[5], laComerImages[0]],
  },
  {
    id: 'shell-bolivia',
    name: 'Shell Bolivia',
    tag: { en: 'Kotlin · Loyalty', es: 'Kotlin · Loyalty' },
    role: { en: 'Mobile engineer', es: 'Ingeniero móvil' },
    category: 'native',
    featured: false,
    summary: {
      en: 'Native loyalty app for Shell customers in Bolivia.',
      es: 'App nativa de fidelización para clientes de Shell en Bolivia.',
    },
    challenge: {
      en: 'Bring loyalty rewards and station services into one small, simple app.',
      es: 'Reunir recompensas y servicios de estaciones en una app pequeña y simple.',
    },
    approach: {
      en: 'Built native iOS and Android apps with the Loyalty Clubs team, including the Shell Club app on Google Play and secure e-commerce payments for OPAL. Led daily stand-ups.',
      es: 'Construí apps nativas de iOS y Android con el equipo de Loyalty Clubs, incluida la app Shell Club en Google Play y pagos seguros de e-commerce para OPAL. Dirigí las reuniones diarias.',
    },
    result: {
      en: 'Reached 50K downloads and a 4.1 store rating.',
      es: 'Alcanzó 50K descargas y 4.1 de calificación.',
    },
    stack: ['Kotlin', 'Android', 'iOS', 'Secure payments'],
    metrics: { downloads: '50K', rating: '4.1', team: '3' },
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.loyaltyclubs.shell',
    },
    images: [loyaltyImages[0], loyaltyImages[1], loyaltyImages[2]],
  },
  {
    id: 'drillhub',
    name: 'DrillHub',
    tag: { en: 'Kotlin · Education', es: 'Kotlin · Educación' },
    role: { en: 'Mobile engineer', es: 'Ingeniero móvil' },
    category: 'native',
    featured: false,
    summary: {
      en: 'A training platform to share and edit lessons with ease.',
      es: 'Una plataforma de entrenamiento para compartir y editar lecciones con facilidad.',
    },
    challenge: {
      en: 'Make lesson sharing and editing feel natural on a phone for coaches, players and parents.',
      es: 'Hacer que compartir y editar lecciones se sienta natural en el celular para entrenadores, jugadores y padres.',
    },
    approach: {
      en: 'Built lesson creation, listing, detail views and coach-only management, plus video playback and upload from the file picker, camera roll and Google Drive. Integrated Stripe for coach payouts and Firebase for sign-in and data, with pixel-perfect UI from Figma and Clean Architecture.',
      es: 'Desarrollé creación, listado y detalle de lecciones, además de gestión exclusiva para entrenadores, con reproducción y subida de videos desde el selector de archivos, la galería y Google Drive. Integré Stripe para los pagos a entrenadores y Firebase para el inicio de sesión y los datos, con interfaces pixel-perfect a partir de Figma y Arquitectura Limpia.',
    },
    result: {
      en: 'Available on the App Store with an open source repository.',
      es: 'Disponible en App Store con un repositorio de código abierto.',
    },
    stack: ['Kotlin', 'Android', 'Stripe', 'Firebase', 'Figma'],
    links: {
      github: 'https://github.com/liltincan/drillhub',
      app: 'https://apps.apple.com/bo/app/drillhub/id6754586332?l=en-GB',
    },
    images: [drillhubImages[2], drillhubImages[7], drillhubImages[0]],
  },
  {
    id: 'remindly',
    name: 'Remindly',
    tag: { en: 'Kotlin · Android', es: 'Kotlin · Android' },
    role: { en: 'Solo developer', es: 'Desarrollador único' },
    category: 'native',
    featured: false,
    summary: {
      en: 'Location-based reminders that trigger the moment you arrive at a saved place.',
      es: 'Recordatorios por ubicación que se activan apenas llegas a un lugar guardado.',
    },
    challenge: {
      en: 'Reminders tied to a clock are easy to miss in a day full of movement. The idea was to remind people of a task exactly when they reach the place where it matters.',
      es: 'Los recordatorios por hora son fáciles de pasar por alto en un día lleno de movimiento. La idea era recordar una tarea justo cuando la persona llega al lugar donde importa.',
    },
    approach: {
      en: 'Built the Android app solo in Kotlin with Jetpack Compose, Hilt, Room and Google Maps. Geofencing triggers tasks on arrival, Google Play Billing handles subscriptions and a TypeScript Cloud Function processes Play subscription events.',
      es: 'Construí la app de Android yo solo en Kotlin con Jetpack Compose, Hilt, Room y Google Maps. El geofencing activa las tareas al llegar, Google Play Billing gestiona las suscripciones y una Cloud Function en TypeScript procesa los eventos de suscripción de Play.',
    },
    result: {
      en: 'Published on Google Play as an Android-only app with subscription support.',
      es: 'Publicada en Google Play como una app solo para Android con soporte de suscripciones.',
    },
    stack: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Room', 'Google Maps', 'Google Play Billing', 'Firebase'],
    links: {
      play: 'https://play.google.com/store/apps/details?id=com.palmyrasoft.remindly',
      github: 'https://github.com/DavidIjsud/Remindly',
    },
    images: [],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
