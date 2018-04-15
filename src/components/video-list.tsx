import { VideoListItem } from '@components/video-list-item';
import * as React from 'react';
import { IYoutubeVideo } from '../search-youtube';


export interface IVideoListProps {
  videos: IYoutubeVideo[];
  selectedVideo: IYoutubeVideo | null;
  onVideoSelect(selectedVideo: IYoutubeVideo): void;
}

export const VideoList = (props: IVideoListProps) => {
  const videoItems = props.videos.map((video, index) => {
    const videoSelected = !!(props.selectedVideo && video.etag === props.selectedVideo.etag);
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
        isSelected={videoSelected} />
    );
  });

  return (
    <div className='col'>
      <ul className='list-group' >
        {videoItems}
      </ul>
    </div>

  );
};
