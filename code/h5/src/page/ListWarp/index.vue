<template>
  <div class="ListWarp">
    <Header :name="'vue-list-warp'" />
    <ListWarp :request="request"
              :resolveResult="v => ({
                count: v.count, // 所对应数据的总条数
                list: v.items // 所对应数据的数组
              })"
              :params="params">
      <template slot="row"
                slot-scope="row">
        <div class="main">{{row.data.text}}</div>
      </template>
    </ListWarp>
  </div>
</template>

<script>
import ListWarp from 'vue-list-warp'
import Header from '@/components/Header'

export default {
  components: {
    ListWarp,
    Header
  },
  data () {
    return {
      params: {
        id: '传参'
      },
      request: this.getList
    }
  },
  methods: {
    async getList (options) {
      const { page, pageSize } = options
      return new Promise(resolve => {
        const text = '我是返回的数据'
        const list = []
        for (let i = page; i <= page * pageSize; i++) {
          list.push({ text, i })
        }
        resolve(list)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
