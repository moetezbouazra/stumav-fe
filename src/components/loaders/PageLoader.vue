<template>
  <div class="h-screen flex items-center justify-center">
    <div class="anim-logo relative h-32 w-32">
      <img
        src="/images/logo-wide.webp"
        alt="Delta Logo"
        class="absolute h-full w-full"
        loading="eager"
      >
    </div>
  </div>
</template>

<style scoped>
.anim-logo {
  color: transparent;
  position: relative;
  transform: translate(0%, -50%);
  background: rgba(255, 255, 255, 0.889);
  animation: breathe 1s linear infinite;
}
@keyframes breathe {
  0% {
    box-shadow: 0 0 0 10px #2b2a29;
  }
}
</style>
