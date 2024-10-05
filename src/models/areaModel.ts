// Get the list of the areas
import resasApiService from '../services/resasApiService';

const get = async () => {
  const action = 'prefectures';
  const params = {};
  const response = await resasApiService(action, params);
  return response.result;
};

export { get };
