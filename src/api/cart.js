export async function createCart () {
    try {
        const url = `https://tmgrocery.vtexcommercestable.com.br/api/checkout/pub/orderForm`;
      const params = {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      };
      const response = await fetch(url, params);
      const result = await response.json();
      const infoCart = result;
      return infoCart;
    } catch (error) {
      console.error('Fetch getDocumentType error:', error);
      throw error;
    }
  };



  export async function addToCart (orderFormID, idProducto, quantity) {
   console.log(orderFormID, idProducto);
    try {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "CheckoutOrderFormOwnership=; checkout.vtex.com=__ofid=a5732ce150264f0ab85d6da630cbc594");
        const url = `https://tmgrocery.vtexcommercestable.com.br/api/checkout/pub/orderForm/${orderFormID}/items?allowedOutdatedData=paymentData`;
      
        const raw = JSON.stringify({
          "orderItems": [
            {
              "quantity": quantity,
              "seller": "1",
              "id": idProducto,
              "index": 0
            }
          ]
        });
      
        const params = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      const response = await fetch(url, params);
      const result = await response.json();
      const infoCart = result;
      return infoCart;
    } catch (error) {
      console.error('Fetch getDocumentType error:', error);
      throw error;
    }
  };



  export async function updateCart (orderFormID, index, quantity) {
    console.log(orderFormID, idProducto);
     try {
         const myHeaders = new Headers();
         myHeaders.append("Accept", "application/json");
         myHeaders.append("Content-Type", "application/json");
         myHeaders.append("Cookie", "CheckoutOrderFormOwnership=; checkout.vtex.com=__ofid=a5732ce150264f0ab85d6da630cbc594");
         const url = `https://tmgrocery.vtexcommercestable.com.br/api/checkout/pub/orderForm/${orderFormID}/items/update`;
        
       
         const raw = JSON.stringify({
           "orderItems": [
             {
               "quantity": quantity,
               "index": index
             }
           ]
         });
       
         const params = {
         method: "POST",
         headers: myHeaders,
         body: raw,
         redirect: "follow"
       };
       const response = await fetch(url, params);
       const result = await response.json();
       const infoCart = result;
       return infoCart;
     } catch (error) {
       console.error('Fetch getDocumentType error:', error);
       throw error;
     }
   };



  export async function infoCart (idOrderForm) {
    try {
        const url = `https://tmgrocery.vtexcommercestable.com.br/api/checkout/pub/orderForm/${idOrderForm}`;
      const params = {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      };
      const response = await fetch(url, params);
      const result = await response.json();
      const infoCart = result;
      return infoCart;
    } catch (error) {
      console.error('Fetch getDocumentType error:', error);
      throw error;
    }
  };



  export async function clearCart (idOrderForm) {
    try {
        const url = `https://tmgrocery.vtexcommercestable.com.br/api/checkout/pub/orderForm/${idOrderForm}/items/removeAll`;  
      
        const raw = JSON.stringify({
        });


      const params = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: raw,
      };
      const response = await fetch(url, params);
      const result = await response.json();
      const infoCart = result;
      return infoCart;
    } catch (error) {
      console.error('Fetch getDocumentType error:', error);
      throw error;
    }
  };

  

  
  


