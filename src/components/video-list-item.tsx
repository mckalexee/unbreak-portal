import * as React from 'react';
import { IYoutubeVideo } from '../search-youtube';

export const VideoListItem = ({ video }: { video: IYoutubeVideo }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  return (
    <li className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img src={imageUrl} alt='' className='media-object'/>
        </div>

        <div className='media-body'>
          <div className='media-heading'>{videoTitle}</div>
        </div>
      </div>
    </li>
  );
};
