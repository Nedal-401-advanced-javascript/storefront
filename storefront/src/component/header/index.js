import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import {
  makeStyles,
} from "@material-ui/core/styles";





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
