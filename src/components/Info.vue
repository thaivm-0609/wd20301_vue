<script setup>
const props = defineProps({
    name: String,
    gender: String,
    description: String
})
</script>

<template>
    <h5 class="card-title">{{ name }}</h5>
    <p class="card-text">Giới tính: {{ gender }}</p>
    <p class="card-text">Mô tả: {{ description }}</p>
</template>