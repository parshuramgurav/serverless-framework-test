'use strict';

exports.http = (request, response) => {
  response.status(200).send('Hello World!');
};

exports.event = (event, callback) => {
  callback();
};

// exports.pubSub = (event, callback) => {
//   console.log('Hello World!');
//   callback();
// };
