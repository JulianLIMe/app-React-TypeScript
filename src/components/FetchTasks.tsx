import { useEffect, useState } from 'react'
import { Task } from '../types'
import '../styles/FetchTasks.css'

const FetchTasks = () => {

  const [tasks, setTasks] = useState<Array<Task>>([])

  useEffect(() => {
    // LA siguiente funcion no recibe parametros y devuelve datos tipo: Promise<Array<Task>>
    const fetchTasks = (): Promise<Array<Task>> => {
      return fetch('http://localhost:3002/tasks').then((res) => res.json())
    }

    fetchTasks()
      .then((tasks) => {
        setTasks(tasks)
      })

  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const copy = [...tasks]
    copy.map(task => {
      if (task.name == e.target.name) {
        task.completed = e.target.checked
      }
    })
    setTasks(copy)
  }

  return (
    <div className='container-fetchTasks'>
      {
        tasks.length > 0 ?
          <ul>
            {
              tasks.map((e) => {
                return (
                  <li key={e.id}>
                    <h3>{e.name}</h3>
                    <p>{e.description}</p>
                    <input name={e.name} type="checkbox" checked={e.completed} onChange={handleChange} />
                  </li>
                )
              })
            }
          </ul> :
          <h1>Loading Tasks</h1>
      }
    </div>
  )
}

export default FetchTasks