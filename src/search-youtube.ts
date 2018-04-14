
export interface IYoutubeVideo {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      },
      medium: {
        url: string;
        width: number;
        height: number;
      },
      high: {
        url: string;
        width: number;
        height: number;
      }
    },
    channelTitle: string;
    liveBroadcastContent: string;
  };
}

export function searchYoutube(opts: { key: string, term: string }) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${opts.key}&q=${opts.term}&type=video`;
  return new Promise<IYoutubeVideo[]>((resolve, reject) => {
    fetch(url).then(res => {
      if (res.status !== 200) {
        return reject(new Error(`YT SEARCH ERROR STATUS: `));
      }
      res.json().then(data => {
        resolve(data.items);
      });
    });
  });

}
