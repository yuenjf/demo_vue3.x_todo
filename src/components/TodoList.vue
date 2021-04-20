<template>
  <div class="todo-list">
    <div
      class="todo-item"
      :class="{ done: item.completed }"
      v-for="item in todoList"
      :key="item.id"
    >
      <label>
        <input
          type="checkbox"
          :checked="item.completed"
          @click="item.completed = $event.target.checked"
        />
        <i class="check-box"></i>
        {{ item.content }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todoList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-list {
  display: grid;
  row-gap: 10px;
  .todo-item {
    background: #ffffff;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 0 15px;
    label {
      position: relative;
      display: flex;
      input {
        opacity: 0;
        margin-right: 15px;
      }
      .check-box {
        display: block;
        position: absolute;
        &::before,
        &::after {
          content: '';
          display: block;
          position: absolute;
          width: 17px;
          height: 17px;
          border-radius: 50%;
        }
        &::before {
          border: 1px solid #b382f9;
        }
        &::after {
          background: #b382f9;
          transform: translate(1px, 1px) scale(0.8);
          opacity: 0;
        }
      }
      input:checked + .check-box::after {
        opacity: 1;
      }
    }
  }
  .done {
    text-decoration: line-through;
    font-style: italic;
  }
}
</style>
