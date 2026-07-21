// src/pages/Login.jsx
import { useState } from "react";
import "../styles/login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Por favor completa ambos campos");
      return;
    }
    
    setIsLoading(true);
    setError("");
    
    // Simulación de login JWT
    setTimeout(() => {
      setIsLoading(false);
      console.log("Login exitoso:", { username, token: "jwt-token-xyz" });
    }, 1500);
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <div className="login-brand">
          <span className="login-logo" aria-hidden="true">🔒</span>
          <h1 className="login-title">Desarrolla.io</h1>
        </div>
        <p className="login-subtitle">Accede a tu curso de desarrollo</p>
      </header>

      <main className="login-form-wrapper">
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="login-field-group">
            <label htmlFor="username" className="login-label">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="tu.nombre@ejemplo.com"
              autoComplete="username"
              required
              aria-invalid={!!error}
              aria-describedby={error ? "username-error" : undefined}
            />
          </div>

          <div className="login-field-group">
            <label htmlFor="password" className="login-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
              aria-invalid={!!error}
              aria-describedby={error ? "password-error" : undefined}
            />
          </div>

          {error && (
            <div className="login-error" role="alert" id="username-error">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading || !username || !password}
          >
            {isLoading ? (
              <>
                <span className="login-button-spinner"></span>
                Iniciando sesión...
              </>
            ) : (
              "Ingresar"
            )}
          </button>
        </form>
      </main>

      <footer className="login-footer">
        <a href="/forgot" className="login-forgot-link">¿Olvidaste tu contraseña?</a>
      </footer>
    </div>
  );
}
