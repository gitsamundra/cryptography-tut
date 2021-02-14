import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { decryptWithPublicKey } from './decrypt.js';
import packageOfDataToSend from './signMessage.js';

const receivedData = packageOfDataToSend;
const __dirname = path.resolve();

const hash = crypto.createHash(receivedData.algorithm);

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

const decryptedMessage = decryptWithPublicKey(publicKey, receivedData.signedAndEncryptedData);

const decryptedMessageHex = decryptedMessage.toString();

const hashOfOriginal = hash.update(JSON.stringify(receivedData.originalData));
const hashOfOriginalHex = hash.digest('hex');

if(hashOfOriginalHex  === decryptedMessageHex) {
  console.log('Seccess! The data has not been tempered with and the sender is valid.');
} else {
  console.log('Uh oh... Someone is trying to manipulate the data or someone else is ...');
};