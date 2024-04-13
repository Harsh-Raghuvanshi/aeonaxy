
const {Resend}=require('resend');
const resend = new Resend('re_8isDrMQN_Qdy5kCa2TEp45rL65Zo54Azj');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'harshrghvnsh@gmail.com',
    to: ['harshraghuvanshi_se21a14_25@dtu.ac.in'],
    subject: 'Hello World',
    html: '<strong>Hello this is Demo verification Mail for Aeonaxy </strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
