const generator = (length) => {
  const charRef = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * charRef.length)
    result += charRef[index]
  }

  return result
}

module.exports = generator
