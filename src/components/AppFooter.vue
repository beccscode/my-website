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

