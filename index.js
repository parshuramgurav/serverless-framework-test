'use strict';

exports.http = (request, response) => {
  response.status(200).send('Hello Serverless World latest!');
};

exports.event = (event, callback) => {
  callback();
};
