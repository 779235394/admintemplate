<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="App_ToggleSideBar"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
  </div>
</template>
<script>
import Hamburger from "@/components/Hamburger";

import { mapGetters } from "vuex";

export default {
  components: {
    Hamburger,
  },
  computed: {
    ...mapGetters("app", ["App_ToggleSideBar"]),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar", !this.App_ToggleSideBar);
    },
  },
};
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }
}
</style>
