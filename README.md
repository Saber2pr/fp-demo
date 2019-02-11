# saber-connect

> a connect func.

```bash
npm install

npm start

npm test
```

```js
const origin = 0

const task = req => req + 1

const output = res => console.log(res)

// example
connect(origin)(task)(task)(task)(task)(task)(output)
```
