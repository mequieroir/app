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
"test": "karma start ./test/karma.conf.js --reporters progress,junit,coverage"
## Continuous Integration

### Travis CI

[Travis-CI][travis] is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The angular-seed
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub. 

## Deploy
Se encuentra en la siguiente url (https://me-quiero-ir-api.herokuapp.com/)[https://me-quiero-ir-api.herokuapp.com/]

### Heroku

Se puede hacer un deploy en heroku mediante el comando
```
heroku deploy
```
## Base de datos
Se utilizo una base de datos no relacional, la cual es un servicio brindado por [Firebase][firebase] 


## Documentacion

La documentacion se encuentra aqui [link](https://github.com/mequieroir/me-quiero-ir-api/blob/master/docs/doc.md)

[git]: http://git-scm.com/
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[travis]: https://travis-ci.org/
[firebase]: https://firebase.google.com/
[heroku]: https://www.heroku.com
