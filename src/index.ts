// define module
import ''

const connect = req => task => connect(task(req))

let main = () => {
  const origin = 10

  const task = req => req + 1

  const output = res => console.log(res)

  connect(origin)(task)(task)(task)(task)(task)(output)
}
main()
