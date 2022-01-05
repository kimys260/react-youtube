import Styles from "css/video.module.css";
import React from "react";
import YouTube from "react-youtube";

const Video = (props) => {
  const { video } = props;
  console.log(video);
  const opt = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <article className={Styles.wrapper}>
      <YouTube
        className={Styles.video}
        videoId={video.id.videoId}
        opt={opt}
        onReady={onReady}
      />
      <div className={Styles.desc}>
        <h2>{video.snippet.title}</h2>
        <div className={Styles.etc}>
          <div className={Styles.views}>조회수</div>
          <div className={Styles.actions}>좋아요 싫어요 구독</div>
        </div>
      </div>
    </article>
  );
};

export default Video;
