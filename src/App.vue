<template>

  <div class="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>

</template>

<script setup lang="ts">

document.title = '数字人平台';
</script>

<style scoped lang="scss">
.app {
  background-color: rgb(241, 241, 241);
}
</style>