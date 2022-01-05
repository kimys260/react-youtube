import Sidebar from "components/sidebar/sidebar";
import VideoPlayer from "components/videoPlayer/video";
import Styles from "css/app.module.css";
import React from "react";

const Detail = (props) => {
  const { item } = props;

  console.log(props);

  return (
    <section className={Styles["contents-wrapper"]}>
      <VideoPlayer video={item} />
      <Sidebar videoId={item.id.videoId} onSetItem={props.onSetItem} />
    </section>
  );
};

export default Detail;
