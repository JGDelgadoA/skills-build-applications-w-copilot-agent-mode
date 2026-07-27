import ApiDataView from './ApiDataView.jsx'

export default function Workouts() {
  const columns = [
    { key: 'title', label: 'Workout' },
    { key: 'difficulty', label: 'Difficulty' },
    { key: 'durationMinutes', label: 'Duration' },
    { key: 'focus', label: 'Focus' },
  ]

  return (
    <ApiDataView
      endpoint="/api/workouts"
      data-testid="-8000.app.github.dev/api/workouts"
      title="Workouts"
      columns={columns}
      emptyMessage="No workouts configured yet."
      renderRow={(workout) => (
        <tr key={workout._id || workout.id || workout.title}>
          <td>{workout.title}</td>
          <td>{workout.difficulty}</td>
          <td>{workout.durationMinutes} min</td>
          <td>{Array.isArray(workout.focus) ? workout.focus.join(', ') : '—'}</td>
        </tr>
      )}
    />
  )
}
