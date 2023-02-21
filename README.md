# klotho-node-aws
Klotho Express AWS Project

Node v18

```
npm install

npm start
curl http://localhost:3000/


POST http://localhost:3000/qrWifi

{
    "ssid":"myWifi",
    "password": "pass"
}

```


## Linux / WSL2 Binary Download (curl)

```
curl -fsSL "http://srv.klo.dev/update/latest/linux/x86_64?stream=pro:latest" -o klotho
chmod +x klotho
```

## Mac

###### Package Manager
```
brew install klothoplatform/tap/klotho
```

###### Binary Download (curl)
```
curl -fsSL "http://srv.klo.dev/update/latest/darwin/$(uname -m)?stream=pro:latest" -o klotho
chmod +x klotho
```

## Run Klotho

```
klotho --login <email>
klotho . --app qr-gen-api --provider aws

```