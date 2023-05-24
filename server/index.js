import express from 'express'
import { db } from './database.js'
import cors from 'cors'

const app = express()
app.use(express.json()) //Para poder leer json, si no el body viene undefined
app.use(cors()) //para poder enviar y recibir cosas por axio
const PORT = 8800

app.listen(PORT, () =>{
    console.log('Backend Conectado!')
})

app.post('/register', async (req, res) => {
    try{
        const {name, surname, gender, username, email, password} = req.body

        const user = await db('USERS').first('*').where({email: email})
        if(!user){
            await db('USERS').insert({NAME: name, SURNAME: surname, GENDER: gender, USERNAME: username, EMAIL: email, HASH_PASS: password});
            res.status(200).json('Account created!');
        } else {
            res.status(401).json('Email already in use')
        }
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
})

app.post('/getPass', async (req, res) => {
    try {
        const email = req.body.email;

        const user = await db('USERS').first('*').where({email: email})
        if(user) {
            res.status(200).json({
                pass: user.HASH_PASS
            })
        } else {
            res.status(404).json('User not found!')
        }
    } catch(e) {
        console.log(e)
        res.status(400).json('Something broke!')
    }
})

app.post('/login', async (req, res) => {
    try {
        const email = req.body.email;

        const user = await db('USERS').first('*').where({email: email})
        if(user) {
            res.status(200).json({
                username: user.USERNAME,
                userId: user.USER_ID
            })
        }
    } catch(e) {
        console.log(e)
        res.status(400).json('Something broke!')
    }
})

app.get('/', (req, res) => {
    res.json('Estamos Destro')
})