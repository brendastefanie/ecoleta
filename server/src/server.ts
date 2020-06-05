import express from 'express';

const app = express()

app.get('/users', (req, res) => {
    console.log('Listagem de usuários')

    res.json([
        'Brenda',
        'Rosana',
        'Tuane',
        'Thaciane'
    ])
})

app.listen(8080)