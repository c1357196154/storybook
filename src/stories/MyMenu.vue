<template>
    <div class="menu_nav"  @click="menuNavActive">
        <i class="draw" :class="{ closeDown: menu_nav_active } "></i>
	    <i class="draw" :class="{ miss: menu_nav_active }"></i>
	    <i class="draw" :class="{ closeTop: menu_nav_active }"></i>
    </div>
</template>
<script>
// import './MyMenu.css';

export default {
  data() {
    return {
      menu_nav_active: false
    };
  },
  methods: {
    menuNavActive() {
      this.menu_nav_active = !this.menu_nav_active;
    }
  }
};
</script>
<style scoped>
.menu_nav {
    position: relative;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
  .draw {
    display: block;
    width: 50px;
    height: 1px;
    background: #333333;
    transition: 0.3s;
    position: absolute;
    outline: none;
    top: 20px;
  
  }
  .draw:first-of-type,
  .draw:last-of-type {
    display: block;
    width: 50px;
    height: 1px;
    background: #333333;
    position: absolute;
    outline: none;
    transition: 0.3s;
  }
  .draw:first-of-type {
    top: 0px;
  }
  
  .draw:last-of-type {
    top: 40px;
  }
  .miss {
    background: transparent;
    /* opacity: 0; */
  }
  .closeDown {
    top: 20px !important;
    transform: rotate(45deg);
    background: #5bbe9f !important;
  }
  .closeTop {
    top: 20px !important;
    transform: rotate(-45deg);
    background: #5bbe9f !important;
  }
</style>

