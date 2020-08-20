<template>
  <div class="container">
    <app-aside></app-aside>
    <div class="container_right">
      <app-header></app-header>
      <app-main></app-main>
      <app-footer></app-footer>
    </div>
  </div>
</template>
<script>
import AppAside from "./aside";
import AppFooter from "./footer";
import AppHeader from "./header";
import AppMain from "./main";
export default {
  components: {
    AppAside,
    AppFooter,
    AppHeader,
    AppMain
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.container {
  height: 100vh;
  width: 100%;
  display: flex;
}
.container_right {
  display: flex;
  flex: 1;
  flex-direction: column;
}
/* .el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
} */

/* .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
} */

/* .el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
} */

/* body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */
</style>