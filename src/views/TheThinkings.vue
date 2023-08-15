<template>
  <the-content-layout :has-demo="false">
    <template #content>
      <markdownContent p-4 />
    </template>
    <template #demo> </template>
  </the-content-layout>
</template>

<script setup lang="ts">
import markdownContent from "./contents/Thinkings.md";
</script>

<style scoped></style>
