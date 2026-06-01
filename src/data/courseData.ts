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
    description: "Conceptos básicos de p5.js",
    iconId: "fundamentos",
    lessons: [
      {
        title: "¿Qué es p5.js?",
        slug: "que-es-p5js",
        content: `
          <p>p5.js es una biblioteca de JavaScript diseñada para hacer programación creativa accesible a artistas, diseñadores y principiantes. Es la versión web de Processing, creada por Lauren McCarthy.</p>
          <p>Funciona directamente en el navegador, sin necesidad de instalar nada. Solo necesitas un editor de texto y un navegador web para empezar a crear gráficos interactivos.</p>
          <aside class="callout">
            <strong>¿Por qué usar p5.js?</strong>
            <p>Es gratuito, funciona en cualquier navegador, y no requiere instalación. Perfecto para aprender programación visual desde cualquier dispositivo.</p>
          </aside>
          <h2>Qué aprenderás</h2>
          <ul>
            <li>Qué es un sketch de p5.js.</li>
            <li>La diferencia entre <code>setup()</code> y <code>draw()</code>.</li>
            <li>Cómo ejecutar código en el navegador.</li>
          </ul>
          <h2>Ejercicios</h2>
          <div class="lesson-card">
            <strong>Ejercicio 1</strong>
            <p>Investiga qué otros lenguajes de programación existen para arte y diseño. Compara p5.js con al menos dos alternativas y escribe 3 diferencias clave.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 2</strong>
            <p>Describe con tus propias palabras qué diferencia hay entre un sketch interactivo y uno estático. Da un ejemplo de cada uno en la vida real.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 3</strong>
            <p>Dibuja en papel cómo imaginas que se vería un programa de p5.js que dibuja un círculo rojo en el centro de la pantalla.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 4</strong>
            <p>Busca 3 ejemplos de proyectos hechos con p5.js en la web (prueba en openprocessing.org). Escribe qué hace cada uno y qué conceptos crees que usaron.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 5</strong>
            <p>Escribe una lista de 5 ideas creativas que te gustaría programar usando gráficos y animación.</p>
          </div>
        `
      },
      {
        title: "Primeros pasos",
        slug: "primeros-pasos",
        content: `
          <p>Con p5.js no necesitas instalar nada. Puedes empezar a programar inmediatamente usando el editor online.</p>
          <h2>Opción 1: Editor online (recomendado)</h2>
          <ol>
            <li>Abre <a href="https://editor.p5js.org" target="_blank">editor.p5js.org</a>.</li>
            <li>Crea una cuenta gratuita para guardar tus sketches.</li>
            <li>Haz clic en "File > New" para crear un nuevo sketch.</li>
            <li>Presiona el botón ▶️ para ejecutar tu código.</li>
          </ol>
          <h2>Opción 2: Archivo HTML local</h2>
          <p>Si prefieres trabajar offline, crea un archivo HTML con:</p>
          <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;script&gt;
    function setup() {
      createCanvas(400, 400);
    }
    function draw() {
      background(220);
    }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
          <aside class="callout">
            <strong>Tip</strong>
            <p>El editor online de p5.js guarda automáticamente tu trabajo y te permite compartir sketches con un solo clic.</p>
          </aside>
          <h2>Ejercicios</h2>
          <div class="lesson-card">
            <strong>Ejercicio 1</strong>
            <p>Crea una cuenta en el editor de p5.js y haz tu primer sketch. Toma una captura de pantalla.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 2</strong>
            <p>Explora los ejemplos en el editor: File > Examples. Abre 3 ejemplos diferentes y ejecútalos.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 3</strong>
            <p>Crea una colección en tu cuenta de p5.js llamada "MisProyectos" y guarda tu primer sketch allí.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 4</strong>
            <p>Comparte un sketch usando el botón "Share". Envía el enlace a un amigo.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 5</strong>
            <p>Experimenta con los ajustes del editor: cambia el tema de colores en Settings.</p>
          </div>
        `
      },
      {
        title: "Mi primer sketch",
        slug: "mi-primer-sketch",
        content: `
          <p>Este es tu primer sketch. Verás cómo p5.js dibuja una forma que sigue el ratón.</p>
          <pre><code>function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  ellipse(mouseX, mouseY, 50, 50);
}</code></pre>
          <h2>Explicación</h2>
          <ul>
            <li><code>createCanvas(400, 400)</code> crea un lienzo de 400x400 píxeles.</li>
            <li><code>background(0)</code> pinta el fondo de negro.</li>
            <li><code>ellipse(mouseX, mouseY, 50, 50)</code> dibuja un círculo que sigue al ratón.</li>
          </ul>
          <aside class="callout">
            <strong>Práctica</strong>
            <p>Cambia el color de fondo a <code>background(255)</code> y observa cómo se ve el dibujo.</p>
          </aside>
          <h2>Ejercicios</h2>
          <div class="lesson-card">
            <strong>Ejercicio 1</strong>
            <p>Modifica el tamaño de la ventana a 800x600 y cambia el tamaño de la elipse a 100x100. Ejecuta y observa el resultado.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 2</strong>
            <p>Reemplaza la elipse por un rectángulo que siga al ratón. Usa <code>rect(mouseX, mouseY, 60, 60)</code>.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 3</strong>
            <p>Cambia el color de fondo a azul oscuro usando valores RGB: <code>background(0, 0, 50)</code>.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 4</strong>
            <p>Añade una segunda elipse más pequeña que siga al ratón con un desfase de 20 píxeles: <code>ellipse(mouseX+20, mouseY+20, 20, 20)</code>.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 5</strong>
            <p>Guarda tu sketch en el editor de p5.js con el nombre "SeguirRaton". Experimenta con diferentes formas y colores.</p>
          </div>
        `
      }



    ]
  },
  {
    number: "02",
    title: "Formas básicas",
    slug: "formas-basicas",
    description: "Aprende a dibujar con p5.js",
    iconId: "formas",
    lessons: [
      {
        title: "El lienzo",
        slug: "el-lienzo",
        content: `
          <p>El lienzo es el área donde se dibujan las formas. En p5.js, el punto <code>(0, 0)</code> está en la esquina superior izquierda.</p>
          <pre><code>function setup() {
  createCanvas(800, 600);
  background(255);
}</code></pre>
          <h2>Notas importantes</h2>
          <ul>
            <li><code>x</code> aumenta hacia la derecha.</li>
            <li><code>y</code> aumenta hacia abajo.</li>
            <li>La esquina superior izquierda es <code>(0, 0)</code>.</li>
          </ul>
          <aside class="callout">
            <strong>Concepto clave</strong>
            <p>Las coordenadas en p5.js son diferentes a las matemáticas tradicionales: el eje vertical crece hacia abajo.</p>
          </aside>
          <h2>Ejercicios</h2>
          <div class="lesson-card">
            <strong>Ejercicio 1</strong>
            <p>Dibuja un punto exactamente en el centro de un lienzo de 600x400 píxeles. Calcula las coordenadas correctas.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 2</strong>
            <p>Marca las 4 esquinas del lienzo con puntos de diferentes colores. Usa rojo, verde, azul y amarillo.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 3</strong>
            <p>Dibuja una cuadrícula imaginaria: coloca puntos cada 50 píxeles tanto en X como en Y para visualizar el sistema de coordenadas.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 4</strong>
            <p>Crea un sketch donde el ancho sea el doble que el alto. Dibuja un círculo exactamente en el centro.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 5</strong>
            <p>Experimenta: cambia el tamaño del lienzo a 400x400 y dibuja líneas desde el centro a cada una de las 4 esquinas.</p>
          </div>
        `
      },
      {
        title: "Puntos y líneas",
        slug: "puntos-lineas",
        content: `
          <p>Los puntos y las líneas son los elementos más simples de un dibujo, pero también los más importantes. Con ellos puedes construir gráficos, formas, diagramas y bases para cualquier ilustración en p5.js.</p>
          <h2>Conceptos básicos</h2>
          <p>En p5.js, cada punto se dibuja con dos coordenadas: <code>x</code> y <code>y</code>. El origen <code>(0, 0)</code> se encuentra en la esquina superior izquierda del lienzo.</p>
          <aside class="callout">
            <strong>Recuerda</strong>
            <p>En este sistema, <code>x</code> crece hacia la derecha y <code>y</code> crece hacia abajo. Ese cambio es importante cuando pasas de la geometría tradicional al dibujo en pantalla.</p>
          </aside>
          <h2>Primer ejemplo</h2>
          <pre><code>function setup() {
  createCanvas(500, 400);
  background(15);
  stroke(255);
  strokeWeight(10);
  point(100, 100);
  strokeWeight(2);
  line(50, 50, 200, 150);
}</code></pre>
          <p>En este ejemplo:</p>
          <ul>
            <li><code>point(100, 100)</code> dibuja un punto en el lugar <code>(100, 100)</code>.</li>
            <li><code>line(50, 50, 200, 150)</code> une el punto <code>(50, 50)</code> con el punto <code>(200, 150)</code>.</li>
            <li><code>strokeWeight()</code> cambia el grosor del trazo.</li>
          </ul>
          <h2>Más ejemplos</h2>
          <p>Prueba estas variaciones para entender mejor cómo funciona el sistema de coordenadas:</p>
          <pre><code>function setup() {
  createCanvas(500, 400);
  background(20);
  stroke(255, 100, 50);
  strokeWeight(8);
  point(250, 200);

  stroke(100, 255, 180);
  strokeWeight(4);
  line(100, 300, 400, 100);
}

function draw() {
  // Aquí puedes probar más líneas o puntos si quieres.
}</code></pre>
          <h2>Ejercicio guiado</h2>
          <div class="lesson-card">
            <strong>Ejercicio 1</strong>
            <p>Dibuja cuatro puntos formando un cuadrado. Usa <code>point()</code> en las cuatro esquinas y cambia el grosor con <code>strokeWeight()</code>.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 2</strong>
            <p>Conecta esos cuatro puntos con líneas usando <code>line()</code>. Crea un cuadrado o un rombo.</p>
          </div>
          <h2>Consejos prácticos</h2>
          <ul>
            <li>Usa colores distintos para cada línea con <code>stroke(r, g, b)</code>.</li>
            <li>Si te equivocas con las coordenadas, comienza por dibujar puntos pequeños primero.</li>
            <li>Experimenta moviendo los valores y observa cómo cambian la posición en la pantalla.</li>
          </ul>
          <aside class="callout">
            <strong>Desafío extra</strong>
            <p>Crea una estrella dibujando ocho líneas que partan de un mismo punto central. Usa puntos para ubicar los extremos.</p>
          </aside>
          <h2>Ejercicios</h2>
          <div class="lesson-card">
            <strong>Ejercicio 3</strong>
            <p>Dibuja una letra "A" usando solo 3 líneas. Calcula las coordenadas para que tenga buena proporción.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 4</strong>
            <p>Crea una cara simple: dos puntos para ojos y una línea curva (hecha de 3 líneas pequeñas) para la sonrisa.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 5</strong>
            <p>Dibuja una casa simple: un cuadrado hecho con 4 líneas para las paredes y 2 líneas más para el techo triangular.</p>
          </div>
        `
      },
      {
        title: "Rectángulos y círculos",
        slug: "rectangulos-circulos",
        content: `
          <p>Con rectángulos y círculos puedes crear figuras más completas y aprender a combinar formas.</p>
          <pre><code>function setup() {
  createCanvas(600, 450);
  background(20);
  fill(30, 144, 255);
  rect(80, 80, 150, 100);
  fill(248, 113, 113);
  ellipse(400, 220, 120, 120);
}</code></pre>
          <h2>Detalles</h2>
          <ul>
            <li><code>rect(x, y, ancho, alto)</code> dibuja un rectángulo.</li>
            <li><code>ellipse(x, y, ancho, alto)</code> dibuja un óvalo o círculo.</li>
            <li><code>fill()</code> define el color de relleno.</li>
          </ul>
          <aside class="callout">
            <strong>Consejo</strong>
            <p>Usa <code>noStroke()</code> si quieres formas sin borde.</p>
          </aside>
          <h2>Ejercicios</h2>
          <div class="lesson-card">
            <strong>Ejercicio 1</strong>
            <p>Dibuja 3 círculos del mismo tamaño en posiciones diferentes, cada uno con un color de relleno distinto.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 2</strong>
            <p>Crea un semáforo: un rectángulo negro vertical con 3 círculos (rojo, amarillo, verde) uno encima del otro.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 3</strong>
            <p>Dibuja un blanco de tiro: 5 círculos concéntricos (uno dentro de otro) con colores alternados blanco y negro.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 4</strong>
            <p>Haz una bandera con 3 franjas horizontales de colores diferentes usando 3 rectángulos.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 5</strong>
            <p>Crea un botón pulsable: un rectángulo redondeado con <code>rect()</code> y un círculo centrado encima, como si fuera un botón de UI.</p>
          </div>
        `
      }
    ]
  },
  {
    number: "03",
    title: "Color",
    slug: "color",
    description: "Trabaja con colores en p5.js",
    iconId: "color",
    lessons: [
      {
        title: "Escala de grises",
        slug: "escala-grises",
        content: `
          <p>La escala de grises usa un solo valor para indicar brillo.</p>
          <pre><code>function setup() {
  createCanvas(500, 350);
  background(0);
  fill(120);
  rect(100, 100, 300, 150);
}</code></pre>
          <h2>Qué significa</h2>
          <ul>
            <li><code>0</code> es negro.</li>
            <li><code>255</code> es blanco.</li>
            <li>Valores intermedios generan distintos grises.</li>
          </ul>
          <aside class="callout">
            <strong>Concepto</strong>
            <p>La escala de grises es útil para entender cómo funciona el color antes de usar RGB.</p>
          </aside>
          <h2>Ejercicios</h2>
          <div class="lesson-card">
            <strong>Ejercicio 1</strong>
            <p>Dibuja 5 rectángulos en escala de grises: del negro (0) al blanco (255) en pasos de 50.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 2</strong>
            <p>Crea un degradado vertical: divide el lienzo en 10 franjas horizontales, cada una un tono más claro de gris.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 3</strong>
            <p>Dibuja tu nombre usando solo valores de gris, donde cada letra tenga un brillo diferente.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 4</strong>
            <p>Haz un tablero de ajedrez simplificado: 4x4 cuadrados alternados en gris oscuro y gris claro.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 5</strong>
            <p>Crea una ilusión óptica: líneas horizontales negras sobre fondo blanco, con un rectángulo gris medio transparente superpuesto.</p>
          </div>
        `
      },
      {
        title: "Color RGB",
        slug: "color-rgb",
        content: `
          <p>RGB combina rojo, verde y azul para crear cualquier color.</p>
          <pre><code>function setup() {
  createCanvas(600, 400);
  background(20);
  fill(255, 0, 0);
  ellipse(150, 200, 140, 140);
  fill(0, 200, 255);
  rect(320, 140, 180, 120);
}</code></pre>
          <h2>Valores</h2>
          <ul>
            <li><code>255, 0, 0</code> = rojo.</li>
            <li><code>0, 200, 255</code> = azul claro.</li>
            <li>Cada valor va de <code>0</code> a <code>255</code>.</li>
          </ul>
          <div class="lesson-card">
            <strong>Explora</strong>
            <p>Cambia los valores para crear colores nuevos y guarda tus combinaciones favoritas.</p>
          </div>
          <h2>Ejercicios</h2>
          <div class="lesson-card">
            <strong>Ejercicio 1</strong>
            <p>Crea los 3 círculos primarios: rojo puro, verde puro y azul puro, uno al lado del otro.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 2</strong>
            <p>Dibuja un arcoíris simplificado con 6 elipses horizontales, cada una con un color del arcoíris.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 3</strong>
            <p>Crea una paleta de colores cálidos: 5 rectángulos con tonos de naranja, rojo y amarillo.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 4</strong>
            <p>Haz una paleta de colores fríos: 5 rectángulos con tonos de azul, verde agua y violeta.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 5</strong>
            <p>Dibuja una fruta (manzana, naranja o limón) usando elipses con colores realistas y <code>noStroke()</code>.</p>
          </div>
        `
      }
    ]
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
          <p>En p5.js el ratón es una herramienta poderosa para crear programas interactivos.</p>
          <pre><code>function setup() {
  createCanvas(600, 450);
  background(10);
}

function draw() {
  background(10, 10, 20);
  fill(88, 165, 255);
  noStroke();
  ellipse(mouseX, mouseY, 40, 40);
}</code></pre>
          <h2>Qué hace</h2>
          <ul>
            <li><code>mouseX</code> es la posición horizontal del cursor.</li>
            <li><code>mouseY</code> es la posición vertical.</li>
            <li>La elipse se mueve con el cursor.</li>
          </ul>
          <aside class="callout">
            <strong>Idea</strong>
            <p>Prueba distintos tamaños de figura para ver cómo cambia la sensación de movimiento.</p>
          </aside>
          <h2>Ejercicios</h2>
          <div class="lesson-card">
            <strong>Ejercicio 1</strong>
            <p>Crea un "pincel" que dibuje elipses donde pase el ratón. No uses <code>background()</code> en <code>draw()</code> para que se acumulen.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 2</strong>
            <p>Dibuja dos elipses: una que siga el ratón (roja) y otra que sea el espejo horizontal (azul, en <code>width - mouseX</code>).</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 3</strong>
            <p>Haz que el tamaño de la elipse dependa de la posición X del ratón: más grande a la derecha, más pequeña a la izquierda.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 4</strong>
            <p>Crea un "ojos que siguen": dibuja dos círculos blancos (ojos) y dos elipses negras pequeñas (pupilas) que sigan al ratón dentro de cada ojo.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 5</strong>
            <p>Simula una linterna: dibuja un círculo oscuro en toda la pantalla y un círculo claro centrado en el ratón que "ilumine" esa zona.</p>
          </div>
        `
      },
      {
        title: "Clic del ratón",
        slug: "clic-raton",
        content: `
          <p>Esta lección muestra cómo hacer que el sketch responda a los clics del ratón.</p>
          <pre><code>function setup() {
  createCanvas(600, 450);
  background(10);
}

function draw() {
  fill(255);
  ellipse(mouseX, mouseY, 35, 35);
}

function mousePressed() {
  background(random(20, 80), random(100, 180), random(150, 255));
}</code></pre>
          <h2>Qué aprendes</h2>
          <ul>
            <li><code>mousePressed()</code> se ejecuta cuando haces clic.</li>
            <li>El fondo cambia de color cada vez que presionas el botón.</li>
            <li>Esto hace el programa más dinámico y divertido.</li>
          </ul>
          <div class="lesson-card">
            <strong>Desafío</strong>
            <p>Modifica el sketch para que el clic no solo cambie el fondo, sino también el tamaño del círculo.</p>
          </div>
          <h2>Ejercicios</h2>
          <div class="lesson-card">
            <strong>Ejercicio 1</strong>
            <p>Crea un "burbujero": cada vez que haces clic, dibuja una elipse en esa posición con tamaño y color aleatorios.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 2</strong>
            <p>Haz un contador visual: cada clic añade un pequeño círculo en la esquina superior izquierda, formando una fila de "puntos".</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 3</strong>
            <p>Dibuja un rectángulo en el centro. Cada clic cambia su color a uno aleatorio de una paleta de 5 colores predefinidos.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 4</strong>
            <p>Crea un "modo borrador": un clic izquierdo dibuja, un clic derecho borra (dibuja con el color del fondo). Investiga <code>mouseButton</code>.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 5</strong>
            <p>Haz un juego simple: aparecen círculos en posiciones aleatorias. El usuario debe clicar antes de que desaparezcan. Usa <code>frameCount</code> para el tiempo.</p>
          </div>
        `
      }
    ]
  },
  {
    number: "05",
    title: "Proyecto Final",
    slug: "proyecto-final",
    description: "Demuestra todo lo aprendido creando un vehículo creativo",
    iconId: "proyecto",
    lessons: [
      {
        title: "Diseña tu vehículo",
        slug: "disena-vehiculo",
        content: `
          <p>¡Llegó el momento de demostrar todo lo que has aprendido! Vas a crear tu propio vehículo al estilo de los <strong>Corredores Locos</strong>: colorido, divertido y lleno de personalidad.</p>
          
          <h2>El desafío</h2>
          <p>Dibuja un vehículo (coche, camión, moto, o lo que imagines) usando <strong>todos</strong> estos elementos:</p>
          
          <aside class="callout">
            <strong>Checklist de elementos obligatorios</strong>
            <ul>
              <li>✅ <strong>Círculos</strong> - para ruedas, faros, ojos de personaje</li>
              <li>✅ <strong>Elipses</strong> - para formas ovaladas, espejos, escudos</li>
              <li>✅ <strong>Rectángulos</strong> - para la carrocería, ventanas</li>
              <li>✅ <strong>Líneas</strong> - para detalles, rayas decorativas, antenas</li>
              <li>✅ <strong>Triángulos</strong> - usa <code>triangle(x1,y1,x2,y2,x3,y3)</code> para picos, alas, o colas</li>
              <li>✅ <strong>Colores RGB</strong> - mínimo 5 colores diferentes</li>
              <li>✅ <strong>Distintos grosores de línea</strong> - usa <code>strokeWeight()</code> al menos 3 veces</li>
           </ul>
          </aside>

          <h2>Inspiración estilo Corredores Locos</h2>
          <p>Los vehículos de esta serie tienen:</p>
          <ul>
            <li>Colores brillantes y llamativos (rosas, verdes neón, amarillos)</li>
            <li>Formas exageradas - ruedas gigantes, carrocerías pequeñas</li>
            <li>Ojos o expresiones en los faros</li>
            <li>Detalles divertidos como escapes humeantes, alas, o helices</li>
            <li>Nombres creativos pintados en el lateral</li>
          </ul>

          <h2>Ejemplo de estructura</h2>
          <pre><code>function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(135, 206, 235); // Cielo azul
  
  // Carrocería (rectángulo)
  
  // Ruedas (círculos)
  
  // Faros con ojos (elipses)

  // Alerón trasero (triángulo)
  
  // Rayas decorativas (líneas)
  
}</code></pre>

          <div class="lesson-card">
            <strong>Consejo creativo</strong>
            <p>Antes de programar, dibuja tu vehículo en papel. Decide qué formas usarás para cada parte y qué colores tendrá.</p>
          </div>

          <h2>Rúbrica de evaluación</h2>
          <div class="lesson-card">
            <strong>Criterios (100 puntos)</strong>
            <ul>
              <li>30 pts - Usa todas las formas requeridas (círculo, elipse, rect, línea, triángulo)</li>
              <li>30 pts - Paleta de colores creativa (mínimo 5 colores)</li>
              <li>20 pts - Variedad de grosores de línea</li>
              <li>20 pts - Originalidad y estilo "Corredores Locos"</li>
            </ul>
          </div>

          <h2>Planificación</h2>
          <div class="lesson-card">
            <strong>Paso 1</strong>
            <p>En papel, dibuja dos bocetos diferentes de tu vehículo. Elige el más divertido.</p>
          </div>
          <div class="lesson-card">
            <strong>Paso 2</strong>
            <p>Lista cada parte de tu vehículo y escribe qué función de p5.js usarás (rect, ellipse, etc).</p>
          </div>
          <div class="lesson-card">
            <strong>Paso 3</strong>
            <p>Utiliza una paleta de colores: escribe los valores RGB de al menos 5 colores que usarás.</p>
          </div>
          <div class="lesson-card">
            <strong>Paso 4</strong>
            <p>Programa el vehículo completo en p5.js y comparte el enlace con tu profesor.</p>
          </div>
        `
      }
    ]
  },
  {
    number: "06",
    title: "Transformaciones e isometrías",
    slug: "transformaciones",
    description: "Traslación, rotación y simetrías del plano con p5.js",
    iconId: "transformaciones",
    lessons: [
      {
        title: "Traslación con translate()",
        slug: "translate",
        content: `
          <p>Una <strong>isometría</strong> es una transformación del plano que conserva distancias y ángulos. La figura imagen siempre es congruente con la original: misma forma, mismo tamaño. La <strong>traslación</strong> es el tipo más sencillo: mueve todos los puntos del plano la misma distancia y en la misma dirección.</p>
 
          <p>Se describe con un <strong>vector</strong> <code>(dx, dy)</code>. Si un punto tenía coordenadas <code>(x, y)</code>, su imagen queda en <code>(x + dx, y + dy)</code>. Eso vale para <em>todos</em> los puntos de la figura al mismo tiempo.</p>
 
          <aside class="callout">
            <strong>¿Qué conserva la traslación?</strong>
            <p>Distancias entre puntos, longitud de segmentos, medida de ángulos y área. Solo cambia la <em>posición</em> en el plano. Por eso es una isometría.</p>
          </aside>
 
          <h2>De la geometría al código</h2>
          <p>En p5.js, <code>translate(dx, dy)</code> desplaza el <strong>origen del sistema de coordenadas</strong>. Todo lo que dibujes <em>después</em> aparecerá desplazado esa cantidad respecto a lo que dibujaste antes. El código de las formas no cambia: solo cambia el origen desde el que se miden.</p>
 
          <pre><code>function setup() {
  createCanvas(500, 300);
  background(240);
 
  // Figura original: triángulo en rojo
  fill(220, 80, 80);
  stroke(0);
  triangle(50, 220, 110, 220, 80, 150);
 
  // Vector de traslación
  let dx = 160;
  let dy = -60;
 
  // Misma figura desplazada: el código del triángulo es idéntico
  translate(dx, dy);
  fill(80, 120, 220);
  triangle(50, 220, 110, 220, 80, 150);
}</code></pre>
 
          <h2>¿Por qué las coordenadas del triángulo son iguales?</h2>
          <p>Porque <code>translate()</code> cambió el origen. P5.js ahora mide desde el nuevo punto <code>(160, -60)</code> respecto al origen anterior. El resultado es que la figura azul aparece 160 píxeles a la derecha y 60 hacia arriba de la roja.</p>
 
          <h2>Acumulación de traslaciones</h2>
          <p>Llamar a <code>translate()</code> varias veces <em>acumula</em> los desplazamientos. Si ya trasladaste <code>(160, 0)</code> y volvés a escribir <code>translate(160, 0)</code>, el segundo dibujo estará a 320 píxeles del primero.</p>
 
          <pre><code>function setup() {
  createCanvas(500, 200);
  background(240);
  angleMode(DEGREES);
 
  let dx = 120;  // paso horizontal entre copias
 
  // Copia 1 — posición original
  fill(220, 80, 80);
  rect(20, 80, 60, 60);
 
  // Copia 2 — un paso a la derecha
  translate(dx, 0);
  fill(80, 180, 80);
  rect(20, 80, 60, 60);
 
  // Copia 3 — dos pasos a la derecha (acumulado)
  translate(dx, 0);
  fill(80, 120, 220);
  rect(20, 80, 60, 60);
 
  // Copia 4 — tres pasos a la derecha
  translate(dx, 0);
  fill(200, 160, 20);
  rect(20, 80, 60, 60);
}</code></pre>
 
          <aside class="callout">
            <strong>Isometría directa</strong>
            <p>La traslación es una isometría <em>directa</em>: conserva la orientación de la figura. Si el original «mira» a la derecha, la imagen también mira a la derecha.</p>
          </aside>
 
          <h2>Ejercicios</h2>
          <p>Usá solo <code>setup()</code>. No uses bucles ni condicionales. Guardá los desplazamientos en variables <code>let dx</code> / <code>let dy</code>.</p>
 
          <div class="lesson-card">
            <strong>Ejercicio 1 — Verificar en papel</strong>
            <p>En papel cuadriculado, dibujá un triángulo con vértices en <code>A(1,1)</code>, <code>B(3,1)</code>, <code>C(2,3)</code>. Aplicá el vector <code>(4, 0)</code>: calculá las nuevas coordenadas <code>A'</code>, <code>B'</code>, <code>C'</code> sumando <code>dx = 4</code> a cada <code>x</code>. Dibujá el triángulo imagen. Luego reproducí lo mismo en p5.js con <code>translate()</code> (escalá los valores a píxeles multiplicando por 40).</p>
          </div>
 
          <div class="lesson-card">
            <strong>Ejercicio 2 — Tira de figuras</strong>
            <p>Definí <code>let dx = 100;</code> y <code>let dy = 0;</code>. Dibujá el mismo cuadrado de <code>40×40</code> cuatro veces en fila usando cuatro bloques <code>translate(dx, dy)</code> seguidos, uno por copia (sin bucles). Cada copia con un color diferente.</p>
          </div>
 
          <div class="lesson-card">
            <strong>Ejercicio 3 — Vector diagonal</strong>
            <p>Usá un vector diagonal <code>let dx = 80; let dy = 70;</code>. Dibujá el mismo triángulo tres veces: el original y dos imágenes desplazadas diagonalmente. Trazá en papel la flecha del vector entre copias consecutivas.</p>
          </div>
 
          <div class="lesson-card">
            <strong>Ejercicio 4 — Figura compuesta</strong>
            <p>Dibujá una «casita» sencilla con un <code>rect()</code> (paredes) y un <code>triangle()</code> (techo). Copiala dos veces más con <code>translate()</code>. Los tres códigos de la casita deben ser idénticos: solo varía el <code>translate()</code> previo.</p>
          </div>
 
          <div class="lesson-card">
            <strong>Ejercicio 5 — Inversa de la traslación</strong>
            <p>Si trasladás con el vector <code>(120, 40)</code>, ¿qué vector te devuelve a la posición original? Verificalo en p5.js: dibujá una figura, trasladá, dibujá de nuevo, y con la inversa volvé al punto de partida y dibujá una tercera copia exactamente encima de la primera.</p>
          </div>
        `
      },
      {
        title: "Rotación con rotate()",
        slug: "rotate",
        content: `
          <p>La <strong>rotación</strong> es una isometría que gira todos los puntos del plano alrededor de un punto fijo llamado <strong>centro de rotación</strong>, un cierto <strong>ángulo</strong> en una dirección. El punto central no se mueve; todos los demás se desplazan manteniendo su distancia a él.</p>
 
          <p>Si un punto <code>P</code> está a distancia <code>r</code> del centro, su imagen <code>P'</code> también estará a distancia <code>r</code>. Lo que cambia es el ángulo que forma el segmento <code>OP</code> con el eje horizontal.</p>
 
          <aside class="callout">
            <strong>¿Qué conserva la rotación?</strong>
            <p>Distancias al centro, longitudes, ángulos internos de la figura y área. Como la traslación, es una isometría directa: la orientación de la figura no se invierte.</p>
          </aside>
 
          <h2>Cómo funciona en p5.js</h2>
          <p><code>rotate(angulo)</code> gira el sistema de coordenadas alrededor del <em>origen actual</em>. Para elegir el centro de rotación, primero trasladá el origen hasta ese punto con <code>translate()</code>, y recién después rotá.</p>
 
          <p>Activá grados con <code>angleMode(DEGREES)</code> al inicio de <code>setup()</code>.</p>
 
          <pre><code>function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(230);
 
  // El rectángulo original, sin rotar
  fill(220, 80, 80);
  rect(180, 100, 80, 30);   // esquina superior izquierda en (180, 100)
 
  // Mismo rectángulo rotado 45° alrededor del centro del lienzo
  translate(200, 200);      // 1. Mover el origen al centro de rotación
  rotate(45);               // 2. Girar el sistema de coordenadas
  fill(80, 120, 220);
  rect(-20, -100, 80, 30);  // 3. Dibujar igual que antes, ajustando posición relativa
}</code></pre>
 
          <h2>La receta: translate → rotate → dibujar</h2>
          <ul>
            <li><strong>Paso 1:</strong> <code>translate(cx, cy)</code> — llevá el origen al centro de rotación.</li>
            <li><strong>Paso 2:</strong> <code>rotate(angulo)</code> — girá el sistema de coordenadas.</li>
            <li><strong>Paso 3:</strong> dibujá la figura <em>como si el centro fuera el (0,0)</em>.</li>
          </ul>
 
          <h2>Múltiples copias rotadas (sin bucles)</h2>
          <p>Usando <code>push()</code> y <code>pop()</code> podés aislar cada rotación. El ejemplo siguiente dibuja cuatro copias de una flecha formando una «estrella de cuatro puntas»:</p>
 
          <pre><code>function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(240);
 
  // Copia a 0°
  push();
  translate(200, 200);
  rotate(0);
  fill(220, 80, 80);
  rect(10, -8, 80, 16);   // rectángulo horizontal como "flecha"
  pop();
 
  // Copia a 90°
  push();
  translate(200, 200);
  rotate(90);
  fill(80, 180, 80);
  rect(10, -8, 80, 16);
  pop();
 
  // Copia a 180°
  push();
  translate(200, 200);
  rotate(180);
  fill(80, 120, 220);
  rect(10, -8, 80, 16);
  pop();
 
  // Copia a 270°
  push();
  translate(200, 200);
  rotate(270);
  fill(200, 160, 20);
  rect(10, -8, 80, 16);
  pop();
}</code></pre>
 
          <aside class="callout">
            <strong>Simetría rotacional</strong>
            <p>Una figura tiene <strong>simetría rotacional de orden n</strong> si al girarla <code>360°/n</code> queda igual a la original. Un cuadrado tiene orden 4 (gira 90° y es idéntico). Un triángulo equilátero tiene orden 3 (gira 120°).</p>
          </aside>
 
          <h2>Ejercicios</h2>
          <p>Usá <code>setup()</code>, <code>angleMode(DEGREES)</code> y bloques <code>push/pop</code> para cada figura. Sin bucles.</p>
 
          <div class="lesson-card">
            <strong>Ejercicio 1 — Papel primero</strong>
            <p>En papel cuadriculado, dibujá un rectángulo de 3×1 casillas con esquina inferior izquierda en el origen. Rotalo 90° alrededor del origen: ¿dónde quedan sus cuatro vértices? Calculalos antes de ir al código. Luego verificalos en p5.js con <code>translate(0,0)</code> + <code>rotate(90)</code> + el mismo <code>rect()</code>.</p>
          </div>
 
          <div class="lesson-card">
            <strong>Ejercicio 2 — Manecillas del reloj</strong>
            <p>Dibujá dos segmentos (rectángulos angostos) que simulen las manecillas de un reloj: una a 0° (las 12) y otra a 90° (las 3). El centro del reloj es <code>(200, 200)</code>. Usá dos bloques <code>push/pop</code>. Agregá un punto central con <code>point(200, 200)</code>.</p>
          </div>
 
          <div class="lesson-card">
            <strong>Ejercicio 3 — Estrella de 6 puntas</strong>
            <p>Dibujá seis copias de un rectángulo angosto (0°, 60°, 120°, 180°, 240°, 300°) todas con el mismo centro. Cada copia en un <code>push/pop</code> propio. ¿Qué tipo de simetría rotacional tiene la figura resultante?</p>
          </div>
 
          <div class="lesson-card">
            <strong>Ejercicio 4 — Centro fuera del centro</strong>
            <p>Elegí un centro de rotación que <em>no</em> sea el centro del lienzo, por ejemplo <code>(100, 300)</code>. Dibujá un triángulo pequeño y su imagen rotada 120° alrededor de ese punto. En papel, verificá que la distancia de cada vértice al centro se conserva.</p>
          </div>
 
         
        `
      },
      {
        title: "Simetría axial y central con scale()",
        slug: "scale",
        content: `
          <p>Además de la traslación y la rotación, hay dos isometrías que <em>invierten</em> la orientación de la figura: la <strong>simetría axial</strong> y la <strong>simetría central</strong>.</p>
 
          <h2>Simetría axial (reflexión)</h2>
          <p>Dado un eje (una recta), cada punto <code>P</code> se transforma en su imagen <code>P'</code> de modo que:</p>
          <ul>
            <li>El eje es la mediatriz del segmento <code>PP'</code>.</li>
            <li><code>P</code> y <code>P'</code> están a la misma distancia del eje, pero en lados opuestos.</li>
            <li>Si <code>P</code> está sobre el eje, entonces <code>P' = P</code> (punto fijo).</li>
          </ul>
          <p>El eje puede ser vertical, horizontal o diagonal. La simetría axial <strong>invierte la orientación</strong>: si la figura original va en sentido antihorario, la imagen va en sentido horario.</p>
 
          <h2>Simetría central</h2>
          <p>Dado un centro <code>O</code>, cada punto <code>P</code> tiene una imagen <code>P'</code> tal que <code>O</code> es el punto medio de <code>PP'</code>. Equivale a una rotación de 180° alrededor de <code>O</code>.</p>
 
          <aside class="callout">
            <strong>Isometrías inversas vs. directas</strong>
            <p>La traslación y la rotación son <em>directas</em>: conservan la orientación. La simetría axial es <em>inversa</em>: la invierte. La simetría central, siendo una rotación de 180°, es en realidad directa.</p>
          </aside>
 
          <h2>Simetría axial en p5.js — eje vertical</h2>
          <p>La idea: llevá el origen al eje con <code>translate(ejeX, 0)</code> y luego aplicá <code>scale(-1, 1)</code>. Ese factor <code>-1</code> en <code>x</code> «espeja» horizontalmente sin cambiar distancias (porque el valor absoluto es 1).</p>
 
          <pre><code>function setup() {
  createCanvas(500, 350);
  background(235);
 
  let ejeX = 250;   // eje vertical de simetría
 
  // Marcar el eje
  stroke(180);
  strokeWeight(2);
  line(ejeX, 0, ejeX, 350);
 
  // Figura original — a la izquierda del eje
  noStroke();
  fill(220, 90, 90);
  triangle(80, 270, 130, 270, 105, 190);   // triángulo
  fill(220, 90, 90, 100);
  rect(60, 280, 90, 30);                   // base
 
  // Imagen bajo simetría axial — a la derecha
  push();
    translate(ejeX, 0);   // origen en el eje
    scale(-1, 1);          // espejo horizontal
    fill(90, 130, 220);
    triangle(80, 270, 130, 270, 105, 190);
    fill(90, 130, 220, 100);
    rect(60, 280, 90, 30);
  pop();
}</code></pre>
 
          <h2>Simetría axial — eje horizontal</h2>
          <p>Para un eje horizontal en <code>y = ejeY</code>, usá <code>translate(0, ejeY)</code> + <code>scale(1, -1)</code>.</p>
 
          <pre><code>function setup() {
  createCanvas(400, 400);
  background(235);
 
  let ejeY = 200;
 
  stroke(150); line(0, ejeY, 400, ejeY);   // eje horizontal
 
  // Figura original — arriba del eje
  noStroke();
  fill(80, 180, 100);
  triangle(160, 170, 240, 170, 200, 100);
 
  // Imagen — debajo del eje
  push();
    translate(0, ejeY);
    scale(1, -1);
    fill(200, 120, 60);
    triangle(160, 170, 240, 170, 200, 100);
  pop();
}</code></pre>
 
          <h2>Simetría central en p5.js</h2>
          <p><code>scale(-1, -1)</code> equivale a una simetría central respecto al origen actual. Combinado con <code>translate(cx, cy)</code>, define cualquier centro <code>(cx, cy)</code>.</p>
 
          <pre><code>function setup() {
  createCanvas(400, 400);
  background(235);
 
  let cx = 200, cy = 200;   // centro de simetría
 
  // Marcar el centro
  stroke(0); point(cx, cy);
 
  // Figura original
  noStroke();
  fill(220, 90, 90);
  triangle(cx + 20, cy - 10, cx + 80, cy - 10, cx + 50, cy - 70);
 
  // Imagen bajo simetría central
  push();
    translate(cx, cy);
    scale(-1, -1);
    fill(90, 130, 220);
    triangle(cx + 20, cy - 10, cx + 80, cy - 10, cx + 50, cy - 70);
  pop();
}</code></pre>
 
          <aside class="callout">
            <strong>¿Por qué scale(-1, 1) es una isometría y scale(2) no?</strong>
            <p><code>scale(2)</code> duplica todas las distancias: la figura queda igual de forma pero el doble de grande. Eso es una <em>homotecia</em>, no una isometría. <code>scale(-1, 1)</code> solo invierte el signo de <code>x</code>, lo que equivale a una reflexión sin cambiar magnitudes.</p>
          </aside>
 
          <h2>Ejercicios</h2>
          <p>Usá solo <code>setup()</code>. Marcá siempre el eje o el centro en el lienzo.</p>
 
          <div class="lesson-card">
            <strong>Ejercicio 1 — Mariposa axial</strong>
            <p>Dibujá la mitad izquierda de una «ala» (un triángulo irregular o polígono simple). Completá la mitad derecha con simetría axial respecto al eje vertical <code>x = 200</code>. Marcá el eje con <code>line()</code>. En papel, verificá que un punto de la figura original y su imagen estén a igual distancia del eje.</p>
          </div>
 
          <div class="lesson-card">
            <strong>Ejercicio 2 — Eje horizontal</strong>
            <p>Dibujá una figura (puede ser una flecha, un triángulo o la silueta de una montaña) arriba de <code>y = 180</code>. Reflejala hacia abajo con eje horizontal en <code>y = 180</code> (<code>translate(0, 180)</code> + <code>scale(1, -1)</code>). Marcá el eje. ¿Se ve como un reflejo en el agua?</p>
          </div>
 
          <div class="lesson-card">
            <strong>Ejercicio 3 — Simetría central con segmento</strong>
            <p>Dibujá dos puntos <code>A</code> y <code>B</code> unidos por un segmento. Encontrá su imagen bajo simetría central respecto al centro del lienzo. Verificá en papel que el centro del lienzo queda exactamente a mitad de camino entre <code>A</code> y <code>A'</code>, y entre <code>B</code> y <code>B'</code>.</p>
          </div>
 
          <div class="lesson-card">
            <strong>Ejercicio 4 — Clasificar figuras (papel)</strong>
            <p>Para cada figura, indicá si tiene: eje de simetría, centro de simetría, ambos, o ninguno. Figuras: cuadrado, rectángulo no cuadrado, letra «S», letra «H», círculo, triángulo equilátero, triángulo escaleno. Justificá cada respuesta.</p>
          </div>
 
          <div class="lesson-card">
            <strong>Ejercicio 5 — Distinción directa/inversa</strong>
            <p>Dibujá una letra asimétrica como «R» o «F» con <code>line()</code> y <code>rect()</code>. Aplicale simetría axial. Notarás que la imagen queda «al espejo» (orientación invertida). Luego aplicale una rotación de 180° al mismo original. ¿La imagen es igual a la de la simetría axial? Compará y explicá en papel la diferencia.</p>
          </div>
        `
      },
      {
        title: "Componer isometrías con push() y pop()",
        slug: "push-pop",
        content: `
          <p>Cuando aplicás varias isometrías en un mismo sketch, los <code>translate()</code>, <code>rotate()</code> y <code>scale()</code> se <em>acumulan</em>: cada uno parte del estado que dejó el anterior. Sin control, eso hace que las transformaciones de una figura «contaminen» a las siguientes.</p>
 
          <p><code>push()</code> guarda una copia del estado actual del sistema de coordenadas (y también del color de relleno, trazo, etc.). <code>pop()</code> lo restaura. Todo lo que ocurre entre ellos queda aislado.</p>
 
          <aside class="callout">
            <strong>Analogía</strong>
            <p>Imaginá que <code>push()</code> es «guardar partida» y <code>pop()</code> es «cargar partida». Todo lo que hacés entre medio no afecta el «mundo guardado».</p>
          </aside>
 
          <h2>Sin push/pop: problema de acumulación</h2>
          <pre><code>function setup() {
  createCanvas(400, 200);
  angleMode(DEGREES);
  background(235);
 
  // Primera figura: traslada 80px a la derecha
  translate(80, 100);
  fill(220, 80, 80);
  rect(-20, -20, 40, 40);
 
  // Segunda figura: QUEREMOS que esté en (280, 100)
  // pero translate() acumula desde el estado anterior
  translate(200, 0);   // en realidad queda en 80+200 = 280 ✓ (OK aquí)
  fill(80, 130, 220);
  rect(-20, -20, 40, 40);
 
  // Tercera figura: rotate(30) gira TODO, incluida la traslación acumulada
  rotate(30);
  fill(80, 180, 80);
  rect(-20, -20, 40, 40);   // posición inesperada
}</code></pre>
 
          <h2>Con push/pop: cada figura lleva su transformación</h2>
          <pre><code>function setup() {
  createCanvas(500, 300);
  angleMode(DEGREES);
  background(235);
 
  // Figura 1: traslación simple
  push();
    translate(80, 150);
    fill(220, 80, 80);
    rect(-20, -20, 40, 40);
  pop();   // estado restaurado al original
 
  // Figura 2: traslación diferente — parte desde (0,0), no desde (80,150)
  push();
    translate(250, 150);
    rotate(45);
    fill(80, 130, 220);
    rect(-20, -20, 40, 40);
  pop();
 
  // Figura 3: simetría axial independiente
  push();
    translate(420, 0);
    scale(-1, 1);
    fill(80, 180, 80);
    triangle(10, 240, 70, 240, 40, 160);
  pop();
}</code></pre>
 
          <h2>Composición de isometrías</h2>
          <p>Dentro de un bloque <code>push/pop</code>, podés combinar varias transformaciones. El orden importa:</p>
          <ul>
            <li><code>translate → rotate</code>: gira alrededor del punto de traslación (útil para rotar figuras en su lugar).</li>
            <li><code>rotate → translate</code>: la traslación ocurre en el sistema ya rotado (el desplazamiento «sale diagonal»).</li>
          </ul>
 
          <pre><code>// Ejemplo: figura original y cuatro imágenes rotadas a su alrededor
