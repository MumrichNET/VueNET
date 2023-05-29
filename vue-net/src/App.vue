<script setup lang="ts">
import AutoNav, { FlowDirection, JustifyRoutes } from "@/components/AutoNav.vue";
import { computed, ref } from "vue";
import { enumToArray } from "@/helpers/EnumHelper";

const flowDirection = ref(FlowDirection.Horizontal);
const flowDirections = computed(() => enumToArray(FlowDirection));
const justifyRoutes = ref(JustifyRoutes.Evently);
const justifyRoutesOptions = computed(() => enumToArray(JustifyRoutes));
</script>

<template>
  <div class="flex flex-col h-full">
    <header class="bg-gray-50 shadow p-2">
      <AutoNav :flowDirection="flowDirection" :justifyRoutes="justifyRoutes" />
    </header>
    <section class="flex-grow p-2">
      <RouterView />
    </section>
    <footer class="flex flex-row bg-gray-50 shadow p-2 justify-evenly">
      <select v-model="flowDirection">
        <option v-for="(direction, i) in flowDirections" :key="direction" :value="i">{{ direction }}</option>
      </select>
      <select v-model="justifyRoutes">
        <option v-for="(justify, i) in justifyRoutesOptions" :key="justify" :value="i">{{ justify }}</option>
      </select>
    </footer>
  </div>
</template>

<style>
html,
body {
  @apply h-full m-0 w-full p-0;
  @apply min-h-xs;
  @apply min-w-xs;
}

#app {
  @apply h-full;
}
</style>
