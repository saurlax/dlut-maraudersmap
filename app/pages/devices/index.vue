<script setup lang="ts">
const toast = useToast();
const { data: devices } = useFetch("/api/devices");
const createForm = reactive({
  mac: "",
  type: "",
  name: "",
  description: "",
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
      devices.value?.push(res);
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
    <div class="my-4">
      <UModal>
        <UButton>Add Device</UButton>
        <template #content>
          <UCard>
            <template #header>Add Device</template>
            <UForm class="flex flex-col gap-4" @submit.prevent="createDevice">
              <UFormField label="MAC">
                <UInput
                  class="w-full"
                  placeholder="MAC Address"
                  v-model="createForm.mac"
                />
              </UFormField>
              <UFormField label="Type">
                <UInput
                  class="w-full"
                  placeholder="Device Type"
                  v-model="createForm.type"
                />
              </UFormField>
              <UFormField label="Name">
                <UInput
                  class="w-full"
                  placeholder="Device Name"
                  v-model="createForm.name"
                />
              </UFormField>
              <UFormField label="Description">
                <UInput
                  class="w-full"
                  placeholder="Device Description"
                  v-model="createForm.description"
                />
              </UFormField>
              <UFormField>
                <UButton type="submit">Add</UButton>
              </UFormField>
            </UForm>
          </UCard>
        </template>
      </UModal>
    </div>
    <UTable :data="devices" />
  </UContainer>
</template>
