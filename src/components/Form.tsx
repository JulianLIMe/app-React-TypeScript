import { useState } from "react"
import { Sub } from "../types"
import "../styles/Form.css"

interface FormState {
  inputValues: Sub
  aNumber: number
  // You can define other types within this interface scope
}

interface FormProps {
  //onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
  onNewSub2: (newSub: Sub) => void
}

const INITIAL_STATE = {
  nick: '',
  avatar: '',
  subMonth: 0,
  description: ''
}

const Form = ({/* onNewSub */ onNewSub2 }: FormProps) => {

  const [inputValues, setInputValues] = useState<FormState['inputValues']>(INITIAL_STATE)

  const aNumber = (num: FormState['aNumber']) => {
    console.log(num + 1)
  }
  aNumber(33)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    /* 
    Ya que la funcion onNewSub es la misma funcion setSubs que proviene desde Subscriptors.tsx, el parametro subs es el mismo estado
    de suscriptores del componente Subscriptors.tsx, por ello se puede usuar en este componente asi no sea instanciado o importado
    des Subscriptors.tsx hasta este componente Form.tsx
    */
    //onNewSub((subs) => [...subs, inputValues]) 

    onNewSub2(inputValues)
    handelClear()
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    /* 
    el parametro e que recibe esta funcion es el evento, alli se encuentra la informacion del input del form el cual se este
    modifcando, el tipo: (React.ChangeEvent<HTMLInputElement>), es dificil de inferir, una forma de saver el tipo es colocar
    dentro de la propiedad onChange de algun input esta funcion, y posicionando el cursor sobre el parametro e se mostrara 
    el tipo de dato que este es 
    */
    e.target.name == 'nick' ?

      setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value,
        ['avatar']: `https://i.pravatar.cc/150?u=${e.target.value}`
      }) :

      setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value
      })
  }

  const handelClear = () => {
    setInputValues(INITIAL_STATE)
  }

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <input value={inputValues.nick} type="text" name="nick" placeholder="nick" onChange={handleChange} />
        {/* <input value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" onChange={handleChange} /> */}
        <input value={inputValues.subMonth} type="text" name="subMonth" placeholder="subMonth" onChange={handleChange} />
        <textarea value={inputValues.description} name="description" placeholder="description" onChange={handleChange} />
        <button onClick={handelClear} type="button">Clear Form</button>
        <button type="submit">Save new Sub!</button>
      </form>
    </div>
  )
}

export default Form