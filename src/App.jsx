
import { useTransition } from 'react'
import './App.css'

function App() {
  const { t } = useTransition()
  return (
    <div className='container' >
      <h1 className='text-white'>{t("greeting")}</h1>
    </div>
  )
}

export default App