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
  <header>
    <AutoNav :flowDirection="flowDirection" :justifyRoutes="justifyRoutes">
      <template #route="{ route }">
        <RouterLink class="bg-rose-50 hover:bg-rose-400 hover:text-white" :to="route.path">{{ route.name?.toString().toUpperCase() }}</RouterLink>
      </template>
    </AutoNav>
    <hr />
    <AutoNav :flowDirection="flowDirection" :justifyRoutes="justifyRoutes" />
  </header>
  <hr />
  <section class="flex flex-row justify-evenly">
    <select v-model="flowDirection">
      <option v-for="(direction, i) in flowDirections" :key="direction" :value="i">{{ direction }}</option>
    </select>
    <select v-model="justifyRoutes">
      <option v-for="(justify, i) in justifyRoutesOptions" :key="justify" :value="i">{{ justify }}</option>
    </select>
  </section>
  <section>
    <RouterView />
  </section>
</template>
