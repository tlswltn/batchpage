import logo from "../img/logo.gif";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const Header = () => {
  const useStyles = makeStyles({
    header: {
      position: "fixed",
      zIndex: 99999,
      //   border: "1px solid black",

      height: 60,
      width: "100%",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)",
      backgroundColor: "#FFFFFF",
      display: "flex",
      alignItems: "center",
    },
    title: {
      width: 320,
      height: 40,
      marginLeft: 20,
      //   border: "1px solid black",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: 16,
      letterSpacing: "-0.01em",
      //   justifyContent: "center",
    },
    logotitle: {
      width: "100%",
      height: 60,
      display: "flex",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
    },
    logobox: {
      //   margin: "0 auto",
      width: 60,
      height: 40,
      //   backgroundColor: "#FFFFFF",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.title}>
          <img src={logo} className={classes.logobox} alt="logo" />
          <b>월급날</b> 연말정산 일괄 처리 게시판
        </div>
      </header>
    </div>
  );
};
export default Header;
