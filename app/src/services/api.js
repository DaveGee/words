
import config from './config'
import { log } from './logger'

const defaultHeaders = {
  'X-Parse-Application-Id': config.PARSE_APPLICATION_ID,
  'Content-Type': 'application/json'
}

const enc = obj => 
  typeof obj === 'string' ? encodeURIComponent(obj) : encodeURIComponent(JSON.stringify(obj))

const appendQuery = (path, query) => {
  path = path || ''
  if (query) {
    const q = Object.keys(query)
      .map(k => `${enc(k)}=${enc(query[k])}`)
      .join('&')

    if (q) 
      return path + '?' + q
  }
  
  return path
}

const apiCall = (method, url, { query, headers } = {}) => {
  if (!/^http/.test(url) && config.PARSE_URL) {
    url = config.PARSE_URL + url
  }

  const options = {
    method,
    headers: Object.assign({}, defaultHeaders, headers)
  }

  if (config.DEV) {
    log('API', method, url, query, options)
  }

  return fetch(appendQuery(url, query), options)
}

export const get = (url, query) =>
  apiCall('GET', url, { query })
    .then(res => res.json())