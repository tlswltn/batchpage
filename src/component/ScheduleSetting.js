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
      width: "96%",
      // border: "2px solid black",
      whiteSpace: "nowrap",
    },
    lbox: {
      whiteSpace: "nowrap",
      height: "100%",
      // width: 660,
      minWidth: "600",
      width: "44%",

      backgroundColor: "white",
      borderRadius: 10,
      display: "inline-block",
      float: "left",
    },

    rbox: {
      width: "54%",
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
    // ".MuiDataGrid-colCellWrapper": {
    //   fontWeight: "bold",
    //   color: "blue",
    // },
  });
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const columns = [
    { field: "id", headerName: "?????????", width: 140 },
    { field: "firstName", headerName: "????????????", width: 110 },
    { field: "lastName", headerName: "????????????", width: 120 },
    {
      field: "age",
      headerName: "?????????",
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
    { id: "?????????1", lastName: "Snow", firstName: "Jon", age: 35 },
    { id: "?????????2", lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: "?????????3", lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: "?????????4", lastName: "Stark", firstName: "Arya", age: 16 },
    { id: "?????????5", lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: "?????????6", lastName: "Melisandre", firstName: "Daenerys", age: 150 },
    { id: "?????????7", lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: "?????????8", lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: "?????????9", lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: "?????????4", lastName: "Stark", firstName: "Arya", age: 16 },
    { id: "?????????5", lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: "?????????6", lastName: "Melisandre", firstName: "Daenerys", age: 150 },
    { id: "?????????7", lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: "?????????8", lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: "?????????9", lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div>
      <div className={classes.root}>
        <div style={{ width: 800 }}>
          <p>
            <b>???????????? ?????? ??????</b>{" "}
            <button className={classes.btn2}>????????????</button>
          </p>
        </div>
        <div className={classes.box}>
          <div className={classes.lbox}>
            <DataGrid
              rows={rows}
              className={classes[".MuiDataGrid-colCellWrapper"]}
              columns={columns}
              pageSize={20}
              checkboxSelection
            />
          </div>
          <div className={classes.rbox}>
            <div className={classes.table}>
              <div style={{ display: "table-row" }}>
                <div className={classes.tleft}>???????????????</div>
                <div className={classes.tright}>
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
                          label="?????????????????????"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio color="primary" />}
                          label="?????????????????????"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div style={{ display: "table-row" }}>
                <div className={classes.tleft}>?????? ??? ?????????</div>
                <div className={classes.tright}>
                  <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-filled-label">
                      ??????
                    </InputLabel>
                    <Select
                      native
                      style={{ width: 150, height: 56 }}
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      // value={age}
                      onChange={handleChange}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>

                  <TextField
                    id="filled-basic"
                    label={<span style={{ paddingLeft: 10 }}>????????? ??????</span>}
                    variant="filled"
                    style={{
                      width: 420,
                      paddingLeft: 10,
                      // float: "right",
                      // borderRadius: 15,
                      // backgroundColor: "#FFFFFF",
                    }}
                  />
                </div>
              </div>
              <div style={{ display: "table-row" }}>
                <div className={classes.tleft}>???????????? ?????????</div>
                <div className={classes.tright}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    {/* <Grid container justify="space-around"> */}
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="????????? ???????????? ?????????"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                    <span
                      style={{
                        fontSize: 20,
                        lineHeight: 3,
                        verticalAlign: "middle",
                        padding: 15,
                      }}
                    >
                      ~
                    </span>

                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="????????? ???????????? ?????????"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />

                    {/* </Grid> */}
                  </MuiPickersUtilsProvider>
                </div>
              </div>
              <div style={{ display: "table-row" }}>
                <div className={classes.tleft}>???????????? ??????</div>
                <div className={classes.tright}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="???????????? ??????"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />{" "}
                    <span
                      style={{
                        fontSize: 20,
                        lineHeight: 3,
                        verticalAlign: "middle",
                        padding: 15,
                      }}
                    >
                      ~
                    </span>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="???????????? ??????"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              </div>
              <div style={{ display: "table-row" }}>
                <div className={classes.tleft}>1??? ??????</div>
                <div className={classes.tright}>
                  <div className={classes.datebox}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="1??? ???????????? ?????????"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />{" "}
                      <span
                        style={{
                          fontSize: 20,
                          lineHeight: 3,
                          verticalAlign: "middle",
                          padding: 15,
                        }}
                      >
                        ~
                      </span>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="1??? ???????????? ?????????"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                    <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="1??? ?????? ??????"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />{" "}
                      <span
                        style={{
                          fontSize: 20,
                          lineHeight: 3,
                          verticalAlign: "middle",
                          padding: 15,
                        }}
                      >
                        ~
                      </span>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="1??? ?????? ??????"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                    <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="1??? ???????????? ??????"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />{" "}
                      <span
                        style={{
                          fontSize: 20,
                          lineHeight: 3,
                          verticalAlign: "middle",
                          padding: 15,
                        }}
                      >
                        ~
                      </span>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="1??? ???????????? ??????"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                </div>
              </div>
              <div style={{ display: "table-row" }}>
                <div className={classes.tleft}>2??? ??????</div>
                <div className={classes.tright}>
                  <div className={classes.datebox}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="2??? ???????????? ?????????"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />{" "}
                      <span
                        style={{
                          fontSize: 20,
                          lineHeight: 3,
                          verticalAlign: "middle",
                          padding: 15,
                        }}
                      >
                        ~
                      </span>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="2??? ???????????? ?????????"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                    <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="2??? ?????? ??????"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />{" "}
                      <span
                        style={{
                          fontSize: 20,
                          lineHeight: 3,
                          verticalAlign: "middle",
                          padding: 15,
                        }}
                      >
                        ~
                      </span>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="2??? ?????? ??????"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                    <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="2??? ???????????? ??????"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />{" "}
                      <span
                        style={{
                          fontSize: 20,
                          lineHeight: 3,
                          verticalAlign: "middle",
                          padding: 15,
                        }}
                      >
                        ~
                      </span>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="2??? ???????????? ??????"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
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
