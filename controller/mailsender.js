var nodemailer = require('nodemailer');

module.exports =  { async sendmail (req, res) {
    
    const { mensagem_body:mensagem, empresa_body:empresa, email_body:email, nome_body:nome, host_body:host } = req.body;
     const hostname = host.Name;
     const hostport = host.Port;
     const hostuser = host.User;
     const  hostpass = host.Pass;
 
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
         from: `<${hostuser}>`,
         to: `<${hostuser}>`,
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
 
     await transportador.sendMail(configuracoes, function(error, response){
         if(error){
            return  res.send(error);
         }else{
            return res.send("Email enviado!");
         }
     });
     
 }}