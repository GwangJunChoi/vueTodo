<template>
  <div class="input-box shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="add-container" v-on:click="addTodo">
      <i class="far fa-plus-square"></i>
    </span>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <p slot="body">내용을 입력 해주세요.</p>
      <p slot="footer"></p>
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data () {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo () {
      if(this.newTodoItem !== ''){
        const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem', text);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }      
    },
    clearInput () {
      this.newTodoItem = '';
    }
  },
  components: {
    Modal,
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
  color:white;
}
.add-btn {
  color:white;
  vertical-align: middle;
}
.closeModalBtn {
  color:#42b983;
}
</style>