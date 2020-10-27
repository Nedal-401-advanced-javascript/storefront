import React from "react";
import { connect } from "react-redux";
import { updateCart } from "../../store/cart";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles ({
  root: {
    // minWidth: 275,
    // width: "25%",
    flexGrow: 1,
    padding: 1,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

});
function Products(props) {
  const classes = useStyles();
 

  console.log(props.Products);
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
        {props.Products.products.map((ele, i) => {
          return (
              <Grid item xs={4}>
                <Card className={classes.root} variant="outlined" key={i}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {ele.category}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {ele.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {ele.price}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {ele.description}
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => props.updateCart(ele.name)}
                    >
                      add to cart
                    </Button>
                  </CardActions>
                </Card>
            </Grid>
          );
        })}
        </Grid>
      </Grid>
    </div>
  );
}
// state came from the reducer  combineReducers({ products, categories });
const mapStateToProps = (state) => ({
  Products: state.products,
});
const mapDispatchToProps = { updateCart };
export default connect(mapStateToProps, mapDispatchToProps)(Products);
