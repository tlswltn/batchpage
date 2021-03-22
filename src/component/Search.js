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
      width: 1550,
      height: 100,
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      marginLeft: 350,
      display: "flex",
      alignItems: "center",
      padding: 30,
      boxSizing: "border-box",
      justifyContent: "start",
    },
    menuc: {
      width: 1215,
      height: 100,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div className={classes.TopMenu}>
        <div className={classes.menuc}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">귀속년</InputLabel>
            <Select
              style={{ width: 150 }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>2020</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">
              내외부구분
            </InputLabel>
            <Select
              style={{ width: 150 }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">
              연말정산담당자
            </InputLabel>
            <Select
              style={{ width: 150 }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">
              처리상태
            </InputLabel>
            <Select
              style={{ width: 150 }}
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField id="filled-basic" label="회사코드입력" variant="filled" />
          <TextField id="filled-basic" label="처리자입력" variant="filled" />
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#007DFF" }}
          >
            검색하기
          </Button>
        </div>
      </div>
    </div>
  );
};
export default TopMenu;