function setup() {
  createCanvas(420, 420);
  angleMode(DEGREES);
  background(240);
 
  // Figura original (referencia)
  push();
    translate(210, 90);
    fill(200, 200, 200);
    rect(-20, -20, 40, 40);
  pop();
 
  // Imagen a 90°
  push();
    translate(210, 210);   // centro de rotación: centro del lienzo
    rotate(90);
    translate(0, -120);    // alejar de centro el mismo radio que la original
    fill(220, 80, 80);
    rect(-20, -20, 40, 40);
  pop();
 
  // Imagen a 180°
  push();
    translate(210, 210);
    rotate(180);
    translate(0, -120);
    fill(80, 130, 220);
    rect(-20, -20, 40, 40);
  pop();
 
  // Imagen a 270°
  push();
    translate(210, 210);
    rotate(270);
    translate(0, -120);
    fill(80, 180, 80);
    rect(-20, -20, 40, 40);
  pop();
}</code></pre>
 
          <aside class="callout">
            <strong>Isometrías que componen</strong>
            <p>La composición de dos isometrías es siempre otra isometría. Dos reflexiones de ejes paralelos equivalen a una traslación. Dos reflexiones de ejes que se cruzan equivalen a una rotación.</p>
          </aside>
 
          <h2>Ejercicios</h2>
          <p>Usá solo <code>setup()</code>. Cada figura en su propio bloque <code>push/pop</code>. Sin bucles.</p>
 
          <div class="lesson-card">
            <strong>Ejercicio 1 — Cuatro traslaciones</strong>
            <p>Dibujá el mismo motivo (un cuadrado de 40×40) en cuatro posiciones distintas usando cuatro bloques <code>push/pop</code> independientes, cada uno con su <code>translate()</code>. Comprobá que cambiar el <code>translate()</code> de uno no afecta a los demás.</p>
          </div>
 
          <div class="lesson-card">
            <strong>Ejercicio 2 — Teselado en L</strong>
            <p>Creá una «L» con dos <code>rect()</code>. Copiala tres veces en distintas posiciones usando tres bloques <code>push/pop</code> + <code>translate()</code>. El resultado debe verse como si estuvieras «embaldosando» un piso con esa pieza.</p>
          </div>
 
          <div class="lesson-card">
            <strong>Ejercicio 3 — Rosa de rotaciones</strong>
            <p>Dibujá un motivo pequeño (triángulo o pétalo) y copialo 5 veces rotado cada 72° (360°/5) alrededor del centro del lienzo. Cada copia en su <code>push/pop</code>. Identificá: ¿qué orden de simetría rotacional tiene el resultado?</p>
          </div>
 
          <div class="lesson-card">
            <strong>Ejercicio 4 — Componer traslación y reflexión</strong>
            <p>Dibujá una figura (bloque A). En un segundo bloque, trasladala 200px a la derecha (bloque B). En un tercer bloque, aplicale al bloque B tanto la traslación como la simetría axial. En papel, describí el resultado: ¿es una nueva isometría conocida o una combinación?</p>
          </div>
           
        `
      }
    ]
  }
];

// Helper para navegación entre lecciones
export function getAdjacentLessons(sectionSlug: string, lessonSlug: string) {
  const sectionIndex = courseData.findIndex(s => s.slug === sectionSlug);
  if (sectionIndex === -1) return { prev: null, next: null };

  const section = courseData[sectionIndex];
  const lessonIndex = section.lessons.findIndex(l => l.slug === lessonSlug);

  let prev = null;
  let next = null;

  if (lessonIndex > 0) {
    prev = { section, lesson: section.lessons[lessonIndex - 1] };
  } else if (sectionIndex > 0) {
    const prevSection = courseData[sectionIndex - 1];
    prev = { section: prevSection, lesson: prevSection.lessons[prevSection.lessons.length - 1] };
  }

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
