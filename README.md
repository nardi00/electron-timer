# electron-timer

Timer widget construído em Javascript com Electron.

<img src="timer1.png" alt="timer">
<img src="timer2.png" alt="timer widget">

## Como rodar o projeto

Para rodar o projeto é necessário remover o node_modules e reinstalar o electron com uma dependência dev. Caso queira criar uma distribuição é só usar o electron-forge.

```sh
rm -rf node_modules && npm i
npm install electron --save-dev
npm start
```

## Como criar um instalável

```sh
npm install --save-dev @electron-forge/cli
npx electron-forge import
npm run make
```
