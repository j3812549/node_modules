<template>
  <div class="Layout-box">
    <router-link :to="item.route"
                 v-for="(item, index) in list"
                 :key="index"
                 class="button">{{item.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      list: [
        { name: '自定义列表封装：vue-list-warp', route: 'ListWarp' }
      ]
    }
  },
  methods: {
    handle (route) {
      this.$router.push(route)
    }
  }
}
</script>
