<template>
  <Navigation></Navigation>
  <div class="content">
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>

</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">
.content {
  display: flex;
}
</style>