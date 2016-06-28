# Completed App

Assuming you have a version of [node](https://nodejs.org/en/) installed, [install `nvm`](https://github.com/creationix/nvm#install-script) and then close & reopen your terminal.

Install the latest stable version of node:

```sh
nvm install node
```

[Fork](https://help.github.com/articles/fork-a-repo/) this [`react-esnext`](https://github.com/benmvp/react-esnext) repo and create a local clone (be sure to replace `YOUR-USERNAME` with your own):

```sh
git clone https://github.com/YOUR-USERNAME/react-esnext.git
```

Change to [`final`](./) directory:

```sh
cd react-esnext/final
```

Install all of the dependencies:

```sh
npm install
```

Start API server (running at [http://localhost:3000/](http://localhost:3000/)):

```sh
npm run start:api
```

In a **separate console window/tab**, start the web server (in the same directory):

```sh
cd react-esnext/final
npm run start
```

Once the initial bundle is built, visit [http://localhost:8080/](http://localhost:8080/).
