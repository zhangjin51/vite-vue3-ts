import { Fold, Expand } from '@element-plus/icons-vue'
import { computed, ref } from 'vue'

export default () => {
  const collapse = ref(false)
  const sideControl = computed(() => {
    return collapse.value ? Expand : Fold
  })
  const asideWidth = computed(() => {
    return collapse.value ? '64px' : '200px'
  })

  return {
    collapse,
    sideControl,
    asideWidth
  }
}
