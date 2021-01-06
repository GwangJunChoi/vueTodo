# vueTodo
=============
[go to todoapp](http://namsookill.cafe24.com/, "todoapp")
## 1. used
-----------
1. vuejs
2. vuex
3. ES6 문법
## 2. descrtion
-----------
#### 프로젝트 생성
```
#프로젝트 생성 명령어 1
vue create vue-todo
cd vue-todo
npm run serve
```
```
프로젝트 생성 명령어 2
vue init webpack-simple vue-todo
cd vue-todo
npm install
npm run dev
```
#### E6 정리
>##### let {} 단위로 변수 범위 제한

```
function a (){
    let a = 1;    
    let a = 10; //error
}
//let undefined
```
>##### const 지정한 값 변경 불가능 (상수)
```
const a = 10;
a = 1; //error

const a = {};
a.num = 10; //ok
```
>##### let & const
```
function f(){
    let x;
    {
        const x = 'test';
        x = 'test2';//error
    }
    x = 'let_test';
    let x = 'test'; //errror
}
```
>##### 화살표함수
```
//ES5 
var sum = function sum(){
    return 1 + 2;
}
```
```
//ES6 function 생략
var sum = () => {
    return 1 + 2;
}

var arr =  [1, 2, 3];
arr.forEach((num) => {
    console.log(num);
});
```
>##### 객체리터럴
```
//ES5 
var test = {
    test : function() {
        console.log('test');
    }
};
```
```
//ES6
var test = {
    test() {
        console.log('test');
    }
};
// 객체의 속성명과 값 명이 동일할 때 아래와 같이 축약 가능 ES6
var num = 10;
var numObj {
    //num : num, ES5
    num 
};
```
>##### 자바스크립트 모듈화
```
//libs/math.js
export function sum(x, y) {
    return x + y;
}
export var pi = 3.141593;

//main.js
import {sum} from 'libs/math.js';
sum(1, 2);
```
>##### 익명 모듈화
```
//util.js
export default function (a) {
    return console.log(a);
}

import logger from 'util.js';
logger('test');
import logger2 from 'util.js';
logger2('test2');
```
#### Vuex
##### 상태 관리 라이브러리
복잡한 애플리케이션 컴포넌트 효율적 관리 구조화 방법, 모듈 구조화 방법
Flux패턴, state, getters, mutations, action 
Helper
##### Flux
* MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴 - unidirectional data flow
* Action -> Dispatcher -> Model -> View
1. 이벤트 또는 사용자 입력
2. 데이터를 변경하는 방법, 메서드
3. 화면에 표시할 데이터
4. 사용자에게 비춰지는 화면
* Vuex 구조
1. 컴포넌트 -> 비동기 로직 -> 동기 로직 -> 상태
>##### vuex 설치
https://vuex.vuejs.org/kr/installation.html
>##### npm 방식
```
npm install vuex --save

```
>##### src/store/store.js 폴더 및 파일 생성
```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  
});
```
>##### main.js store 추가
```
import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
```
>##### state 여러 컴포넌트 간에 공유할 데이터 - 상태
```
//vue 
data : {
    message : 'test'
}
//vuex src/store/store.js
state : {
    mesage : 'test'
}
//vue
{{ message }}
//vuex
{{ this.$store.state.message }}
```
>##### getters 
state 값을 접근하는 속성이자 computed() 처럼 미리 연산된 값을 접근하는 속성
```
//store.js
state : {
    num : 10
},
getter : {
    getNumber(state){
        return state.num;
    },
    doubleNumber(state){
        return state.num * 2;
    }
}
{{ this.$store.getters.getNumber }}
{{ this.$store.getters.doubleNumber }}
```
>##### mutation
state의 값을 변경 할 수 있는 유일한 방법, 메서드
commit() 으로 동작
* state 의 변경 추적의 편의성을 위해
* 특정 시점 어떤 컴포넌트가 state를 접근하여 변경 확인을 위해
* 결과적 으로 반응성, 디버깅, 테스트
```
//store.js
state : {
    num : 10
},
mutations : {
    printNumbers(state){
        return state.num;
    },
    sumNumbres(state, num){
        return state.num + num;
    }
}
this.$store.commit('printNumbers');
this.$store.commit('sumNumbres',20);
```
>##### action
* 비동기 처리로직을 선언 메서드 비동기 로직을 담당하는 mutations
* 데이터 요청, Promise, ES6 async과 같은 비동기 처리는 모두 actions에 선언
```
//store.js
state: {
    num: 10
},
mutations:{
    doubleNumber(state) {
        state.num * 2;
    }
},
actions: {
    delayDoubleNumber(context) {
        context.commit('doubleNumber');
    }
}
//App.vue
this.$store.dispatch('delayDoubleNumber');
```
#### Vuex - Helper
* Store 있는 4가지 속성들을 간편하게 코딩하는 방법
  * state -> mapState
  * getters -> mapGetters
  * mutations -> mapMutations
  * actions -> mapActions
>##### 사용법
* 사용하고자 하는 vue 파일에서 아래와 같이 해당 헬퍼를 로딩
```
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
    computed() {
        ...mapState([]),
        ...mapGetters([]),
    },
    methods: {
        ...mapMutations([]),
        ...mapActions([]),
    }
}
... ES6 Object Spread Operator
```
>##### ES6 Object Spread Operator 예제
```
let john = {
  field: 'web',
  language: 'js'
};
//Object Spread Operator 미적용
let developer = {
  nation: 'korea',
  field: john.field,
  language: john.language
};
//Object Spread Operator 적용
let developer = {
  nation: 'korea',
  ...john    
};
```
>##### mapState
* Vuex에서 선언한 state 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼
```
//App.vue
import { mapState } from 'vuex'

computed() {
    ...mapState(['num'])
    //num() { return this.$store.state.num; }
}

//store.js
state: {
    num: 10
}
```
```
<p>{{ this.$store.state.num }}</p>
<p>{{ this.num }}</p>
```
>##### mapGetters
* Vuex에 선언한 getters 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼
```
//App.vue
import { mapGetters } from 'vuex'
computed() {
    ...mapGetters(['reverseMessage'])
}

//store.js
getters: {
    reverseMessage(state) {
        return state.msg.split('').reverse().join('');
    }
}
```
```
<p>{{ this.$store.getters.reverseMessage }}</p>
<p>{{ this.reverseMessage }}</p>
```
>##### mapGetters
* Vuex에 선언한 mutations 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼
```
//App.vue
import { mapMutations } from 'vuex'

methods: {
    ...mapMutations([함수명]),
}

//store.js
mutations: {
    clickBtn(state) {
        alert(state.msg);
    }
}
```
```
<button @click="clickBtn">popup message</button>
```
>##### mapActions
* Vuex에 선언한 actions 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼
```
//App.vue
import { mapActions } from 'vuex'
methods:{
    ...mapActions(['delayClickBtn']),
}

//store.js
actions: {
    delayClickBtn(context) {
        setTimeout(() => context.commit('clickBtn'), 2000);
    }
}
```
```
<button @click="delayClickBtn">delay popup message</button>
```
>##### 헬퍼 활용
* Vuex에 선언한 속성을 그대로 컴포넌트에 연결
```
//배열 리터럴
...mapMutations([
    'clickBtn',
    'addNumber'
])
```
* Vuex에 선언한 속성을 컴포넌트의 특정 메서드에 연결하는 문법
```
//객체 리터럴
...mapMutations({
    popMsg: 'clickBtn' //컴포넌트 메서드 명 : Store의 뮤테이션 명
})
```
#### 프로젝트 구조화 & 모듈화
>##### 방법 1
```
//store.js
import Vue from 'vue'
import Vue from 'vuex'

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
});
```
```
//store.js
import Vue from 'vue'
import Vue from 'vuex'
import * as getters from 'store/getters.js'
import * as mutations from 'store/mutations.js'
import * as from actions 'store/actions.js'

export const store = new Vuex.Store({
    state: {},
    getters: getters,
    mutations: mutations,
    actions: actions,
});
```
>##### 방법 2
```
//store.js
import Vue from 'vue'
import Vue from 'vuex'
import todo from 'modules/todo.js'

export const store = new Vuex.Store({
    modules: {
        moduleA: todo, //모듈 명칭 : 모듈 파일명
        todo // todo: todo
    }
});

//todo.js
const state = {}
const getters = {}
const mutations = {}
const actions = {}
```

## 3. 출처
https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89







