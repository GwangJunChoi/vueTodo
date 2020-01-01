"# vueTodo" 
프로젝트 생성 명령어 1

vue create vue-todo
cd vue-todo
npm run serve

프로젝트 생성 명령어 2

vue init webpack-simple vue-todo
cd vue-todo
npm install
npm run dev



ES6

let 
{} 단위로 변수 범위 제한
function a (){
    let a = 1;    
    let a = 10; //error
}
//let undefined
const 
지정한 값 변경 불가능 (상수)
const a = 10;
a = 1; //error

const a = {};
a.num = 10; //ok
예제)
function f(){
    let x;
    {
        const x = 'test';
        x = 'test2';//error
    }
    x = 'let_test';
    let x = 'test'; //errror
}

화살표함수
ES5 
var sum = function sum(){
    return 1 + 2;
}
ES6
var sum = () => {
    return 1 + 2;
}
ES6
var arr =  [1, 2, 3];
arr.forEach((num) => {
    console.log(num);
});

ES5 객체리터럴
var test = {
    test : function() {
        console.log('test');
    }
};

ES6 객체리터럴
var test = {
    test() {
        console.log('test');
    }
};

객체의 속성명과 값 명이 동일할 때 아래와 같이 축약 가능
var num = 10;
var numObj {
    //num : num,
    num
};

자바스크립트 모듈화 방법
//libs/math.js
export function sum(x, y) {
    return x + y;
}
export var pi = 3.141593;

//main.js
import {sum} from 'libs/math.js';
sum(1, 2);

Vue.js에서 default export //익명
하나 파일에서 하나의  export
//util.js
export default function (a) {
    return console.log(a);
}

import logger from 'util.js';
logger('test');
import logger2 from 'util.js';
logger2('test2');


Vuex - 상태 관리 라이브러리
복잡한 애플리케이션 컴포넌트 효율적 관리 구조화 방법, 모듈 구조화 방법
Flux패턴, state, getters, mutations, action 
Helper


Flux
MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴 - unidirectional data flow

Action -> Dispatcher -> Model -> View
1. 이벤트 또는 사용자 입력
2. 데이터를 변경하는 방법, 메서드
3. 화면에 표시할 데이터
4. 사용자에게 비춰지는 화면
Vuex 구조
컴포넌트 -> 비동기 로직 -> 동기 로직 -> 상태

vuex 설치
https://vuex.vuejs.org/kr/installation.html

npm 방식
npm install vuex --save
src/store/store.js 폴더 및 파일 생성
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  
});

main.js store 추가
import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})


state
여러 컴포넌트 간에 공유할 데이터 - 상태
//vue 
data : {
    message : 'test'
}
//vuex
state : {
    mesage : 'test'
}
//vue
{{ message }}
//vuex
{{ this.$store.state.message }}

getters 
state 값을 접근하는 속성이자 computed() 처럼 미리 연산된 값을 접근하는 속성
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

mutation
state의 값을 변경 할 수 있는 유일한 방법, 메서드
commit() 으로 동작
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








