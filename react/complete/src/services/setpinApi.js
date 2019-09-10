const createSetpinApi = () => ({
  async setpinAsync(pinObj,isloginPin) {
    try {
      const url = isloginPin ? 'http://localhost:4000/users/setloginpin' : 'http://localhost:4000/users/settransactionpin';
      // await response of fetch call
      const response = await fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(pinObj), // data can be `string` or {object}!
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

const singleton = createSetpinApi();
Object.freeze(singleton);

export default singleton;


