'use strict';

exports.http = (request, response) => {
  response.status(200).send('Hello Serverless World!');
};

exports.event = (event, callback) => {
  callback();
};
