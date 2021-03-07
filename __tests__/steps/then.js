
require('dotenv').config()
const AWS = require('aws-sdk')

const user_exists_in_UsersTable = async (id) => {
    const DynamoDB = new AWS.DynamoDB.DocumentClient()
  
    console.log(`looking for user [${id}] in table [${process.env.USERS_TABLE}]`)
    const resp = await DynamoDB.get({
      TableName: process.env.USERS_TABLE,
      Key: {
        id
      }
    }).promise()
  
    expect(resp.Item).toBeTruthy()
  
    return resp.Item
}

module.exports = {
    user_exists_in_UsersTable,
    // tweetsCount_is_updated_in_UsersTable,
    // tweet_exists_in_TweetsTable,
    // tweet_exists_in_TimelinesTable,
    // tweet_does_not_exist_in_TimelinesTable,
    // reply_exists_in_TweetsTable,
    // retweet_exists_in_TweetsTable,
    // retweet_does_not_exist_in_TweetsTable,
    // retweet_exists_in_RetweetsTable,
    // retweet_does_not_exist_in_RetweetsTable,
    // there_are_N_tweets_in_TimelinesTable,
    // user_can_upload_image_to_url,
    // user_can_download_image_from
  }
  