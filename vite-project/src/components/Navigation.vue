<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
 <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/todos">Todos</RouterLink>
      </nav>
</template>
