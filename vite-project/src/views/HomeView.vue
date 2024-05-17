<script>

import inClassCrud from '../modules/inClassCrud'
import { onMounted } from 'vue'

const { todos, fetchTodos } = inClassCrud()



// Life cycle hooks - læs om det

onMounted(() =>{
  fetchTodos()
})

console.log("mine todos", todos)


/* let isLoggedIn = ref(false)

let dataStuff = ref ([
  { name: "John", age: 25},
  { name: "Nanna", age: 29},
  { name: "Kasper", age: 31}
]) */



</script>

<template>
  <main>
    <h2>Todos</h2>
    <div v-for="todo in todos" :key="todo.id">
      <p>{{ todo.todo }}</p>
      <p>{{ todo.author }}</p>
      <p>{{ todo._id }}</p>
    </div>
    <!--<p>Vue siger {{ dataStuff }}</p> Interpolation, skal ikke have values eller params- kun i konsol.-->
<!--     <div v-for="data in dataStuff" :key="(data, index)">
      <p> {{ data.name }} + {{ index }}</p>
      <p> {{ data.age }} </p>
      <p> {{ data.id }} </p>
    </div> 
    <div v-if="isLoggedIn">
    this is true
    </div>
    <div v-else>
      this is false
    </div>   
    <div v-show="isLoggedIn"></div> Alternativ til if else-->
  </main>
</template>../modules/inClassCrud
