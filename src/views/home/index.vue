<template>
    <el-container style="height:100%">
        <el-collapse-transition>
            <el-aside :width="Number(collapse)?'60px':'200px'" style="overflow-x: hidden">
                <side-menu v-if="!topDone"></side-menu>
            </el-aside>
        </el-collapse-transition>
        <el-container style="height:100%">
            <el-header style="padding: 0;">
                <top-menu @success="topDone = false"></top-menu>
            </el-header>
            <el-main style="padding:0px;height:100%" v-loading="topDone">
                <main-content v-if="!topDone"></main-content>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
  import topMenu from './components/top-menu'
  import sideMenu from './components/side-menu'
  import mainContent from './components/main-content'
  import { mapGetters } from 'vuex';

  export default {
    name: 'home',
    data() {
      return {
        topDone: true
      }
    },
    components: {
      topMenu,
      sideMenu,
      mainContent
    },
    computed: {
      ...mapGetters(['collapse'])
    }
  }
</script>

<style scoped>

</style>
