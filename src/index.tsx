import { SearchBar } from '@components/search-bar';
import { VideoDetail } from '@components/video-detail';
import { VideoList } from '@components/video-list';
import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { YOUTUBE_API_KEY } from './consts';
import { IYoutubeVideo, searchYoutube } from './search-youtube';

import 'bootstrap/dist/css/bootstrap.css';


searchYoutube({ key: YOUTUBE_API_KEY, term: 'surfboards' }).then(data => {
  console.log(data);
}).catch(searchErr => {
  console.log(searchErr);
});

interface IAppState {
  videos: IYoutubeVideo[];
}

class App extends Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = { videos: [] };

    searchYoutube({ key: YOUTUBE_API_KEY, term: 'surfboards' }).then(videos => {
      this.setState({ videos });
    }).catch(searchErr => {
      console.error(searchErr);
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
        <SearchBar />
        </div>
        <div className='row'>
        <VideoDetail video={this.state.videos[0]}/>
        </div>
        <div className='row'>
        <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}


// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
