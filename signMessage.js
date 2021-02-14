import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { encryptWithPrivateKey } from './encrypt.js';

const hash = crypto.createHash('sha256');
const __dirname = path.resolve();
const myData = {
  firstName: 'Reshma',
  lastName: 'Dahal',
  socialSecurityNumber: 'On the top of the world which is in Nepal'
};

const myDataString = JSON.stringify(myData);

hash.update(myDataString);

const hashedData = hash.digest('hex');

const senderPrivateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');

const signedMessage = encryptWithPrivateKey(senderPrivateKey, hashedData);

const packageOfDataToSend = {
  algorithm: 'sha256',
  originalData: myData,
  signedAndEncryptedData: signedMessage
};

export default packageOfDataToSend;