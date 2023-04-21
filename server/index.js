import express from 'express'
import { db } from './database.js'
import cors from 'cors'
import bcrypt from 'bcryptjs'

const app = express()
app.use(express.json()) //Para poder leer json, si no el body viene undefined
app.use(cors()) //para poder enviar y recibir cosas por axio
const PORT = 8800

app.listen(PORT, () =>{
    console.log('Backend Conectado!')
})

app.post('/register', async (req, res) => {
    try{
        const {username, email, password} = req.body

        //const hash = await bcrypt.hash(password, 10);
        await db('USERS').insert({USERNAME: username, EMAIL: email, HASH_PASS: password});

        res.status(200).json('Todo correcto!');
    } catch(err){
        console.log(err);
        res.status(400).json(err);
    }
})

app.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            res.status(400).json(`Missing ${!email ? "email" : 'password'}!`)
        }

        const user = await db('USERS').first('*').where({email: email})

        if(user) {
            const validPass = await bcrypt.compare(password, user.HASH_PASS)
            if(validPass) {
                res.status(200).json({
                    userID: user.USER_ID,
                    email: user.EMAIL,
                    username: user.USERNAME
                })
            } else {
                res.status(400).json('Wrong password!')
            }
        } else {
            res.status(404).json('User not found!')
        }

    } catch(e) {
        // console.log(e); // Uncomment if needed for debug
        res.status(400).json('Something broke!')
    }
})

app.get('/', (req, res) => {
    res.json('Estamos Destro')
})