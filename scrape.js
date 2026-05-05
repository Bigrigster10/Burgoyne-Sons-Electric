import https from 'https';

const url = 'https://en.wikipedia.org/w/api.php?action=query&titles=Electric_light&prop=pageimages&format=json&pithumbsize=1000';

const options = {
  headers: {
    'User-Agent': 'MyApp/1.0'
  }
};

https.get(url, options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data);
  });
});
