require('dotenv').config();
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3() 

const S3_Bucket = process.env.AWS_BUCKET_NAME;

module.exports = {s3,S3_Bucket};
