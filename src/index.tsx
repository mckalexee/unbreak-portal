import { SearchBar } from '@components/search-bar';
import { VideoDetail } from '@components/video-detail';
import { VideoList } from '@components/video-list';
import * as _ from 'lodash';
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
    this.videoSearch = this.videoSearch.bind(this);

    this.videoSearch('typescript');
  }

  render() {
    // Performance is terrible if we search on every keystroke
    const videoSearch = _.debounce((term: string) => { this.videoSearch(term); }, 300);

    return (
      <div className='container'>
        <div className='row'>
          <SearchBar onSearchTermChange={videoSearch} />
        </div>
        <div className='row'>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
            selectedVideo={this.state.selectedVideo} />
        </div>
      </div>
    );
  }

  /**
   * Update the selected video in state so that it displays for the user
   * @param selectedVideo
   */
  onVideoSelect(selectedVideo: IYoutubeVideo) {
    this.setState({ selectedVideo });
  }

  /**
   * Search for videos on YouTube
   * @param term Search Term
   */
  videoSearch(term: string) {
    searchYoutube({ key: YOUTUBE_API_KEY, term }).then(videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    }).catch(searchErr => {
      console.error(searchErr);
    });
  }
}


// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
