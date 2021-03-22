const express=require('express');
const app=express();
const path = require('path');

let port=5000;

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/login.html', (req,res)=>{
    res.sendFile(path.join(__dirname + '/login.html'));
});
app.get('/user/:u/nome:n', (req,res)=>{
    res.send("Você acessou informações do usuário "+req.params.u+" de nome "+req.params.n);
});
app.get('/json', (req,res)=>{
    res.status(200).json({usuario: "Raphael", id: 12020030});
});
app.get('/ab[0-9]cd', (req,res)=>{
    res.send("Essa é uma expressão regular.");
});
app.post('/post/teste_post', (req,res)=>{
    res.send("Você acessou uma página via método POST.");
});
app.get('*', (req,res)=>{
    res.send("Link inválido: 404");
});
app.listen(port,()=> console.log(`Escutando na porta ${port}`));