'use strict';

exports.http = (request, response) => {
  response.status(200).send('Hello Serverless World!!!!! Deployed by serverless framework');
};

exports.event = (event, callback) => {
  callback();
};