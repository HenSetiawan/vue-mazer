const roles = [
  { name: 'superadmin', permissions: ['superadmin'] },
  { name: 'admin', permissions: ['admin'] },
  {
    name: 'master',
    permissions: ['master-view', 'master-create', 'master-update', 'master-delete']
  },
  {
    name: 'business',
    permissions: ['business-view', 'business-create', 'business-update', 'business-delete']
  },
  {
    name: 'operation',
    permissions: ['operation-view', 'operation-create', 'operation-update', 'operation-delete']
  },
  {
    name: 'finance',
    permissions: ['finance-view', 'finance-create', 'finance-update', 'finance-delete']
  }
]

const getRoles = (id, user) => {
  if (id < 1 || id > roles.length) {
    return false
  }

  const selectedRole = roles[id - 1]
  return [
    {
      user_id: user,
      options: selectedRole.permissions
    }
  ]
}

export { getRoles }
