import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from './Footer'
import Counter from './Counter'
import Header from './Header'

function App() {

  const [title, setTitle] = useState("Activity 13 - React Components, Props, and useState");
  const [count, setCount] = useState(0);
  const [copyright, setCopyright] = useState("Copyright 2023");

  return (
    <>
      <Header title={title} />
      <Counter count={count} stateCount={setCount} />
      <Footer copyright={copyright} />
    </>
  )
}

export default App
