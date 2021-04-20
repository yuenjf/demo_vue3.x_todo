<template>
  <div class="input-add">
    <input
      type="text"
      name="todo"
      v-model="inputValue"
      @keyup.enter="emitAddTodo"
    />
    <button @click="emitAddTodo">
      <i class="plus"></i>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'TodoAdd',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup (props, context) {
    return useEmitAddTodo(props.id, context.emit)
  }
}

function useEmitAddTodo (id, emit) {
  const inputValue = ref('')
  const emitAddTodo = () => {
    if (inputValue.value === '') {
      return false
    }
    const todo = {
      id,
      content: inputValue.value,
      completed: false
    }
    emit('add-todo', todo)
    inputValue.value = ''
  }
  return {
    inputValue,
    emitAddTodo
  }
}
</script>

<style scoped lang="scss">
.input-add {
  position: relative;
  display: flex;
  input {
    width: 100%;
    height: 50px;
    font-size: 20px;
    border-radius: 25px;
    border: none;
    outline: none;
    padding: 0 75px 0 25px;
  }
  button {
    position: absolute;
    right: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(#c0a6f3, #7f95f7);
    border: none;
    outline: none;
    cursor: pointer;
    .plus {
      display: block;
      width: 100%;
      height: 100%;
      background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
      background-size: 50% 2px, 2px 50%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
</style>
