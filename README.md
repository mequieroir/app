# mequiero.ir

### Prerequisites

You will need git to clone **me-quiero-ir-api** repository. You can get git from [git].

We also use a number of node.js tools to initialize and test me-quiero-ir-api. You must have node.js and
its package manager [npm] installed.  You can get them from [node].

### Clone me-quiero-ir-api

Clone me-quiero-ir-api repository using using [git]:

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

Simply open a Terminal window and run `npm run tests` to start all your Karma unit tests.

## Continuous Integration

### Travis CI

[travis] is a continuous integration service, which can monitor GitHub for new commits
to your repository and execute scripts such as building the app or running tests. The angular-seed
project contains a Travis configuration file, `.travis.yml`, which will cause Travis to run your
tests when you push to GitHub.



## Deploy

### Heroku

<!-- ```
heroku create
git push heroku master
heroku open
``` -->
## Documentacion
La documentacion se encuentra en el siguiente documento



## Links

[git]: http://git-scm.com/ "Git"
[npm]: https://www.npmjs.org/ "npm"
[node]: http://nodejs.org/ "Node.JS"
[jasmine]: http://jasmine.github.io/ "Jasmine"
[karma]: http://karma-runner.github.io/ "Karma"
[travis]: https://travis-ci.org/ "Travis"
[heroku]: https://www.heroku.com/ "Heroku"

