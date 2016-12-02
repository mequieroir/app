# mequiero.ir

### Prerequisites

- git
- npm
- nodejs

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

Se realizaron test utilizando [Mocha][mocha]

```
npm test
```
## Continuous Integration

### Travis CI

Se utilizo [Travis-CI][travis] para la integracion continua

## Base de datos
Se utilizo una base de datos no relacional, la cual es un servicio brindado por [Firebase][firebase] 

## Hosting App

Se puede acceder a la App en

- https://me-quiero-ir-api.firebaseapp.com/

## API

Se encuentra hosteada en la siguiente url 

- https://me-quiero-ir-api.herokuapp.com/

### Heroku

Se puede hacer un deploy en heroku mediante el comando
```
heroku deploy
```

[git]: http://git-scm.com/
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[travis]: https://travis-ci.org/
[firebase]: https://firebase.google.com/
[heroku]: https://www.heroku.com/
[Mocha]: https://mochajs.org/
