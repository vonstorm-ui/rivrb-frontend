import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import 'components/pages/timeline/TimelinePage.styles.css';


const Twit = require('twit');

const hiddenConsKey = process.env.REACT_APP_CONSUMER_KEY;
const hiddenConSec = process.env.REACT_APP_CONSUMER_SECRET;
const hiddenAccToKey = process.env.REACT_APP_ACCESS_TOKEN_KEY;
const hiddenAccTokSec = process.env.REACT_APP_ACCESS_TOKEN_SECRET;

const T = new Twit({
  consumer_key: hiddenConsKey,
  consumer_secret: hiddenConSec,
  access_token: hiddenAccToKey,
  access_token_secret: hiddenAccTokSec
});

T.get('search/tweets', { q: 'banana since:2011-07-11', count: 2 }, function(err, data, response) {
  console.log(data)
});




const TimelinePage = ({ politicalLean, partisan }) => {
  console.log(`the partisan is ${partisan.twitterHandle}`);
  return (
    <div class="proto-container">
      <div className="page-title" style={{ padding: '30px' }}>
        Revrb Feed of {politicalLean === 'right' ? 'Left' : 'Right'}-Leaning Tweets
      </div>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: partisan.twitterHandle,
        }}
        options={{
          height: '800',
          width: '400',
        }}
      />
    </div>
  );
};

export default TimelinePage;
