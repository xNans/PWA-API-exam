import { ref } from 'vue'

const getTodosInClass= () => {
    const todos = ref([])

    const fetchTodos = async() => { // async await, try, catch
        try {
          const response = await fetch('http://localhost:4000/api/books') //fetch js metode der indhenter data
          if(!response.ok) {
            throw new Error('Noget gik galt')
          }
          const data = await response.json()
          todos.value = data // value fordi vi bruger {{ ref }} - kalder værdien i funktionen/metoden
          console.log("test", todos.value)
        }
        catch (error) {
          console.log(error)
        }
      }

    return{
        todos, fetchTodos
    }
} 

export default getTodosInClass
