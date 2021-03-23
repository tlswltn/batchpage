import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import FormLabel from "@material-ui/core/FormLabel";

const NoticeMail = () => {
  const useStyles = makeStyles({
    root: {
      // width: 1550,
      // width: "100%",
      height: 680,
      // border: "1px solid red",
      paddingLeft: 350,
      marginTop: 30,
      boxSizing: "border-box",
      // backgroundColor: "blue",
    },
    schedulelist: {
      width: 673,
      height: 730,
      position: "relative",
    },
    box: {
      // display: "inline-block",
      // float: "left",
      // display: "flex",
      // justifyContent: "space-between",

      // width: 1500,
      // width: "100%",

      // borderRadius: 20,
      // backgroundColor: "red",
      // width: "100vw",
      height: 610,
      fontSize: 16,
      width: "95%",
      // border: "2px solid black",
      whiteSpace: "nowrap",
    },
    lbox: {
      whiteSpace: "nowrap",
      height: "100%",
      // width: 660,
      minWidth: "600",
      width: "42%",

      backgroundColor: "white",
      borderRadius: 10,
      display: "inline-block",
      float: "left",
    },

    rbox: {
      width: "56%",
      display: "inline-block",
      whiteSpace: "nowrap",
      float: "right",
      // position: "relative",
      paddingRight: 20,
      // width: 790,
      height: 610,
      borderRadius: 10,
      overflowY: "scroll",
      // overflowX: "hidden",
      // backgroundColor: "blue",
      // marginLeft: 20,
      boxSizing: "border-box",
    },
    btn2: {
      width: 68,
      height: 30,
      // backgroundColor: "#FFFFFF",
      border: "1px solid #007DFF",
      borderRadius: 5,
      color: "#007DFF",
      marginLeft: 10,
    },
    table: {
      // width: 820,
      width: "100%",
      maxHeight: 600,
      // overflowY: "scroll",
      padding: 10,
      backgroundColor: "#FFFFFF",
      // height: "100%",
      display: "table",
      // border: "1px solid black",
      //   paddingRight: 50,
    },
    tleft: {
      display: "table-cell",
      // border: "1px solid black",
      width: 140,
      height: 70,
      paddingLeft: 20,
      boxSizing: "border-box",
      verticalAlign: "middle",
    },
    tright: {
      display: "table-cell",
      //   border: "1px solid black",
      verticalAlign: "middle",
      width: 480,
      height: 70,
      paddingLeft: 15,
      paddingRight: 30,
      // background: "skyblue",
    },
    datebox: {
      display: "block",
      width: 560,
      // height: 180,
      marginTop: 10,
      backgroundColor: "#F5F5F5",
      paddingLeft: 15,
      borderRadius: 10,
    },
  });
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const columns = [
    { field: "id", headerName: "회사명", width: 140 },
    { field: "firstName", headerName: "처리결과", width: 110 },
    { field: "lastName", headerName: "실행날짜", width: 120 },
    {
      field: "age",
      headerName: "처리자",
      type: "number",
      width: 110,
    },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.getValue("firstName") || ""} ${
    //       params.getValue("lastName") || ""
    //     }`,
    // },
  ];

  const rows = [
    { id: "회사명1", lastName: "Snow", firstName: "Jon", age: 35 },
    { id: "회사명2", lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: "회사명3", lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: "회사명4", lastName: "Stark", firstName: "Arya", age: 16 },
    { id: "회사명5", lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: "회사명6", lastName: "Melisandre", firstName: "Daenerys", age: 150 },
    { id: "회사명7", lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: "회사명8", lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: "회사명9", lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div>
      <div className={classes.root}>
        <div>
          <p>
            <b>연말정산 공지 메일</b>{" "}
            <button className={classes.btn2}>일괄발송</button>
          </p>
        </div>
        <div className={classes.box}>
          <div className={classes.lbox}>
            {/* <TableHead>
              <TableRow>
                <TableCell>Desc</TableCell>
                <TableCell align="right">Qty.</TableCell>
                <TableCell align="right">Unit</TableCell>
                <TableCell align="right">Sum</TableCell>
              </TableRow>
            </TableHead> */}
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
            />
          </div>
          <div className={classes.rbox}>
            <div
              style={{
                backgroundColor: "white",
                width: 600,
                height: "100%",
                padding: 15,
              }}
            >
              근로자의 로그인 경로를 선택해주세요
              <div
                style={{
                  // border: "1px solid black",
                  backgroundColor: "#F5F5F5",
                  width: 560,
                  height: 60,
                  paddingTop: 15,
                  borderRadius: 10,
                  paddingLeft: 20,
                }}
              >
                <FormControl component="fieldset">
                  {/* <FormLabel component="legend">Gender</FormLabel> */}
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                    style={{ display: "inline" }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio color="primary" />}
                      label="Htms"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio color="primary" />}
                      label="Tax-Refund"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              종류를 선택해주세요
              <div
                style={{
                  // border: "1px solid black",
                  backgroundColor: "#F5F5F5",
                  width: 560,
                  height: 100,
                  paddingTop: 15,
                  borderRadius: 10,
                  paddingLeft: 20,
                }}
              >
                <FormControl component="fieldset">
                  {/* <FormLabel component="legend">Gender</FormLabel> */}
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                    style={{ display: "inline" }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio color="primary" />}
                      label="연말정산 근로자 시작 유도메일"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio color="primary" />}
                      label="연말정산 1차 마감 안내 메일"
                    />
                    <br />
                    <FormControlLabel
                      value="female"
                      control={<Radio color="primary" />}
                      label="연말정산 최종 마감 안내 메일"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio color="primary" />}
                      label="온라인 미접수자 안내(SMS)"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              전달유형을 선택해주세요
              <br />
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-filled-label">
                  전달유형
                </InputLabel>
                <Select
                  style={{ width: 150, height: 50 }}
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // value={age}
                  onChange={handleChange}
                >
                  {/* <MenuItem value="">
                    <em>메일+SMS</em>
                  </MenuItem> */}
                  <MenuItem value={10}>메일+SMS</MenuItem>
                  <MenuItem value={20}>메일</MenuItem>
                  <MenuItem value={30}>SMS</MenuItem>
                </Select>
              </FormControl>
              <div
                style={{
                  // border: "1px solid black",
                  backgroundColor: "#F5F5F5",
                  width: 560,
                  height: 60,
                  paddingTop: 15,
                  borderRadius: 10,
                  paddingLeft: 20,
                  fontSize: 12,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  style={{ fontSize: 12 }}
                  label=" SMS 전송시 모바일 링크 포함"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label=" 메일 전송시 이미지 없이 텍스트만 전송"
                />
              </div>
              <br />
              <div style={{ width: 600, display: "flex" }}>
                메일제목을 입력해주세요
                <br />
                (미작성 시 기본 제목 발송)
                <TextField
                  id="filled-multiline-flexible"
                  label="메일 제목 입력"
                  multiline
                  rowsMax={4}
                  value={value}
                  onChange={handleChange}
                  variant="filled"
                  style={{ width: 400 }}
                />
              </div>
              <div style={{ width: 600, display: "flex" }}>
                메일제목을 입력해주세요
                <br />
                (미작성 시 기본 제목 발송)
                <TextField
                  id="filled-multiline-flexible"
                  label="메일 제목 입력"
                  multiline
                  rowsMax={4}
                  value={value}
                  onChange={handleChange}
                  variant="filled"
                  style={{ width: 400 }}
                />
              </div>
              <div style={{ width: 600, display: "flex" }}>
                메일제목을 입력해주세요
                <br />
                (미작성 시 기본 제목 발송)
                <TextField
                  id="filled-multiline-flexible"
                  label="메일 제목 입력"
                  multiline
                  rowsMax={4}
                  value={value}
                  onChange={handleChange}
                  variant="filled"
                  style={{ width: 400 }}
                />
              </div>
              발신자 정보를 입력해주세요{" "}
              <button
                className={classes.btn2}
                style={{ backgroundColor: "#FFFFFF" }}
              >
                {" "}
                미리보기
              </button>
              <div style={{ display: "flex" }}>
                <TextField
                  id="filled-basic"
                  label="성명 입력"
                  variant="filled"
                  style={{
                    width: 110,
                    paddingRight: 15,
                    float: "right",
                    // borderRadius: 15,
                    // backgroundColor: "#FFFFFF",
                  }}
                />
                <TextField
                  id="filled-basic"
                  label="이메일 입력"
                  variant="filled"
                  style={{
                    width: 110,
                    paddingRight: 15,
                    float: "right",
                    // borderRadius: 15,
                    // backgroundColor: "#FFFFFF",
                  }}
                />
                <TextField
                  id="filled-basic"
                  label="전화번호 입력"
                  variant="filled"
                  style={{
                    width: 110,
                    paddingRight: 15,
                    float: "right",
                    // borderRadius: 15,
                    // backgroundColor: "#FFFFFF",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoticeMail;
