'use strict';

exports.http = (request, response) => {
  response.status(200).send('Hello serverless framework World#############');
};

exports.event = (event, callback) => {
  callback();
};

// exports.pubSub = (event, callback) => {
//   console.log('Hello serverless World!');
//   callback();
// };
