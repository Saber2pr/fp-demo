/*
 * @Author: saber2pr
 * @Date: 2019-02-11 18:23:53
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-02-11 18:42:34
 */
export const connect = <R>(stream: R) => (pipe: (stream: R) => R) =>
  connect(pipe(stream))
