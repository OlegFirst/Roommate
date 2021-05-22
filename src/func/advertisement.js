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

// export const createAdvetritesement = ( token, readed ) => {
	// const data = {		
		// location: 'Kyiv st Green',
		// price: 3000,
		// sleepingPlaces: 1,
		// description: 'Text'		
	// };
	
	// const con = {
		// headers: { Authorization: `Bearer ${token}` }
	// };
	
	// const bodyData = {
		// body: data
	// };
	
	// axios.post(hostName + 'listing/create',		
		// con,
		// bodyData
	// )
  // .then(res => {
    // readed({				
				// isSuccess: true,        
				// data: res.data.data
      // });
    // }
  // )
  // .catch(err => {
		  // readed({
        // isSuccess: false,
        // data: null
      // });
    // }
  // );
// };