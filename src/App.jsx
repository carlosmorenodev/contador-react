import { useState } from 'react'
import './App.css'
import Display from './assets/components/Display'
import Button from './assets/components/Button'

function App() {
  const [count, setCount] = useState(0);

  const sumarClic = () => {
    setCount(count + 1)
  }
  const restarClic = () => {
    setCount(count - 1)
  }

  const reiniciarClic = () => {
    setCount(0)
  }


  return (
    <>
      <div className="container">
        <div className="counter-container">
          <Display
            valor={count} />

          <Button
            name="Más"
            action={sumarClic}
            isMore={true}
          />

          <Button
            name="Menos"
            action={restarClic}
            isMore={false} />

          <Button
            name="Reiniciar"
            action={reiniciarClic}
          />
        </div>
      </div>

    </>
  )
}

export default App
