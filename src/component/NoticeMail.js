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
      width: 1550,
      height: 680,
      border: "1px solid black",
      marginLeft: 350,
      marginTop: 30,
    },
    schedulelist: {
      width: 673,
      height: 730,
      position: "relative",
    },
    box: {
      display: "flex",
      justifyContent: "space-between",
      width: 1550,
      //   borderRadius: 20,
      //   backgroundColor: "red",
      height: 610,
      fontSize: 16,
    },
    rbox: {
      width: 690,
      borderRadius: 10,
      //   overflowY: "scroll",
      overflowX: "hidden",
      border: "1px solid black",
    },
    btn2: {
      width: 68,
      height: 30,
      backgroundColor: "#FFFFFF",
      border: "1px solid #007DFF",
      borderRadius: 5,
      color: "#007DFF",
      marginLeft: 10,
    },
    table: {
      width: 820,
      maxHeight: 600,
      overflowY: "scroll",
      padding: 10,
      backgroundColor: "#FFFFFF",
      display: "table",
      // border: "1px solid black",
      //   paddingRight: 50,
    },
    tleft: {
      display: "table-cell",
      // border: "1px solid black",
      width: 180,
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
    { field: "id", headerName: "회사명", width: 200 },
    { field: "firstName", headerName: "처리결과", width: 120 },
    { field: "firstName", headerName: "처리상태", width: 120 },
    { field: "lastName", headerName: "등록날짜", width: 120 },
    { field: "lastName", headerName: "완료날짜", width: 120 },
    {
      field: "age",
      headerName: "처리자",
      type: "number",
      width: 120,
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
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: "Daenerys", age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div>
      <div className={classes.root}>
        <div>
          <p>
            <b>연말정산 공지메일</b>{" "}
            <button className={classes.btn2}>일괄발송</button>
          </p>
        </div>
        <div className={classes.box}>
          <div
            style={{
              height: "100%",
              width: 840,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
            />
          </div>
          <div className={classes.rbox}>
            <div className={classes.table}>
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
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoticeMail;
