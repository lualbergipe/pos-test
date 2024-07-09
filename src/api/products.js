
export async function SearchProducts(vendor, text = '', code = '', perPage = 10, page = 1, order = '', category = '', department = '', brand = '') {
  console.log(category, 'category======');
  try {
    const baseUrl = `https://${vendor}.vtexcommercestable.com.br/api/catalog_system/pub/products/search`;
    let url;
    // Calcula el inicio de la paginación
    const from = (page - 1) * perPage + 1; 
     // Calcula el final de la paginación
    const to = page * perPage;
    //creamos la cadena para construir el endpoint
    const pagination = `_from=${from}&_to=${to}`;

    if (text !== '') {
      category = ''
      url = `${baseUrl}/${text}/?${category}${department}${brand}${order}`;
    } else {
      url = `${baseUrl}?${category}${department}${brand}${order}`;
    }
    console.log(url, 'la urd');
    const params = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    };

    const response = await fetch(url, params);
    const result = await response.json();

    const productsWithPrices = result.map(product => {
      // Simular precios ajustados según el rol del usuario
      let price = product.items[0].sellers[0].commertialOffer.Price;
      return {
        ...product,
        price: price
      };
    });

    return productsWithPrices;
  } catch (error) {
    console.error('Fetch getDocumentType error:', error);
    throw error;
  }
};
  export async function getProducts (vendor) {
    try {
        const url = `https://${vendor}.vtexcommercestable.com.br/api/catalog_system/pub/products/search`;
      const params = {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      };
      const response = await fetch(url, params);
      const result = await response.json();
      const productsWithPrices = result.map(product => {
        // Simular precios ajustados según el rol del usuario
        let price = product.items[0].sellers[0].commertialOffer.Price;
        return {
          ...product,
          price: price
        };
      });
      return productsWithPrices;
    } catch (error) {
      console.error('Fetch getDocumentType error:', error);
      throw error;
    }
  };


  export async function getFilters(vendor, categoryStrings) {
    try {
      // Convierte el array de cadenas en una sola cadena de IDs únicos
      const categoryIds = new Set();
      
      categoryStrings.forEach(categoryString => {
        const ids = categoryString.split('/').filter(id => id); // Filtra los elementos vacíos
        ids.forEach(id => categoryIds.add(id));
      });
  
      const categoryIdArray = Array.from(categoryIds);
      let combinedResults = [];
  
      for (const categoryId of categoryIdArray) {
        const url = `https://${vendor}.vtexcommercestable.com.br/api/catalog_system/pub/facets/search?fq=C:${categoryId}`;
  
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
          }
        });
  
        if (!response.ok) {
          console.error('Error en la respuesta:', response.status, response.statusText);
          continue; // Continuar con la siguiente categoría en caso de error
        }
  
        const result = await response.json();
        combinedResults = combinedResults.concat(result);
      }
      // Procesar los resultados combinados según sea necesario
      return combinedResults;
    } catch (error) {
      console.error('Fetch getFilters error:', error);
      throw error;
    }
  }

  export async function getProductByCode (vendor, code) {
    //fq=skuId:{{skuId}}
    //fq=alternateIds_RefId:{{referenceId}}
    //fq=alternateIds_Ean:{{ean13}}
    try {
        const url = `https://${vendor}.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fq=skuId:${code}`;
      const params = {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      };
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Fetch getDocumentType error:', error);
      throw error;
    }
  };

  export async function getFiltersApi(vendor, categoryStrings) {
    try {
      // Convierte el array de cadenas en una sola cadena de IDs únicos
      const categoryName = new Set();
      categoryStrings.forEach(categoryString => {
        const ids = categoryString.split('/').filter(id => id); // Filtra los elementos vacíos
        ids.forEach(id => categoryName.add(id));
      });

      const categoryNameArray = Array.from(categoryName);
      let combinedResults = [];
  
      for (const category of categoryNameArray) {
        const url = `https://${vendor}.myvtex.com/_v/facetsFilters`;
  
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "categoryname": category,
            "parameter": ""
          })
        });
        if (!response.ok) {
          console.error('Error en la respuesta:', response.status, response.statusText);
          continue; // Continuar con la siguiente categoría en caso de error
        }
        const result = await response.json();
        combinedResults = combinedResults.concat(result);
      }
      // Procesar los resultados combinados según sea necesario
      return combinedResults;
    } catch (error) {
      console.error('Fetch getFilters error:', error);
      throw error;
    }
  }
  //https://tmgrocery.vtexcommercestable.com.br/api/catalog/pvt/category/395

  export async function getCategorybyDepartment (vendor, categoryId) {
    try {
        const url = `https://${vendor}.vtexcommercestable.com.br/api/catalog/pvt/category/${categoryId}`;
      const params = {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "X-VTEX-API-AppKey": "vtexappkey-titamediapartnermx-MEYIMW",
          "X-VTEX-API-AppToken":"VMKEDLNSFJKBYFKVRQKQVTIMGZMXPZHOHBJTNWXJYUTZXSICANLZHWDVVGRSTIYRIGESLQLWRCTAWPGUKHUWBHABDWDNGQCWFWIILNFOVVFEPAJPOVZGRWNEMAOJLXAA"
        }
      };
      const response = await fetch(url, params);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Fetch getDocumentType error:', error);
      throw error;
    }
  };