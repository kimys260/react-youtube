import axios from "axios";
import Detail from "components/detail";
import Home from "components/home/home";
import Navbar from "components/navbar/navbar";
import Search from "components/search";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState({
    items: [],
  });

  const [schData, setSchData] = useState({
    items: [],
  });
  const [clickItem, setClickItem] = useState({});

  const onSetItem = (clickItem) => {
    setClickItem({ ...clickItem });
  };

  const onSchData = (schTxt) => {
    async function fetchSchData() {
      const res = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: "AIzaSyASSSa7-jUclli3x40SHg2Gw6Z3tNZ0daA",
            part: "snippet",
            maxResults: 25,
            q: schTxt,
            type: "video",
          },
        }
      );

      setSchData(res.data);
    }

    fetchSchData();
  };

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: "AIzaSyASSSa7-jUclli3x40SHg2Gw6Z3tNZ0daA",
            part: "snippet",
            maxResults: 25,
            q: "bts",
            type: "video",
          },
        }
      );

      setData(res.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar onSchData={onSchData} />

        <Routes>
          <Route
            path="/"
            element={<Home items={data.items} onSetItem={onSetItem} />}
          />
          <Route
            path="/search"
            element={<Search schData={schData} onSetItem={onSetItem} />}
          />
          <Route
            path="/detail"
            element={<Detail item={clickItem} onSetItem={onSetItem} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
