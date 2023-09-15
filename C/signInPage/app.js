function signOut() {
  document.cookie = 'auth=false'
  window.location.href = '/login.html'
}