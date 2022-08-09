<script lang="ts" setup>
const props = defineProps<{ isCollapse: boolean }>()
</script>

<template>
  <div class="logo-container">
    <div class="imgWrap">
      <img src="../assets/logo.jpeg" alt="" />
    </div>
    <h2 v-show="!isCollapse" class="title">vue3-admin</h2>
  </div>
</template>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  align-items: center;
  height: 64px;
  padding-left: 14px;
  overflow: hidden;
  .imgWrap {
    width: 32px;
    margin-right: 8px;
    img {
      width: 100%;
    }
  }
  .title {
    font-size: 20px;
    color: white;
    margin-bottom: 0px;
  }
}
</style>
