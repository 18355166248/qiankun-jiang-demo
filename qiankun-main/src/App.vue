<template>
  <div>
    <div>主应用</div>
    <router-link to="/" tag="div">首页</router-link>
    <router-link to="/vue" tag="div">跳转到vue</router-link>
    <!-- 主应用渲染区 -->
    <router-view v-show="$route.name" />

    <!-- 子应用渲染区 -->
    <section v-show="!$route.name" id="childApp"></section>
  </div>
</template>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
