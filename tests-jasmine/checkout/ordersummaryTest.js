import {renderOrederSummary} from '../../scripts/checkout/ordersummary.js';
import {loadFromStorage} from '../../data/cart.js';

describe('test suite: render Order Summary', () => {

  const productId1='e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
  const productId2='15b6fc6f-327a-4ec4-896f-486349e85a3d';
  beforeEach(() =>{
    document.querySelector('.js-test-container').innerHTML = `
    <div class="js-order-summary">
  
    </div>
      <div class="js-payment-summary">
       </div>
  
  `;
  
    spyOn(localStorage,'getItem').and.callFake(() =>{
      return JSON.stringify([{
    
        productId: productId1,
        quantity: 2,
        deliveryId: '1'
    
      }, {
        productId:productId2 ,
        quantity: 1,
        deliveryId: '2'
    
      }
      ]);
    });
    loadFromStorage();
    renderOrederSummary();

  });

  afterEach(() => {
    document.querySelector('.js-test-container').innerHTML = '';
  });


  it('displays the cart', () => {

  

expect(
  document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('Quantity: 2 ');


  expect(
    document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('Quantity: 1 ');
  
  });



it('clicking Delete button',() => {
 

  document.querySelector(`.js-delete-link-${productId1}`).click();
  expect(document.querySelectorAll('.js-cart-item-container').length).toEqual(1);

});

});