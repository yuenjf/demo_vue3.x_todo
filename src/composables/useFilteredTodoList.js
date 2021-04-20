import { computed, ref } from 'vue'

export default function useFilteredTodoList (todoList) {
  const filter = ref('all')
  const filteredTodoList = computed(() => {
    switch (filter.value) {
      case 'done':
        return todoList.value.filter(item => item.completed)
      case 'todo':
        return todoList.value.filter(item => !item.completed)
      default:
        return todoList.value
    }
  })
  return {
    filter,
    filteredTodoList
  }
}
