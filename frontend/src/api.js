export const api = {
  baseURL: import.meta.env.VITE_API_URL,
  post(path, data) {
    return fetch(`${this.baseURL}${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}