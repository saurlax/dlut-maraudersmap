<script setup lang="ts">
const toast = useToast();
const router = useRouter();

const style = `https://api.maptiler.com/maps/aquarelle/style.json?key=${
  useRuntimeConfig().public.maptilerKey
}`;

const mac = ref((router.currentRoute.value.query.mac as string) || "");
const frames = useFetch(mac ? `/api/frames/${mac.value}` : "/api/frames");
const center = ref<[number, number]>([121.81, 39.084]);
const zoom = ref(16);
</script>

<template>
  <MglMap
    height="calc(100dvh - var(--ui-header-height))"
    :map-style="style"
    :center="center"
    :zoom="zoom"
  >
    <MglNavigationControl />
    <MglGeolocateControl />
    <MglCustomControl class="maplibregl-ctrl">
      <UForm>
        <UFieldGroup>
          <UInputMenu v-model="mac" placeholder="Search" />
          <UButton icon="i-lucide-search" type="submit" />
        </UFieldGroup>
      </UForm>
    </MglCustomControl>
    <MglCustomControl position="bottom-left" class="maplibregl-ctrl">
      <NuxtLink to="/devices">
        <UBadge variant="subtle" icon="i-lucide-check" color="success">
          All probes ok
        </UBadge>
      </NuxtLink>
    </MglCustomControl>
  </MglMap>
</template>
