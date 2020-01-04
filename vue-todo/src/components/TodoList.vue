<template>
  <div class="todo-list">
      <transition-group name="list" tag="ul">      
        <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow" v-bind:class="{ completed : todoItem.completed }">
          <div class="todo-item">
            <div class="item-header">
              <i class="check-btn fa fa-check" v-on:click="toggleComplete({todoItem, index})"></i>
            </div>
            <div class="item-content">
              <span>{{ todoItem.item }}</span>
            </div>          
            <div class="item-footer">
              <span>{{ todoItem.date }}</span>
              <span class="btn-remove" v-on:click="removeTodo({todoItem, index})">
                <i class="fas fa-trash-alt"></i>
              </span>
            </div>
          </div>          
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
  margin: 0 auto;
  margin-top: 10px;
}
li {
  /* display: flex; */
  margin:0.1rem 0;  
  background : white;
  border-radius: 5px;
  box-sizing: border-box;
  display: inline-block;
  width:49%;
  position: relative;
}
li:nth-child(odd) {
  margin-right:1%;
}
li:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
li .item-footer {
  /* position: absolute;
  bottom: 10px; */
  color: #c5bcbc;
  font-size: 0.8rem;
  text-align: right;
}
li .todo-item{  
  position: absolute;
  width: 100%;
  height: 100%;
}
.todo-item > div {
  padding: 0 0.5rem;
}
.todo-item .item-content {
  height: 75%;
}
.check-btn{
  line-height:20px;
  color:#62acde;
  margin-right:5px;
}
.completed{
  text-decoration : line-through;
  background : #b3adad;
}
.completed .item-content {
    text-decoration: line-through;
}
.btn-remove{
  font-size: 1rem;
  margin-left:auto;
  /* color:#de4343; */
}

/* 리스트 아이템 트랜지션 추가 */
.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>