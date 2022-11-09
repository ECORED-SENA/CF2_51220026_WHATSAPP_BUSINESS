<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-up") La tendencia de las redes sociales se orienta, cada día más, a los grandes y diversos mercados empresariales; sin embargo, las pequeñas empresas han encontrado una serie de alternativas en pro de beneficiarse al momento de comercializar sus productos y servicios siendo la plataforma WhatsApp Business un estandarte de potenciar sus servicios, como lo puede ver a continuación:
    
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/FVhmvrGX38w" title="Análisis de datos estadísticos de la audiencia introducción" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
