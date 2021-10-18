import 'axios'
import axios from 'axios'

function createInstance() {
  const csrfToken = document
    .querySelector('meta[name="csrf-token"]')
    ?.getAttribute('content')

  return axios.create({
    headers: {
      'X-CSRF-Token': csrfToken || '',
      'Content-Type': 'application/json',
    },
  })
}

export const instance = createInstance()

export default instance
