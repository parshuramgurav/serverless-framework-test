'use strict';

exports.function-1 = (request, response) => {
  response.status(200).send('Hello Serverless Deployed by serverless framework');
};

// exports.function-2 = (request, response) => {
//   response.status(200).send('Hello Serverless Deployed by serverless framework');
// };

exports.event = (event, callback) => {
  callback();
};




