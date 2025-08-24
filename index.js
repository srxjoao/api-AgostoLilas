const express = require('express');
const app = express();


app.use(express.json());

let centrosApoio = [
    {
        "nome": "Casa da Mulher Brasileira",
        "cidade": "Campo Grande",
        "telefone": "(67) 3314-4000",
        "horario": "08h às 18h"
    },
    {
        "nome": "Centro de Apoio à Mulher",
        "cidade": "São Paulo",
        "telefone": "(11) 1234-5678",
        "horario": "09h às 17h"
    },
    {
        "nome": "Casa de Acolhimento",
        "cidade": "Rio de Janeiro",
        "telefone": "(21) 9876-5432",
        "horario": "10h às 16h"
    }
];


app.post('/cadastro/centro', (req, res) => {
    const { nome, cidade, telefone, horario } = req.body;
    const novoCentro = { nome, cidade, telefone, horario };
    centrosApoio.push(novoCentro);
    res.status(200).json(novoCentro);
})

app.get('/centros', (req, res) => {
    res.json(centrosApoio)
})

app.listen(3000, (err) => {
    console.log("Aplicação rodando na porta 3000...")
});