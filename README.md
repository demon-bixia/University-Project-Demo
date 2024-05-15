## Run in development mode

These are the steps you need to take to run this project in development mode.

### 1. Generate a Self-Signed Root Certificate

Create the directories you will save the the certificates in:
```bash
  $ mkdir ./client/certificates/ && mkdir ./client/certificates/server && mkdir ./client/certificates/root && cd ./client/certificates.
```


Generate an rsa private key for the root certificate:
```bash
$ openssl genrsa -out root/key.pem 2048
```


Generate the self-signed root certificate using the private key:
```bash
$ openssl req -x509 -new -nodes -key root/key.pem -sha256 -days 365 -out root/crt.pem
```

### 2. Create a Server Certificate

Generate a private key for the server:
```bash
$ openssl genrsa -out server/key.pem 2048
```

Generate a certificate signing request (CSR) using the server’s private key:
```bash
$ openssl req -new -key server/key.pem -out server/csr.pem
```

Sign the CSR with the root certificate to create the server certificate:
```bash
$ openssl x509 -req -in server/csr.pem -CA root/crt.pem -CAkey root/key.pem -CAcreateserial -out server/crt.pem -days 365 -sha256
```

### Run the development server

Enter the project folder and run:
```bash
$ cd .. && sudo docker compose up
```

visit https://localhost:5173, your browser will show a warning just ignore it a select proceed from advanced options.


### Notes:

- The thesis should be about a model for end to end encryption on the web.


### server

- [x] login - alice or bob
- [x] upload my keys
- [x] request some keys
- [x] exchange messages with sockets.
- [x] cors


### client

- [x] add login screen.
- [x] add messaging screen.
- [x] add verification modal.
- [x] add session screen.
- [x] add state and globalStore.
- [x] add login logic.
- [x] add socket communication.
- [x] send and receive messages
- [x] make responsive.


### library

- [] implement X3DH.
- [] implement AES message encryption.
- [] implement EcDSA signing.
- [] implement identity verification.
- [] implement secure key store.

### client storage

- [] add client storage.


### session sync

- [] implement Sync.

