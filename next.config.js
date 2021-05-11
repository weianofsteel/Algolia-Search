const withImages = require('next-images')
module.exports = withImages({
    env: {
        APP_ID: process.env.APP_ID,
        API_KEY: process.env.API_KEY,
        indexName: process.env.indexName
      },
})