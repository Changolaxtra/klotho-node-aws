// Import the express in typescript file
import express from 'express';
import { generateWifiQRCode } from 'wifi-qr-code-generator';
import { qrWifiRequest } from './dto/requests';
import { save } from './service/data';

// Initialize the express engine
const app: express.Application = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Take a port 3000 for running server.
const port: number = 3000;

/* @klotho::expose {
 *  id = "qr-wifi-api"
 *  target = "public"
 *  description = "Exposes the QR Wifi API to the internet"
 * }
 */
app.listen(port, () => {
	console.log(`TypeScript with Express
		http://localhost:${port}/`);
});


// Handling '/' Request
app.get('/', (_req, _res) => {
	_res.send("TypeScript With Express");
});


app.post('/qrWifi', (_req, _res) => {
	const request:qrWifiRequest = _req.body;

	const pr = generateWifiQRCode({
  	ssid: request.ssid,
  	password: request.password,
  	encryption: 'WPA',
  	hiddenSSID: false,
  	outputFormat: { type: 'image/png' }
	})

	pr.then((data) => {
		save(request);
		_res.send(data);
	})
	
});


