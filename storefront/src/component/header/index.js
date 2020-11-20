import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";
import purple from "@material-ui/core/colors/purple";
const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
  },
});

const innerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: green[500],
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#ffff",
    },
  },
});
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));
const useStyles = makeStyles({
  root: {
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink to="/">
          <Link component="button" color="initial" underline="none">
            <Typography className={classes.root} variant="h4">Our Store</Typography>
          </Link>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
