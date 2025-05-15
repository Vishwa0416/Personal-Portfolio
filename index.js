const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const mailjet = require('node-mailjet');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mj = mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

app.post('/send-email', async (req, res) => {
  const { from_name, user_email, message } = req.body;

  try {
    const request = await mj.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: "araliyawijesakare@gmail.com",
            Name: from_name,
          },
          To: [
            {
              Email: "your_receiver@mail.com",
              Name: "Receiver Name",
            },
          ],
          Subject: "New message from your website",
          TextPart: message,
          HTMLPart: `<h3>Email from ${user_email}</h3><p>${message}</p>`,
        },
      ],
    });

    res.status(200).send({ success: true });
  } catch (err) {
    console.error(err.statusCode, err.response?.res?.statusMessage);
    res.status(500).send({ error: 'Email failed to send' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
