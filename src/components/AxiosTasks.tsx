import { useEffect, useState } from 'react'
import axios from 'axios'
import { Task } from '../types'
import '../styles/AxiosTask.css'

const AxiosTasks = () => {

  const [tasks, setTasks] = useState<Array<Task>>([])

  useEffect(() => {
    // LA siguiente funcion no recibe parametros y devuelve datos tipo: Promise<Array<Task>>
    const fetchTasks = async (): Promise<Array<Task>> => {
      const respose = await axios.get('http://localhost:3002/tasks')
      return respose.data
    }

    fetchTasks()
      .then((tasks) => {
        setTasks(tasks)
      })

  }, [])

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const copy = [...tasks]
    copy.map(task => {
      if (task.name == evt.target.name) task.completed = evt.target.checked
    })
    setTasks(copy)
  }

  return (
    <div className='container-axiosTasks'>
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

export default AxiosTasks