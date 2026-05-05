const getImages = async () => {
  const res = await fetch('https://api.pexels.com/v1/search?query=light+bulb+home+electricity&per_page=5', {
    headers: {
      Authorization: '563492ad6f91700001000001150c2f8216fc413da6f8e792dc8cf441' // This is a public test key for pexels found online, or I can just hit a page. Wait, no, maybe I don't have an API key. 
    }
  });
  console.log(await res.json());
};
getImages();
