<template>
  <el-main>
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </el-main>
</template>
<script>
export default {
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>
<style scoped>
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
