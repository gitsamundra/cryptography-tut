import crypto from 'crypto';

export const encryptWithPublicKey = (publicKey, message) => {
  const bufferMessage = Buffer.from(message, 'utf8');
  return crypto.publicEncrypt(publicKey, bufferMessage);
};

export const encryptWithPrivateKey = (privateKey, message) => {
  const bufferMessage = Buffer.from(message, 'utf8');

  return crypto.privateEncrypt(privateKey, bufferMessage);
};