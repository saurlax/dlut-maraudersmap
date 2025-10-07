<script setup lang="ts">
const { user, clear } = useUserSession();
const password = ref("");

function changePassword() {
  $fetch(`/api/users/${user.value?.id}`, {
    method: "PUT",
    body: { password: password.value },
  })
    .then(() => {
      useToast().add({
        title: "Password changed",
        color: "success",
      });
    })
    .catch((err) => {
      useToast().add({
        title: err.message,
        description: err.data.message,
        color: "warning",
      });
    });
}
</script>

<template>
  <UContainer class="flex flex-col gap-4 mt-4">
    <UCard>
      <template #header>
        <h2>Change Password</h2>
      </template>
      <UInput
        v-model="password"
        type="password"
        label="New Password"
        placeholder="Enter new password"
      />
      <template #footer>
        <UButton color="primary" @click="changePassword">Save</UButton>
      </template>
    </UCard>
    <UCard>
      <template #header>
        <h2>Logout</h2>
      </template>
      <template #footer>
        <UButton color="error" @click="clear">Logout</UButton>
      </template>
    </UCard>
  </UContainer>
</template>
