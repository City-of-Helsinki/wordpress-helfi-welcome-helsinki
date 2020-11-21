# welcome.helsinki

This is the WordPress site for welcome.helsinki. It is based on the Genero's
fork of the Bedrock stack.

Read more about [Bedrock](https://github.com/roots/bedrock).
Read more about [Genero's Bedrock fork](https://github.com/generoi/bedrock).

## Installation

```sh
composer install:development
vagrant up
./vendor/bin/robo db:pull @production
./vendor/bin/robo files:pull @production
```

## Development

```sh
vagrant up
cd web/app/themes/welcome.helsinki
npm run build
npm run build:production
npm run start
```

## Deploying

```sh
./vendor/bin/dep deploy staging
./vendor/bin/dep deploy production
./vendor/bin/dep deploy production --quick
./vendor/bin/dep cache:clear production
./vendor/bin/dep ssh production
```
