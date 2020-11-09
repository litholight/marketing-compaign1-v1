const request = require('request');
const html = require('./index');
const css = require('./css');

const API_ID = '95b9b5d3-6f36-45cf-9547-7815898d36fa';
const API_KEY = '4b26bab1-cc35-48f1-b412-0fb60d1875b0';

// Define your HTML/CSS
const data = {
  html,
  css,
};

// Create an image by sending a POST to the API.
// Retrieve your api_id and api_key from the Dashboard. https://htmlcsstoimage.com/dashboard
request
  .post({ url: 'https://hcti.io/v1/image', form: data })
  .auth(API_ID, API_KEY)
  .on('data', function (data) {
    console.log(JSON.parse(data));
  });

// {"url": "https://hcti.io/v1/image/1113184e-419f-49f1-b231-2069942a186f"}
