import { parentPort } from 'worker_threads'
import { calculateFibonacci } from './fibonacci.js'

parentPort.on('message', data => {
  const result = calculateFibonacci(data)
  parentPort.postMessage(result)
})

console.log('Worker instantiated!')