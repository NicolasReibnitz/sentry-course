<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1 class="text-4xl">About</h1>
    <button @click="user.email.send()">Send Email</button>
  </div>
</template>

<script setup>
const user = {};
</script>
