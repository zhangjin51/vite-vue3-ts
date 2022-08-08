import { useRouter, useRoute } from 'vue-router'
const router = useRouter()

import { useStore } from 'vuex'
const store = useStore()
const count = computed(() => {
  return store.state.count
})
const handleClick = () => {
  store.commit('increment', 1)
}