import logo from "../img/logo.gif";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@material-ui/core";
import React from "react";
import {
  EventAvailable,
  HourglassFull,
  HourglassEmpty,
  Mail,
  AssignmentInd,
} from "@material-ui/icons";
import { SvgIcon } from "@material-ui/core";
import { useState } from "react";
// import SvgIcon from '@material-ui/core/SvgIcon';
// import EventAvailableIcon from '@material-ui/icons/EventAvailable';
const MainMenu = ({ pageChange, pagenum }) => {
  const useStyles = makeStyles({
    leftmenu: {
      position: "absolute",
      // display: "inline-block",
      width: 300,
      height: 810,
      backgroundColor: "#FFFFFF",
      marginLeft: 30,
      borderRadius: 10,
    },
    ul: {
      paddingTop: 20,
      cursor: "pointer",
      "& li": {
        "&:hover": {
          color: "#1976D2",
        },
        color: "#666666",
        width: 280,
        height: 48,
        listStyle: "none",
        "& span": {
          // color: "#333333",
          verticalAlign: "top",
          paddingLeft: 20,
        },
      },
    },
  });
  /* const pageChange = (id) => {
    console.log("id", id);
    setMenuNum(id);
    console.log("menuNum", menuNum);
    // setOpen(true);
  }; */
  const classes = useStyles();
  console.log("pagenum", pagenum);
  // console.log(menuNum);
  //const [menuNum, setMenuNum] = useState("0");
  // const [number, setNumber] = useState("");
  return (
    <>
      <div className={classes.leftmenu}>
        <ul className={classes.ul}>
          <li
            onClick={(e) => {
              pageChange(1);
            }}
          >
            {" "}
            <EventAvailable />
            <span>연말정산 일정 설정</span>
          </li>
          <li
            onClick={(e) => {
              pageChange(2);
              // alert(pagenum);
            }}
          >
            <AssignmentInd />
            <span>인사정보 일괄</span>
          </li>
          <li
            onClick={(e) => {
              pageChange(3);
            }}
          >
            {" "}
            <HourglassEmpty />
            <span>연말정산 준비 작업</span>
          </li>
          <li
            onClick={(e) => {
              pageChange(4);
            }}
          >
            <HourglassFull />
            <span>연말정산 처리 작업</span>
          </li>
          <li
            onClick={(e) => {
              pageChange(5);
            }}
          >
            <Mail />
            <span>연말정산 공지 메일</span>
          </li>
        </ul>
      </div>
      {/* {console.log(menuNum)} */}
    </>
  );
};
export default MainMenu;
