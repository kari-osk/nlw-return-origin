import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "86e387682d601a",
    pass: "5ff0ade29798ad"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <contato@feedget.com',
      to: 'Karina Osuka <karinaosuka@gmail.com',
      subject,
      html:body,
    });


  };
}