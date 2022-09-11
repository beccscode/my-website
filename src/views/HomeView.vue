<template>
  <div class="home">
    <HelloWorld msg="Here should be the particles background"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  }
</script>
