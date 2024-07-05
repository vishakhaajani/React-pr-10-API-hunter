import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'

function App() {

  const [todo , setTodo] = useState([])
  const getTodos = async() => {
    fetch("https://dummyjson.com/todos")
    .then (res => res.json())
    .then((data) => {
      setTodo(data.todos)
    })
  }

  useEffect(() => {
    getTodos()
  },[])

  return (
    <>
      <h2 align="center" className='my-3'>API call by fetch</h2>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Todo</th>
            <th scope="col">Competed</th>
            <th scope="col">Userid</th>
          </tr>
        </thead>
        <tbody>
          {
            todo.map((val) => {
              return(
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.todo}</td>
                  <td>{val.completed.toString()}</td>
                  <td>{val.userId}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </>
  )
}

export default App
