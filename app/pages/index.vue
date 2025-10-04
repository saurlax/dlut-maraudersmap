<script setup lang="ts">
const style = `https://api.maptiler.com/maps/aquarelle/style.json?key=${
  useRuntimeConfig().public.maptilerKey
}`;

const search = ref("");
const center = ref<[number, number]>([121.81, 39.084]);
const zoom = ref(16);
</script>

<template>
  <MglMap height="100vh" :map-style="style" :center="center" :zoom="zoom">
    <MglNavigationControl />
    <MglGeolocateControl />
    <MglCustomControl class="maplibregl-ctrl flex gap-2">
      <UInput v-model="search" placeholder="按学号或姓名搜索" />
      <UButton icon="i-lucide-search" />
    </MglCustomControl>
    <MglCustomControl position="bottom-left" class="maplibregl-ctrl">
      <UBadge variant="subtle" icon="i-lucide-check" color="success">
        All probes ok
      </UBadge>
    </MglCustomControl>
  </MglMap>
</template>
