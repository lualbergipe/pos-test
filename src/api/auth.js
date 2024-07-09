export const getUserRoles = async (store, accessToken) => {
    try {
        const url = `https://${store}.myvtex.com/api/license-manager/pub/v1/current-user/roles`
        const params = {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        const response = await fetch(url, params);
        const result = await response.json();
        return result
    } catch (error) {
      console.error('Error fetching user roles:', error.response ? error.response.data : error.message);
      throw error;
    }
  };