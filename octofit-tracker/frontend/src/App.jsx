import { NavLink, Route, BrowserRouter, Routes } from 'react-router-dom'
import appLogo from '../../../docs/octofitapp-small.png'
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
      <div className="d-flex gap-2">
        <a className="btn btn-primary" href="/dashboard">Open dashboard</a>
        <a className="btn btn-outline-secondary" href="https://vite.dev/" target="_blank" rel="noreferrer">Vite docs</a>
      </div>
    </div>
  )
}

function DashboardPage() {
  return (
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card shadow-sm border-0 h-100 p-4">
          <h2 className="h4">Today&apos;s activity</h2>
          <p className="text-muted">3 workouts logged · 12.4 km moved · 1 new team challenge.</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card shadow-sm border-0 h-100 p-4">
          <h2 className="h4">Leaderboard pulse</h2>
          <p className="text-muted">Your team is currently in second place with a 7% lead over the previous week.</p>
        </div>
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
