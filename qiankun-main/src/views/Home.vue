<template>
  <div class="home">
    乾坤主页
    <div>主应用名: {{ initialState.name }}</div>
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
  created() {},
  methods: {},
  components: {},
}
</script>
