import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Person4Icon from '@mui/icons-material/Person4';
import { useNavigate } from 'react-router-dom';

export default function Drawer() {
  const navigate = useNavigate('');
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    // right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        <div style={{alignItems:'center'}}>
          <h1 style={{display:'flex',flexDirection:'row'}}>
          <div style={{color:'red'}}>
            N
          </div>
          <div style={{color:'yellow'}}>
            I
          </div>
          <div style={{color:'blue'}}>
            A
          </div>
          
          </h1>

        </div>
        <Button><AccountCircleIcon />Osama Bin Laden</Button>
        <Button><Person2Icon />Followers</Button>
        <Button><Person4Icon />Following</Button>
        <br/>
        <Button onClick={() => navigate('/')}><LogoutIcon />Log Out</Button>
      </List>
      <Divider />

    </Box>
  );

  return (
    <div>
      {['menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <MenuIcon onClick={toggleDrawer(anchor, true)}/> */}
          <Avatar
            sx={{ bgcolor: deepOrange[500] }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
            onClick={toggleDrawer(anchor, true)}
          >
            OB
          </Avatar>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}