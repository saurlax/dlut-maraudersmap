<script setup lang="ts">
const toast = useToast();
const { data: devices } = useFetch("/api/devices");
const createForm = reactive({
  mac: "",
  type: "",
  info: "",
});

function createDevice() {
  $fetch("/api/devices", {
    method: "POST",
    body: createForm,
  })
    .then((res) => {
      toast.add({
        title: "Device added",
        color: "success",
      });
      devices.value = devices.value ? devices.value.concat(res) : res;
    })
    .catch((err) => {
      toast.add({
        title: err.message,
        description: err.data.message,
        color: "error",
      });
    });
}
</script>

<template>
  <UContainer>
    <UPageHeader title="Devices">
      <template #links>
        <UModal>
          <UButton>Add Device</UButton>
          <template #content>
            <UCard>
              <template #header>Add Device</template>
              <UForm class="flex flex-col gap-4" @submit.prevent="createDevice">
                <UFormField label="MAC" required>
                  <UInput class="w-full" v-model="createForm.mac" />
                </UFormField>
                <UFormField label="Type" required>
                  <UInput class="w-full" v-model="createForm.type" />
                </UFormField>
                <UFormField label="Info">
                  <UInput class="w-full" v-model="createForm.info" />
                </UFormField>
                <UFormField>
                  <UButton type="submit">Add</UButton>
                </UFormField>
              </UForm>
            </UCard>
          </template>
        </UModal>
      </template>
    </UPageHeader>
    <UTable :data="devices" />
  </UContainer>
</template>
