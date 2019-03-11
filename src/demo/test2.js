const obj = {
  a0: 'a0',
  a1: {
    b0: 'b0',
    b1: {
      c0: 'c0'
    },
    b2: {
      c1: 'c1',
      c2: {
        d0: 'd0',
        d1: {
          e0: 'e0'
        }
      }
    }
  }
}

const search = obj =>
  Object.keys(obj).forEach(key =>
    typeof obj[key] === 'object' ? search(obj[key]) : console.log(obj[key])
  )

const searchR = search => obj =>
  Object.keys(obj).forEach(key =>
    typeof obj[key] === 'object' ?
    search(search)(obj[key]) :
    console.log(obj[key])
  )

;
(f => f(f))(search => obj =>
  Object.keys(obj).forEach(key =>
    typeof obj[key] === 'object' ?
    (f => f(f))(search)(obj[key]) :
    console.log(obj[key])
  )
)(obj)