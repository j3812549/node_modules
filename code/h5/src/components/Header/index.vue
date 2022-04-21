<template>
  <div class="header-box">
    {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>

<style lang="scss" scoped>
.header-box {
  width: 100%;
  height: 100px;
  background: #66ccff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
