import fs from 'fs';
import path from 'path';
import { decryptWithPrivateKey } from './decrypt.js';
import { encryptWithPublicKey } from './encrypt.js';

const __dirname = path.resolve();

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

const encryptedMessage = encryptWithPublicKey(publicKey, 'super secret message');

console.log(encryptedMessage.toString());

const privateKey = fs.readFileSync(__dirname + '/id_rsa_priv.pem', 'utf8');

const decryptedMessage = decryptWithPrivateKey(privateKey, encryptedMessage);

console.log(decryptedMessage.toString());
