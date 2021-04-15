const nodemailer = require('nodemailer');


const CONSTANTS = require('../constants');

const env = process.env.NODE_ENV || 'development';

const mailSender = async(data) => {

  const testEmailAccount = async() => {
    const testAccount = await nodemailer.createTestAccount();
    console.log({ nodemailerTestAccount: testAccount });
    const { user, pass, smtp:{ host, port, secure } } = testAccount;
    return { host, port, secure, auth:{ user, pass } };
  };

  const account = env === 'development'
    ?
    await testEmailAccount()
    :
    CONSTANTS.SERVICE_EMAIL_ACCOUNT;

  const transporter = nodemailer.createTransport(account);

  const { to, subject, text, html } = data;
  const message = {
    from: account.auth.user,
    to,
    subject,
    text,
    html,
  };

  const result = await transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err.message);
      return process.exit(1);
    }

    env === 'development' ? console.log({ message: nodemailer.getTestMessageUrl(info) }) : null;
    transporter.close();
  });

  return result;
};

module.exports = mailSender;
