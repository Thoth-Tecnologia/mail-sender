var nodemailer = require('nodemailer');

var configuracoes = {
    from: 'Joao Leonello <jfelipe.pl@gmail.com>',
    to: 'Joao Leonello<jfelipe.pl@gmail.com>',
    subject:  'teste',
    text: 'texto teste',
    html: '<h1>seila</h1>'
}

var transportador = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth:{
        user:'jfelipe.pl@gmail.com',
        pass: 'soufoda271099',
    },
    tls: {
        rejectUnauthorized: false
    }
});

console.log('cheguei')

transportador.sendMail(configuracoes, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log('Email enviado ' + response.message);
        
    }
});