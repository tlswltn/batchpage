import Batch from "../css/Batch.css";
import Header from "../component/Header";
import MainMenu from "../component/MainMenu";
import { makeStyles } from "@material-ui/core/styles";
import Search from "./Search";
import ScheduleSetting from "../component/ScheduleSetting";
import InsaPer from "./InsaPer";
import Ready from "./Ready";
import React from "react";

import { useState } from "react";
import NoticeMail from "./NoticeMail";
import YAPropcess from "./YAPropcess";

const BatchPage = () => {
  const useStyles = makeStyles({
    bg: {
      //   position: "fixed",
      //   position: "relative",
      // backgroundColor: "#E5E5E5",

      //   backgroundColor: "red",
      // height: "100vh",
      // height: "100%",
      // width: "100vw",
      width: "100vw",
    },
  });
  const classes = useStyles();
  const [menuNum, setMenuNum] = useState("1");

  const pageChange = (id) => {
    console.log("id", id);
    setMenuNum(id);
    console.log("menuNum", menuNum);
    // setOpen(true);
  };
  return (
    <>
      <Header />
      <div className={classes.bg}>
        <div style={{ paddingTop: 100 }}>
          <MainMenu pageChange={pageChange} pagenum={menuNum} />

          <Search />

          {menuNum === 1 ? (
            <ScheduleSetting />
          ) : menuNum === 2 ? (
            // alert("hi", menuNum)
            <InsaPer />
          ) : menuNum === 3 ? (
            <Ready />
          ) : menuNum === 4 ? (
            <YAPropcess />
          ) : menuNum === 5 ? (
            <NoticeMail />
          ) : (
            <ScheduleSetting />
          )}
        </div>
      </div>
    </>
  );
};
export default BatchPage;
