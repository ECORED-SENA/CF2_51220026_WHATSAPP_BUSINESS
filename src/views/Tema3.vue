<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Comunicación visual

    p(data-aos="fade-up") La comunicación visual es la parte de la comunicación que se encarga de mensajes visuales, tal como se refiere a continuación:

    p.mt-4(data-aos="fade-up") #[strong Comunicación visual]

    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/cGUKea9hu0Y" title="Comunicación visual" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1 Técnicas de lógica visual

    .row.mt-5.p-3(style="background: rgb(255,242,208);background: linear-gradient(90deg, rgba(255,242,208,1) 29%, rgba(255,255,255,1) 29%);")
      .col-auto(style="place-self:center")
        figure
          img(src="@/assets/curso/tema3/1.svg" data-aos="fade-right")
      .col(style="place-self:center")
        p.mb-0(data-aos="fade-up") Las redes sociales y la llegada de las pantallas como grandes acompañantes de las personas en la actualidad hacen de la comunicación visual un punto importante a trabajar, siempre que se piensa en compartir contenido y para ello, lo más importante es entender que dentro de ese modelo comunicativo el lenguaje publicitario indispensable. #[strong Pero, ¿qué es el lenguaje publicitario? La respuesta se puede encontrar en el siguiente video.]

    p.mt-4(data-aos="fade-up") #[strong Lenguaje publicitario]

    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/7fQpAnZpEbk" title="Lenguaje Publicitario" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador.mt-5

    .titulo-segundo
      h2#t_3_2 3.2 Piezas gráficas: mejoras para atraer clientes

    .row.mt-5.p-3(style="background: rgb(255,255,255);background: linear-gradient(90deg, rgba(255,255,255,1) 71%, rgba(203,242,238,1) 71%);")
      .col(style="place-self:center")
        p.mb-0(data-aos="fade-up") Las piezas gráficas son el soporte desde donde se acoplan todos los planes de trabajo para dar a conocer información al cliente, una pieza gráfica es un #[em post] de #[em Instagram] o un estado de #[em WhatsApp], es esa imagen que publican las empresas para hacer el llamado de los clientes y atraerlos a conocer un producto o servicio; ahora, la explicación de la pieza gráfica a detalle la hace el instructor en el siguiente recurso.
      .col-auto(style="place-self:center")
        figure
          img(src="@/assets/curso/tema3/2.svg" data-aos="fade-right")

    p.mt-5(data-aos="fade-up") #[strong Piezas gráficas]

    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/O7Ak6T34zro" title="Piezas gráficas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador.mt-5

    .titulo-segundo
      h2#t_3_3 3.3 Elaboración de piezas gráficas

    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center")
        figure
          img(src="@/assets/curso/tema3/3.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center")
        p(data-aos="fade-up") Las piezas gráficas son necesarias para todas las campañas publicitarias de #[em WhatsApp] o de cualquier plataforma y cada empresa se debe relacionar con su elaboración, sea bien contratando a un diseñador o logrando hacer sus propias piezas a partir de fotografías y recursos gráficos. 
        p.mt-4(data-aos="fade-up") También se pueden diseñar las piezas gráficas con plantillas en aplicaciones como #[em Canva] o Crello entre otras, o desde un boceto en un #[em software] especializado de diseño que se llama Adobe Illustrator y para esto es necesario hacer primero un boceto a mano o tenerlo en la cabeza, luego tomar las fotografías que se requieran del producto o servicio e integrar todo en la aplicación. 
        p.mt-4(data-aos="fade-up") La aplicación de Adobe Illustrator es gratuita por 30 días, por si se quiere descargar en un computador. Para entrar en detalle de la elaboración de piezas, a través del siguiente video se presenta una completa explicación sobre la creación de una pieza gráfica.

    p.mt-5(data-aos="fade-up") #[strong Construcción de la pieza gráfica]

    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/iUqz6wVm-Es" title="Construcción de la pieza gráfica" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
 




</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
