export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function setCss (el, attr, val) {
  let reg = /^(width|height|top|left|right|bottom|(margin|padding)(Top|Right|Bottom|Left))$/
  if (!isNaN(val) && reg.test(attr)) el.style[attr] = val + 'px'
  el.style[attr] = val
}

export function getAttr (el, attr, val) {
  if (val) {
    el.dataset[attr] = val
  } else {
    return el.dataset[attr]
  }
}
