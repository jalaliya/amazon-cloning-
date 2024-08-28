import {cart,removeFromCart,updateDeliveryOptionId} from '../../data/cart.js';
import { products } from '../../data/products.js';
import { formatCurrency } from '.././utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import {deliveryOptions} from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentsummary.js';


export function renderOrederSummary()
{

  let cartHTML ='';
  cart.forEach((cartItem) => {
    const productId=cartItem.productId;
    
    let matchingProduct='';
    
  products.forEach((product) => {
    
  
    if(product.id === productId)
    {
     matchingProduct = product;
    }
  });
     
      const deliveryOptionId = cartItem.deliveryId;
  
      let delOption;
      
      deliveryOptions.forEach((option) => {
        if(option.deliveryId === deliveryOptionId)
        {
         delOption = option;
        }
  
        
      });
  
      const today=dayjs();
      
      const deliveryDate =  today.add(delOption.deliveryDays,'days');
     
      const dateString = deliveryDate.format('dddd, MMMM D');
  
   
    cartHTML += 
  
  
  `
  <div class="cart-item-container js-cart-item-container js-cart-item-container-${matchingProduct.id}">
              <div class="delivery-date">
               Delivery Date:${dateString}
              </div>
  
              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${matchingProduct.image}">
  
                <div class="cart-item-details">
                  <div class="product-name">
                    ${matchingProduct.name}
                  </div>
                  <div class="product-price">
                   ${formatCurrency(matchingProduct.priceCents)}
                  </div>
                  <div class="product-quantity js-product-quantity-${matchingProduct.id}">
                    <span>
                      Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-btn
                    js-delete-link-${matchingProduct.id}"
                    data-product-id=${matchingProduct.id}>
                      Delete
                    </span>
                  </div>
                </div>
  
                <div class="delivery-options">
                  
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                 
                  ${deliveryOption(matchingProduct,cartItem)}
                </div>
              </div>
            </div>
  
  `;
  
  });
  //console.log(cartHTML);
  
  document.querySelector('.js-order-summary')
  .innerHTML = cartHTML ;
  
  
  
  
  document.querySelectorAll('.js-delete-btn')
  .forEach((button) => {
  button.addEventListener('click',() => {
  const productId = button.dataset.productId;
  removeFromCart(productId);
  console.log(cart);
  
  const container = document.querySelector(`.js-cart-item-container-${productId}`);
  container.remove();
  //console.log(container);
  renderPaymentSummary();
  });
  
  } );
  
  
  function deliveryOption(matchingProduct,cartItem)
  {
    let deliveryOptionHTML='';
    deliveryOptions.forEach((option) => {
  
      const today=dayjs();
      
      const deliveryDate =  today.add(option.deliveryDays,'days');
     
      const dateString = deliveryDate.format('dddd, MMMM D');
      
      const priceString = option.shippingPriceCent 
        === 0 ? 'Free' : `$${formatCurrency(option.shippingPriceCent)} - ` 
  
  
  
        const ischecked = cartItem.deliveryId === option.deliveryId;
        
      deliveryOptionHTML +=
      `
     
       <div class="delivery-option js-delivery-option"
       data-product-id="${matchingProduct.id}"
       data-delivery-id="${option.deliveryId}">
                    <input type="radio"
                   ${ischecked ? 'checked' : ''} 
                      class="delivery-option-input"
                      name="${matchingProduct.id}">
                    <div>
                      <div class="delivery-option-date">
                       ${dateString}
                      </div>
                      <div class="delivery-option-price">
                        ${priceString}  Shipping
                      </div>
                    </div>
                  </div>
             
          
      `
    });
  
    return deliveryOptionHTML;
  
  }
  
  
  document.querySelectorAll('.js-delivery-option')
  .forEach((element) => {
  
    element.addEventListener('click', () =>{
  
      const productId = element.dataset.productId;
      const deliveryId = element.dataset.deliveryId;
      updateDeliveryOptionId(productId,deliveryId);
      renderOrederSummary();
      renderPaymentSummary();
  
    });
  
  });
  
}


