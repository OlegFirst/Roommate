import { hostName } from '../constants/main';
const axios = require('axios');

export const getAllPosts = ( accountId, readed ) => {
	axios.post(hostName + `listing/find?accountId=${accountId}`)
  .then(res => {
    readed({				
				isSuccess: true,        
				data: res.data.data
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