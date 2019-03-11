/*
 * @Author: saber2pr
 * @Date: 2019-02-11 18:23:53
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-03-12 00:32:17
 */
const connect = s => p =>
  connect(p(s))

const origin = 10

const task = req => req + 1

const output = res => {
  console.log(res)
  return res
}

connect(origin)(task)(task)(task)(task)(task)(output)