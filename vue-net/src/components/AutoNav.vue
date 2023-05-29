<template>
  <slot name="nav" :routes="routes">
    <nav class="flex" :class="[flowDirectionClass, justifyRoutesClass]">
      <template v-for="route in routes" :key="route.path">
        <slot name="route" :route="route">
          <RouterLink class="rounded bg-green-50 shadow p-3 hover:bg-green hover:text-white" :to="route.path">{{ route.name }}</RouterLink>
        </slot>
      </template>
    </nav>
  </slot>
</template>

<script lang="ts">
export enum FlowDirection {
  Horizontal,
  Vertical,
}

export enum JustifyRoutes {
  Start,
  End,
  Center,
  Between,
  Around,
  Evently,
}

export interface Props {
  flowDirection?: FlowDirection;
  justifyRoutes?: JustifyRoutes;
}
</script>

<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRouter } from "vue-router";

const props = withDefaults(defineProps<Props>(), {
  flowDirection: FlowDirection.Horizontal,
  justifyRoutes: JustifyRoutes.Evently,
});

const flowDirectionClass = computed(() => {
  switch (props.flowDirection) {
    case FlowDirection.Horizontal:
      return "flex-row";
    case FlowDirection.Vertical:
      return "flex-col";
  }
});

const justifyRoutesClass = computed(() => {
  switch (props.justifyRoutes) {
    case JustifyRoutes.Around:
      return "justify-around";
    case JustifyRoutes.Between:
      return "justify-between";
    case JustifyRoutes.Center:
      return "justify-center";
    case JustifyRoutes.End:
      return "justify-end";
    case JustifyRoutes.Evently:
      return "justify-evenly";
    case JustifyRoutes.Start:
      return "justify-start";
  }
});

const router = useRouter();
const routes = computed(() => router.options.routes);
</script>
