export default {
  global: {
    componenteFormativo: 'Análisis de datos estadísticos de la audiencia',
    descripcionCurso:
      '<em>WhatsApp Business</em> es una herramienta interactiva diseñada para microempresarios, permite manejar un emprendimiento desde un dispositivo móvil o fijo brindándole un sinfín de posibilidades de comercialización, respuesta oportuna y fidelización de clientes a través de un óptimo servicio o producto.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Medición de las publicaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Recolección de indicadores en <em>WhatsApp Business</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estadísticas <em>web</em>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de indicadores',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Medición de indicadores',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Análisis de métricas',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Desarrollo de campañas',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Oportunidades de mejora para su empresa',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Comunicación visual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Técnicas de lógica visual',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Piezas gráficas: mejoras para atraer clientes',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Elaboración de piezas gráficas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Propiedad intelectual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Principios de la propiedad intelectual',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Protección de datos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Registro de derechos de autor',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Normatividad',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'DIAN. (2020). Protección de datos personales. DIAN.',
      link:
        'https://www.dian.gov.co/atencionciudadano/Seguridad-de-la-Informacion/Paginas/Proteccion-de-datos-personales.aspx',
    },
    {
      referencia:
        'Gil, C. (2021). Historia de WhatsApp: cómo se creó la app que ha revolucionado la comunicación social. ',
      link: 'https://marketing4ecommerce.net/historia-de-whatsapp/ ',
    },
    {
      referencia:
        'Reglamento Europeo de Protección de Datos. (2018). Reglamento general de protección de datos. YouEurope',
      link:
        'https://europa.eu/youreurope/business/dealing-with-customers/data-protection/data-protection-gdpr/index_es.htm ',
    },
    {
      referencia: 'SIC. (2021). Protección de datos personales. SIC.',
      link:
        'https://www.sic.gov.co/content/%c2%bfcuales-son-los-principios-rectores-para-el-tratamiento-de-datos-personales ',
    },
    {
      referencia:
        'Universidad Nacional (2014). Derechos de autor. Universidad Nacional. ',
      link:
        'https://propiedadintelectual.unal.edu.co/acerca-de/derechos-de-autor/',
    },
    {
      referencia:
        'Steil, T. (2021). Las 10 estadísticas más importantes de WhatsApp. ',
      link:
        'https://www.userlike.com/es/blog/estadisticas-whatsapp#whatsapp-nutzungshaeufigkeit',
    },
  ],
  glosario: [
    {
      termino: 'APP',
      significado:
        'herramientas de <em>software</em> escritas en distintos lenguajes de programación (según el desarrollador que la programe) para teléfonos inteligentes -o <em>smartphones- y tablets</em>. Se caracterizan por ser útiles, dinámicas y fáciles de instalar y manejar.',
    },
    {
      termino: 'Bases de datos',
      significado:
        'recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático.',
    },
    {
      termino: '<em>Big data</em>',
      significado:
        'conjunto de tecnologías que han sido creadas para recopilar, analizar y gestionar los datos que generan los usuarios de Internet.',
    },
    {
      termino: 'Derechos de autor',
      significado:
        'rama de la propiedad intelectual que reconoce, en cabeza de los autores, ciertas prerrogativas morales y patrimoniales sobre sus obras artísticas y literarias que sean originales, y susceptibles de ser divulgadas o reproducidas por cualquier medio. Los derechos conexos, por otro lado, son aquellos derechos reconocidos a los artistas intérpretes o ejecutantes, los productores de fonogramas y los organismos de radiodifusión, sobre sus interpretaciones, fonogramas o emisiones de radiodifusión. La regulación del derecho de autor y los derechos conexos se encuentra principalmente en la Ley 23 de 1982 y la Decisión Andina 351 de 1993.',
    },
    {
      termino: 'Estadísticas',
      significado:
        'métodos, procedimientos y fórmulas que permiten recolectar información para luego analizarla y extraer de ella conclusiones relevantes. Se puede decir que es la “ciencia de los datos” y que su principal objetivo es mejorar la comprensión de los hechos a partir de la información disponible.',
    },
    {
      termino: 'Imagen corporativa',
      significado:
        'percepción que tienen las personas sobre una empresa, basada en creencias, opiniones, valores y sentimientos.',
    },
    {
      termino: 'Indicador',
      significado:
        'detectan y prevén desviaciones en el logro de los objetivos. En el contexto de orientación hacia los procesos, un indicador puede ser de proceso o de resultados.',
    },
    {
      termino: 'KPI',
      significado:
        '<em>Key Performance Indicator</em> (Indicador Clave de Rendimiento). Es decir, el KPI es un indicador del rendimiento del trabajo que se está realizando sobre los objetivos que se tiene sobre los mercados y es la forma de conocer si los estás cumpliendo.',
    },
    {
      termino: '<em>Lead</em>',
      significado:
        'contacto con un cliente potencial, también conocido como un “prospecto”.',
    },
    {
      termino: 'Métricas',
      significado:
        'utilizadas para cuantificar y acompañar las acciones diarias de gestores y vendedores. Es a partir de estas métricas que los principales resultados se generan y, por lo tanto, los únicos números de todo el dashboard de ventas que se pueden gestionar a partir del esfuerzo aplicado en su evolución.',
    },
    {
      termino: 'Plataforma web',
      significado:
        'plataformas digitales o virtuales, son espacios en internet que permiten la ejecución de diversas aplicaciones o programas en un mismo lugar para satisfacer distintas necesidades. Cada una cuenta con funciones diferentes que ayudan a los usuarios a resolver distintos tipos de problemas de manera automatizada, usando menos recursos.',
    },
    {
      termino: 'Pyme',
      significado:
        'acrónimo utilizado a la hora de hablar de pequeñas y medianas empresas. Estas, generalmente, suelen contar con un bajo número de trabajadores y de un volumen de negocio e ingresos moderados en comparación con grandes corporaciones industriales o mercantiles.',
    },
    {
      termino: '<em>Target</em>',
      significado:
        'concepto que tiene suma importancia dentro del área del <em>marketing</em> y la comunicación. Se tiene en cuenta dentro de los más diversos procedimientos. Por ejemplo, cuando se lleva a cabo la puesta en marcha de un proyecto se define el <em>target</em> al que va dirigido, sus servicios o productos, así como cuando se hace un estudio de mercado, un plan de <em>marketing</em> o un plan de negocio.',
    },
    {
      termino: 'Normatividad',
      significado:
        'conjunto de leyes o reglamentos que rigen conductas y procedimientos según los criterios y lineamientos de una institución u organización privada o estatal.',
    },
    {
      termino: 'Tendencias digitales',
      significado:
        'proyectan en el mejoramiento de la experiencia de los consumidores en los sitios web y en las plataformas de e-commerce. Además, con las opciones que da la virtualidad como alternativa que planteó la “nueva normalidad”, estas tendencias también buscan de alguna manera la protección de la privacidad y buen nombre de nuestros clientes.',
    },
    {
      termino: 'Venta en línea',
      significado:
        'ofrecimiento de productos, servicios, ideas u otros mediante un sitio web en internet, de tal forma, que los posibles compradores puedan conocer en qué consisten y cuáles son sus ventajas y beneficios a través de ese sitio web.',
    },
  ],
  complementario: [
    {
      tema: '1.2 Estadísticas web',
      referencia:
        'GCF AprendeLibre. (2021). ¿Cómo medir las estadísticas? [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_f3ze6dlHNw',
    },
    {
      tema: '2. Oportunidades de mejora para su empresa',
      referencia:
        'Cyberclick - Marketing Digital. (2020). 10 técnicas de ventas online para vender más. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Kc8xwas3drU',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable Equipo Desarrollo Curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experta Temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Luis Fernando Botero Mendoza',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Maria Natalia Maldonado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mayra Alejandra Alvarez',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
