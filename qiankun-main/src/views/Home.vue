<template>
  <div class="home">
    乾坤主页
    <div>主应用名: {{ initialState.name }}</div>
    <div>
      <el-Button size="mini" @click="updateApp" type="primary"
        >更新initGlobalState</el-Button
      >
    </div>
    <div id="mainWithChild"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      initialState: {},
    }
  },
  created() {
    this.$actions.onGlobalStateChange((state) => {
      console.log('主应用 Home', state)

      this.initialState = state
    }, true)
  },
  methods: {
    updateApp() {
      this.$actions.setGlobalState({
        name: '主应用更新主应用名',
      })
    },
  },
  components: {},
}
</script>
