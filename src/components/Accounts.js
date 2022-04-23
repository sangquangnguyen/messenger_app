import React from "react";

const Accounts = ({ data, onSelectedAccount }) => {
  return (
    <ul>
      {data.map((account) => (
        <li onClick={() => onSelectedAccount(account)} key={account.id}>
          {account.name}
        </li>
      ))}
    </ul>
  );
};

export default Accounts;
