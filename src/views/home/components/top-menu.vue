<template>
    <div class="top">
        <div class="top-user" v-loading="loading">
            <el-button type="text" size="medium">
                <svg-icon icon-class="my" style="color: #fff"></svg-icon>
                <span class="top-user-name">{{info.name}}</span>
            </el-button>
            <el-dropdown trigger="click" size="medium" @command="drop_command" class="top-user-drop">
                <span class="el-dropdown-link">
                  <i class="el-icon-setting" style="font-size: 20px;color: #fff;"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="LogOut">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "top-menu",
    data() {
      return {
        loading: false,
        projectLoading: false,
        allProject: {title: '全部项目', id: '-1'},
        projectList: [],
        project: '请选择项目'
      }
    },
    computed: {
      ...mapGetters(['info'])
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        // 用户信息 —— 权限
        this.loading = true;
        this.projectLoading = true;
        this.$store.dispatch('GetInfo').then(() => {
          this.$store.dispatch('get_permissions').then(() => {
            this.loading = false;
            this.$emit('success')
          }).catch(error => {
            this.loading = false;
            this.$notify({
              title: '错误',
              message: error,
              type: 'warning',
              position: 'bottom-right'
            });
            this.$emit('success')
          })
        }).catch(error => {
          this.loading = false;
          this.$notify({
            title: '错误',
            message: error,
            type: 'warning',
            position: 'bottom-right'
          });
          this.$router.push('/login')
        })
      },
      drop_command() {
        this.$store.dispatch('LogOut').then(resp => {
          this.$router.push(resp)
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .top {
        border-bottom: 1px solid $MsThem;;
        width: 100%;
        height: 100%;
        background-color: $MsThem;;
        color: #fff;
        &-user {
            position: absolute;
            top: 0;
            right: 30px;
            height: 60px;
            line-height: 60px;
            &-name {
                color: #fff;
            }
            &-drop {
                margin: 0 10px;
            }
        }
    }
</style>
