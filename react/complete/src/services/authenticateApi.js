const createAuthenticateApi = () => ({
  async authenticateUser(userObj) {
    try {
      // await response of fetch call
      const response = await fetch('http://localhost:4000/users/authenticate', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(userObj), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // only proceed once promise is resolved
      const data = await response.json();
      // only proceed once second promise is resolved
      return data;
    } catch (error) {
      return null;
    }
  },
});

const singleton = createAuthenticateApi();
Object.freeze(singleton);

export default singleton;
