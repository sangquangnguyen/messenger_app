import React from "react";
import "./App.css";
import Accounts from "./components/Accounts";
import Chat from "./components/Chat";

const App = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);

  return (
    <div className="App">
      {selectedUser == null ? (
        <Accounts onSelectedAccount={setSelectedUser} />
      ) : (
        <Chat user={selectedUser} />
      )}
    </div>
  );
};

export default App;
