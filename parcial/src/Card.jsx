//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
  const { children } = props
  return (
      <div>
          <h1>Tu Informacion es</h1>
          <p>{children}</p>
          <button onClick={props.onDelete}>Eliminar Info</button>
      </div>
  )
  }
export default Card;
