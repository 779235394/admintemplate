<template>
  <el-container class="container">
    <sider-bar></sider-bar>
    <el-container class="main-container">
      <hea-der></hea-der>
      <ma-in></ma-in>
      <foo-ter></foo-ter>
    </el-container>
  </el-container>
</template>
<script>
import SiderBar from "./Siderbar/index";
import HeaDer from "./header";
import MaIn from "./main";
import FooTer from "./footer";
export default {
  components: {
    SiderBar,
    HeaDer,
    FooTer,
    MaIn
  },
  data() {
    return {};
  },

  mounted() {}
};
</script>
<style scoped>
.container {
  height: 100vh;
  min-width: 1200px !important;
}
.main-container {
  flex-direction: column;
}
</style>
