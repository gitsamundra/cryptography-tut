import crypto from 'crypto';

export const decryptWithPrivateKey = (privateKey, encryptedMessage) => {
  return crypto.privateDecrypt(privateKey, encryptedMessage);
}; 

export const decryptWithPublicKey = (publicKey, encryptedMessage) => {
  return crypto.publicDecrypt(publicKey, encryptedMessage);
}; 