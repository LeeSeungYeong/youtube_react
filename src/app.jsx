import styles from './app.module.css';

import React, { useEffect, useState } from 'react';
import VideoList from './compoments/video_list/video_list';
import SearchHeader from './compoments/search_header/search_header';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = query => {
    youtube
      .search(query)
      .then(videos => setVideos(videos));
  };
  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;