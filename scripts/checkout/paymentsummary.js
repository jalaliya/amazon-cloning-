import {cart} from '../../data/cart.js';
import { deliveryOptions } from '../../data/deliveryOptions.js';
import {products} from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';


export function renderPaymentSummary()
{
  let matchingProduct;
  let priceCents = 0;
  let totalShippingPrice = 0;
  let ourDelOption = '';
  let totalBeforeTax = 0;
  let estimatedTax = 0;
  let orderTotal = 0;

  cart.forEach((cartItem)=> {

    const productId = cartItem.productId;

    products.forEach((product) => {
      if(product.id === productId)
        {
          matchingProduct=product;
        }

    });
  

  priceCents += matchingProduct.priceCents * cartItem.quantity;
  const delId = cartItem.deliveryId;

 

deliveryOptions.forEach((option) => {
if(option.deliveryId  === delId)
{
  ourDelOption = option;

}
});

const shippingPrice=ourDelOption.shippingPriceCent;
totalShippingPrice += shippingPrice;
totalBeforeTax = priceCents  + totalShippingPrice;
estimatedTax = totalBeforeTax * 0.1;
orderTotal = totalBeforeTax + estimatedTax ;
  
});
  console.log(priceCents);
  console.log(totalShippingPrice);
  console.log(totalBeforeTax);
  console.log(estimatedTax);
  console.log(orderTotal);


const paymentsummaryHTML  =
`
<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(priceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(totalShippingPrice)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(estimatedTax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(orderTotal)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>


`;

document.querySelector('.js-payment-summary')
.innerHTML = paymentsummaryHTML;


}



  
 

