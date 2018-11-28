# React + ES.next = ♥

[![Greenkeeper badge](https://badges.greenkeeper.io/benmvp/react-esnext.svg)](https://greenkeeper.io/)

A step-by-step example of how to leverage ES6+/ES2015+ in React by rewriting (an adapted version of) the [official React tutorial](https://facebook.github.io/react/docs/tutorial.html).

## To run completed app

Assuming you have a version of [node](https://nodejs.org/en/) installed, [install `nvm`](https://github.com/creationix/nvm#install-script) and then close & reopen your terminal.

Install the latest stable version of node:

```sh
nvm install node
```

[Fork](https://help.github.com/articles/fork-a-repo/) this [`react-esnext`](https://github.com/benmvp/react-esnext) repo and create a local clone (be sure to replace `YOUR-USERNAME` with your own):

```sh
git clone https://github.com/YOUR-USERNAME/react-esnext.git
```

Change to [`final`](final/) directory:

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

## Exercises

Each step in the workshop builds on top of the previous one. You can begin at the [Start](00-start/). Afterwards follow these steps:

0. [Modules](01-modules/)
0. [Classes](02-classes/)
0. [Block scoping](03-block-scoping/)
0. [Destructuring](04-destructuring/)
0. [Arrow functions](05-arrow-functions/)
0. [Enhanced object literals](06-enhanced-object-literals/)
0. [Spread operator](07-spread-operator/)
0. [Promises](08-promises/)
0. [Async functions](09-async/)
