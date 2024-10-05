import resasApiService from '../services/resasApiService';

const get = async ({
  year, prefCode, cityCode, displayType,
}:{
  year?:string;
  prefCode?:string;
  cityCode?:string;
  displayType?:string;
}) => {
  const action = 'townPlanning/estateTransaction/bar';
  const params = {
    year,
    prefCode,
    cityCode,
    displayType,
  };
  const response = await resasApiService(action, params);
  return response.result;
};

export { get };
