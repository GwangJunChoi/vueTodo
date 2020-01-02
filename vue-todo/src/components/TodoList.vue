<template>
  <div class="todo-list">
      <transition-group name="list" tag="ul">      
        <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
          <i class="check-btn fa fa-check" v-bind:class="{ completed : todoItem.completed }" v-on:click="toggleComplete({todoItem, index})"></i>
          <span v-bind:class="{ completed : todoItem.completed}">{{ todoItem.item }}</span>
          <span class="btn-remove" v-on:click="removeTodo({todoItem, index})">
            <i class="fas fa-trash-alt"></i>
          </span>
        </li>      
      </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props : ['propsdata'],
  methods : {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    }),
    // removeTodo (todoItem, index) {
    //   //this.$emit('removeItem', item, index);
    //   this.$store.commit('removeOneItem', {todoItem, index});
    // },
    // toggleComplete (todoItem, index) {
    //   //this.$emit('toggleItem', item, index);
    //   this.$store.commit('toggleOneItem', {todoItem, index});
    // }
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
    ...mapGetters(['storedTodoItems']),
    // ...mapGetters({ //바인딩 값과 이름이 다를때 객체형 리터럴
    //   todoItems: 'storedTodoItems'  컴포넌트 메서드 명 : Store의 getter 명
    //   }),
  }
}
</script>

<style scoped>
ul {
  list-style-type:none;
  padding-left:0px;
  margin-top:0;
  text-align:left;
}
li {
  display: flex;
  min-height:50px;
  height:50px;
  line-height: 50px;
  margin:0.5rem 0;
  padding:0 0.9rem;
  background : white;
  border-radius: 5px;
}
.check-btn{
  line-height:45px;
  color:#62acde;
  margin-right:5px;
}
.check-btn-completed{
  color:#b3adad;
}
.completed{
  text-decoration : line-through;
  color:#b3adad;
}
.btn-remove{
  margin-left:auto;
  color:#de4343;
}

/* 리스트 아이템 트랜지션 추가 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>