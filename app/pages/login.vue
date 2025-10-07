<script setup lang="ts">
import type { AuthFormField } from "@nuxt/ui";

const { fetch } = useUserSession();
const toast = useToast();
const fields: AuthFormField[] = [
  {
    name: "username",
    type: "text",
    label: "用户名",
    placeholder: "请输入用户名",
    required: true,
  },
  {
    name: "password",
    type: "password",
    label: "密码",
    placeholder: "请输入密码",
    required: true,
  },
];

function login(payload: any) {
  $fetch("/api/login", {
    method: "POST",
    body: payload.data,
  })
    .then(async () => {
      await fetch();
      navigateTo("/");
    })
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
  <UPageCard class="max-w-sm mx-auto mt-4">
    <UAuthForm title="Login" :fields="fields" @submit.prevent="login" />
  </UPageCard>
</template>
