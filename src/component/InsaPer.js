import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";

const SheduleSetting = () => {
  const useStyles = makeStyles({
    root: {
      // width: 1550,
      height: 680,
      // border: "1px solid red",
      marginLeft: 350,
      marginTop: 30,
      // overflowX: "hidden",
      boxSizing: "border-box",
    },
    schedulelist: {
      width: 673,
      height: 730,
      position: "relative",
    },
    box: {
      display: "flex",
      justifyContent: "space-between",
      // width: 1550,
      width: "98%",
      //   borderRadius: 20,
      // backgroundColor: "red",
      // height: 800,
      height: 630,
      fontSize: 16,
      // overflowX: "scroll",
    },
    // rbox: {
    //   width: 850,
    //   borderRadius: 10,
    //   //   overflowY: "scroll",
    //   overflowX: "hidden",
    // },
    btn2: {
      width: "auto",
      height: 30,
      // backgroundColor: "#FFFFFF",
      border: "1px solid #007DFF",
      borderRadius: 5,
      color: "#007DFF",
      marginLeft: 5,
    },
    table: {
      width: 1400,
      // maxHeight: 600,
      // overflowY: "auto",
      // width: "100%",
      // overflowX: "scroll",
      padding: 10,
      backgroundColor: "#FFFFFF",
      // display: "table",
      border: "1px solid black",
      borderRadius: 10,
      //   paddingRight: 50,
    },
    tbox: {
      // width: "100%",
      height: 630,
      overflowX: "scroll",
      // overflowY: "hidden",
      padding: 0,
      textAlign: "center",
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
    { field: "lastName", headerName: "처리상태", width: 120 },
    { field: "lastName", headerName: "등록날짜", width: 120 },
    { field: "lastName", headerName: "완료날짜", width: 120 },
    {
      field: "age",
      headerName: "처리자",
      type: "number",
      width: 120,
    },
    {
      field: "age",
      headerName: "처리결과",
      type: "number",
      width: 120,
    },
  ];
  function createData(name, calories, fat, carbs, protein, name2) {
    return { name, calories, fat, carbs, protein, name2 };
  }
  const rows = [
    createData(
      "Cupcake",
      305,
      305,
      "2021-01-01 11:31:52",

      "2021-12-31 11:31:52",

      "처리자1"
    ),
    createData("Donut", 452, 25.0, 51, 4.9, "처리자1"),
    createData("Eclair", 262, 16.0, 24, 6.0, "처리자1"),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "처리자1"),
    createData("Gingerbread", 356, 16.0, 49, 3.9, "처리자1"),
    createData("Honeycomb", 408, 3.2, 87, 6.5, "처리자1"),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "처리자1"),
    createData("Jelly Bean", 375, 0.0, 94, 0.0, "처리자1"),
    createData("KitKat", 518, 26.0, 65, 7.0, "처리자1"),
    createData("Lollipop", 392, 0.2, 98, 0.0, "처리자1"),
    createData("Marshmallow", 318, 0, 81, 2.0, "처리자1"),
    createData("Nougat", 360, 19.0, 9, 37.0, "처리자1"),
    createData("Oreo", 437, 18.0, 63, 4.0, "처리자1"),
    createData("Cupcake", 305, 3.7, 67, 4.3, "처리자1"),
    createData("Donut", 452, 25.0, 51, 4.9, "처리자1"),
    createData("Eclair", 262, 16.0, 24, 6.0, "처리자1"),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "처리자1"),
    createData("Gingerbread", 356, 16.0, 49, 3.9, "처리자1"),
    createData("Honeycomb", 408, 3.2, 87, 6.5, "처리자1"),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "처리자1"),
    createData("Jelly Bean", 375, 0.0, 94, 0.0, "처리자1"),
    createData("KitKat", 518, 26.0, 65, 7.0, "처리자1"),
    createData("Lollipop", 392, 0.2, 98, 0.0, "처리자1"),
    createData("Marshmallow", 318, 0, 81, 2.0, "처리자1"),
    createData("Nougat", 360, 19.0, 9, 37.0, "처리자1"),
    createData("Oreo", 437, 18.0, 63, 4.0, "처리자1"),
  ];
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  // export default
  function EnhancedTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("calories");
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(20);

    // const handleRequestSort = (event, property) => {
    //   const isAsc = orderBy === property && order === "asc";
    //   setOrder(isAsc ? "desc" : "asc");
    //   setOrderBy(property);
    // };

    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = rows.map((n) => n.name);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };

    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }

      setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    // const handleChangeDense = (event) => {
    //   setDense(event.target.checked);
    // };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
      <div>
        <Paper>
          {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
          <TableContainer style={{ backgroundColor: "#F5F5F5", height: 580 }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              style={{
                width: 2000,
                height: 580,
                textAlign: "center",
                // overflowX: "scroll",
              }}
              // className={classes.table}
              // aria-labelledby="tableTitle"
              // size={dense ? "small" : "medium"}
              // aria-label="enhanced table"
            >
              <TableHead
              // stickyHeader
              // aria-label="sticky table"
              // className={classes.thead}
              // style={{ position: "sticky" }}
              >
                <TableRow style={{ fontWeight: "bold" }}>
                  <TableCell
                    padding="checkbox"
                    rowspan={2}
                    style={{ textAlign: "center" }}
                  >
                    <Checkbox
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      // checked={rowCount > 0 && numSelected === rowCount}
                      color="primary"
                      onChange={handleSelectAllClick}
                      inputProps={{ "aria-label": "sall desserts" }}
                    />
                  </TableCell>
                  {/* {headCells.map((headCell) => ( */}
                  <TableCell
                    rowspan={2}
                    style={{
                      borderRight: "1px solid lightgray",
                      width: 120,
                      fontWeight: "bold",
                    }}
                  >
                    회사명
                  </TableCell>
                  <TableCell
                    colspan={5}
                    align="center"
                    style={{
                      borderRight: "1px solid lightgray",
                      fontWeight: "bold",
                      textAlign: "center",
                      width: 600,
                    }}
                  >
                    대상자 가져오기
                  </TableCell>
                  <TableCell
                    colspan={5}
                    align="center"
                    style={{
                      borderRight: "1px solid lightgray",
                      fontWeight: "bold",
                      width: 600,
                    }}
                  >
                    연말정산 정보갱신
                  </TableCell>
                  <TableCell
                    colspan={5}
                    align="center"
                    style={{ fontWeight: "bold", width: 600 }}
                  >
                    인사정보 동기화
                  </TableCell>
                  {/* ))} */}
                </TableRow>
                <TableRow style={{ textAlign: "center" }}>
                  <TableCell
                    style={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    처리결과
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>처리상태</TableCell>
                  <TableCell
                    style={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    등록날짜
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>완료날짜</TableCell>
                  <TableCell
                    style={{
                      borderRight: "1px solid lightgray",
                      fontWeight: "bold",
                    }}
                  >
                    처리자
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>처리결과</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>처리상태</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>등록날짜</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>완료날짜</TableCell>
                  <TableCell
                    style={{
                      borderRight: "1px solid lightgray",
                      fontWeight: "bold",
                    }}
                  >
                    처리자
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>처리결과</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>처리상태</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>등록날짜</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>완료날짜</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>처리자</TableCell>
                </TableRow>
              </TableHead>

              {/* <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              /> */}
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            size="small"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        <TableCell align="right">{row.name2}</TableCell>

                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        <TableCell align="right">{row.name2}</TableCell>

                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        <TableCell align="right">{row.name2}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[20]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        {/* <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        /> */}
      </div>
    );
  }

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
          <div className={classes.tbox}>
            <EnhancedTable />

            {/* <EnhancedTable /> */}
            {/* <DataGrid
              rows={rows}
              columns={columns2}
              pageSize={5}
              checkboxSelection
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SheduleSetting;
