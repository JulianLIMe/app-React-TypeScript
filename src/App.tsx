import { useState } from 'react'
import Counter from './components/Counter'
import Subscriptors from './components/Subscriptors'
import AddChildrens from './components/AddChildrens'
import RenderSomething from './components/RenderSomething'
import HandleEvents from './components/HandleEvents'
import FetchTasks from './components/FetchTasks'
import AxiosTasks from './components/AxiosTasks'
import './App.css'

function App() {

  const [numbs, setNumbs] = useState<number[]>([1, 2, 3])
  const [words, setWords] = useState<string[]>(['air', 'bear', 'cake'])

  const addWord = ((newWord: string) => {
    setWords([...words, newWord])
  })

  return (
    <>
      <Counter />
      
      <Subscriptors />

      <AddChildrens
        title={'Props Parent to Child'}
        information={'In AnChildren.tsx Component you can see what must do to use these children props'}
        fun={(message) => { return message }}
      />

      <RenderSomething
        things={['paper', 'keyword', 'plane', 'ball']}
      />

      <HandleEvents
        numbs={numbs}
        addNumber={setNumbs} // Not Recommended for handling events
        words={words}
        addWord={addWord}    // Recommended to handle events
      />

      <FetchTasks/>

      <AxiosTasks/>

    </>
  )
}

export default App
