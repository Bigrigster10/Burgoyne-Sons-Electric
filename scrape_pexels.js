import https from 'https';

const url = 'https://www.pexels.com/search/lightbulb/';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
};

https.get(url, options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // Find pexels image URL
    const match = data.match(/https:\/\/images\.pexels\.com\/photos\/(\d+)\/pexels-photo-\d+\.jpeg/);
    console.log(match ? match[0] : 'not found');
  });
});
