import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
const InsaPer = () => {
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
      height: 625,
      fontSize: 16,
    },
    btn2: {
      width: 68,
      height: 30,
      backgroundColor: "#FFFFFF",
      border: "1px solid #007DFF",
      BorderRadius: 5,
      color: "#007DFF",
    },
    tleft: {
      display: "table-cell",
      border: "1px solid black",
      width: 200,
      height: 70,
      verticalAlign: "middle",
    },
    tright: {
      display: "table-cell",
      border: "1px solid black",
      verticalAlign: "middle",
      width: 600,
      height: 70,
    },
  });
  const classes = useStyles();
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
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
            <b>인사정보 일괄</b>{" "}
            <button className={classes.btn2}>일괄설정</button>
          </p>
        </div>
        <div className={classes.box}>
          <div style={{ height: 625, width: 673, backgroundColor: "white" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              checkboxSelection
            />
          </div>
          <div
            style={{
              width: 850,
              height: 600,
              padding: 10,
              backgroundColor: "#FFFFFF",
              display: "table",
            }}
          >
            <div style={{ display: "table-row" }}>
              <div className={classes.tleft}>거래처구분</div>
              <div className={classes.tright}>
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
              <div style={{ display: "table-cell", border: "1px solid black" }}>
                dddd
              </div>
            </div>
            <div style={{ display: "table-row" }}>
              <div className={classes.tleft}>안내자료 전달일</div>
              <div style={{ display: "table-cell", border: "1px solid black" }}>
                급여대행거래처
              </div>
            </div>

            <div style={{ display: "table-row" }}>
              <div className={classes.tleft}>작성상담 일정</div>
              <div style={{ display: "table-cell", border: "1px solid black" }}>
                급여대행거래처
              </div>
            </div>
            <div style={{ display: "table-row" }}>
              <div className={classes.tleft}>1차 일정</div>
              <div style={{ display: "table-cell", border: "1px solid black" }}>
                급여대행거래처
              </div>
            </div>
            <div style={{ display: "table-row" }}>
              <div className={classes.tleft}>2차 일정</div>
              <div style={{ display: "table-cell", border: "1px solid black" }}>
                급여대행거래처
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InsaPer;
