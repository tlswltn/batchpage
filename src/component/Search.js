import logo from "../img/logo.gif";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const TopMenu = () => {
  const useStyles = makeStyles({
    TopMenu: {
      // float:"right",
      width: "78%",
      // minWidth: 1000,
      // width: 1500,
      // width: "100vw",
      // width: "80%",
      // float: "right",
      // marginRight: 30,
      height: 100,
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      marginLeft: 350,

      boxSizing: "border-box",
      // display: "flex",
      // alignItems: "center",
      // padding: 30,

      // justifyContent: "start",
    },
    menuc: {
      minWidth: 1000,
      width: 1110,
      height: 100,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 20,
    },
    formControl: {
      margin: "spacing(1)",
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: "spacing(2)",
    },
  });
  const classes = useStyles();
  // const [age, setAge] = React.useState("");
  const [yy, setYy] = React.useState("");
  const [inout, setInout] = React.useState("");
  const [pp, setPP] = React.useState("");
  const [yastatus, setYastatus] = React.useState("");

  const handleChange = (event) => {
    // setAge(event.target.value);
    setYy(event.target.value);
    setInout(event.target.value);
    setPP(event.target.value);
    setYastatus(event.target.value);
  };

  return (
    <div>
      <div className={classes.TopMenu}>
        <div className={classes.menuc}>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel
              htmlFor="outlined-age-native-simple"
              // id="demo-simple-select-filled-label"
              style={{ fontSize: 14 }}
            >
              귀속년
            </InputLabel>
            <Select
              native
              style={{ width: 140 }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={yy}
              onChange={handleChange}
            >
              <option value={10}>2020</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel
              id="demo-simple-select-filled-label"
              style={{ fontSize: 14 }}
            >
              내외부구분
            </InputLabel>
            <Select
              native
              style={{ width: 140 }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={inout}
              onChange={handleChange}
            >
              <option value={10}>내부</option>
              <option value={20}>외부</option>
              {/* <option value={30}>Thirty</option> */}
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel
              id="demo-simple-select-filled-label"
              style={{ fontSize: 14 }}
            >
              연말정산담당자
            </InputLabel>
            <Select
              native
              style={{ width: 140 }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={pp}
              onChange={handleChange}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel
              id="demo-simple-select-filled-label"
              style={{ fontSize: 14 }}
            >
              처리상태
            </InputLabel>
            <Select
              native
              style={{ width: 140 }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={yastatus}
              onChange={handleChange}
            >
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <TextField
            id="filled-basic"
            label="회사코드입력"
            variant="filled"
            style={{ fontSize: 14 }}
          />
          <TextField
            id="filled-basic"
            label="처리자입력"
            variant="filled"
            style={{ fontSize: 14 }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#007DFF", height: 48 }}
          >
            검색하기
          </Button>
        </div>
      </div>
    </div>
  );
};
export default TopMenu;
