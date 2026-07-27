import { useEffect, useMemo, useState } from 'react'

function buildApiUrl(path) {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev${path}`
  }

  return `http://localhost:8000${path}`
}

function normalizeItems(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (payload && Array.isArray(payload.items)) {
    return payload.items
  }

  if (payload && Array.isArray(payload.results)) {
    return payload.results
  }

  if (payload && Array.isArray(payload.data)) {
    return payload.data
  }

  return []
}

export function ApiDataView({ endpoint, title, columns, emptyMessage, renderRow }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadItems() {
      try {
        setLoading(true)
        const response = await fetch(buildApiUrl(endpoint))
        if (!response.ok) {
          throw new Error(`Request failed with ${response.status}`)
        }

        const payload = await response.json()
        if (!isMounted) {
          return
        }

        setItems(normalizeItems(payload))
        setError('')
      } catch (err) {
        if (!isMounted) {
          return
        }

        setError(err.message || 'Unable to load data')
        setItems([])
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadItems()
    return () => {
      isMounted = false
    }
  }, [endpoint])

  const renderedColumns = useMemo(() => columns ?? [], [columns])

  return (
    <section className="card shadow-sm border-0 p-4 h-100">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 mb-0">{title}</h2>
        <span className="badge text-bg-light">{items.length}</span>
      </div>

      {loading && <p className="text-muted mb-0">Loading…</p>}
      {error && <p className="text-danger mb-0">{error}</p>}
      {!loading && !error && items.length === 0 && <p className="text-muted mb-0">{emptyMessage}</p>}

      {!loading && !error && items.length > 0 && (
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                {renderedColumns.map((column) => (
                  <th key={column.key}>{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => renderRow(item, index))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default ApiDataView
