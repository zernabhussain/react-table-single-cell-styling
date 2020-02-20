import React from "react";
import EnhancedTable from "./components/EnhancedTable";
import makeData from "./makeData";

const App = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        accessor: "lastName"
      } 
    ],
    []
  );

  const data = makeData(20);
  return <EnhancedTable columns={columns} data={data} />;
};

export default App;
