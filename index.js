console.log('Ben in the house!')
function ben() {
  throw new Error('Ben putting out fires!')
  setImmediate(ben)
}
