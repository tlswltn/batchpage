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
const SheduleSetting = () => {
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
      width: 850,
      borderRadius: 10,
      //   overflowY: "scroll",
      overflowX: "hidden",
    },
    btn2: {
      width: "auto",
      height: 30,
      backgroundColor: "#FFFFFF",
      border: "1px solid #007DFF",
      borderRadius: 5,
      color: "#007DFF",
      marginLeft: 5,
    },
    table: {
      width: 800,
      maxHeight: 600,
      overflowY: "scroll",
      padding: 10,
      backgroundColor: "#FFFFFF",
      display: "table",
      border: "1px solid black",
      //   paddingRight: 50,
    },
    tleft: {
      display: "table-cell",
      border: "1px solid black",
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
      width: 520,
      height: 70,
      paddingLeft: 5,
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
    { field: "lastName", headerName: "실행날짜", width: 120 },
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
            <b>인사정보 일괄</b>{" "}
            <button className={classes.btn2}>대상자 가져오기</button>
            <button className={classes.btn2}>연말정산 정보갱신</button>
            <button className={classes.btn2}>인사정보 동기화(가져오기)</button>
          </p>
        </div>
        <div className={classes.box}>
          <div
            style={{ height: "100%", width: "100%", backgroundColor: "white" }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SheduleSetting;
