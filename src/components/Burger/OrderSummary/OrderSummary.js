import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This could be a functional component
  componentWillUpdate (nextProps, nextState) {
    console.log('[OrderSummary] WillUpdate');
  }
  
  
  render() {
    const {
      ingredients,
      purchaseCancelled,
      purchaseContinued,
      price
    } = this.props;

    const ingredientsSummary = Object.keys(ingredients).map(
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
        <ul style={{ padding: '20px' }}>
          {ingredientsSummary}
        </ul>
        <p>
          <strong>Total Price: {price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={purchaseCancelled} Danger>
          CANCEL
        </Button>
        <Button clicked={purchaseContinued} Succes>
          CONTINUE
        </Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
