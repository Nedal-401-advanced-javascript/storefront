function SimpleCart(props) {
  return (
    <ul>
      {props.cart.map((item,i) => (
        <li key={i}>{item.title}</li>
      ))}
    </ul>
  );
}
