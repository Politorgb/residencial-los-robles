function Login() {
  return (
    <div>
      <h2>Iniciar Sesión</h2>

      <input
        type="email"
        placeholder="Correo electrónico"
      />

      <br /><br />

      <input
        type="password"
        placeholder="Contraseña"
      />

      <br /><br />

      <button>
        Entrar
      </button>
    </div>
  );
}

export default Login;