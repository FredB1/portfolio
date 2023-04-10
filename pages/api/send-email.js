import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name, email, message } = req.body;

  console.log('name:', name);
  console.log('email:', email);
  console.log('message:', message);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'fburke77@gmail.com', // your email
      pass: '***' // your email password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender address
      to: 'recipient-email@example.com', // list of receivers
      subject: 'New message from website', // Subject line
      text: message, // plain text body
      html: `<p>${message}</p>` // html body
    });

    console.log('Message sent: %s', info.messageId);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.log('Error sending email:', error.message);
    res.status(500).json({ error: 'Error sending email' });
  }
}
