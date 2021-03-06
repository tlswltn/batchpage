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
      // backgroundColor: "blue",
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
      height: 620,
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
      width: "53%",

      backgroundColor: "white",
      borderRadius: 10,
      display: "inline-block",
      float: "left",
    },

    rbox: {
      width: "46%",
      display: "inline-block",
      whiteSpace: "nowrap",
      float: "right",
      // position: "relative",
      // paddingRight: 20,
      // width: 790,
      height: 610,
      borderRadius: 10,
      // overflowY: "scroll",
      // overflowX: "hidden",
      // backgroundColor: "blue",
      // marginLeft: 20,
      boxSizing: "border-box",
      fontSize: 15,
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
  const [value, setValue] = React.useState("");
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const typeCheck = (event) => {
    setType(event.target.value);
  };

  const columns = [
    { field: "id", headerName: "?????????", width: 140 },
    { field: "firstName", headerName: "????????????", width: 110 },
    { field: "lastName", headerName: "????????????", width: 120 },
    {
      field: "age",
      headerName: "????????????",
      type: "number",
      width: 110,
    },
    {
      field: "age",
      headerName: "????????????",
      type: "number",
      width: 110,
    },
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
  ];

  return (
    <div>
      <div className={classes.root}>
        <div>
          <p>
            <b>???????????? ?????? ??????</b>{" "}
            <button className={classes.btn2}>????????????</button>
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
                borderRadius: 10,
                backgroundColor: "white",
                minWidth: 600,
                width: "96%",
                // height: "100%",
                height: 590,
                padding: 15,
                overflowY: "scroll",
                overflowX: "hidden",
              }}
            >
              <p>???????????? ????????? ????????? ??????????????????</p>
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
              <p>????????? ??????????????????</p>
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
                    value={type}
                    // value="hi"
                    onChange={typeCheck}
                    style={{ display: "inline" }}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      label="???????????? ????????? ?????? ????????????"
                      style={{ width: "55%" }}
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio color="primary" />}
                      label="???????????? 1??? ?????? ?????? ??????"
                      style={{ width: "45%" }}
                    />
                    <br />
                    <FormControlLabel
                      value="3"
                      control={<Radio color="primary" />}
                      label="???????????? ?????? ?????? ?????? ??????"
                      style={{ width: "55%" }}
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio color="primary" />}
                      label="????????? ???????????? ??????(SMS)"
                      style={{ width: "45%" }}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <p>??????????????? ??????????????????</p>
              <div style={{ display: "flex" }}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-filled-label">
                    ????????????
                  </InputLabel>
                  <Select
                    native
                    style={{ width: 130, height: 50, backgroundColor: "white" }}
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    // value={age}
                    onChange={handleChange}
                  >
                    <option value={10}>??????+SMS</option>
                    <option value={20}>??????</option>
                    <option value={30}>SMS</option>
                  </Select>
                </FormControl>

                <div
                  style={{
                    // border: "1px solid black",
                    backgroundColor: "#F5F5F5",
                    width: 430,
                    height: 40,
                    paddingLeft: 15,
                    // paddingTop: 15,
                    borderRadius: 10,
                    padding: 5,
                    marginLeft: 10,
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox name="checkedB" color="primary" size="small" />
                    }
                    label={
                      <span style={{ fontSize: 11 }}>
                        {" "}
                        SMS ????????? ????????? ?????? ??????
                      </span>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        // onChange={handleChange}
                        name="checkedB"
                        color="primary"
                        size="small"
                      />
                    }
                    label={
                      <span style={{ fontSize: 11 }}>
                        {" "}
                        ?????? ????????? ????????? ?????? ???????????? ??????
                      </span>
                    }
                  />
                </div>
              </div>
              <br />
              <div style={{ width: 600, display: "flex" }}>
                ?????? ????????? ??????????????????
                <br />
                (????????? ??? ?????? ?????? ??????)
                <TextField
                  id="filled-multiline-flexible"
                  label="?????? ?????? ??????"
                  multiline
                  rowsMax={4}
                  // value={value}
                  onChange={handleChange}
                  variant="filled"
                  style={{ width: 400, paddingLeft: 6 }}
                />
              </div>
              <div style={{ paddingTop: 10, width: 600, display: "flex" }}>
                ?????? ????????? ??????????????????
                <br />
                (????????? ??? ?????? ?????? ??????)
                <TextField
                  id="filled-multiline-flexible"
                  label="?????? ?????? ??????"
                  multiline
                  rowsMax={4}
                  // value={value}
                  onChange={handleChange}
                  variant="filled"
                  style={{ width: 400, paddingLeft: 6 }}
                />
              </div>
              <div style={{ paddingTop: 10, width: 600, display: "flex" }}>
                SMS????????? ??????????????????
                <br />
                (????????? ??? ?????? ?????? ??????)
                <TextField
                  id="filled-multiline-flexible"
                  label="SMS ?????? ??????"
                  multiline
                  rowsMax={4}
                  // value={value}
                  onChange={handleChange}
                  variant="filled"
                  style={{ width: 400, paddingLeft: 6 }}
                />
              </div>
              <br />
              <span>????????? ????????? ??????????????????</span>
              <button
                className={classes.btn2}
                style={{ backgroundColor: "#FFFFFF" }}
              >
                {" "}
                ????????????
              </button>

              <div style={{ paddingTop: 10, display: "flex" }}>
                <TextField
                  id="filled-basic"
                  label="?????? ??????"
                  variant="filled"
                  style={{
                    width: 120,
                    paddingRight: 15,
                    float: "right",
                  }}
                />
                <TextField
                  id="filled-basic"
                  label="????????? ??????"
                  variant="filled"
                  style={{
                    width: 200,
                    paddingRight: 15,
                    float: "right",
                  }}
                />
                <TextField
                  id="filled-basic"
                  label="???????????? ??????"
                  variant="filled"
                  style={{
                    width: 180,
                    paddingRight: 15,
                    float: "right",
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
