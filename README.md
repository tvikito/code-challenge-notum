# 🚀 Notum Code Challenge 🧡

Welcome to my small app. I dared to remove docker in order to demonstrate whole project setup.

# Setup & run

## Turborepo?

This repo is build as [Turborepo](https://turbo.build/) and uses [pnpm](https://pnpm.io) as a package manager. To install it run:

```
npm install -g pnpm
```

I've used pnpm in order to show speed of pnpm which is much faster package manager then npm.

### Apps

- `backend`: a Rest.js app used as backend server
- `frontend`: frontend [Next.js](https://nextjs.org/) app

## Start app

First install all dependencies for backend and frontend. Simply run

```
pnpm install
```

in root of the project. Afterwards, for production run

```
pnpm start
```

For development

```
pnpm dev
```

## Backend

Server is running locally on port 3002. The server is only used for temporarily reading and storing nodes (they are forgotten after the restart) and user authentication.

### Swagger documentation

[http://localhost:3002/api](http://localhost:3002/api)

### Available user

```
username: notum
password: toMoon
```

## Frontend

Is running locally on [http://localhost:3000](http://localhost:3000).
