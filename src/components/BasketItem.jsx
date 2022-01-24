function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props;
  return (
    <li className='collection-item'>
      {name} * {quantity} = {price * quantity} грн
      <span
        className='material-icons basket-quantity'
        onClick={() => incQuantity(id)}
      >
        add
      </span>
      <span
        className='material-icons basket-quantity'
        onClick={() => decQuantity(id)}
      >
        remove
      </span>
      <span className='secondary-content' onClick={() => removeFromBasket(id)}>
        <i className='material-icons closeItem'>close</i>
      </span>
    </li>
  );
}

export { BasketItem };
