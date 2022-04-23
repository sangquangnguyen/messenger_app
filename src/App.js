import React from "react";
import "./App.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import useAxios from "axios-hooks";
import Accounts from "./components/Accounts";

const App = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [{ data, loading: isLoading }] = useAxios({
    url: "http://localhost:3001/api/accounts",
  });

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", flex: 1 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="App">
      {selectedUser == null ? (
        <Accounts
          onSelectedAccount={(user) => setSelectedUser(user)}
          data={data}
        />
      ) : (
        <div />
      )}
    </div>
  );
};

export default App;
