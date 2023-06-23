// In this component you can see how to work whit events, here two ways are shown

import { useState } from "react"
import "../styles/HanldeEvents.css"

interface Props {
  numbs: number[]
  addNumber: React.Dispatch<React.SetStateAction<number[]>>
  words: string[]
  addWord: (newWord: string) => void
}

const HandleEvents = ({ numbs, addNumber, words, addWord }: Props) => {

  const [word, setWord] = useState<string>('')

  const handleNumbers = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newNumber = numbs.length + 1
    addNumber([...numbs, newNumber]) // addNumbers is the same setNumbs funtion from App.tsx
  }

  const handleWords = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addWord(word) // This function get a string that is used in addWord from APP.tsx to updated the state words
    setWord('')
  }

  return (
    <div className="container-handle">

      <div className="numbers">
        <form onSubmit={handleNumbers}>
          <button>Add Number</button>
        </form>
        <div className="list-numbs">
          {
            numbs.map((num, index) => {
              return (
                <p key={index}>{num}</p>
              )
            })
          }
        </div>
      </div>

      <div className="words">
        <form onSubmit={handleWords}>
          <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
          <button>add World</button>
        </form>
        <div className="list-words">
          {
            words.map((num, index) => {
              return (
                <p key={index}>{num}</p>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default HandleEvents