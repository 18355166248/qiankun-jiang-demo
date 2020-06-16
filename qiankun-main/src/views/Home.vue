<template>
  <div>
    <div class="mb-10">乾坤主页</div>
    <el-button
      class="updateChildApp"
      @click="updateChildApp('/table')"
      size="mini"
      type="success"
      >弹出子应用表格弹窗</el-button
    >

    <el-button
      class="updateChildApp"
      @click="updateChildApp('/form')"
      size="mini"
      type="primary"
      >弹出子应用表单弹窗</el-button
    >

    <el-dialog
      title="子应用弹窗"
      :visible.sync="dialogVisible"
      width="700px"
      :before-close="handleClose"
    >
      <div v-loading="!microApp">
        <div ref="modalForm" class="modalFormLoading"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun'

export default {
  name: 'Home',
  data() {
    return {
      initialState: {},
      dialogVisible: false,
      microApp: null,
    }
  },
  created() {},
  mounted() {},
  methods: {
    updateChildApp(path) {
      this.dialogVisible = true

      setTimeout(() => {
        this.microApp = loadMicroApp({
          name: 'vue',
          entry: '//localhost:10002',
          container: this.$refs.modalForm,
          props: { path },
        })
      }, 20)
    },
    handleClose() {
      this.microApp.unmount()
      this.dialogVisible = false
    },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
.mb-10 {
  margin-bottom: 10px;
}
.updateChildApp {
  display: inline-block;
  width: min-content;
}

.modalFormLoading {
  width: 100%;
  min-height: 100px;
}
</style>
