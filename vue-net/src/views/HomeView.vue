<script setup lang="ts">
import { routes } from '@/router'
import { markRaw } from 'vue'

function addAboutRoute() {
  routes.push({
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: markRaw(() => import('@/views/AboutView.vue'))
  })
}
</script>

<template>
  <main>Home</main>
  <button @click="addAboutRoute">Add About Route</button>
</template>
