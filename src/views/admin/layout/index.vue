<template>
  <div class="wrapper">
    <Layout>
      <Header class="header-wrapper">
        <Icon
          class="btn-nav"
          @click.native="collapsedSider"
          :class="rotateIcon"
          type="md-menu"
          size="24"
        />

        <div class="header_title">
          <p>票据管理系统</p>
        </div>

        <div class="profile-wrapper">
          <Dropdown @on-click="onProfileItemClick">
            <a class="btn-dropdown">
              <Icon type="md-person" size="30" />
              <p>管理员</p>
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem name="changePassword">
                <div  class="flex_row">
                  修改密码
                </div>
              </DropdownItem>
              <DropdownItem divided name="logout">
                <div class="flex_row">
                  注销
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <!--左侧菜单-->
        <Sider hide-trigger collapsible :collapsed-width="60" v-model="isCollapsed">
          <left-menu></left-menu>
        </Sider>

        <Layout :style="{padding: '0 24px 24px'}">
          <!-- 模块内容 -->
          <Content>
            <div id="mainframe">
              <router-view></router-view>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import LeftMenu from './left-menu.vue'

export default {
  name: 'MainLayout',
  components: {
    LeftMenu
  },
  data() {
    return {
      isCollapsed: false,
      rotateIcon: 'menu-icon'
    }
  },
  methods: {

    // 切换边栏开关
    collapsedSider () {
      this.isCollapsed = !this.isCollapsed

      this.rotateIcon = this.isCollapsed ? 'rotate-icon' : 'menu-icon'
    },

    onProfileItemClick (value) {
      switch (value) {
        case 'changePassword':
          this.changePassword()
          break
        case 'logout':
          this.logout()
          break
      }
    },

    changePassword () {
      this.$Message.info('修改密码')
      this.$router.push({path: '/admin/user/changepwd'})
       
    },

    logout () {
      this.$Message.info('注销成功')
      this.$router.push({path:'/login'})
    }
  }
}
</script>

<style>
.header-wrapper {
  width: 100%;
  padding: 0;
  height: 4.5em;
  background:white;
  color: wheat;
  display: flex;
  align-items: center;
}

.btn-nav {
  margin-left: 10px;
  cursor: pointer;
}

.menu-icon {
  margin-right: 5px;
  margin-top: 10px;
  transition: all 0.3s;
}

.header_title {
  display: flex;
  font-size: 1.5em;
  margin-left: 27px;
  flex: 1;
}

.header_title img {
  width: 2.6em;
  height: 2.325em;
  margin-right: 14px;
  margin-top: 0.75em;
}

.profile-wrapper {
  margin-right: 60px;
  display: flex;
}

.btn-dropdown {
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  
}

.btn-dropdown p{
  margin-left: 10px;
  margin-right: 10px;
}

.down_icon{
  width:16px;
  height:16px;
  margin-right:5px;
}

.rotate-icon{
  transform: rotate(-90deg);
}
</style>
