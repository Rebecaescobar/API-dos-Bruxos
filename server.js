import express from "express";

//Adicionei essa lnha paraa importar dados
import dados from "./src/data/dados.js"


//Puxei a varável de dentro de dados
const {bruxos,casas,varinhas,animais,pocoes} = dados;
const app = express();
const portServer = 3000;


//Rota principal GET para "/"
app.get("/", (req,res) => {
    res.send("Vamos de Harry Potter");
});


//Criei a rota usando ela 

app.get("/bruxos", (req,res) => {
    res.status(200).json(bruxos);
})

app.get("/casas",(req,res) => {
    res.status(200).json(casas);
})

app.get("/varinhas", (req,res) =>{
    res.status(200).json(varinhas);
})

app.get("/animais", (req,res) => {
    res.status(200).json(animais);
})

app.get("/pocoes", (req,res) => {
    res.status(200).json(pocoes);
})

app.get("/casas/:id", (req, res) => {
   const id = parseInt (req.params.id);
   const casas = casas.find(b => b.id === id);
   if(casas) {
    res.json ({
        success: true,
        message: `casas ${casas.nome} encontrada!`,
        data: casas
    });
}else {
    res.status(404).json ({
        sucess: false,
        error: "casa não encontrada",
        message: `Nenhuma casa com ID ${id} foi encontrada`,
        codigo: "WIZARD_OT_FOUND"

    });
}
});


app.get("/animais/:id", (req, res) => {
    const id = parseInt (req.params.id);
    const animais = animais.find(b => b.id === id);
    if(animais) {
     res.json ({
         success: true,
         message: `animais ${animais.nome} encontrada!`,
         data: animais
     });
 }else {
     res.status(404).json ({
         sucess: false,
         error: "animal não encontrada",
         message: `Nenhum animal com ID ${id} foi encontrada`,
         codigo: "WIZARD_OT_FOUND"
 
     });
 }
 });

 app.get("/varinhas/:id", (req, res) => {
    const id = parseInt (req.params.id);
    const varinhas = varinhas.find(b => b.id === id);
    if(varinhas) {
     res.json ({
         success: true,
         message: `varinha ${varinhas.nome} encontrada!`,
         data: varinhas
     });
 }else {
     res.status(404).json ({
         sucess: false,
         error: "varinha não encontrada",
         message: `Nenhuma varinha  com ID ${id} foi encontrada`,
         codigo: "WIZARD_OT_FOUND"
 
     });
 }
 });


app.get("/pocoes/:id", (req, res) => {
    const id = parseInt (req.params.id);
    const pocoes = pocoes.find(b => b.id === id);
    if(pocoes) {
     res.json ({
         success: true,
         message: `poção ${pocoes.nome} encontrada!`,
         data: pocoes
     });
 }else {
     res.status(404).json ({
         sucess: false,
         error: "poção não encontrada",
         message: `Nenhuma poção com ID ${id} foi encontrada`,
         codigo: "WIZARD_OT_FOUND"
 
     });
 }
 });


app.listen(portServer, () => {
    console.log("🧙‍♂️ API dos Bruxos está no ar na porta 3000 !");
}); 
