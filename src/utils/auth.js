const TokenKey = 'Token'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}

export function getSession(key) {
  return sessionStorage.getItem(key)
}

export function setSession(key, value) {
  return sessionStorage.setItem(key, value)
}

export function removeSession() {
  return sessionStorage.clear()
}

