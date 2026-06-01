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
          <p>En geometría, una <strong>isometría</strong> es una transformación que conserva distancias y ángulos: la figura imagen es congruente con la original. La <strong>traslación</strong> desplaza todos los puntos según un vector \((dx, dy)\).</p>
          
          <p>En p5.js, <code>translate(dx, dy)</code> mueve el origen del sistema de coordenadas. Todo lo que dibujes después queda desplazado respecto a la figura que dibujaste antes, sin cambiar su forma ni su tamaño.</p>
          
          <aside class="callout">
            <strong>Isometría y traslación</strong>
            <p>La traslación es una isometría: dos figuras iguales en distinta posición tienen los mismos lados y los mismos ángulos. Solo cambia su lugar en el plano.</p>
          </aside>
          
          <h2>Ejemplo en setup()</h2>
          <pre><code>function setup() {
  createCanvas(400, 400);
  background(220);

  // Triángulo original
  fill(255, 100, 100);
  triangle(40, 200, 100, 200, 70, 140);

  // Misma figura tras una traslación
  let dx = 150;
  let dy = 0;
  translate(dx, dy);
  fill(100, 100, 255);
  triangle(40, 200, 100, 200, 70, 140);
}</code></pre>
          
          <h2>Importante</h2>
          <ul>
            <li>El vector de traslación es \((dx, dy)\): positivo en <code>x</code> va a la derecha; positivo en <code>y</code> va hacia abajo en p5.js.</li>
            <li>Puedes guardar el vector en variables: <code>let dx = 120; let dy = 50;</code></li>
            <li><code>translate()</code> afecta a todo lo que se dibuja después en ese sketch.</li>
          </ul>
          
          <aside class="callout">
            <strong>Vector con variables</strong>
            <p>Define <code>let dx</code> y <code>let dy</code> al inicio de <code>setup()</code> y reutiliza los mismos valores cada vez que repitas el dibujo de una figura trasladada.</p>
          </aside>

          <h2>Ejercicios</h2>
          <p>Usa solo <code>setup()</code> en el editor de p5.js (sin <code>draw()</code>, bucles ni condicionales).</p>
          <div class="lesson-card">
            <strong>Ejercicio 1</strong>
            <p>Dibuja un triángulo en una posición y la misma figura trasladada con <code>translate()</code>. En papel, responde: ¿son congruentes? ¿Qué conserva la traslación?</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 2</strong>
            <p>Define <code>let dx = 80;</code> y <code>let dy = 0;</code>. Dibuja un cuadrado pequeño y repítelo tres veces en fila con tres bloques <code>translate(dx, dy)</code> + dibujo (sin bucles).</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 3</strong>
            <p>Traslada una figura hacia arriba usando <code>dy</code> negativo (por ejemplo <code>let dy = -60;</code>). Anota en papel el vector \((dx, dy)\) que usaste.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 4</strong>
            <p>Dibuja una figura en forma de «L» con dos <code>rect()</code>. Cópiala con <code>translate()</code> para tener un par de figuras iguales en distinta posición.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 5</strong>
            <p>En papel, dibuja dos copias de la misma figura y marca con una flecha el vector de traslación que lleva una sobre la otra.</p>
          </div>
        `
      },
      {
        title: "Rotación con rotate()",
        slug: "rotate",
        content: `
          <p>La <strong>rotación</strong> es una isometría: gira la figura alrededor de un <strong>centro</strong> y un <strong>ángulo</strong>, conservando distancias y ángulos.</p>
          
          <p>En p5.js, <code>rotate(angle)</code> gira el sistema de coordenadas alrededor del origen actual. Para elegir el centro, primero usa <code>translate()</code> hasta ese punto.</p>
          
          <h2>Usar grados</h2>
          <p>Activa grados con <code>angleMode(DEGREES)</code> en <code>setup()</code>:</p>
          <pre><code>function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(220);

  translate(200, 200); // Centro de rotación
  rotate(90);
  fill(100, 150, 255);
  rect(-40, -15, 80, 30);
}</code></pre>
          
          <h2>Conceptos clave</h2>
          <ul>
            <li>La rotación es siempre alrededor del origen actual del sistema.</li>
            <li><code>translate(centroX, centroY)</code> y luego <code>rotate(ángulo)</code> definen el centro y el giro.</li>
            <li>Con <code>angleMode(DEGREES)</code>, usa 90°, 180°, 45°, etc.</li>
            <li><strong>Simetría rotacional:</strong> si cuatro giros de 90° dejan la figura igual, tiene simetría rotacional de orden 4.</li>
          </ul>
          
          <aside class="callout">
            <strong>Centro de rotación</strong>
            <p>Para rotar alrededor del centro del lienzo: <code>translate(width/2, height/2)</code>, luego <code>rotate()</code>, y dibuja la figura centrada en <code>(0, 0)</code>.</p>
          </aside>

          <h2>Ejercicios</h2>
          <p>Usa solo <code>setup()</code> y <code>angleMode(DEGREES)</code>. Puedes usar <code>push()</code> y <code>pop()</code> para separar cada figura.</p>
          <div class="lesson-card">
            <strong>Ejercicio 1</strong>
            <p>Dibuja el mismo rectángulo dos veces: una con <code>rotate(90)</code> y otra con <code>rotate(180)</code> (dos bloques <code>push/pop</code> o dos sketches). Compara su orientación.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 2</strong>
            <p>Coloca el centro en el medio del lienzo: <code>translate(width/2, height/2)</code>, <code>rotate(45)</code>, y dibuja un rectángulo centrado en el origen.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 3</strong>
            <p>Haz una «rueda» de 4 brazos: cuatro bloques <code>push</code> → <code>translate</code> al centro → <code>rotate(0)</code>, <code>rotate(90)</code>, <code>rotate(180)</code>, <code>rotate(270)</code> → dibuja un segmento → <code>pop</code>.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 4</strong>
            <p>En papel, dibuja un punto <code>P</code> y su imagen <code>P'</code> tras una rotación de 90° alrededor de un punto <code>O</code>. Marca el ángulo en <code>O</code>.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 5</strong>
            <p>En tu sketch, coloca dos copias de la misma figura. Indica en papel qué ángulo (90°, 180° o 270°) relaciona una con la otra respecto al centro elegido.</p>
          </div>
        `
      },
      {
        title: "Simetría axial y central con scale()",
        slug: "scale",
        content: `
          <p>Además de la traslación y la rotación, hay isometrías ligadas a las <strong>simetrías</strong>:</p>
          <ul>
            <li><strong>Simetría axial:</strong> cada punto <code>P</code> tiene una imagen <code>P'</code> al otro lado de un eje (recta), a la misma distancia.</li>
            <li><strong>Simetría central:</strong> cada punto <code>P</code> tiene una imagen <code>P'</code> tal que el centro <code>O</code> es el punto medio del segmento <code>PP'</code>.</li>
          </ul>
          
          <p>En p5.js, con factor 1 en módulo, <code>scale(-1, 1)</code> representa una reflexión (simetría axial respecto a un eje vertical) y <code>scale(-1, -1)</code> una simetría central respecto al origen actual.</p>
          
          <h2>Simetría axial (eje vertical)</h2>
          <pre><code>function setup() {
  createCanvas(400, 400);
  background(220);
  let ejeX = 200;

  stroke(150);
  line(ejeX, 0, ejeX, 400); // Eje de simetría

  // Mitad izquierda
  fill(255, 150, 150);
  triangle(80, 250, 120, 250, 100, 180);

  // Mitad derecha (reflexión)
  push();
  translate(ejeX, 0);
  scale(-1, 1);
  fill(150, 150, 255);
  triangle(80, 250, 120, 250, 100, 180);
  pop();
}</code></pre>
          
          <h2>Simetría central</h2>
          <pre><code>push();
