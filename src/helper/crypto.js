import CryptoJS from 'crypto-js'

const encryptToken = (token, user_id, permissions, roles, detail) => {
  const encryptedToken = CryptoJS.AES.encrypt(token, 'Teknovatus-HiveCloud').toString()
  const encrypedId = CryptoJS.AES.encrypt(user_id, 'Teknovatus-HiveCloud').toString()

  const encryptedPermissions = CryptoJS.AES.encrypt(
    JSON.stringify(permissions),
    'Teknovatus-HiveCloud'
  ).toString()
  const encryptedRoles = CryptoJS.AES.encrypt(
    JSON.stringify(roles),
    'Teknovatus-HiveCloud'
  ).toString()
  const encryptedDetail = CryptoJS.AES.encrypt(
    JSON.stringify(detail),
    'Teknovatus-HiveCloud'
  ).toString()

  localStorage.setItem('token', encryptedToken)
  localStorage.setItem('_id', encrypedId)
  localStorage.setItem('permissions', encryptedPermissions)
  localStorage.setItem('roles', encryptedRoles)
  localStorage.setItem('detail', encryptedDetail)
}

const decryptToken = () => {
  const encryptedToken = localStorage.getItem('token')
  const encrypedId = localStorage.getItem('_id')
  const encryptedPermissions = localStorage.getItem('permissions')
  const encryptedRoles = localStorage.getItem('roles')
  const encryptedDetail = localStorage.getItem('detail')

  if (encryptedToken) {
    const decryptedToken = []
    const bytes1 = CryptoJS.AES.decrypt(encryptedToken, 'Teknovatus-HiveCloud')
    decryptedToken.push(bytes1.toString(CryptoJS.enc.Utf8))

    if (encrypedId) {
      const bytes2 = CryptoJS.AES.decrypt(encrypedId, 'Teknovatus-HiveCloud')
      decryptedToken.push(bytes2.toString(CryptoJS.enc.Utf8))
    } else {
      decryptedToken.push(null)
    }

    if (encryptedPermissions) {
      const bytes3 = CryptoJS.AES.decrypt(encryptedPermissions, 'Teknovatus-HiveCloud')
      decryptedToken.push(bytes3.toString(CryptoJS.enc.Utf8))
    } else {
      decryptedToken.push(null)
    }

    if (encryptedRoles) {
      const bytes4 = CryptoJS.AES.decrypt(encryptedRoles, 'Teknovatus-HiveCloud')
      decryptedToken.push(bytes4.toString(CryptoJS.enc.Utf8))
    } else {
      decryptedToken.push(null)
    }

    if (encryptedDetail) {
      const bytes4 = CryptoJS.AES.decrypt(encryptedDetail, 'Teknovatus-HiveCloud')
      decryptedToken.push(bytes4.toString(CryptoJS.enc.Utf8))
    } else {
      decryptedToken.push(null)
    }

    

    return decryptedToken
  }
  return null
}

const revokeToken = () => {
  localStorage.clear()
}

export { encryptToken, decryptToken, revokeToken }
