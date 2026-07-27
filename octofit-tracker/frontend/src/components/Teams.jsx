import ApiDataView from './ApiDataView.jsx'

export default function Teams() {
  const columns = [
    { key: 'name', label: 'Team' },
    { key: 'city', label: 'City' },
    { key: 'sport', label: 'Sport' },
    { key: 'members', label: 'Members' },
  ]

  return (
    <ApiDataView
      endpoint="/api/teams"
      data-testid="-8000.app.github.dev/api/teams"
      title="Teams"
      columns={columns}
      emptyMessage="No teams available yet."
      renderRow={(team) => (
        <tr key={team._id || team.id || team.name}>
          <td>{team.name}</td>
          <td>{team.city}</td>
          <td>{team.sport}</td>
          <td>{Array.isArray(team.members) ? team.members.length : 0}</td>
        </tr>
      )}
    />
  )
}
