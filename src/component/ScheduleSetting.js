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
      width: 68,
      height: 30,
      backgroundColor: "#FFFFFF",
      border: "1px solid #007DFF",
      borderRadius: 5,
      color: "#007DFF",
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
    { field: "id", headerName: "회사명", width: 100 },
    { field: "firstName", headerName: "처리결과", width: 100 },
    { field: "lastName", headerName: "실행날짜", width: 100 },
    {
      field: "age",
      headerName: "처리자",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue("firstName") || ""} ${
          params.getValue("lastName") || ""
        }`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div>
      <div className={classes.root}>
        <div>
          <p>
            <b>연말정산 일정 설정</b>{" "}
            <button className={classes.btn2}>일괄설정</button>
          </p>
        </div>
        <div className={classes.box}>
          <div style={{ height: "100%", width: 673, backgroundColor: "white" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
            />
          </div>
          <div className={classes.rbox}>
            <div className={classes.table}>
              <div style={{ display: "table-row" }}>
                <div className={classes.tleft}>거래처구분</div>
                <div
                  className={classes.tright}
                  style={{ backgroundColor: "#F5F5F5" }}
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
                        control={<Radio />}
                        label="급여대행거래처"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="연말정산거래처"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <div style={{ display: "table-row" }}>
                <div className={classes.tleft}>년도 및 일정명</div>
                <div className={classes.tright}>
                  <Select
                    style={{ width: 150 }}
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    //   value={age}
                    //   onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  <TextField
                    id="filled-basic"
                    label="Filled"
                    variant="filled"
                    style={{ width: 400 }}
                  />
                </div>
              </div>
              <div style={{ display: "table-row" }}>
                <div className={classes.tleft}>안내자료 전달일</div>
                <div className={classes.tright}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    {/* <Grid container justify="space-around"> */}
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker inline"
                      // value={selectedDate}
                      // onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                    <span>~</span>

                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker inline"
                      // value={selectedDate}
                      // onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />

                    {/* </Grid> */}
                  </MuiPickersUtilsProvider>
                </div>
              </div>
              <div style={{ display: "table-row" }}>
                <div className={classes.tleft}>작성상담 일정</div>
                <div className={classes.tright}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    {/* <Grid container justify="space-around"> */}
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker inline"
                      // value={selectedDate}
                      // onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />{" "}
                    <span>~</span>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker inline"
                      // value={selectedDate}
                      // onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                    {/* </Grid> */}
                  </MuiPickersUtilsProvider>
                </div>
              </div>
              <div style={{ display: "table-row" }}>
                <div className={classes.tleft}>1차 일정</div>
                <div
                  style={{
                    display: "table-cell",
                    border: "1px solid black",
                    height: 200,
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  급여대행거래처
                </div>
              </div>
              <div style={{ display: "table-row" }}>
                <div className={classes.tleft}>2차 일정</div>
                <div
                  style={{
                    display: "table-cell",
                    border: "1px solid black",
                    height: 200,
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  급여대행거래처
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SheduleSetting;
