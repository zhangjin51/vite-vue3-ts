<template>
  <el-container>
    <el-aside>
      <Logo :isCollapse="collapse" />
      <Menu :isCollapse="collapse" />
    </el-aside>
    <el-container>
      <el-header>
        <el-icon :size="30">
          <component
            @click="collapse = !collapse"
            :is="sideControl"
          ></component>
        </el-icon>
      </el-header>
      <el-main>
        <div>{{ count }}</div>
        <button @click="handleClick">increment</button>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Logo from '../components/LogoBar.vue'
import Menu from '../components/MenuBar.vue'
import useAside from '../hooks/asideHook.ts'

const { collapse, sideControl, asideWidth } = useAside()

console.log(collapse)
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
  background: thistle;
  .el-header {
    display: flex;
    align-items: center;
    text-align: left;
  }
  .el-aside {
    width: v-bind(asideWidth);
    transition: 0.3s;
    background-color: $menuBg;
    overflow: hidden;
  }
  .el-main {
    background-color: darkseagreen;
  }
}
</style>
