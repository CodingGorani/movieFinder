var express = require('express');
var axios = require('axios');
var router = express.Router();
require('dotenv').config();

router.get('/naver', async (req, res) => {
  try {
    const result = await axios.get(
      'https://openapi.naver.com/v1/search/movie.json',
      {
        params: {
          query: req.query.query,
        },
        headers: {
          'Content-Type': 'plain/text',
          'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_CLIENT_SECRET,
        },
      }
    );
    console.log(result.data);
    res.json(result.data);
  } catch (err) {
    res.status(400).send();
  }
});

module.exports = router;
