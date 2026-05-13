export default function LoginPage() {
  return (
    <div className="login-page">
      <form className="box">
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g. alex@example.com" />
          </div>
        </div>

        <div className="field">
          <label className="label">Contraseña</label>
          <div className="control">
            <input className="input" type="password"  placeholder="********" />
          </div>
        </div>

        <button className="button is-primary">Iniciar sesión</button>
      </form>
    </div>
  );
}
