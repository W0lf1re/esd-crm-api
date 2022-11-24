![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

# Starting project

```bash
# start containers
docker-compose up -d
# start node server
npm run start:dev
```

# Mongo doc

```bash
# going into container mongo
docker exec -ti mongo bash
# connect to db mongo
mongosh
```

# TODO

> create model User (email, password)
> create userController
> create userRouter

### Features

create user
update user
delete user
getOne user
getAll user
relation user > customer
One user can have many customers

## Credentials

- Developer - [Yvann Nadal](https://github.com/W0lf1re)
- Author - [Yvann Nadal](https://github.com/W0lf1re)
