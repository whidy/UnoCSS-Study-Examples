<template>
  <the-content-layout :has-demo="false">
    <template #content>
      <markdownContent p-4 />
    </template>
  </the-content-layout>
</template>

<script setup lang="ts">
import markdownContent from "./contents/Intro.md";
</script>

<style scoped>
</style>
