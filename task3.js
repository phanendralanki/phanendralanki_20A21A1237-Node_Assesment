// Sending an Email
const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"phanendralg12@gmail.com",
        pass:"pfifhqjffxudwndr"
    }
})

var mailOptions = {
    sender:"phanendralg12@gmail.com",
    to:"pravin.consensus@gmail.com",
    subject:"From phanendra(20A21A1237)",
    text:"Hi Sir! Assignment Was Done! We learn'ed a lot from you"
}

transporter.sendMail(mailOptions,function(err,info){
    if(err)throw err;
    console.log("Email Sent: ",info.response);
})