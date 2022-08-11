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
        <div id="echarts-main" style="width: 600px; height: 400px"></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Logo from '../components/LogoBar.vue'
import Menu from '../components/MenuBar.vue'
import useAside from '../hooks/asideHook.ts'
import useEcharts from '../hooks/useEcharts.ts'

import {
  getUsersCountByDate,
  getUsersCount,
  getOrdersCountByDate,
  getOrdersCount,
  getAdminsCountByDate,
  getAdminsCount
} from '@/api/home.js'

const { collapse, sideControl, asideWidth } = useAside()

useEcharts()

const localDate = new Date().toLocaleDateString().replace(/\//g, '-')
const currentDate = new Date().getDate()
const userCountByDate = reactive([])
const ordersCountByDate = reactive([])
const adminsCountByDate = reactive([])
for (let i = 0; i < 7; i++) {
  let temp = localDate
  const arr = temp.split('-')
  arr[2] = currentDate - i + ''
  const date = arr.join('-')

  getUsersCountByDate(date).then(res = > {
    console.log(res)
    // userCountByDate.unshift()
  })
  // getOrdersCountByDate(date).then(res = > {})
  // getAdminsCountByDate(date).then(res = > {})
}

// Promise.all([
//   getUsersCountByDate(),
//   getUsersCount(),
//   getOrdersCountByDate(),
//   getOrdersCount(),
//   getAdminsCountByDate(),
//   getAdminsCount()
// ]).then((values) => {
//   console.log('@@@', values)
// })
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
