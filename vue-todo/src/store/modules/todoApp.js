const storage = {
  fetch() {
    const arr = (localStorage.getItem('todolist') == null) ? [] : JSON.parse(localStorage.getItem('todolist')) ;
    // if (localStorage.length > 0) {
    //   for (let i = 0; i < localStorage.length; i++) {
    //     if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
    //       let item = localStorage.getItem(localStorage.key(i));
    //       arr.push(JSON.parse(item));
    //     }
    //   }
    // }
    return arr;
  },
};

const state =  {
  todoItems: storage.fetch(),
};

const getters = {
  storedTodoItems (state) {
    return state.todoItems;
  }
};

const mutations = {
  addOneItem (state, todoItem) {
    const today = new Date();
    const day = ('0' + today.getDate()).slice(-2);
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const year = today.getFullYear();
    const obj = { completed: false, item: todoItem, date: year + '-' + month + '-' + day};
    state.todoItems.unshift(obj);
    localStorage.setItem('todolist', JSON.stringify(state.todoItems));
  },
  removeOneItem (state, payload) {
    state.todoItems.splice(payload.index, 1);
    localStorage.setItem('todolist', JSON.stringify(state.todoItems));
  },
  toggleOneItem (state, payload) {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.setItem('todolist', JSON.stringify(state.todoItems));
  },
  clearAllItem (state) {
    localStorage.removeItem('todolist');
    //localStorage.clear();
    state.todoItems = [];
  }
};

export default { 
  state, 
  getters, 
  mutations
}