import RegisterForm from "../components/RegisterForm"
import { Link } from "react-router-dom"


const Register = () => {
  return (
    <main className="auth-shell">
      <section className="auth-visual">
        <div className="brand-mark" style={{ color: 'white' }}><span className="brand-icon" style={{ background: 'rgba(255,255,255,.18)' }}>✓</span> Focusly</div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 520, marginTop: 'clamp(3rem, 12vh, 9rem)' }}>
          <p style={{ color: '#b9c3ff', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', fontSize: '.75rem' }}>Your everyday command center</p>
          <h1 className="display-font" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.08, margin: '1rem 0' }}>Small steps. Big progress.</h1>
          <p style={{ color: '#d9ddf4', fontSize: '1.1rem', lineHeight: 1.7 }}>Build a simple habit of capturing, prioritizing, and finishing your work.</p>
        </div>
      </section>
      <section className="auth-form-panel">
        <div className="form-card">
          <p style={{ color: '#5666d8', fontWeight: 700, margin: 0 }}>Get started</p>
          <h2 className="display-font" style={{ fontSize: '2rem', margin: '.4rem 0', color: '#172033' }}>Create your account</h2>
          <p style={{ color: '#7b8497', margin: '0 0 1.5rem' }}>A clearer day starts here.</p>
          <RegisterForm />
          <p style={{ textAlign: 'center', color: '#7b8497', fontSize: '.9rem', margin: '1.5rem 0 0' }}>Already have an account? <Link to="/" style={{ color: '#5666d8', fontWeight: 700 }}>Sign in</Link></p>
        </div>
      </section>
    </main>
  )
}

export default Register