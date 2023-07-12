// Obtener los elementos del DOM
var seriesBtn = document.getElementById('seriesBtn');
var peliculasBtn = document.getElementById('peliculasBtn');
var donacionesBtn = document.getElementById('donacionesBtn');
var contentSection = document.getElementById('content');
var homeBtn = document.getElementById('homeBtn');

// Agregar eventos a los botones
seriesBtn.addEventListener('click', function() {
  mostrarSeccion('series');
});

peliculasBtn.addEventListener('click', function() {
  mostrarSeccion('peliculas');
});

donacionesBtn.addEventListener('click', function() {
  mostrarSeccion('donaciones');
});

homeBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  mostrarInicio();
});

// Función para mostrar la sección correspondiente
function mostrarSeccion(seccion) {
  contentSection.innerHTML = '';

  if (seccion === 'series') {
    mostrarPortadas('series');
  } else if (seccion === 'peliculas') {
    mostrarPortadas('peliculas');
  } else if (seccion === 'donaciones') {
    mostrarDonaciones();
  } else {
    mostrarInicio();
  }
}

// Función para mostrar las portadas de los videos
function mostrarPortadas(categoria) {
  var portadas = obtenerPortadas(categoria);

  // Generar el HTML para las portadas de los videos
  var html = '';
  for (var i = 0; i < portadas.length; i++) {
    html += '<div class="portada">';
    html += '<img src="' + portadas[i].imagen + '" class="portada-imagen" onclick="mostrarVideos(this)">';

    // Mostrar los videos debajo de la imagen de portada
    html += '<div class="videos hidden">';
    for (var j = 0; j < portadas[i].videos.length; j++) {
      html += '<video src="' + portadas[i].videos[j] + '" controls></video>';
    }
    html += '</div>';

    html += '</div>';
  }

  // Mostrar las portadas en el contenido principal
  contentSection.innerHTML = html;
}

// Función para mostrar la sección de donaciones
function mostrarDonaciones() {
  var html = '<h2>Agradecemos tu disposición para colaborar con nuestro proyecto. Puedes hacer una contribución de 1 peso o más a través de Mercado Pago para ayudarnos a mantener el servidor y brindarte contenido gratuito de calidad. Tu apoyo es fundamental para seguir ofreciendo una experiencia de transmisión sin interrupciones. ¡Gracias por tu generosidad y por ser parte de nuestra comunidad!</h2>';
  html += '<p>¡Tu apoyo es bienvenido! Puedes realizar una donación a través de Mercado Pago:</p>';
  html += '<form action="https://www.mercadopago.com/checkout/donation" method="post" target="_blank">';
  html += '<input type="hidden" name="item_title" value="Donación">';
  html += '<input type="hidden" name="description" value="Donación a Mi Web">';
  html += '<input type="hidden" name="amount" value="10">';
  html += '<button type="submit">Donar</button>';
  html += '</form>';

  // Mostrar la sección de donaciones en el contenido principal
  contentSection.innerHTML = html;
}

// Función para mostrar la sección de inicio
function mostrarInicio() {
  var html = '<h2>¡Bienvenido a nuestro sitio web de transmisión de dibujos animados retro y películas gratuitas! Aquí puedes disfrutar de contenido clásico sin interrupciones publicitarias para una experiencia ininterrumpida. Además, te ofrecemos la oportunidad de colaborar con nosotros a través de Mercado Pago, donde puedes hacer una contribución de $ 1 peso o más. Tu apoyo es fundamental para mantener nuestro servidor y continuar brindándote contenido gratuito de calidad. ¡Únete a nuestra comunidad y sé parte de esta emocionante aventura! Gracias por tu generosidad y por ser parte de nuestra comunidad.</h2>';

  // Mostrar la sección de inicio en el contenido principal
  contentSection.innerHTML = html;
}

