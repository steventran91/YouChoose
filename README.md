# YouChoose

YouChoose is an for app the people that can't decide where to go or what to eat! YouChoose is built with the MERN stack(MongoDB, Express, React, and Node).

# Group Members
* Steven Tran
* Juan Barba
* Brenda Jiang
* Mason Saia

# Features
![Screen Shot 2021-07-26 at 4 39 30 PM](https://user-images.githubusercontent.com/78631034/127099343-c6cc4b34-8fd8-4329-80ed-bc9d25f94db3.png)


* A roulette wheel that will land on a random cuisine and provide users with a list of restaurants matching the cuisine. Users have the ability to favorite restaurants they like.
![Screen Shot 2021-07-26 at 10 21 17 PM](https://user-images.githubusercontent.com/78631034/127099910-aee08137-6c27-4db2-ade9-5ef27543079f.png)

![Screen Shot 2021-07-26 at 10 15 58 PM](https://user-images.githubusercontent.com/78631034/127099547-b51e2ab1-0ebd-4918-8a6f-9598cd3d63d3.png)
![Screen Shot 2021-07-26 at 10 16 08 PM](https://user-images.githubusercontent.com/78631034/127099552-a5a407e7-2696-4c63-bcba-6bf01957aed7.png)


* Real restaurant data pulled from Yelp's API
```Javascript
const API_KEY = require('../config/yelp_api').YELP_API_KEY;
const yelp = require('yelp-fusion');
const client = yelp.client(API_KEY);


function searchCuisine({tag, cuisine, location}) {
    const searchRequest = {
        term: `${tag}+${cuisine} food`,
        location: `${location}`,
    };

    client.search(searchRequest).then(response => {
        const results = response.jsonBody.businesses;
        // let randomResults = results[Math.floor(Math.random() * results.length)].slice(0, 10);
        response.json(results);
    }).catch(e => {
        console.log(e);
    })
    
};

```
* Filters restaurants based on the type of day that it is
![Screen Shot 2021-07-26 at 10 21 26 PM](https://user-images.githubusercontent.com/78631034/127099917-d705f6eb-b341-444c-a8a3-b841f23d27d9.png)


