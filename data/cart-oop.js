const cart={
  cartItem:undefined,

  loadFromStorage(){

    this.cartItem=JSON.parse(localStorage.getItem('cart-oop'));
  
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
  
  },
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
      this.cartItem.push({
        productId : productId,
        quantity : 1,
        deliveryId :'1'
      });
    }
   this.saveToLocalStorage(); 
},

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
   

},

saveToLocalStorage()
{
  localStorage.setItem('cart-oop',JSON.stringify(this.cartItem));
},


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

};


const business_cart={
  cartItem:undefined,

  loadFromStorage(){

    this.cartItem=JSON.parse(localStorage.getItem('cart-oop-business'));
  
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
      
      },{
        productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        quantity:1,
        deliveryId : '2'

      }
      ];
    
    }
  
  },
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
      this.cartItem.push({
        productId : productId,
        quantity : 1,
        deliveryId :'1'
      });
    }
   this.saveToLocalStorage(); 
},

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
   

},

saveToLocalStorage()
{
  localStorage.setItem('cart-oop-business',JSON.stringify(this.cartItem));
},


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

};
cart.loadFromStorage();
console.log(cart);
business_cart.loadFromStorage();
console.log(business_cart);
 


 





