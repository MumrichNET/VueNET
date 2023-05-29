<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter()

const routes = computed(() => router.options.routes)
</script>

<template>
  <header>
    <nav class="flex flex-row justify-evenly">
      <RouterLink
        class="shadow p-3 hover:bg-green hover:text-white"
        v-for="route in routes"
        :to="route.path"
        >{{ route.name }}</RouterLink
      >
    </nav>
  </header>

  <RouterView />
</template>
