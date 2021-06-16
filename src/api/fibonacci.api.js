import express from 'express'
import { calculateFibonacci } from './fibonacci.js'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (_, response) => {
    response.send('Hi there!')
})

app.listen(port, () => {
    console.log(`Server up and listening at http://localhost:${port}`)
})

// const start = Date.now()
// console.log(calculateFibonacci(0))
// console.log('Hi there! After', Date.now() - start)