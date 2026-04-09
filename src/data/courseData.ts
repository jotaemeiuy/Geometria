export interface Lesson {
  title: string;
  slug: string;
  content: string;
}

export interface Section {
  number: string;
  title: string;
  slug: string;
  description: string;
  iconId: string;
  lessons: Lesson[];
}

export const courseData: Section[] = [
  {
    number: "01",
    title: "Fundamentos",
    slug: "fundamentos",
    description: "Conceptos básicos de Processing",
    iconId: "fundamentos",
    lessons: [
      {
        title: "¿Qué es Processing?",
        slug: "que-es-processing",
        content: `
          <p>Processing es un lenguaje de programación de código abierto basado en Java, diseñado para aprender a programar de forma visual.</p>
          <p>Fue creado por Ben Fry y Casey Reas en 2001 en el MIT Media Lab.</p>
          <h2>¿Para qué sirve?</h2>
          <ul>
            <li>Crear arte digital y visualizaciones</li>
            <li>Aprender conceptos de programación</li>
            <li>Prototipar aplicaciones interactivas</li>
          </ul>
        `
      },
      {
        title: "Instalación",
        slug: "instalacion",
        content: `
          <p>Para instalar Processing, sigue estos pasos:</p>
          <ol>
            <li>Ve a <a href="https://processing.org/download" target="_blank">processing.org/download</a></li>
            <li>Descarga la versión para tu sistema operativo</li>
            <li>Descomprime el archivo</li>
            <li>Ejecuta Processing</li>
          </ol>
        `
      },
      {
        title: "Mi primer sketch",
        slug: "mi-primer-sketch",
        content: `
          <p>Vamos a crear tu primer programa en Processing:</p>
          <pre><code>void setup() {
  size(400, 400);
  background(0);
}

void draw() {
  ellipse(mouseX, mouseY, 50, 50);
}</code></pre>
          <p>Este código crea una ventana donde un círculo sigue el cursor.</p>
        `
      },
    ],
  },
  {
    number: "02",
    title: "Formas básicas",
    slug: "formas-basicas",
    description: "Aprende a dibujar con Processing",
    iconId: "formas",
    lessons: [
      {
        title: "El lienzo",
        slug: "el-lienzo",
        content: `
          <p>El lienzo es el área de dibujo de Processing.</p>
          <pre><code>void setup() {
  size(800, 600);  // Ancho, Alto
  background(255);  // Color de fondo blanco
}</code></pre>
        `
      },
      {
        title: "Puntos y líneas",
        slug: "puntos-lineas",
        content: `
          <p>Las formas más simples:</p>
          <pre><code>// Punto
point(100, 100);

// Línea
line(0, 0, 200, 200);</code></pre>
        `
      },
      {
        title: "Rectángulos y círculos",
        slug: "rectangulos-circulos",
        content: `
          <p>Formas básicas:</p>
          <pre><code>// Rectángulo
rect(50, 50, 100, 80);

// Círculo
ellipse(200, 200, 80, 80);</code></pre>
        `
      },
    ],
  },
  {
    number: "03",
    title: "Color",
    slug: "color",
    description: "Trabaja con colores en Processing",
    iconId: "color",
    lessons: [
      {
        title: "Escala de grises",
        slug: "escala-grises",
        content: `
          <p>En Processing, un solo valor representa grises:</p>
          <pre><code>background(0);    // Negro
background(127);  // Gris medio
background(255);  // Blanco</code></pre>
        `
      },
      {
        title: "Color RGB",
        slug: "color-rgb",
        content: `
          <p>Usa tres valores para color RGB:</p>
          <pre><code>fill(255, 0, 0);    // Rojo
fill(0, 255, 0);    // Verde
fill(0, 0, 255);    // Azul
fill(255, 127, 0);  // Naranja</code></pre>
        `
      },
    ],
  },
  {
    number: "04",
    title: "Interactividad",
    slug: "interactividad",
    description: "Crea programas interactivos",
    iconId: "interactividad",
    lessons: [
      {
        title: "El ratón",
        slug: "el-raton",
        content: `
          <p>Processing detecta la posición del ratón:</p>
          <pre><code>void draw() {
  background(0);
  ellipse(mouseX, mouseY, 30, 30);
}</code></pre>
          <p><code>mouseX</code> y <code>mouseY</code> dan la posición actual.</p>
        `
      },
      {
        title: "Clic del ratón",
        slug: "clic-raton",
        content: `
          <p>Detecta cuando se hace clic:</p>
          <pre><code>void mousePressed() {
  background(random(255), random(255), random(255));
}</code></pre>
        `
      },
    ],
  },
];

// Helper para navegación entre lecciones
export function getAdjacentLessons(sectionSlug: string, lessonSlug: string) {
  const sectionIndex = courseData.findIndex(s => s.slug === sectionSlug);
  if (sectionIndex === -1) return { prev: null, next: null };

  const section = courseData[sectionIndex];
  const lessonIndex = section.lessons.findIndex(l => l.slug === lessonSlug);

  let prev = null;
  let next = null;

  // Lección anterior
  if (lessonIndex > 0) {
    prev = { section, lesson: section.lessons[lessonIndex - 1] };
  } else if (sectionIndex > 0) {
    const prevSection = courseData[sectionIndex - 1];
    prev = { section: prevSection, lesson: prevSection.lessons[prevSection.lessons.length - 1] };
  }

  // Lección siguiente
  if (lessonIndex < section.lessons.length - 1) {
    next = { section, lesson: section.lessons[lessonIndex + 1] };
  } else if (sectionIndex < courseData.length - 1) {
    const nextSection = courseData[sectionIndex + 1];
    next = { section: nextSection, lesson: nextSection.lessons[0] };
  }

  return { prev, next };
}

// Helper para obtener una lección específica
export function getLesson(sectionSlug: string, lessonSlug: string) {
  const section = courseData.find(s => s.slug === sectionSlug);
  if (!section) return null;

  const lesson = section.lessons.find(l => l.slug === lessonSlug);
  if (!lesson) return null;

  return { section, lesson };
}
