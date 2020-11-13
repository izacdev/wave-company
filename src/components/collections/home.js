import React from 'react';
import {Link} from "react-router-dom";
import './logos.jpg';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import RoomService from '@material-ui/icons/RoomService';
import Info from '@material-ui/icons/InfoRounded'
import Account from '@material-ui/icons/AccountCircleRounded';
import Contact from '@material-ui/icons/ContactSupportRounded';
import Project from '@material-ui/icons/AssignmentIndRounded'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import FaceBook from '@material-ui/icons/Facebook'
import WhatsApp from '@material-ui/icons/WhatsApp'
import Instagram from '@material-ui/icons/Instagram'
import Youtube from '@material-ui/icons/YouTube'
import Call from '@material-ui/icons/Call'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className="header">
            Wave Software Company
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List style={listStyle}>
          {['', ''].map((text, index) => (
            <ListItem button  key={ text } >
              <ListItemIcon>
              {index % 2 === 0 ? 
              <Link to="/services">
              <div className="servs">
              <RoomService  />
              Services
              </div>
              </Link> 
              :
              <Link to="/inbox">
              <div className="inbox">
              <InboxIcon /> 
              Inbox
              </div>
              </Link>
              }
              </ListItemIcon>
              <ListItemText primary={ text } />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Divider />
        <List style={listStyle}>
          {['', ''].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
              {index % 2 === 0 ?
              <Link to="/signup">
              <div className="account">
               <Account /> 
               Account
               </div>
               </Link> : 
              <Link to="/about">
              <div className="about">
              <Info /> 
              About
              </div>
              </Link>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Divider />
        <List style={listStyle}>
          {['', 'Projects'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
              {index % 3 === 0 ?
              <Link to="/contact">
              <div className="contact">
               <Project /> 
               Contact Us
               </div>
               </Link>: 
               
              <Contact /> 
              }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
            <img src="./logos.jpg" className="logo" alt="Logo" 
            style={logoStyle} />
        </Typography>
        <Typography paragraph>
         <div >
         <h2>Our Services</h2>
         <br/>
         <div className="data">
           We Develop E-Websites and Personal Websites/Potfolios.
           <br/>
           <br/>
           We Develop E-Web Applications in your format.
           <br/>
           <br/>
           We Track Mobile phones Which are stolen.
           <br/>
           <br/>
           Software Installations on every operating system.
           <br/>
           <br/>
           Mobile phones software fixing is done at free cost.
           <br/>
           <br/>
           Provide Space to the developers in intern.
           <br/>
           <br/>
           Click the bars at top left corner to enter into our services.
           </div>
         </div>
         <div className="socialIcons">
                <FaceBook style={facebookStyle}>
                </FaceBook>
                <WhatsApp style={whatsappStyle}/>
                <Instagram style={instaStyle}/>
                <Youtube style={youtubeStyle}/>
                <Call style={callStyle}/>
                </div>
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        </main>
    </div>
  );
}

const listStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "spaceEvenly",
  alignItems: "initial",
  PointerEvent: "none"
};

const logoStyle = {
  height: "140px",
  width: "140px",
  borderRadius: "100px",
  PointerEvent: "none"
};
const facebookStyle = {
  backgroundColor: "#3f51b5",
  borderRadius: "20px",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "10px",
  paddingRight: "10px"
}
const whatsappStyle = {
  backgroundColor: "green",
  borderRadius: "20px",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "10px",
  paddingRight: "10px"
}
const instaStyle = {
  backgroundColor: "rgb(109, 23, 23)",
  borderRadius: "20px",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "10px",
  paddingRight: "10px"
}
const youtubeStyle = {
  backgroundColor: "red",
  borderRadius: "20px",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "10px",
  paddingRight: "10px"
}
const callStyle = {
  backgroundColor: "#ccc",
  borderRadius: "20px",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "10px",
  paddingRight: "10px"
}

// export default home