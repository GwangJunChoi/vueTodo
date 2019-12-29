<template>
  <div class="todo-list">
      <ul>
          <li v-for="(item, index) in todoItems" v-bind:key="item.item" class="shadow">
            <i class="check-btn fa fa-check" v-bind:class="{ completed : item.completed }" v-on:click="toggleComplete(item, index)"></i>
            <span v-bind:class="{ completed : item.completed}">{{ item.item }}</span>
            <span class="btn-remove" v-on:click="removeTodo(item.item, index)">
              <i class="fas fa-trash-alt"></i>
            </span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data : function () {
    return {
      todoItems : []
    }
  },
  methods : {
    removeTodo : function (item, index) {
      localStorage.removeItem(item);
      this.todoItems.splice(index,1);
    },
    toggleComplete : function (item, index) {
      item.completed = !item.completed;
      localStorage.removeItem(item.item);
      localStorage.setItem(item.item,JSON.stringify(item));
    }
  },
  created : function () {
    if(localStorage.length > 0){
      for(var i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          var item = localStorage.getItem(localStorage.key(i));
          this.todoItems.push(JSON.parse(item));
        }
      }
      console.log(this.todoItems);
    }
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
</style>