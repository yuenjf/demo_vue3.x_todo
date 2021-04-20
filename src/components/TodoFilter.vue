<template>
  <div class="filters">
    <span
      class="filter"
      :class="{ active: item.value === filter }"
      v-for="item in filters"
      :key="item.value"
      @click="$emit('change-filter', item.value)"
    >
      {{ item.name }}
    </span>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'TodoFilter',
  props: {
    filter: {
      type: String,
      required: true
    }
  },
  setup () {
    const filters = ref([
      {
        name: '全部',
        value: 'all'
      },
      {
        name: '未完成',
        value: 'todo'
      },
      {
        name: '已完成',
        value: 'done'
      }
    ])
    return { filters }
  }
}
</script>

<style scoped lang="scss">
.filters {
  margin: 20px 0;
  display: flex;
  text-align: center;
  .filter {
    flex: 1;
    margin: 0 25px;
    color: #999;
    cursor: pointer;
  }
  .active {
    color: #6b729c;
  }
}
</style>
