import express from 'express'
import { db } from './database.js'
import cors from 'cors'

const app = express()
const PORT = 8800

app.listen(PORT, () =>{
    console.log('Backend Conectado!')
})

app.get('/', (req, res) => {
    res.json('Estamos Destro')
})