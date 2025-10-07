<script setup lang="ts">
import type { Report } from "@prisma/client";

const toast = useToast();
const router = useRouter();

const style = `https://api.maptiler.com/maps/aquarelle/style.json?key=${
  useRuntimeConfig().public.maptilerKey
}`;

const q = ref((router.currentRoute.value.query.q as string) || "");
const center = ref<[number, number]>([121.81, 39.084]);
const zoom = ref(16);
const records = ref<Report[]>([]);

function search() {
  if (!q.value) {
    return;
  }
  router.replace({ query: { q: q.value } });
  $fetch<Report[]>("/api/search", {
    query: { q: q.value },
  })
    .then((res) => {
      records.value = res;
    })
    .catch((err) => {
      toast.add({
        title: err.message,
        description: err.data.message,
        color: "warning",
      });
    });
}
onMounted(search);
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
      <UForm @submit.prevent="search">
        <UFieldGroup>
          <UInput v-model="q" placeholder="Search" />
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
