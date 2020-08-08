const Twit = require('twit');

const twit = new Twit({
  consumer_key: process.env.REACT_APP_CONSUMER_KEY,
  consumer_secret: process.env.REACT_APP_CONSUMER_SECRET,
  access_token_key: process.env.REACT_APP_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.REACT_APP_ACCESS_TOKEN_SECRET
});

const getweets = async (id) =>{ //will not work unless the access tokens are assigned
    twit.get('statuses/user_timeline',{count:20,tweet_mode:"extended",include_rts:'false', 
  trim_user:'true',screen_name:'realDonaldTrump'}, function(error, tweets, response) {
    if(error) {console.log(error)} else{
        // console.log(tweets.body);  // The favorites.
        // response.body
        JSON.parse(response.body).forEach(tweet=>{
            console.log(tweet.full_text)
        })
    // console.log(JSON.parse(response.body));  // Raw response object.
    };
    
  });
}