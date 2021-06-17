import express from 'express'
import { calculateFibonacci } from './src/fibonacci.js'
import { logHashTime } from './src/libuv-threadpool.js'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (_, response) => {
    response.send('Hi there!')
})

app.get('/fibonacci/:number', (request, response) => {
    const number = request.params.number
    response.send(`The ${number}x of fibonacci interaction is: ${calculateFibonacci(number)}`)
})

app.get('/hash/:password', async (request, response) => {
    const password = request.params.password
    response.send(await logHashTime(password))
})

app.listen(port, () => {
    console.log(`Server up and listening at http://localhost:${port}`)
})
