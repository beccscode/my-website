<template>
  <div>
    <IconLogo style='width:50px;'/>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/about">Projects</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>

import IconLogo from '@/components/graphics/IconLogo.vue';
export default {
  name:'AppHeader',
  components: {
    IconLogo
 }
}
</script>

