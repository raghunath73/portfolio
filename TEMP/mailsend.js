const nodemailer = require('nodemailer');
const transpo = nodemailer.createTransport(
    {
        secure:true,
        host: 'smtp.gmail.com',
        port: 465,
        auth:
        {
            user: 'araghunathreddy73@gmail.com',
            pass: 'tfuv oikc gjfz xnkj'
        }
    }
)
function sendMail(to,sub,msg){
    transpo.sendMail({
        to:to,
        subject:sub,
        html:msg
    });
}
sendMail("araghunathreddyraghunath@gmail.com","This","This is a msg");