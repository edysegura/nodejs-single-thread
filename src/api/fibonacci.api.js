import { calculateFibonacci } from './fibonacci.js'

const start = Date.now()
console.log(calculateFibonacci(0))
console.log('Hi there! After', Date.now() - start)