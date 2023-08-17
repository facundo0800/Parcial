import './App.css'
import Form from './components/Form'
import { useState } from 'react'
import Card from Card

function App() {
  const [laInfo, setLaInfo] = useState()

    console.log('en app', laInfo)

    function handleSubmit(Card) {
      console.log('Todo bien', Card)
      setLaInfo(Card)
    }

    function handDelete(Card) {
      setlaInfo(Card);
    }

    function handDelete(){
      setlaInfo();
    }

  return (
    <>
      <Form onCard={handleSubmit} />
      {laInfo ? <Card onDelete={handDelete}>{laInfo}</Card> : undefined }
    </>
  )
}

export default App;
