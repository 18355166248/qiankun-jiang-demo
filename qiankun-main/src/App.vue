<template>
  <div class="app">
    <div class="home">
      <el-container>
        <el-header class="header">Smegalo</el-header>
        <el-container class="containerBox">
          <el-aside class="aside">
            <el-menu
              router
              :default-active="path"
              class="el-menu-vertical-demo"
            >
              <el-menu-item index="/">
                <i class="el-icon-s-home"></i>
                <span>主应用</span>
              </el-menu-item>
              <el-menu-item index="/vue">
                <i class="el-icon-menu"></i>
                <span>Vue子应用</span>
              </el-menu-item>
              <el-menu-item index="/vue/table">
                <i class="el-icon-menu"></i>
                <span>Vue子应用表格</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main class="main">
            <router-view />

            <div id="childApp"></div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data(em) {
    return {
      path: em.$route.path,
    }
  },
  watch: {
    $route(newVal) {
      this.path = newVal.path
    },
  },
  created() {},
}
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .header {
      height: 100px;
      line-height: 60px;
      background-color: #ccc;
    }
    .containerBox {
      overflow: hidden;
      .aside {
        width: 200px;
        background-color: #d3dce6;
        overflow-y: auto;

        ::v-deep .el-menu {
          height: 100%;
        }
      }
      .main {
        overflow: auto;
      }
    }
  }
}
</style>
