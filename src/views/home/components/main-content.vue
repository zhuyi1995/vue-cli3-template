<template>
  <el-container class="main">
    <!-- <el-header height="46px" class="main-header"></el-header> -->
    <el-main style="height:100%">
      <keep-alive :include="keepAliveInclude" :exclude="keepALiveExclude">
        <router-view></router-view>
      </keep-alive>
    </el-main>
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "main-content",
  computed: {
    ...mapGetters(["keepAliveInclude", "keepALiveExclude"])
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  &-header {
    text-align: left;
    padding: 2px 0 2px 5px;
    line-height: 40px;
    background: #d3dce657;
    white-space: nowrap;
    overflow-x: auto;
    width: 100%;
    border: none;
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: #eae9ec;
    }
    &-bread {
      margin-left: 15px;
    }
  }
}
</style>
