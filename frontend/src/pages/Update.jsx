import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {

  const task = useLocation().state?.task
  const navigate = useNavigate()
  const [updatedTitle, setUpdatedTitle] = useState(task?.Title || "")
  const [updatedDescription, setUpdatedDescription] = useState(task?.Task || "")


  return (
    <main className="app-shell" style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
      <div className="dashboard" style={{ maxWidth: 700 }}>
        <button className="secondary-button" onClick={() => navigate('/tasks')}>← Back to tasks</button>
        <div className="form-card" style={{ margin: '3rem auto 0', width: '100%' }}>
          <p style={{ color: '#5666d8', fontWeight: 700, margin: 0 }}>Refine your plan</p>
          <h1 className="display-font" style={{ fontSize: '2rem', margin: '.4rem 0', color: '#172033' }}>Edit task</h1>
          {!task ? <p style={{ color: '#7b8497' }}>This task could not be found. Return to your list to continue.</p> :
            <form onSubmit={(event) => { event.preventDefault(); alert('Update functionality not implemented yet') }}>
              <label className="field-label" htmlFor="update-title">Title</label>
              <input id="update-title" className="field-input" value={updatedTitle} onChange={(event) => setUpdatedTitle(event.target.value)} />
              <label className="field-label" htmlFor="update-description">Description</label>
              <textarea id="update-description" className="field-input" rows="5" value={updatedDescription} onChange={(event) => setUpdatedDescription(event.target.value)} style={{ resize: 'vertical' }} />
              <button className="primary-button" style={{ marginTop: '1.25rem' }} type="submit">Save changes</button>
            </form>}
        </div>
      </div>
    </main>
  )
}

export default Update