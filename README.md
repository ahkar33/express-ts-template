# enjoy-website-backend

A TypeScript Express app for building APIs using MySQL and Prisma.

## Prerequisites

Before you can run this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/get-npm) (usually comes with Node.js)
- [MySQL](https://dev.mysql.com/downloads/installer/) (or any other database you prefer)

## Getting Started

    git clone https://github.com/ahkar33/express-ts-template.git
    cd express-ts-template

## Install project dependencies:

    npm install

## Build the TypeScript code:

    npm run build

## Database Setup

    npx prisma migrate dev --name create_tables
    npx prisma generate

## To start the development server, run:

    npm run dev

## For a production-ready build, run:

    npm run start
