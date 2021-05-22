import { hostName } from '../constants/main';
import axios from './axios';

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

export const filter = (data, readed) => {
	// const data = {
		// location: 'w',
		// priceMax: 9000,
		// sleepingPlacesMin: 1,
		// limit: 10,
		// skip: 0
	// }
	
	axios.post('listing/find/', data)
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