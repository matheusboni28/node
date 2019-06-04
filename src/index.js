const express = require('express');
const app = express();
app.use(express.json());


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

app.get('/teste/:nome', (req, res) => {
    const { nome } = req.params;
    const retorno = `Olá ${nome}`;
    res.type('json').send({
        retorno
    });
});

app.post('/teste', (req, res) => {
    const { body } = req;
    const mensagem = 'Body corrompido';
    if (body.nome) {
        res.status(201).send({
            body
        });
    } else {
        res.status(400).send({
            mensagem
        });
    }

});