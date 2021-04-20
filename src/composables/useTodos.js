import { ref } from 'vue'
import axios from 'axios'

export default function useTodos (url) {
  const todoList = ref([])
  const addTodo = item => todoList.value.push(item)

  axios(url)
    .then(res => {
      const result = res.data
      todoList.value = result.map(item => ({
        id: item.id,
        content: item.title,
        completed: item.completed
      }))
    })
    .catch(e => {
      console.log('axios请求失败：' + e)
    })
  return {
    todoList,
    addTodo
  }
}
