<script setup lang="ts">
useHead({
  title: "The Marauder's Map @ DLUT",
});

const { loggedIn } = useUserSession();
import type { AuthFormField } from "@nuxt/ui";

const { fetch } = useUserSession();
const toast = useToast();
const fields: AuthFormField[] = [
  {
    name: "username",
    type: "text",
    label: "Username",
    placeholder: "Please enter your username",
    required: true,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Please enter your password",
    required: true,
  },
];

function login(payload: any) {
  $fetch("/api/login", {
    method: "POST",
    body: payload.data,
  })
    .then(fetch)
    .catch((err) => {
      toast.add({
        title: err.message,
        description: err.data.message,
        color: "warning",
      });
    });
}
</script>

<template>
  <UApp :toaster="{ position: 'top-center' }">
    <NuxtLayout>
      <NuxtPage v-if="loggedIn" />
      <UPageCard v-else class="max-w-sm mx-auto mt-4">
        <UAuthForm title="Login" :fields="fields" @submit.prevent="login" />
      </UPageCard>
    </NuxtLayout>
  </UApp>
</template>

<style>
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --color-primary: #198cff;
}
</style>