translate(width/2, height/2);
scale(-1, -1);
// Dibuja la figura centrada en (0, 0)
pop();</code></pre>
          
          <aside class="callout">
            <strong>¿Es siempre isometría?</strong>
            <p><code>scale(2)</code> agranda la figura: es una <strong>homotecia</strong>, no una isometría, porque cambian las distancias. Con <code>scale(-1, 1)</code> o <code>scale(-1, -1)</code> (factor 1 en valor absoluto) sí conservas distancias y ángulos.</p>
          </aside>

          <h2>Ejercicios</h2>
          <p>Usa solo <code>setup()</code>. Marca el eje o el centro cuando te lo pidan.</p>
          <div class="lesson-card">
            <strong>Ejercicio 1</strong>
            <p>Dibuja la mitad izquierda de una mariposa o triángulo. Completa la mitad derecha con simetría axial; el eje vertical está en <code>x = 200</code> (usa <code>translate</code> + <code>scale(-1, 1)</code>).</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 2</strong>
            <p>Dibuja una letra «E» o una figura irregular y su imagen con simetría axial. Marca el eje con una <code>line()</code> vertical.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 3</strong>
            <p>Dibuja un punto (círculo pequeño) y su imagen bajo simetría central respecto al centro del lienzo (<code>translate(width/2, height/2)</code> + <code>scale(-1, -1)</code>).</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 4</strong>
            <p>En papel, clasifica: ¿tiene eje de simetría, centro de simetría, ambos o ninguno? (cuadrado, letra «S», círculo).</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 5</strong>
            <p>Dibuja un segmento <code>AB</code> y su imagen <code>A'B'</code> con simetría central. Comprueba en papel que el centro del lienzo queda a mitad de camino entre <code>A</code> y <code>A'</code>.</p>
          </div>
        `
      },
      {
        title: "Componer isometrías con push() y pop()",
        slug: "push-pop",
        content: `
          <p>Cuando aplicas varias isometrías en un mismo sketch, <code>push()</code> guarda el estado actual (traslación, rotación, escala, colores…) y <code>pop()</code> lo restaura. Así cada figura lleva su propia transformación sin alterar la siguiente.</p>
          
          <aside class="callout">
            <strong>Composición</strong>
            <p>Puedes combinar traslación, rotación y simetría. El orden importa: primero <code>translate</code>, luego <code>rotate</code> o <code>scale</code>, suele dar un resultado distinto que al revés.</p>
          </aside>
          
          <h2>Ejemplo en setup()</h2>
          <pre><code>function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(220);

  // Figura 1: traslación
  push();
  translate(80, 120);
  fill(255, 120, 120);
  rect(0, 0, 40, 40);
  pop();

  // Figura 2: rotación en otro lugar
  push();
  translate(280, 200);
  rotate(45);
  fill(120, 120, 255);
  rect(-20, -20, 40, 40);
  pop();
}</code></pre>
          
          <h2>Reglas importantes</h2>
          <ul>
            <li>Cada <code>push()</code> debe tener su <code>pop()</code> correspondiente.</li>
            <li>Repite bloques <code>push → transformar → dibujar → pop</code> en lugar de usar bucles.</li>
            <li>Útil para teselados, figuras repetidas y simetrías sin mezclar transformaciones.</li>
          </ul>
          
          <aside class="callout">
            <strong>Isometrías en este curso</strong>
            <p>Traslación (<code>translate</code>), rotación (<code>rotate</code>), simetría axial y central (<code>scale(-1, …)</code>). Todas conservan forma y tamaño cuando las usas como en las lecciones anteriores.</p>
          </aside>

          <h2>Ejercicios</h2>
          <p>Usa solo <code>setup()</code>. Separa cada figura con <code>push()</code> y <code>pop()</code>.</p>
          <div class="lesson-card">
            <strong>Ejercicio 1</strong>
            <p>Dibuja dos figuras iguales (mismo código de dibujo) en posiciones distintas. Cada una con su <code>push</code> → <code>translate</code> → dibujo → <code>pop</code>.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 2</strong>
            <p>Dibuja un motivo (cuadrado o triángulo pequeño) y repítelo tres veces con traslación: tres bloques <code>push/pop</code> y tres <code>translate</code> distintos (sin bucles).</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 3</strong>
            <p>En el centro del lienzo, dibuja el mismo motivo en ángulo 0°, 60° y 120° con tres bloques <code>push</code> → <code>translate(width/2, height/2)</code> → <code>rotate</code> → dibujo → <code>pop</code>.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 4</strong>
            <p>A la izquierda, una figura normal. A la derecha, la misma figura con simetría axial (<code>translate</code> al eje + <code>scale(-1, 1)</code>) dentro de su propio <code>push/pop</code>, sin afectar la figura de la izquierda.</p>
          </div>
          <div class="lesson-card">
            <strong>Ejercicio 5</strong>
            <p>En papel, observa tres capturas de sketches (tuyos o del profesor) e indica si muestran traslación, rotación, simetría axial, simetría central o ninguna de ellas.</p>
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
