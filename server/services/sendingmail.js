const { Resend } = require('resend');

function sendEmail(email) {
  try {
    console.log("The email at sending email is ",email);
    const resend = new Resend('re_8isDrMQN_Qdy5kCa2TEp45rL65Zo54Azj');
    
    (async function () {
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [`${email}`],
        subject: 'Hello World',
        html: '<strong>Hello this is Demo verification Mail for Aeonaxy </strong>',
      });

      if (error) {
        return console.error({ error });
      }

      console.log({ data });
    })();
  } catch (err) {
    console.error('Error:', err);
  }
}

module.exports = {sendEmail};
