import React from 'react';
import Button from '../../UI/Button/Button';

const ordenSummary = ({
  ingredients,
  purchaseCancelled,
  purchaseContinued,
  price
}) => {
  const ingerdientsSummary = Object.keys(ingredients).map(
    ingKey => {
      return (
        <li key={ingKey}>
          <span style={{ textTransform: 'capitalize' }}>
            {ingKey}
          </span>
          : {ingredients[ingKey]}
        </li>
      );
    }
  );

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>
        A delicious burger with the following ingredients:
      </p>
      <ul>{ingerdientsSummary}</ul>
      <p><strong>Total Price: {price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button clicked={purchaseCancelled} Danger>
        CANCEL
      </Button>
      <Button clicked={purchaseContinued} Succes>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default ordenSummary;
