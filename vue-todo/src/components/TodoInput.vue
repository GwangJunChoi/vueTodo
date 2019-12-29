<template>
  <div class="input-box shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="add-container" v-on:click="addTodo">
        <i class="fas fa-bug add-btn"></i>
      </span>
  </div>
</template>

<script>
export default {
  data : function(){
    return {
      newTodoItem : ""
    }
  },
  methods : {
    addTodo : function(){
      if(this.newTodoItem === ''){
        return false;
      }
      var obj = { completed : false, item:this.newTodoItem };
      localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
      this.clearInput();
    },
    clearInput : function(){
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
input:focus{
  outline:none;
}
.input-box {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.input-box input{
  border-style: none;
  font-size: 0.9rem;
}
.add-container {
  float:right;
  background:linear-gradient(to right, #6478FB,#8763FB);
  width: 3rem;
}
.add-btn {
  color:white;
  vertical-align: middle;
}

</style>