import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import useAxios from "axios-hooks";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  const firstCharacter = name.split(" ")?.[0]?.[0];
  const secondCharacter = name.split(" ")?.[1]?.[0];

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: [firstCharacter, secondCharacter].filter(Boolean),
  };
}

const Accounts = ({ onSelectedAccount }) => {
  const [{ data, loading: isLoading }] = useAxios({
    url: "http://localhost:3001/api/accounts",
  });

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography sx={{ mb: 2 }} variant="h4">
        Select an account
      </Typography>
      <Paper variant="outlined" sx={{ width: 450, pt: 1, pb: 1 }}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {data?.map((account) => {
            const labelId = `checkbox-list-secondary-label-${account.id}`;
            return (
              <ListItem
                key={account.id}
                disablePadding
                onClick={() => onSelectedAccount(account)}
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar {...stringAvatar(account?.name)} />
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={account.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </Box>
  );
};

export default Accounts;
