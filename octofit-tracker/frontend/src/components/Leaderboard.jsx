import ApiDataView from './ApiDataView.jsx'

export default function Leaderboard() {
  const columns = [
    { key: 'rank', label: 'Rank' },
    { key: 'score', label: 'Score' },
    { key: 'teamId', label: 'Team' },
    { key: 'userId', label: 'User' },
  ]

  return (
    <ApiDataView
      endpoint="/api/leaderboard"
      data-testid="-8000.app.github.dev/api/leaderboard"
      title="Leaderboard"
      columns={columns}
      emptyMessage="No leaderboard entries yet."
      renderRow={(entry) => (
        <tr key={entry._id || entry.id || entry.rank}>
          <td>{entry.rank}</td>
          <td>{entry.score}</td>
          <td>{entry.teamId || '—'}</td>
          <td>{entry.userId || '—'}</td>
        </tr>
      )}
    />
  )
}
