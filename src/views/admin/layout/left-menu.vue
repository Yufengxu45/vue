<template>
  <div>
    <Menu
      ref="menu"
      theme="dark"
      :active-name="activeName"
      width="auto"
      :open-names="openNames"
      @on-select="onSelect">
      <Submenu
        v-for="(menu1, index1) in menus"
        :key="index1"
        :name="menu1.name">
        <template slot="title">
          <Icon :type="menu1.icon" />
          <span>{{ menu1.title }}</span>
        </template>
        <MenuItem
          v-for="(menu2, index2) in menu1.children"
          :key="index2"
          :name="menu2.route">
          <Icon :type="menu2.icon" />
          <span>{{ menu2.title }}</span>
        </MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
import MenuData from './menu-data'

export default {
  name: 'LeftMenu',
  components: {
  },
  data () {
    return {
      activeName: '',
      openNames: [],
      menus: MenuData
    }
  },
  created () {
  
  },
  methods: {
    onSelect (name) {
      this.$router.push(name)
    }
  }
}
</script>
<style>
</style>
