var nodemailer = require('nodemailer');

module.exports =  { async sendmail (req, res) {
    
    const { mensagem_body:mensagem, empresa_body:empresa, email_body:email, nome_body:nome, host_body:host } = req.body;
    const hostname = host.Name;
    const hostport = host.Port;
    const hostuser = host.User;
    const  hostpass = host.Pass;
    const corpodoemail = null;

     if(!empresa){
        corpodoemail = "<p>De:  " + nome  +  ", " + email + " </p>" +
         "<br>Mensagem: " + mensagem + "</br>";
     }else{
        corpodoemail = "<p>De:  " + nome  +  ", " + email + " </p>" +
         "<br> Empresa" +  empresa + "</br>" +
         "<p>" +  mensagem + "</p>"
     }

     if(typeof mensagem == "undefined"){
         console.log("Falta mensagem")
         res.status(400).send("Algo deu errado!");
     }
 
     if(typeof email == "undefined"){
         console.log("Falta email")
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
         html:   corpodoemail
     }
 
 
     
     var transportador = nodemailer.createTransport( {
         direct: true,
         host: hostname,
         port: hostport,
         secure: false, // use SSL
         
         auth:{
             user: hostuser, 
             pass: hostpass , 
             
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