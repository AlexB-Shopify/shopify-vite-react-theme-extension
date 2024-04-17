import { Router, Route, Link } from 'react-router-dom'
import Form from './Form'

export default function App({ home }) {
  console.log('Home', home)

  return (
    <div className="">
      <Form />
    </div>
  )
}

