# saber-connect

```bash
npm install

npm start
```

```js
const connect = req => task => connect(task(req))

const origin = 0

const task = req => req + 1

const output = res => console.log(res)

// example
connect(origin)(task)(task)(task)(task)(task)(output)
```
