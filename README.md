## Installation

```bash
$ npm install
```

```bash
- Пред началом работы установите postgresql: https://www.postgresql.org/. После чего в файле .env замените строки пользователя, пароля, название и локалхоста на вашей локальной бд.
- Шаблоны для таблицы были созданы с помощью Prisma: https://www.prisma.io/docs/getting-started/.
- Mожете настроить собственный сервер и базу данных: https://docs.nestjs.com/techniques/database.
- Основные комманды скриптов package.json не изменены.
- Сервер и БД не деплою т.к в тестовом нет требований к этому =)
```

## Endpoints

```bash
#Find all users
- http://localhost:3001/api/users

#find user by id
- http://localhost:3001/api/users/:id

#find all roles
- http://localhost:3001/api/roles

#find roles by id
- http://localhost:3001/api/roles/:id
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