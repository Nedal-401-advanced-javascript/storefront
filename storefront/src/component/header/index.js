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

import purple from "@material-ui/core/colors/purple";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/">
            <Link color="textPrimary" component="button" underline="none">
              <Typography
                color="secondary"
                variant="h4"
                className={classes.title}
              >
                Our Store
              </Typography>
            </Link>
          </NavLink>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default Header;
