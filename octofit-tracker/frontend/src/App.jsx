import { NavLink, Route, BrowserRouter, Routes } from 'react-router-dom'
import appLogo from '../../../docs/octofitapp-small.png'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

function HomePage() {
  return (
    <div className="card shadow-sm border-0 p-4">
      <div className="d-flex align-items-center gap-3 mb-3">
        <img src={appLogo} alt="OctoFit Tracker logo" className="app-logo" />
        <div>
          <h1 className="h2 mb-1">OctoFit Tracker</h1>
          <p className="text-muted mb-0">A modern multi-tier fitness experience for teams and individuals.</p>
        </div>
      </div>
      <p className="mb-3">
        Track workouts, compare team milestones, and discover personalized recommendations from one cohesive dashboard.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <a className="btn btn-primary" href="/dashboard">Open dashboard</a>
        <a className="btn btn-outline-secondary" href="https://vite.dev/" target="_blank" rel="noreferrer">Vite docs</a>
      </div>
      <div className="alert alert-info mt-4 mb-0">
        Set <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> to target the Codespaces API URL.
      </div>
    </div>
  )
}

function DashboardPage() {
  return (
    <div className="row g-4">
      <div className="col-12 col-xl-6">
        <Activities />
      </div>
      <div className="col-12 col-xl-6">
        <Leaderboard />
      </div>
      <div className="col-12 col-xl-6">
        <Teams />
      </div>
      <div className="col-12 col-xl-6">
        <Users />
      </div>
      <div className="col-12">
        <Workouts />
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
          <div className="container-fluid">
            <span className="navbar-brand fw-semibold">OctoFit Tracker</span>
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
            </div>
          </div>
        </nav>
        <main className="container py-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
