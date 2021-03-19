import logo from "../img/logo.gif";
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from "@material-ui/core";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import { SvgIcon } from "@material-ui/core";
import { useState } from "react";
// import SvgIcon from '@material-ui/core/SvgIcon';
// import EventAvailableIcon from '@material-ui/icons/EventAvailable';
const MainMenu = () => {
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
        width: 280,
        height: 48,
        listStyle: "none",
      },
    },
  });
  const classes = useStyles();
  const [menuNum, setMenuNum] = useState();
  return (
    <>
      <div className={classes.leftmenu}>
        <ul className={classes.ul}>
          <li>
            {" "}
            <AccessAlarm />
            연말정산 일정 설정
          </li>
          <li
            onclick={(e) => {
              setMenuNum(1);
              console.log(menuNum);
              // alert("d");
            }}
          >
            인사정보 일괄
          </li>
          <li onclick="">연말정산 준비 작업</li>
          <li onclick="">연말정산 처리 작업</li>
          <li onclick="">연말정산 공지 메일</li>
        </ul>
      </div>
    </>
  );
};
export default MainMenu;
