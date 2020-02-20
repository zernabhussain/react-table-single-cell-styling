import React from "react";
import MaUTable from "@material-ui/core/Table";
import PropTypes from "prop-types";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTable } from "react-table";

const EnhancedTable = ({ columns, data }) => {
  const { getTableProps, headerGroups, prepareRow, rows } = useTable(
    {
      columns,
      data
    },
    hooks => {
      return hooks.allColumns.push(columns => [
        {
          Header: "Age",
          accessor: "age",
          Cell: props => {
            return (
              <div style={{ background: "#bcf5bc" }}>{props.cell.value}</div>
            );
          }
        },
        ...columns
      ]);
    }
  );

  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell>{column.render("Header")}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map(row => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
};

EnhancedTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
};

export default EnhancedTable;
