import React from "react";
import { connect } from "react-redux";
import { delItem } from "../../store/cart";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
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
      main: "#000",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cart: {
    flexGrow: 1,
  },
}));
function SimpleCart(props) {
  const classes = useStyles();

  let items = props.Cart.length ? (
    props.Cart.map((item, i) => (
      <li key={i} id={i}>
        {item.name}
        <button onClick={(e) => props.delItem(e.target.parentNode.id)}>
          X
        </button>
      </li>
    ))
  ) : (
    <h3>there is not any item in cart</h3>
  );
  return (
    <ThemeProvider theme={theme}>
      <h3>
        <NavLink to="/cart">
          <Link color="textPrimary" component="button" underline="none">
            <Typography
              color="primary"
              variant="h6"
              className={classes.cart}
            >
              ({items.length || 0}) items in Cart
            </Typography>
          </Link>
        </NavLink>
      </h3>
      <ul>{items}</ul>
    </ThemeProvider>
  );
}
// send the state for props

const mapStateToProps = (state) => ({
  Cart: state.cart,
});
const mapDispatchToProps = (dispatch) => {
  return {
    delItem: (id) => dispatch(delItem(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
// connect
