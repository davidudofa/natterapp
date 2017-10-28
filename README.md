# nattertest

> Developer test UDOFA NNYENE-IME MICHAEL nyime2@gmail.com

## live Demo

heroku
----

[natterapp Demo](http://natterapp.herokuapp.com/)

## deveoper challenge
 Challenge
====

Hello Follow the instructions below to get your solution.

Prerequisites
----

You'll need to install [nodejs](https://nodejs.org/en/) to complete the task.

Don't worry if javascript is not your specialty, a basic understanding will be enough to get you through this first step.

Steps
----

The program in this challenge is a very simple messaging system. There is a database of messages, and users can read their messages one at a time.

To run the program there are 2 inputs you need:

- a username
- a hash of the last message you read (so you can read the next one)

Run the program like this:

```
node index.js <username> <hash>
```

To get the correct solution you must use the following inputs:

```
node index.js bigbird88 60b725f10c9c85c70d97880dfe8191b3
```

Task:
a). Build an interface in vuejs that takes in the same input above, and runs the command and returns the response of the correct result in the browser.
b). fix the bugs
----

But wait! There are some bugs in the program that you'll need to fix first. Once you've fixed them the program will display some output like this:


There are also comments in the code that you'll need to read to understand what it's trying to do. Then look closely at the code and make sure it is doing what the comments say.

Help
----

If you get stuck at any point or think something is not working correctly, please contact `amaka.ndukwu@natterbase.com`.
submission deadline is thursday 26/10/2017 4pm
send me a zipped file or a github link


# environment Setup
--------
Challenge package sent can be found in server folder

server.js: This configuration allows the use of express server to serve static files from the ‘dist’ folder in your app.

package.json edited to include node server.js

express router is used in server.js to condition it to api calls

build/dev-server.js requires server/index.js as api

api routes are set in the build/dev-server.js

frontend makes api call to server and listens for result.

## Build Setup

``` bash
# install dependencies
npm install

# build for production with minification into dist folder
npm run build

# run server
npm start


# serve with hot reload at localhost:8080
npm run dev
# build for production and view the bundle analyzer report
npm run build --report.
