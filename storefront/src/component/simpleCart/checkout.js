import { connect } from "react-redux";
function ShoppingCart(props) {
  const checkout = (e) => {
    e.preventDefault();
    alert("Thank you for your purchase");
  };
  let total = props.allItems.reduce((total, currentValue) => {
    return total + parseInt(currentValue.price);
  }, 0);

  let checkoutDetails = props.allItems.map((item, i) => {
    return (
      <tr key={i}>
        <td>{i}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
      </tr>
    );
  });
  console.log(total);
  return (
    <div>
      <h1>Order Summary</h1>
      <table>
        <tr>
          <th>num</th>
          <th>item</th>
          <th>price</th>
        </tr>
        {checkoutDetails}
        <tr>
          <td>Total Price</td>
          <td></td>
          <td>{total}</td>
        </tr>
      </table>
      <form onSubmit={(e) => checkout(e)}>
        <section className="formOne">
          <h2>Billing Address</h2>
          <input type="text" name="name" placeholder="Full Name" />
          <br />
          <input type="text" name="address" placeholder="Address" />
          <br />
          <input type="text" name="city" placeholder="City" />
          <br />
          <input type="text" name="state" placeholder="State" />
          <br />
          <input type="text" name="zip" placeholder="Zip" />
          <br />
        </section>
        <section className="formSecond">
          <h2>Payment details</h2>
          <input type="text" name="cardNum" placeholder="Credit Card #" />
          <br />
          <input type="date" name="date" />
          <br />
          <input type="text" name="cvv" placeholder="CVV" />
          <br />
        </section>
        <button>Checkout</button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  allItems: state.cart,
});
export default connect(mapStateToProps)(ShoppingCart);
