import originJSONP from 'jsonp'

export default function (url, data, opts) {
  url += (url.includes('?') ? '&' : '?') + params(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, opts, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function params (data) {
  let url = ''
  for (const key in data) {
    let val = data[key] !== undefined ? data[key] : ''
    url += `&${key}=${encodeURIComponent(val)}`
  }
  return url ? url.substring(1) : ''
}
