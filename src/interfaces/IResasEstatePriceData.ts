// Resas APIの取引価格データの型定義

interface IResasYeearlyPriceData {
  year:number;
  value:number;
}

interface IResasEstatePriceData {
  prefCode:string;
  prefName:string;
  cityCode:string;
  cityName:string;
  displayType:string;
  years:IResasYeearlyPriceData[];
}

export type { IResasEstatePriceData, IResasYeearlyPriceData };
