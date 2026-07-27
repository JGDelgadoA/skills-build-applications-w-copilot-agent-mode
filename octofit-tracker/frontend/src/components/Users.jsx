import ApiDataView from './ApiDataView.jsx'

export default function Users() {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'teamId', label: 'Team' },
  ]

  return (
    <ApiDataView
      endpoint="/api/users"
      data-testid="-8000.app.github.dev/api/users"
      title="Users"
      columns={columns}
      emptyMessage="No users available yet."
      renderRow={(user) => (
        <tr key={user._id || user.id || user.email}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>{user.teamId || '—'}</td>
        </tr>
      )}
    />
  )
}
