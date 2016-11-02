# mequiero.ir

### Prerequisites

You will need git to clone **me-quiero-ir-api** repository. You can get git from [git][git].

We also use a number of node.js tools to initialize and test me-quiero-ir-api. You must have node.js and
its package manager [npm][npm] installed.  You can get them from [node][node].

### Clone me-quiero-ir-api

Clone me-quiero-ir-api repository using using [git][git]:

```
git clone https://github.com/mequieroir/me-quiero-ir-api.git
cd me-quiero-ir-api
```


#### Install Dependencies

* We get the tools we depend upon via `npm`.

```
npm install
```

### Run

```
npm start
```

### Directory Layout

```
|-bin
|-docs
|-models
|-routes
|-package.json
|-app.js
```

### Run UnitTests

Simply open a Terminal window and run `npm run tests` to start all your [Karma][karma] unit tests.

## Continuous Integration

### Travis CI

[Travis-CI][travis] is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The angular-seed
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub. 

## Deploy

### Heroku

## Documentacion

La documentacion se encuentra aqui [link](https://github.com/mequieroir/me-quiero-ir-api/blob/master/docs/doc.md)

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
