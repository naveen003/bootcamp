
const createRegisterApi = () => {
  let examplePrivateVariable = 0

  return {
    async registerAsync (dataobj) {
      try {
      // await response of fetch call
        let response = await fetch("http://localhost:4000/users/register", {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(dataobj), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        });
        // only proceed once promise is resolved
        let data = await response.json();
        // only proceed once second promise is resolved
        return data;  
      } catch (error) {
        
      }
      return null;
    }
  }
};

const singleton = createRegisterApi();
Object.freeze(singleton);

export default singleton;
