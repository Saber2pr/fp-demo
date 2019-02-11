import { connect } from '../core/saber-connect'

export function test_saber_connect() {
  let main = () => {
    const origin: number = 10

    const task = (req: number): number => req + 1

    const output = (res: number) => {
      console.log(res)
      return res
    }

    connect(origin)(task)(task)(task)(task)(task)(output)
  }
  main()
}
