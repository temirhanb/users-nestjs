## Installation

```bash
$ npm install
```

```bash
Пред началом работы установите postgresql: https://www.postgresql.org/. После чего в файле .env замените строки пользователя, пароля, название и локалхоста на вашей локальной бд.
Шаблоны для таблицы были созданы с помощью Prisma: https://www.prisma.io/docs/getting-started/
```


## Endpoints

```bash
#Find all users
- http://localhost:3001/api/users

#find user by id
- http://localhost:3001/api/users/:id
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```