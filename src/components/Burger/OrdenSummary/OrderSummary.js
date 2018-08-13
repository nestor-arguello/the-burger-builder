import React from 'react';
import Button from '../../UI/Button/Button'

const ordenSummary = ({ ingredients }) => {
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
      <p>Continue to Checkout?</p>
      <Button btnType="Succes">Continue</Button>
      <Button btnType="Danger">Cancel</Button>
    </React.Fragment>
  );
};

export default ordenSummary;
