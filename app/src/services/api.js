
import config from './config'

const defaultHeaders = {
  'X-Parse-Application-Id': config.PARSE_APPLICATION_ID,
  'Content-Type': 'application/json'
}

const appendQuery = (path, query) => {
  path = path || ''
  if (query) {
    const q = Object.keys(query)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(query[k])}`)
      .join('&')

    if (q) 
      return path + '?' + q
  }
  
  return path
}

const apiCall = (method, url, { headers } = {}) => {
  if (!/^http/.test(url)) {
    url = config.PARSE_URL + url
  }

  const options = {
    method,
    headers: Object.assign({}, defaultHeaders, headers)
  }

  return fetch(url, options)
}

export const get = (url, query) =>
  apiCall('GET', appendQuery(url, query))
    .then(res => res.json())