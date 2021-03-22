import logo from "../img/logo.gif";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@material-ui/core";
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
const MainMenu = ({ pageChange }) => {
  // const MainMenu = (props) => {
  const useStyles = makeStyles({
    leftmenu: {
      position: "absolute",
      // position: "absolute",

      // display: "inline-block",
      width: 300,
      height: 810,

      backgroundColor: "#FFFFFF",
      marginLeft: 30,
      borderRadius: 10,
      // marginTop: 100,
      // paddingTop: 100,
      // boxSizing: "border-box",
    },
    ul: {
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
  // console.log(menuNum);
  //const [menuNum, setMenuNum] = useState("0");
  return (
    <>
      <div className={classes.leftmenu}>
        <ul className={classes.ul}>
          <li>
            {" "}
            <EventAvailable />
            <span>연말정산 일정 설정</span>
          </li>
          <li
            onClick={(e) => {
              pageChange(1);
            }}
          >
            <AssignmentInd />
            <span>인사정보 일괄</span>
          </li>
          <li
            onClick={(e) => {
              pageChange(2);
            }}
          >
            {" "}
            <HourglassEmpty />
            <span>연말정산 준비 작업</span>
          </li>
          <li
            onClick={(e) => {
              pageChange(3);
            }}
          >
            <HourglassFull />
            <span>연말정산 처리 작업</span>
          </li>
          <li
            onClick={(e) => {
              pageChange(4);
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
