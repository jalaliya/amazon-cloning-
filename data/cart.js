
export let cart;

loadFromStorage();
export function loadFromStorage(){

  cart=JSON.parse(localStorage.getItem('cart'));

  if(!cart)
  {
  
    cart = [{
  
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity:2,
      deliveryId : '1'
    
    }, {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity:1,
      deliveryId : '2'
    
    }
    ];
  
  }

}


export function addToCart(productId)
{
  let matchingItem = '';
  cart.forEach((item) => {
    if( productId === item.productId)
    {
      matchingItem = item;
    } 
   });
    if(matchingItem)
    {
      matchingItem.quantity += 1;
    }
    else{
      cart.push({
        productId : productId,
        quantity : 1,
        deliveryId :'1'
      });
    }
   saveToLocalStorage(); 
}


export function removeFromCart(productId)
{
  const newCart = [];

  cart.forEach((cartItem) => {
    if( productId !== cartItem.productId){
    
      newCart.push(cartItem);
    }
    
    });

    cart = newCart;
   saveToLocalStorage();
   

}

function saveToLocalStorage()
{
  localStorage.setItem('cart',JSON.stringify(cart));
}


export function updateDeliveryOptionId(productId,deliveryId)
{
  let matchingItem = '';
  cart.forEach((item) => {
    if( productId === item.productId)
    {
      matchingItem = item;
    } 
   });
matchingItem.deliveryId = deliveryId;
saveToLocalStorage();

}