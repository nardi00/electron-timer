# electron-timer

Timer widget construído em Javascript com Electron.

![timer widget](https://github.com/nardi00/electron-timer/blob/main/README-IMAGE/timer2.png)
![timer](https://github.com/nardi00/electron-timer/blob/main/README-IMAGE/timer1.png)

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
