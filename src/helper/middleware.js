import { decryptToken } from '@/helper/crypto.js'

export function requireAuth(to, from, next) {
  const isAuthenticated = decryptToken()
  if (isAuthenticated) {
    next()
  } else {
    next({ name: 'Login' })
  }
}

export function noRequireAuth(to, from, next) {
  const isAuthenticated = decryptToken()
  if (isAuthenticated) {
    next({ name: 'Main' })
  } else {
    next()
  }
}
