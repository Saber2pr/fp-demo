# saber-connect

> fp tests.

```bash
npm test
```

```js
const sum = num => (num > 0 ? num + sum(num - 1) : num)

const sumR = sum => num => (num > 0 ? num + sum(sum)(num - 1) : num)

console.log(
  (f => f(f))(sum => num => (num > 0 ? num + sum(sum)(num - 1) : num))(3)
) // 6

console.log(
  (f => f(f))(sum => num => (num > 0 ? num + (f => f(f))(sum)(num - 1) : num))(
    3
  )
) // 6

console.log(sumR(sumR)(3))
```
