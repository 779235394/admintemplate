<template>
  <el-container class="container">
    <SiderBar></SiderBar>
    <el-container class="main-container">
      <HeaDer></HeaDer>
      <MaIn></MaIn>
      <!-- <foo-ter></foo-ter> -->
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
    MaIn,
  },
  data() {
    return {};
  },

  mounted() {},
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
