Setting up an apollo-express-server using graphql and mongoDB for the database

**Installing mongoDB packages using homebrew:**
1. brew install mongodb-community
2. reference: https://youtu.be/4crXgQZG4W8

**Adding babel-CLI and nodemon:**
1. yarn add -D @babel/preset-env @babel/cli @babel/node @babel/core nodemon
2. change "test" in package.json with "start": "nodemon --exec babel-node index.js"

**Adding apollo-server-express and graphql:**
1. yarn add apollo-server-express express graphql

**Adding mongoose package**
1. yarn add mongoose
