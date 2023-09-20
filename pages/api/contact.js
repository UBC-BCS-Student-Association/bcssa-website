import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  const { name, email, subject, message } = req.body;

  const content = {
    to: process.env.CONTACT_FORM_EMAIL,
    from: process.env.CONTACT_FORM_EMAIL,
    subject: `New Message from ${name}: ${subject}`,
    text: message,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Subject: ${subject}</p><p>Message: ${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.error("ERROR", error);
    res.status(400).send("Message not sent.");
  }
}
