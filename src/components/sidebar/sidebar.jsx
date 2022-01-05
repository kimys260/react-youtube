import axios from "axios";
import Styles from "css/sidebar.module.css";
import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

const Sidebar = (props) => {
  const { videoId } = props;
  const [relatedData, setRelatedData] = useState({
    items: [],
  });

  const handleSetItem = (item) => {
    if (item.snippet) {
      props.onSetItem(item);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    async function relatedFetchData() {
      const res = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: "AIzaSyASSSa7-jUclli3x40SHg2Gw6Z3tNZ0daA",
            part: "snippet",
            maxResults: 25,
            relatedToVideoId: videoId,
            type: "video",
          },
        }
      );

      setRelatedData(res.data);
    }

    relatedFetchData();
  }, []);

  return (
    <aside className={Styles}>
      <section className={Styles}>
        {relatedData.items.length > 0 &&
          relatedData.items.map((item) => {
            if (item.snippet) {
              return (
                <div
                  className={Styles["list-wrap"]}
                  key={item.id.videoId}
                  onClick={() => handleSetItem(item)}
                >
                  <div className={Styles["compacted-video"]}>
                    <img
                      src={item.snippet && item.snippet.thumbnails.medium.url}
                      alt=""
                    />
                  </div>
                  <div className={Styles["desc-video"]}>
                    <span className={Styles.title}>
                      {item.snippet && item.snippet.title}
                    </span>
                    <span className={Styles.register}>작성자</span>
                    <span className={Styles.views}>조회수</span>
                  </div>
                </div>
              );
            }
            return;
          })}
      </section>
    </aside>
  );
};

export default Sidebar;
