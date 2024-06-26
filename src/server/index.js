import https from 'https';
import fs from 'fs';
import { CommonHttp, } from 'manner.js/server';

const commonHttp = new CommonHttp({
  title: 'Glow.js',
  content: 'Glow.js document website.',
  icon: 'favicon-16x16.png',
  fonts: ['ttf'],
  develope: false,
});

https.createServer({
  key: fs.readFileSync('asset/glowjs-web-key.pem'),
  cert: fs.readFileSync('asset/glowjs-web-cert.pem'),
}, async (req, res) => {
  await commonHttp.process(req, res);
}).listen(8000);
