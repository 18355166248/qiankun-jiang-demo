<template>
  <div class="app">
    <div class="home">
      <el-container>
        <el-header class="header">Smegalo</el-header>
        <el-container class="containerBox">
          <el-aside class="aside">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
            >
              <el-menu-item index="1">
                <i class="el-icon-s-home"></i>
                <router-link
                  to="/"
                  tag="span"
                >主应用</router-link>
              </el-menu-item>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <router-link
                  to="/vue"
                  tag="span"
                >Vue子应用</router-link>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main class="main">Main</el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>

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
