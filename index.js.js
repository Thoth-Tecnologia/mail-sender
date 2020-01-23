var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

// const SMTPServer = require("smtp-server").SMTPServer;
// const server = new SMTPServer({
//     secure: true,
//     onAuth: true,
// });
// server.listen(587);


console.log('ligado');
app.use(express.json());

app.post('/mail', (req, res) => {
    
   const { mensagem_body:mensagem, empresa_body:empresa, email_body:email, nome_body:nome, host_body:host } = req.body;
    const hostname = host.Name;
    const hostport = host.Port;
    const hostuser = host.User;
    const  hostpass = host.Pass;
 
    console.log(hostname);
    console.log(hostport);
    console.log(hostuser);
    console.log(hostpass);

    if(typeof mensagem == "undefined"){
        console.log("Falta mensagem")
        res.status(400).send("Algo deu errado!");
    }

    if(typeof email == "undefined"){
        console.log("Falta email")
        res.status(400).send("Algo deu errado!");
    }

    if(typeof empresa == "undefined"){
        console.log("Falta empresa")
        res.status(400).send("Algo deu errado!");
    }

    if(typeof nome == "undefined"){
        console.log("Falta nome")
        res.status(400).send("Algo deu errado!");
    }

    var configuracoes = {
        from: '<contato@mythoth.com.br>',
        to: '<contato@mythoth.com.br>',
        subject:  'Mensagem recebida',
        html:   
                
                "<p>De:  " + nome  +  ", " + email + " </p>" +
                "<br>Mensagem: " + mensagem + "</br>"
               
    }


    
    var transportador = nodemailer.createTransport( {
        direct: true,
        host: hostname,
        port: hostport,
        secure: false, // use SSL
        
        auth:{
            user: hostuser, //Your email goes  here
            pass: hostpass , // Your password  goes  here
            
        },
        tls:{
            rejectUnauthorized: false,
            secureProtocol: "TLSv1_method"
        }
    });

    transportador.sendMail(configuracoes, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log('Email enviado!');
        }
    });

    return res.send("Email enviado!");
    
});

app.listen(9999);
