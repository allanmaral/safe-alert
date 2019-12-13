# Safe Alert

![Mockup](.github/banner.jpg)

## Rodando a aplicação
Para roda o aplicativo, você deverá ter o [Node](https://nodejs.org/en/download/) e o [Expo](https://facebook.github.io/react-native/docs/getting-started) instalandos.

Para instalar o Expo, rode o comando:
```sh
npm install -g expo-cli
```
Em caso de duvidas, procure a página do [React Native](https://facebook.github.io/react-native/) ou a própia documentação do [Expo](https://docs.expo.io/versions/latest/get-started/installation/)

Após ter clonado o repositório, é necessário que se edite o arquivo [config/TotalVoice.js](src/config/TotalVoice.js):
```js
export default {
  accessToken: 'TOKEN DA TOTAL VOICE',
  phone: 'INSIRA O NUMERO + DDD',
};
```
Como o projeto ainda não possui um servidor para lidar com as requisições, no protótipo o aplicativo fica responsavel por acessar a API da TotalVoice.

Por fim, para executar o expo, rode:
```sh
yarn
expo start
```
ou
```sh
npm install
expo start
```

---
