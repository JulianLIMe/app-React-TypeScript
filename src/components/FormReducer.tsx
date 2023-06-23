import { /* useState, */ useReducer } from 'react'
import { Sub } from '../types'
import '../styles/FormReducer.css'

/* 
type e interface son propiedades de typeScript que permiten definir el tipo de un dato o una funcion, para distinguir cuando usar
alguno debe tener en cuenta que una ves que se define un type no se le puede agregar mas propiedades, mientras que interface es
siempre extendible, es decir que se le puede agregar mas propiedades
*/

interface Props {
  onNewSub: (newSub: Sub) => void
}

type FormActions = {
  type: 'change_value',
  payload: {
    inputName: string,
    inputValue: string
  }
} | {
  type: 'clear'
}

const INITIAL_STATE = {
  nick: '',
  avatar: '',
  subMonth: 0,
  description: ''
}

const formReducer = (state: Sub, action: FormActions) => {
  switch (action.type) {
    case 'change_value':
      const { inputName, inputValue } = action.payload
      return (
        inputName == 'nick' ? {
          ...state,
          [inputName]: inputValue,
          avatar: `https://i.pravatar.cc/150?u=${inputValue}`
        } : {
          ...state,
          [inputName]: inputValue
        }
      )
    case 'clear':
      return INITIAL_STATE
  }
}

const FormReducer = ({ onNewSub }: Props) => {

  //const [inputValues, setInputValues] = useState<Sub>(INITIAL_STATE)
  const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    /* setInputValues({
      ...inputValues,
      [evt.target.name]: evt.target.value
    }) */
    dispatch({
      type: 'change_value',
      payload: {
        inputName: evt.target.name,
        inputValue: evt.target.value
      }
    })
  }

  const handelClear = () => {
    /* setInputValues(INITIAL_STATE) */
    dispatch({ type: 'clear' })
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewSub(inputValues)
    handelClear()
  }

  return (
    <div className='container-formReducer'>
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

export default FormReducer