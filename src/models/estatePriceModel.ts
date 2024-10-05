import resasApiService from '../services/resasApiService';
import { IResasEstatePriceData } from '../interfaces/IResasEstatePriceData';

const get = async ({
  year, prefCode, cityCode, displayType,
}:{
  year?:string;
  prefCode?:string;
  cityCode?:string;
  displayType?:string;
}):Promise<IResasEstatePriceData | null> => {
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
