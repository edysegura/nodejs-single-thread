import express from 'express'
import { Worker } from 'worker_threads'

import { logHashTime } from './src/libuv-threadpool.js'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (_, response) => {
    response.send('Hi there!')
})

app.get('/fibonacci/:number', (request, response) => {
    const number = request.params.number
    const worker = new Worker('./src/worker.js')
    worker.postMessage(number)
    worker.once('message', result => {
        response.send(`The ${number}x of fibonacci interaction is: ${result}`)
    })
})

app.get('/hash/:password', async (request, response) => {
    const password = request.params.password
    response.send(await logHashTime(password))
})

app.listen(port, () => {
    console.log(`Server up and listening at http://localhost:${port}`)
})