// Función para obtener las portadas de los videos según la categoría
function obtenerPortadas(categoria) {
  var portadas = [];

  if (categoria === 'series') {
    portadas = [
      {
        imagen: 'pinky.jpg',
        videos: [
          'Pinky y Cerebro - 01.mp4', 'Pinky y Cerebro - 02.mp4', 'Pinky y Cerebro - 03.mp4', 'Pinky y Cerebro - 04.mp4', 'Pinky y Cerebro - 05.mp4', 'Pinky y Cerebro - 01.mp4',
          'Pinky y Cerebro - 06.mp4', 'Pinky y Cerebro - 07.mp4', 'Pinky y Cerebro - 08.mp4', 'Pinky y Cerebro - 09.mp4', 'Pinky y Cerebro - 10.mp4',
          'Pinky y Cerebro - 11.mp4', 'Pinky y Cerebro - 12.mp4', 'Pinky y Cerebro - 13.mp4', 'Pinky y Cerebro - 14.mp4', 'Pinky y Cerebro - 15.mp4',
          'Pinky y Cerebro - 16.mp4', 'Pinky y Cerebro - 17.mp4', 'Pinky y Cerebro - 18.mp', 'Pinky y Cerebro - 19.mp4', 'Pinky y Cerebro - 20.mp4',
          'Pinky y Cerebro - 20.mp4', 'Pinky y Cerebro - 22.mp4', 'Pinky y Cerebro - 23.mp4', 'Pinky y Cerebro - 24.mp4', 'Pinky y Cerebro - 25.mp4',
          'Pinky y Cerebro - 26.mp4', 'Pinky y Cerebro - 27.mp4', 'Pinky y Cerebro - 28.mp4', 'Pinky y Cerebro - 29.mp4', 'Pinky y Cerebro.mp4 - 30.mp4',
          'Pinky y Cerebro - 31.mp4', 'Pinky y Cerebro - 32.mp4',

        ]
      },
      {
        imagen: 'criptaw.jpg',
        videos: [
          'video 1.mp4','video 2.mp4','video 3.mp4','video 4.mp4','video 5.mp4','video 6.mp4','video 7.mp4',
          'video 8.mp4','video 9.mp4','video 10.mp4','video 11.mp4','video 12.mp4',
          'video 13.mp4','video 14.mp4','video 15.mp4','video 16.mp4','video 17.mp4',
          'video 18.mp4','video 19.mp4','video 20.mp4','video 21.mp4','video 22.mp4','video 23.mp4','video 24.mp4',
          'video 24.mp4','video 25.mp4','video 26.mp4','video 27.mp4','video 28.mp4','video 29.mp4',
          'video 30.mp4','video 31.mp4','video 32.mp4','video 33.mp4','video 34.mp4','video 35.mp4',
          'video 35.mp4','video 36.mp4','video 37.mp4','video 38.mp4',
          'Más videos.mp4'
        ]
      },
      {
        imagen: 'animacion_1331.webp',
        videos: [
          'video_serie3.mp4',
          'Otro video.mp4',
          'Más videos.mp4'
        ]
      }
    ];
  } else if (categoria === 'peliculas') {
    portadas = [
      {
        imagen: 'batman.jpg',
        videos: [
          'Batman.Vs.Dracula[KJAF].mp4',
          'Batman & Harley Quinn(JoJu Channel).mp4',
          'Batman.The.Long.Halloween.Part.One.2021.720p.mkv'
        ]
      },
      {
        imagen: 'animales.jpg',
        videos: [
          'Animales Fantasticos Los Secretos De Dumbledore (2022) [BluRay Rip][AC3 5.1 Castellano][www.nucleohd.NET]1.mp4',
          'Otro video.mp4',
          'Más videos.mp4'
        ]
      },
      {
        imagen: 'mario.jpg',
        videos: [
          'The Super Mario Bros Movie (2023) [Bluray 720p][Castellano]1.mp4',
          'Otro video.mp4',
          'Más videos.mp4'
        ]
      }
    ];
  }

  return portadas;
}

// Función para mostrar u ocultar los videos al hacer clic en la portada
function mostrarVideos(elemento) {
  // Obtener el contenedor de videos asociado a la portada seleccionada
  var videosContainer = elemento.nextElementSibling;

  // Mostrar u ocultar el contenedor de videos según su estado actual
  if (videosContainer.classList.contains('hidden')) {
    videosContainer.classList.remove('hidden');
  } else {
    videosContainer.classList.add('hidden');
  }
}
function mostrarVideos(elemento) {
  var videosContainer = elemento.nextElementSibling;

  // Obtener todas las portadas y ocultar los videos excepto el que se está mostrando actualmente
  var portadas = document.getElementsByClassName('portada');
  for (var i = 0; i < portadas.length; i++) {
    var videos = portadas[i].getElementsByClassName('videos');
    for (var j = 0; j < videos.length; j++) {
      if (videos[j] !== videosContainer) {
        videos[j].classList.add('hidden');
      }
    }
  }

  // Mostrar u ocultar el contenedor de videos según su estado actual
  if (videosContainer.classList.contains('hidden')) {
    videosContainer.classList.remove('hidden');
  } else {
    videosContainer.classList.add('hidden');
  }
}
