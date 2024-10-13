<script>
export default {
  name: 'GoogleMapEmbed',
}
</script>

<template>
  <div class="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29312.14838607582!2d10.728458899999999!3d35.63152129999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13020f9cf78df423%3A0x4f2e669d7c896a3f!2sSTUMAV!5e0!3m2!1sen!2sus!4v1696724409755!5m2!1sen!2sus"
      width="100%"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
    />
  </div>
</template>

  <style scoped>
  .map-container {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}

iframe {
  width: 100%;
  height: 450px;
  border: 0;
}
</style>
