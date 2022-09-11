<template>

  <div id="particles-container">
    <Particles
        id="tsparticles"
        url="particles.json"
        :particles-init="initializeParticles"/>
  </div>

</template>

<script>
import { loadFull } from "tsparticles";

export default {
  name: "Test",

  methods: {
    async initializeParticles(engine) {
      await loadFull(engine)
    }
  }
}
</script>