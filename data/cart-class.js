class Cart{
  cartItem;

  #localStorageKey ;

  Constructor(localStorageKey){
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage(){

    this.cartItem=JSON.parse(localStorage.getItem(this.#localStorageKey));
  
    if(!this.cartItem)
    {
    
      this.cartItem = [{
    
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


  addToCart(productId)
{
  let matchingItem = '';
  this.cartItem.forEach((item) => {
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
      cartItem.push({
        productId : productId,
        quantity : 1,
        deliveryId :'1'
      });
    }
   this.saveToLocalStorage(); 
}

removeFromCart(productId)
{
  const newCart = [];

  this.cartItem.forEach((cartItem) => {
    if( productId !== cartItem.productId){
    
      newCart.push(cartItem);
    }
    
    });

    this.cartItem = newCart;
   this.saveToLocalStorage();
   

}


saveToLocalStorage()
{
  localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItem));
}






updateDeliveryOptionId(productId,deliveryId)
{
  let matchingItem = '';
  this.cartItem.forEach((item) => {
    if( productId === item.productId)
    {
      matchingItem = item;
    } 
   });
matchingItem.deliveryId = deliveryId;
this.saveToLocalStorage();

}

}

const  cart=new Cart('cart-oop');
const businessCart = new Cart('cart-oop-business');


console.log(cart);
console.log(businessCart);






 
 

