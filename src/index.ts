// define module
import ''

const connect = req => task => connect(task(req))

let main = () => {
  const task = req => req + 1

  const output = res => console.log(res)

  connect(0)(task)(task)(task)(task)(task)(output)
}
main()
