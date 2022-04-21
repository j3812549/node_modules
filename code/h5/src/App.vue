<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-size: 36px;
  font-family: PingFangSC-Semibold, PingFang SC;
  line-height: 1.2;
}
</style>
