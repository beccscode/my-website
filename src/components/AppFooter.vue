<template>
    <footer>
        <div>
            <p>This is some additional footer text</p>
            <p>Copyright &copy; {{ year }} </p>
        </div>
    </footer>
</template>

<script>
    import { computed } from 'vue'
    
    export default {
      setup () {
        const year = computed(() => new Date().getFullYear())
        return { year }
    }
    }
</script>

<style lang="scss">
footer {
    display: flex;
    flex-direction: column;

    div {
  width: 100%;
  height: 400px;
  background-image: url("../assets/MoonFooter.jpg");
  background-size: cover;
}

p {
    color: white;
    text-align: center;
}

}
</style>