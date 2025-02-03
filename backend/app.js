const express = require('express');

const path = require('path');

const cors = require('cors');

const morgan = require('morgan');

const bodyParser = require('body-parser');

const cron = require('node-cron');

const whatsappRouter = require('./src/routes/whatsapp.route');

const api = require('./src/routes/api');

//const helmet = require('helmet');

const { SaveContact } = require('./src/utils/saveContacts');

const { onSendConsent } = require('./src/controllers/whatsapp.controllers');
const {
  scheduleClock,
} = require('./src/controllers/whatsapp-controller/wialonNotification.controller');

//test wialon contact
const {
  getContactsWhatsapWialon,
} = require('./src/services/googlesheet.service');

const app = express();

//app.use(helmet());

app.use(morgan('combined'));

app.use(cors());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

scheduleClock();

/* async function getNumbers() {
  const numbers = await getContactsWhatsapWialon("LTTR 217 AY", "C");
  console.log(numbers);
}

getNumbers();
 */
setInterval(() => {
  SaveContact();
}, 3600000);

//schedule consent message template every morning at 5h30
cron.schedule(
  '30 6 * * *',
  async () => {
    console.log('send consent message');
    await onSendConsent();
  },
  {
    scheduled: true,
    timezone: 'Africa/Lagos',
  }
);

//const url ='https://vss.camtrack.net:36301/fileSrv/fileDown.php?filePath=QzovUHJvZ3JhbSBGaWxlcyAoeDg2KS9Wc3NTZXJ2aWNlL3N0b3JhZ2UvYmluL3g2NC8uLi8uLi8uLi9odGRvY3MvdnNzRmlsZXMvYWxhcm1SZWNvcmQvMjAyNF8wNV8xMi9WT0tTMDAxMy9jaDAzXzIwMjQwNTEyXzA4MzkyOF8wODM5NDNfMTIyLmh3&token=40a7fbeb380a435c6e7f2053f070af16'

//const downloadPath = path.resolve(`./public/assets/video/${id}.mp4`)

// Accepts POST requests at /webhook endpoint
app.use('/webhook', whatsappRouter);

app.use('/api', api);

//downloadVideo(url,downloadPath,'https://whattsapi.camtrack.net/');
app.set('etag', 'strong');

app.use(express.static(path.join(__dirname + '/public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

module.exports = app;
