import { useContext } from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import Test from './Test'
import { useCounterStore } from '../store/CounterStore'
function Home() {
  console.log('Home')
  const newCounter = useCounterStore((state) => state.newCounter)
  const incrementCounter = useCounterStore((state) => state.incrementCounter)
  const decrementCounter = useCounterStore((state) => state.decrementCounter)
  const { counter, changeCounter } = useContext(counterContextObj)

  return (
    <div>
      <h1 className="text-4xl ">Counter:{counter}</h1>
      <button onClick={changeCounter} className="p-4 bg-amber-300">
        Change
      </button>
      <h1 className="text-4xl">Counter:{newCounter}</h1>
      <button onClick={incrementCounter} className="p-4 bg-amber-300 mr-5">
        +
      </button>
      <button onClick={decrementCounter} className="p-4 bg-amber-300">
        -
      </button>
      <Test />
    </div>
  )
}

export default Home
