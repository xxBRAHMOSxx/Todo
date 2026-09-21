import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className="auth-shell">
      <section className="auth-visual">
        <div className="brand-mark" style={{ color: 'white' }}><span className="brand-icon" style={{ background: 'rgba(255,255,255,.18)' }}>✓</span> Focusly</div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, marginTop: 'clamp(3rem, 12vh, 9rem)' }}>
          <p style={{ color: '#b9c3ff', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', fontSize: '.75rem' }}>Make space for what matters</p>
          <h1 className="display-font" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.08, margin: '1rem 0' }}>A calmer way to get things done.</h1>
          <p style={{ color: '#d9ddf4', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 460 }}>Organize your day, keep momentum, and turn your plans into progress.</p>
        </div>
      </section>
      <section className="auth-form-panel">
        <div className="form-card">
          <p style={{ color: '#5666d8', fontWeight: 700, margin: 0 }}>Welcome back</p>
          <h2 className="display-font" style={{ fontSize: '2rem', margin: '.4rem 0', color: '#172033' }}>Sign in to Focusly</h2>
          <p style={{ color: '#7b8497', margin: '0 0 1.5rem' }}>Your tasks are waiting for you.</p>
          <LoginForm />
          <p style={{ textAlign: 'center', color: '#7b8497', fontSize: '.9rem', margin: '1.5rem 0 0' }}>New here? <Link to="/register" style={{ color: '#5666d8', fontWeight: 700 }}>Create an account</Link></p>
        </div>
      </section>
    </main>
  )
}

export default Login