import * as React from 'react';
import { IYoutubeVideo } from '../search-youtube';

export interface IVideoListItemProps {
  video: IYoutubeVideo;
  onVideoSelect(selectedVideo: IYoutubeVideo): void;
}

export const VideoListItem = ({ video, onVideoSelect }: IVideoListItemProps) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  function selectVideo(event: React.MouseEvent<HTMLElement>) {
    onVideoSelect(video);
  }

  return (
    <li  className='list-group-item' onClick={selectVideo}>
      <div className='video-list media'>
        <div className='media-left'>
          <img  src={imageUrl} alt='' className='media-object'/>
        </div>

        <div className='media-body'>
          <div className='media-heading'>{videoTitle}</div>
        </div>
      </div>
    </li>
  );

};

