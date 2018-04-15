import * as React from 'react';
import { IYoutubeVideo } from '../search-youtube';

export interface IVideoListItemProps {
  video: IYoutubeVideo;
  isSelected: boolean;
  onVideoSelect(selectedVideo: IYoutubeVideo): void;
}

export const VideoListItem = ({ video, isSelected, onVideoSelect }: IVideoListItemProps) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  function selectVideo(event: React.MouseEvent<HTMLElement>) {
    onVideoSelect(video);
  }

  const className = isSelected ?
    'list-group-item video-list-item video-list-item-selected' :
    'list-group-item video-list-item video-list-item';

  return (
    <li className={className} onClick={selectVideo}>
      <div className='video-list media'>
        <div className='media-left'>
          <img src={imageUrl} alt='' className='media-object' />
        </div>

        <div className='media-body'>
          <div className='media-heading'>{videoTitle}</div>
        </div>
      </div>
    </li>
  );

};

