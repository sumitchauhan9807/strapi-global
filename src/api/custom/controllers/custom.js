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
    const captcha_secret = '6LcznZkqAAAAAPHFbBBgEwBqlMCsEOkPw_leyAlb'
    try {
      const axios = require('axios')
      console.log(ctx.request,"reqq")
      console.log(ctx.request.body,"ctxx")
      validateSendMail(ctx.request.body)
      let requestBody = ctx.request.body
      let { data } = await axios({
        url: "https://www.google.com/recaptcha/api/siteverify",
        method: "POST",
        params: {
          secret: captcha_secret, // it should be dynamic
          response: requestBody.recaptcha,
        },
      });
      console.log(captcha_secret,"captcha_secret")
      console.log(data,"from recaptchs")
      if (!data.success) throw Error("Captcha Validation Failed");
      let result = await SendMail(requestBody)
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
  if(!body.phonenumber) throw Error('phonenumber is required')
  if(!body.phoneFix) throw Error('phoneFix is required')
  if(!body.company) throw Error('company is required')
  if(!body.purpose) throw Error('Purpose is required')
  if(!body.message) throw Error('Message is required')
  return true
}

const SendMail = async (data) => {
  // const ADMIN_MAIL = 'sumitchauhan9807666@gmail.com'
  const ADMIN_MAIL = 'info@global-world.us'
  
const createTransport = require("nodemailer").createTransport;
  let host = "lx3.hoststar.hosting" 
  let user = "info@global-world.us"
  let password = 'Admin2425@@!!**..'

  console.log(host)
  console.log(user)
  console.log(password)


  return new Promise((resolve, reject) => {
    
    let transporter = createTransport({
      host: host,
      port: 587,
      secure: false,
      // secureConnection: true,
      auth: {
        // admin@flirttool.com
        user: user,
        pass: password,
      },
    });

    let HTML = `
      New query mail received from <b>${data.firstName}</b> <b>${data.lastName}</b> <br/>
      Company : ${data.company} <br/>
      Email : ${data.email} <br/>
      Phonenumber : ${data.phonenumber} <br/>
      phoneFix : ${data.phoneFix} <br/>
      Purpose : ${data.purpose} <br/>
      Message : ${data.message} <br/>

    `;

    // mailto:kawa@bahoz.de
    // lx3.hoststar.hosting
    //H1ftqjlWnt-dkrUTga
    transporter
      .sendMail({
        from: `${data.firstName} ${data.lastName}`,
        to: ADMIN_MAIL,
        subject: "Global World Contact Form",
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