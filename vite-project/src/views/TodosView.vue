<script>
import { reactive } from 'vue';



export default {
    setup() {
        const test = reactive({
            name: "sideshow"
        })

        return { test }
    }
}
</script>

<template>
    <p>
        {{ test.name }}
    </p>
</template>



<style scoped>
</style>
