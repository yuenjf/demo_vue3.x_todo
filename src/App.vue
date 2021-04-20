<template>
  <div class="container">
    <h1>欢迎使用Todo!</h1>
    <todo-add :id="todoList.length + 1" @add-todo="addTodo" />
    <todo-filter :filter="filter" @change-filter="filter = $event" />
    <todo-list :todoList="filteredTodoList" />
  </div>
</template>

<script>
import TodoAdd from '@/components/TodoAdd'
import TodoFilter from '@/components/TodoFilter'
import TodoList from '@/components/TodoList'
import useTodos from '@/composables/useTodos'
import useFilteredTodoList from './composables/useFilteredTodoList'

export default {
  name: 'App',
  components: { TodoAdd, TodoFilter, TodoList },
  setup () {
    const { todoList, addTodo } = useTodos(
      'http://jsonplaceholder.typicode.com/todos?_limit=5'
    )
    const { filter, filteredTodoList } = useFilteredTodoList(todoList)

    return { todoList, addTodo, filter, filteredTodoList }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400px;
  min-height: 500px;
  padding: 20px;
  background: #efefef;
  border-radius: 20px;
  h1 {
    margin: 50px auto 20px auto;
    text-align: center;
  }
}
</style>
