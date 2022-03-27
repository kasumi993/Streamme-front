<template>
  <div id="sidebar">
    <div id="logo"><img src="/img/logo/logo.svg"/></div>
    <nav class="menu-container">
      <ul v-for="navItem in navItems" :key="navItem.name" class="menu-section">
        <span class="menu-section-title">{{ navItem.name }}</span>
        <li v-for="submenuItem in navItem.content"
            :key="submenuItem.name"
            class="item"
            @click="$router.push(`/${submenuItem.code}`)"
            @mouseover="setActive(submenuItem)"
            @mouseleave="setInactive(submenuItem)">
          <img ref="icons" class="menu-icon" :src="`/img/icons/sidebar/${submenuItem.code === active ? 'active' : 'inactive'}/${submenuItem.icon}`">
          <span class="menu-title" :class="{active: submenuItem.code === active}">{{submenuItem.name}}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  props: ['active'],
  data() {
    return {
      navItems: [
        {
          name: 'Menu',
          content: [
            {
              id: 0,
              code: 'home',
              name: 'Home',
              icon: 'home.svg',
            },
            {
              id: 1,
              code: 'coming',
              name: 'Coming Soon',
              icon: 'coming.svg',
            },
            {
              id: 2,
              code: 'bookings',
              name: 'My Bookings',
              icon: 'booking.svg',
            },
          ],
        },
        {
          name: 'Perso',
          content: [
            {
              id: 3,
              code: 'comments',
              name: 'My comments',
              icon: 'comment.svg',
            },
            {
              id: 4,
              code: 'favorites',
              name: 'My favorites',
              icon: 'fav.svg',
            },
          ],
        },
        {
          name: 'General',
          content: [
            {
              id: 5,
              code: 'settings',
              name: 'Settings',
              icon: 'settings.svg',
            },
            {
              id: 6,
              code: 'logout',
              name: 'Log Out',
              icon: 'logout.svg',
            },
          ],
        },
      ],
    }
  },
  methods: {
    setActive(item) {
      this.$nextTick(() => {
        if (this.$refs.icons[item.id]) {
          this.$refs.icons[item.id].src = `/img/icons/sidebar/active/${item.icon}`
        }
      })
    },
    setInactive(item) {
      this.$nextTick(() => {
        if(this.$refs.icons[item.id] && item.code !== this.active) {
          this.$refs.icons[item.id].src = `/img/icons/sidebar/inactive/${item.icon}`
        }
      })
    }
  }
}
</script>

<style scoped>

</style>