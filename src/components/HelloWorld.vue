<script setup lang="ts">
import { ref, useSlots, onMounted, useAttrs, toRefs } from 'vue'

defineProps<{ msg: string; arrList?: Array<number> }>()
const emits = defineEmits<{
  (e: 'hello', data: string): void
}>()
const slots = useSlots()
const attrs = useAttrs()
const { a, b } = toRefs(attrs)

const handleClick = () => {
  count.value++
  number++
  emits('hello', 'world' + number)
}
const count = ref(0)
let number = 3
defineExpose({
  count,
  number
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="handleClick">click</button>
  <div class="header">
    <!-- <slot name="header">header 插槽</slot> -->
    {{ a }}
    {{ b }}
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
