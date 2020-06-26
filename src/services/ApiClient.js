const axios = require('axios').default;

export default {
    getAllMachines: () => {
        return axios
        .get(`https://machinestream.herokuapp.com/api/v1/machines`)
        .then((resp) => {
          console.log(resp.data.data);
          return resp.data;
        });
    },
    getTest: 'Test22',
}
  

