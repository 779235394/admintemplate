<template>
  <div :class="isCollapse ? 'hideSidebar' : ''">
    <el-aside width="auto">
      <div class="sidebar-container">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            default-active="1-1"
            @open="handleOpen"
            @close="handleClose"
            background-color="#304156"
            text-color="#bfcbd9"
            active-text-color="#409EFF"
            :unique-opened="true"
            :collapse-transition="false"
            :collapse="isCollapse"
          >
            <div v-for="item in menuList" :key="item.node">
              <el-submenu :index="item.node">
                <template slot="title">
                  <i class="icon-title" :class="item.icon"></i>
                  <span>{{ item.name }}</span>
                </template>
                <div v-for="sesstion in item.children" :key="sesstion.node">
                  <el-menu-item :index="sesstion.node">{{
                    sesstion.name
                  }}</el-menu-item>
                </div>
              </el-submenu>
            </div>
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          name: "系统设置",
          node: "1",
          icon: "el-icon-setting",
          children: [
            { name: "系统设置1", node: "1-1" },
            { name: "系统设置2", node: "1-2" },
          ],
        },
        {
          name: "组件管理",
          node: "2",
          icon: "el-icon-s-data",
          children: [
            { name: "组件管理1", node: "2-1" },
            { name: "组件管理2", node: "2-2" },
            { name: "组件管理3", node: "2-3" },
            { name: "组件管理4", node: "2-4" },
          ],
        },
      ],
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.app.sidebar.opened;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="scss" scoped>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.hideSidebar {
  width: 54px;

  .sidebar-container {
    width: 54px;
    transition-duration: 0.3s;
    transform: translate3d(-54, 0, 0);
    .el-scrollbar {
      width: 54px;
    }
    .el-submenu {
      overflow: hidden;

      /deep/ .el-submenu__title {
        padding: 0 !important;

        .icon-title {
          margin-left: 20px;
          font-size: 14px;
        }

        .el-submenu__icon-arrow {
          display: none;
        }
      }
    }
    .el-menu--collapse {
      .el-submenu {
        & > .el-submenu__title {
          & > span {
            height: 0;
            width: 0;
            overflow: hidden;
            visibility: hidden;
            display: inline-block;
          }
        }
      }
    }
  }
}

.sidebar-container {
  background: #304156;
  width: 200px;
  height: 100vh;

  transition-duration: 0.3s;
  transform: translate3d(54, 0, 0);
  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
    /deep/ .el-submenu {
      text-align: left !important;
      &.is-active {
        .el-submenu__title {
          color: #f4f4f5 !important;
          .icon-title {
            color: #f4f4f5 !important;
          }
        }
      }
      .el-submenu__title {
        span {
          margin-left: 7px;
          display: inline-block;
          margin-top: 2px;
        }
      }
      .el-menu-item {
        background-color: #1f2d3d !important;
        // background-color: #409eff !important;

        &:hover {
          background-color: #001528 !important;
        }
      }
    }
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__bar.is-vertical {
    right: 0px;
  }

  .el-scrollbar {
    height: 100%;
  }
}
</style>
