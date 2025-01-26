import { StrictMode } from 'react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

function mytitle() {
  return (
    <div>
      <img src="src\assets\react.svg" width={40} />
      <h1>Fun fact about react</h1>
    </div>
  )
}

function mylist() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

root.render(
  <div>
    {mytitle()}
    {mylist()}
  </div>
)