import ApiDataView from './ApiDataView.jsx'

function formatDate(value) {
  if (!value) {
    return '—'
  }

  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? '—' : parsed.toLocaleDateString()
}

export default function Activities() {
  const columns = [
    { key: 'type', label: 'Type' },
    { key: 'durationMinutes', label: 'Duration' },
    { key: 'distanceKm', label: 'Distance (km)' },
    { key: 'date', label: 'Date' },
  ]

  return (
    <ApiDataView
      endpoint="/api/activities"
      data-testid="-8000.app.github.dev/api/activities"
      title="Activities"
      columns={columns}
      emptyMessage="No activities recorded yet."
      renderRow={(activity) => (
        <tr key={activity._id || activity.id || activity.type}>
          <td>{activity.type}</td>
          <td>{activity.durationMinutes} min</td>
          <td>{activity.distanceKm}</td>
          <td>{formatDate(activity.date)}</td>
        </tr>
      )}
    />
  )
}
