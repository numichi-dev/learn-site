<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ title?: string, author?: string }>()
let title = ref(props.title || 'Szerző')
let author = ref(props.author || 'Numichi')
</script>

<template>
    <p class="VPAuthor">
        {{ title }}: {{ author }}
    </p>
</template>

<style scoped>
    .VPAuthor {
        line-height: 32px;
        font-size: 14px;
        font-weight: 500;
        color: var(--vp-c-text-2);
    }
</style>
