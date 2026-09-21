import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from "js-cookie"

import { deleteTask, getTasks, newTask } from '../store/taskStore'

export default function Tasks() {
  const [title, setTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskData, setTaskData] = useState([])
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  const token = Cookies.get("token")
  const userId = Cookies.get('userId')

  useEffect(() => {
    if (!token || !userId || !user) return navigate('/')
    fetchTasks(user.userId)
  }, [])
  
  const fetchTasks = async (userId) => {
    try {
      const data = await getTasks(userId)
      setTaskData(data.map((task) => ({ Title: task.Title, Task: task.Task, _id: task._id })))
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  const onAddTaskClicked = async (event) => {
    event.preventDefault()
    if (!title.trim() || !taskDescription.trim()) {
      alert("Please enter both a title and task description")
      return
    }
    try {
      await newTask(title, taskDescription, user.userId)
      setTitle("")
      setTaskDescription("")
      fetchTasks(user.userId)
    } catch (error) {
      console.error("Error creating new task:", error);
      alert("Failed to create new task")
    }
  }

  const onDeleteTaskClicked = async (taskId) => {
    if (!taskId) {
      alert("Please provide a valid task ID")
      return
    }
    try {

      await deleteTask(taskId)
      fetchTasks(user.userId)
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task")
    }
  }

  return (
    <main className="app-shell">
      <div className="dashboard">
        <header className="topbar">
          <div className="brand-mark"><span className="brand-icon">✓</span><span className="display-font">Focusly</span></div>
          <button className="secondary-button" onClick={() => { Cookies.remove('token'); Cookies.remove('userId'); localStorage.removeItem('user'); navigate('/') }}>Sign out</button>
        </header>
        <section style={{ marginBottom: '2rem' }}>
          <p style={{ margin: 0, color: '#5666d8', fontWeight: 700 }}>Good to see you, {user?.username || 'there'}.</p>
          <h1 className="display-font" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', margin: '.45rem 0', color: '#172033' }}>Your focus, your flow.</h1>
          <p style={{ margin: 0, color: '#7b8497' }}>{taskData.length ? `You have ${taskData.length} ${taskData.length === 1 ? 'task' : 'tasks'} on your list.` : 'Start by adding one small thing to your list.'}</p>
        </section>
        <div className="task-layout">
          <section className="surface">
            <div style={{ padding: '1.25rem 1.25rem .6rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 className="display-font" style={{ margin: 0, fontSize: '1.2rem' }}>Today’s tasks</h2>
              <span style={{ color: '#7b8497', fontSize: '.85rem' }}>{taskData.length} total</span>
            </div>
            {taskData.length ? taskData.map((task) => (
              <article className="task-card" key={task._id}>
                <div><h3 className="task-title">{task.Title}</h3><p className="task-description">{task.Task}</p></div>
                <div style={{ display: 'flex', gap: '.5rem', alignItems: 'start', flexShrink: 0 }}>
                  <button className="secondary-button" onClick={() => navigate('/task/update', { state: { task } })}>Edit</button>
                  <button className="secondary-button danger-button" onClick={() => onDeleteTaskClicked(task._id)} aria-label={`Delete ${task.Title}`}>Delete</button>
                </div>
              </article>
            )) : <div className="empty-state"><div className="empty-icon">✓</div><strong style={{ color: '#3e4860' }}>Nothing on your list yet</strong><p>Add a task and make your next step visible.</p></div>}
          </section>
          <section className="surface" style={{ padding: '1.4rem' }}>
            <h2 className="display-font" style={{ margin: '0 0 .35rem', fontSize: '1.2rem' }}>Add a task</h2>
            <p style={{ color: '#7b8497', fontSize: '.9rem', margin: '0 0 1rem' }}>Capture it before it slips away.</p>
            <form onSubmit={onAddTaskClicked}>
              <label className="field-label" htmlFor="titleInput">Title</label>
              <input id="titleInput" className="field-input" type="text" placeholder="e.g. Plan the week" value={title} onChange={(e) => setTitle(e.target.value)} />
              <label className="field-label" htmlFor="taskInput">Description</label>
              <textarea id="taskInput" className="field-input" rows="4" placeholder="What needs to be done?" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} style={{ resize: 'vertical' }} />
              <button className="primary-button" style={{ marginTop: '1.2rem' }} type="submit">Add task</button>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}

