import { SearchBar } from '@components/search-bar';
import { VideoDetail } from '@components/video-detail';
import { VideoList } from '@components/video-list';
import * as React from 'react';
import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { YOUTUBE_API_KEY } from './consts';
import { IYoutubeVideo, searchYoutube } from './search-youtube';


import './styles/index.scss';

searchYoutube({ key: YOUTUBE_API_KEY, term: 'surfboards' }).then(data => {
  console.log(data);
}).catch(searchErr => {
  console.log(searchErr);
});

interface IAppState {
  videos: IYoutubeVideo[];
  selectedVideo: IYoutubeVideo | null;
}

class App extends Component<{}, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.onVideoSelect = this.onVideoSelect.bind(this);
    this.initYoutubeVideos = this.initYoutubeVideos.bind(this);

    this.initYoutubeVideos();
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <SearchBar />
        </div>
        <div className='row'>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
        </div>
      </div>
    );
  }

  /**
   * Initialize the list of YouTube Videos
   */
  initYoutubeVideos() {
    searchYoutube({ key: YOUTUBE_API_KEY, term: 'surfboards' }).then(videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    }).catch(searchErr => {
      console.error(searchErr);
    });
  }

  /**
   * Update the selected video in state so that it displays for the user
   * @param selectedVideo
   */
  onVideoSelect(selectedVideo: IYoutubeVideo) {
    this.setState({ selectedVideo });
  }
}


// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
