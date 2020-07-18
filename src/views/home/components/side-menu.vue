<template>
    <div class="side">
        <div class="side-logo">
            <span class="side-logo-title" v-show="!isCollapse">XXX项目</span>
            <span class="side-logo-icon fr" @click="change_collapse" :title="isCollapse?'科研加速器':'收起'">
                <svg-icon class-name="logo" :icon-class="isCollapse?'open-menu':'close-menu'"></svg-icon>
            </span>
        </div>
        <el-menu router
                 @select="change_select"
                 class="side-menu"
                 background-color="#fff"
                 text-color="#000"
                 active-text-color="#099"
                 :default-openeds="opends"
                 @open="menu_open"
                 @close="close_open"
                 :default-active="menuActive"
                 :collapse="isCollapse">
            <template v-for="(item,key) in menu" :class="item.url===side?'active-item':''">
                <el-submenu v-if="item.children&&item.children.length" :index="item.icon" :key="key">
                    <template slot="title">
                        <!--<i class="el-icon-location"></i>-->
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="(child,idx) in item.children"
                                  style="border-right: solid 1px #e6e6e6;"
                                  :key="idx"
                                  :name="item.url"
                                  @click="menu_click"
                                  :index="child.url">
                        <template slot="title">{{child.name}}</template>
                    </el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "side-menu",
    data() {
      return {
        isCollapse: false,
        opends: [],
        menuActive: '',
        menu: []
      };
    },
    computed: {
      ...mapGetters(['collapse', 'side', 'open', 'active', 'permissions'])
    },
    created() {
      this.init();
    },
    methods: {
      ...mapActions([
        'up_date'
      ]),
      init() {
        this.$store.dispatch('get_menu').then(resp => {
          this.menu = resp;
          this.opends = this.open;
          this.menuActive = this.active;
        })
        this.isCollapse = Boolean(Number(this.collapse));
      },
      menu_open(val) {
        if (this.opends.indexOf(val) === -1) {
          this.opends.push(val);
          this.$store.dispatch('set_open', this.opends)
        }
      },
      close_open(val) {
        if (this.opends.indexOf(val) !== -1) {
          this.opends.splice(this.opends.indexOf(val), 1);
          this.$store.dispatch('set_open', this.opends)
        }
      },
      menu_click() {
        // 点击menu
      },
      change_select(val) {
        this.$store.dispatch('set_active', val)
      },
      change_collapse() {
        const num = this.isCollapse ? '0' : '1';
        this.$store.dispatch('set_collapse', num).then(() => {
          this.isCollapse = !this.isCollapse;
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .side {
        height: 100%;
        border-right: solid 1px #e4e4e4;
        &-logo {
            height: 60px;
            border-bottom: solid 1px $MsThem;
            background-color: $MsThem;
            color: #fff;
            &-title {
                display: inline-block;
                font-size: 16px;
                padding-left: 5px;
                font-weight: 700;
                line-height: 60px;
            }
            &-icon {
                display: inline-block;
                vertical-align: middle;
                width: 60px;
                height: 60px;
                text-align: center;
                line-height: 60px;
            }
        }
        &-menu {
            text-align: left;
            width: 100%;
        }
    }
</style>

