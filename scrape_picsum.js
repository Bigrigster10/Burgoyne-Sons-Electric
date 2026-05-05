import https from 'https';
const url = 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&w=50';
const options = { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } };
const req = https.request(url, options, (res) => {
  console.log(res.statusCode);
  console.log(res.headers);
});
req.end();
