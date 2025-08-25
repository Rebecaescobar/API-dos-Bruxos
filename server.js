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
    if (bruxos) {
        res.status(200).json(bruxos)
    }else {
        res.status(404).json
        message:"Bruxo não enccontrado"
    }
})
app.get("/varinhas", (req,res) => {
    if (varinhas) {
        res.status(200).json(varinhas)
    }else {
        res.status(404).json
        message:"Varinha não enccontrado"
    }
})
app.get("/pocoes", (req,res) => {
    if (pocoes) {
        res.status(200).json(pocoes)
    }else {
        res.status(404).json
        message:"Poção não enccontrado"
    }
})
app.get("/animais", (req,res) => {
    if (animais) {
        res.status(200).json(animais)
    }else {
        res.status(404).json
        message:"Animal não enccontrado"
    }
})



app.get("/casas/:id", (req, res) => {
   const id = parseInt (req.params.id);
   const casasEncontradas = casas.find(b => b.id === id);
   if(casasEncontradas) {
    res.json ({
        success: true,
        message: `casas ${casasEncontradas.nome} encontrada!`,
        data: casasEncontradas
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
    const animaisEncontrados = animais.find(b => b.id === id);
    if(animaisEncontrados) {
     res.json ({
         success: true,
         message: `animaisEncontrados ${animaisEncontrados.nome} encontrada!`,
         data: animaisEncontrados
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
    const varinhasEncontradas = varinhas.find(b => b.id === id);
    if(varinhasEncontradas) {
     res.json ({
         success: true,
         message: `varinha ${varinhasEncontradas.nome} encontrada!`,
         data: varinhasEncontradas
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
    const pocoesEncontradas = pocoes.find(b => b.id === id);
    if(pocoesEncontradas) {
    res.status(200).json(pocoesEncontradas)
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
