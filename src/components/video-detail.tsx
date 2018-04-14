import * as React from 'react';
import { IYoutubeVideo } from '../search-youtube';

export const VideoDetail = ({ video }: { video: IYoutubeVideo }) => {
  if (!video) {
    return (
      <div className='col'>
        <h2>Loading...</h2>
      </div>
    );
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video-detail col'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe src={url} className='embed-responsive-item' />
      </div>
      <div className='details'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};
