import { useState } from "react"

function Form(props) {
    console.log(props)
    const [info1, setInfo1] = useState('')
    const [info2, setInfo2] = useState('')
    const [mensaje, setMensaje] = useState('')

    function laValidacion(event) {
        event.preventDefault()
        if (info1.trim().length > 3 || info2.trim().length > 6) {
            console.log('Esta bien')
            console.log(props)
            props.onCard(Card)
            setMensaje('')
        }else {
            console.log('Esta mal')
            setMensaje('Por favor chequea que la información sea correcta')
        }
        
    }

    console.log(info1)
    console.log(info2)

    return (
        <Form>
          <form onSubmit={laValidacion}>
            <label>
              Primera Informacion:
              <input type="text" id="info1" value={info1} onChange={(e) => setInfo1(e.target.value)}/>
            </label>
            <label>
              Segunda Informacion:
              <input type="text" id="info2" value={info2} onChange={(e) => setInfo2(e.target.value)}/>
            </label>
            <button type="submit">Submit</button>
          </form>
          {showCard && (
            <div>
              <h2>Información ingresada:</h2>
              <p>Primera Informacion: {info1}</p>
              <p>Segunda Informacion: {info2}</p>
            </div>
          )}
        </Form>
      );
    };


export default Form 