export async function getInventory (idProducto) {
    try {
        const myHeaders = new Headers();
        myHeaders.append("X-VTEX-API-AppKey", "vtexappkey-titamediapartnermx-MEYIMW");
        myHeaders.append("X-VTEX-API-AppToken", "VMKEDLNSFJKBYFKVRQKQVTIMGZMXPZHOHBJTNWXJYUTZXSICANLZHWDVVGRSTIYRIGESLQLWRCTAWPGUKHUWBHABDWDNGQCWFWIILNFOVVFEPAJPOVZGRWNEMAOJLXAA");
        myHeaders.append("Cookie", "CheckoutOrderFormOwnership=; checkout.vtex.com=__ofid=e843cb5bfa2646e6a338592cff114240");
        const url = `https://tmgrocery.vtexcommercestable.com.br/api/logistics/pvt/inventory/skus/${idProducto}`;
      const params = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
      };
      const response = await fetch(url, params);
      const result = await response.json();
      const infoInventory = result;
      return infoInventory;
    } catch (error) {
      console.error('Fetch getDocumentType error:', error);
      throw error;
    }
  };