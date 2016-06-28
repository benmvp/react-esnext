# Step 0 - Start

## Setup

Assuming you have a version of [node](https://nodejs.org/en/) installed, [install `nvm`](https://github.com/creationix/nvm#install-script) and then close & reopen your terminal.

Install the latest stable version of node:

```sh
nvm install node
```

[Fork](https://help.github.com/articles/fork-a-repo/) this [`react-esnext`](https://github.com/benmvp/react-esnext) repo and create a local clone (be sure to replace `YOUR-USERNAME` with your own):

```sh
git clone https://github.com/YOUR-USERNAME/react-esnext.git
```

Copy the [`00-start`](./) directory, name it `dev`, and change to it:

```sh
cd react-esnext
cp -r 00-start dev
cd dev
```

Install the initial dependencies for the comments API server (in the `dev` directory):

```sh
npm install
```

Start the API server:

```sh
npm run start:api
```

In a **separate console window/tab**, start the simple web server (in the same directory):

```sh
cd react-esnext/dev
npm run start
```

## Tasks

- Visit [http://localhost:8080/](http://localhost:8080/) and you should see the Comments app from the [official React tutorial](https://facebook.github.io/react/docs/tutorial.html) running

## Next

Coming soon...

## Resources

- [Official React tutorial](https://facebook.github.io/react/docs/tutorial.html)
- [Fork A Repo on Github](https://help.github.com/articles/fork-a-repo/)
- [`git-clone`](https://git-scm.com/docs/git-clone)
