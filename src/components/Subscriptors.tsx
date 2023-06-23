import { useEffect, useState } from "react"
import List from "./List"
import Form from "./Form"
import FormReducer from "./FormReducer"
import { Sub } from "../types"
import '../styles/Subscriptors.css'

/*
interface Sub {
  nick: string
  avatar: string
  subMonth: number
  description?: string
}
*/

const INITIAL_STATE = [
  {
    nick: 'juliancho',
    avatar: 'https://i.pravatar.cc/150?u=juliancho',
    subMonth: 3,
    description: 'Student of software developping'
  },
  {
    nick: 'gea',
    avatar: 'https://i.pravatar.cc/150?u=gea',
    subMonth: 2,
  },
  {
    nick: 'pedro',
    avatar: 'https://i.pravatar.cc/150?u=pedro',
    subMonth: 5,
    description: 'i love my beard'
  }
]

const Subscriptors = () => {

  const [subs, setSubs] = useState<Array<Sub>>([])

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs([...subs, newSub])
  }

  return (
    <div className="container-subscriptors">
      <List
        subs={subs}
        msm='Soy otra Prop'
      />

      <div className="container-forms">
        <Form
          //onNewSub={setSubs}
          onNewSub2={handleNewSub}
        />

        <FormReducer
          onNewSub={handleNewSub}
        />
      </div>

    </div>
  )
}

export default Subscriptors