import { hostName } from '../constants/main';
const axios = require('axios');

export const serverSingIn = ( data, readed ) => {	
  axios.post(hostName + 'account/signIn', {...data})
  .then(res => {
		readed({			
				isSuccess: !res.data.errors,
				data: res.data
      });
    }
  )
  .catch(err => {
		  readed({
        isSuccess: false,
        data: null
      });
    }
  );
};