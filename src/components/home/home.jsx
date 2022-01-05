import Styles from "css/home.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  console.log(props);
  const navigate = useNavigate();
  const { items } = props;

  const goDetail = (item) => {
    props.onSetItem(item);
    navigate("/detail");
  };

  return (
    <>
      <section className={Styles["content-wrapper"]}>
        {items.length > 0 &&
          items.map((item, index) => (
            <article
              className={Styles.thumbnail}
              key={`${item.id.videoId}${index}`}
              onClick={() => {
                goDetail(item);
              }}
            >
              <div className={Styles["img-box"]}>
                <img src={item.snippet.thumbnails.high.url} alt="" />
              </div>
              <div className={Styles.des}>
                <img src="" alt="" />

                <div className={Styles.text}>
                  <div className={Styles.title}>
                    <span>{item.snippet.title}</span>
                  </div>
                  <div className={Styles.etc}>
                    <span className={Styles.register}>등록자</span>
                    <span className={Styles.views}>조회수</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
      </section>
    </>
  );
};

export default Home;
