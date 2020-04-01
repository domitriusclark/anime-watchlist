const TableName = "Anime";

const getDynamoDBClient = () => {
  const AWS = require("aws-sdk");

  const options = {
    convertEmptyValues: true,
    region: "us-east-1"
  };

  const client = new AWS.DynamoDB.DocumentClient(options);

  return client;
};

module.exports = {}