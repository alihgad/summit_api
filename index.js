import express from 'express'
import cors from 'cors'
import db from './db/connectiondb.js'
const app = express()
const port = 3000

app.use(cors()) // Enables CORS for all routes


app.use(express.json())

app.get('/customers', async (req, res, next) => {
    let customer = await db.collection('customers').find().toArray()
    return res.json(customer)
})

app.get('/transactions', async (req, res, next) => {
    let transactions = await db.collection('transactions').find().toArray()
    return res.json(transactions)
})




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))