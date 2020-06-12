<template>
  <div class="home">
    乾坤主页
    <div>
      <el-Button
        size="mini"
        @click="updateApp"
        type="primary"
      >更新initGlobalState</el-Button>
    </div>
    <div id="mainWithChild"></div>
  </div>
</template>

<script>
import actions from '@/qiankun/share'

export default {
  name: "Home",
  mounted() {
    actions.onGlobalStateChange((state, prev) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log('主应用', state);
    });
  },
  methods: {
    updateApp() {
      actions.setGlobalState({
        path: 'update Main app'
      });
    }
  },
  components: {},
};
</script>
