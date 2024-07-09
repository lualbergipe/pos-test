export async function getClients (vendor) {
    try {
        const url = `https://${vendor}.myvtex.com/_v/findCustomer`;
      const params = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "document":"",
            "firstName":"",
            "email": ""
          })
      };
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Fetch getDocumentType error:', error);
      throw error;
    }
  };