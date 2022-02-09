import { useState } from "react"
import { Link } from "react-router-dom"

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://www.dogsapi.origamimd.dev/json/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({username, password})
    }).then(response => {
      console.log(response)
    return response.json()
  }).then((json)=> console.log(json))
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={({target})=> setUsername(target.value)} />
        <input type="text" value={password} onChange={({target})=> setPassword(target.value)} />
      </form>
      <button>Entrar</button>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm