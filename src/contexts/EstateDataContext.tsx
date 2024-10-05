// Estate Data Context
// Stores and manages the estate price data fetched from the API
// APIから取得した不動産価格データを管理する

import {
  useState, useMemo, useEffect, useCallback, createContext,
  useContext,
} from 'react';
import FormContext from './FormContext';

import { formPurposeOptions } from '../models/formOptionModel';

import { get as getEstateData } from '../models/estatePriceModel';

interface IEstateDataContext {
  prefCode:string;
  prefName:string;
  purpose:string;
  purposeName:string;
  year:string;
  priceValue:number;
  nationalValue:number;
}

const EstateDataContext = createContext<IEstateDataContext>({
  prefCode:'',
  prefName:'',
  purpose:'',
  purposeName:'',
  year:'',
  priceValue:-1,
  nationalValue:-1,
});

const EstateDataProvider = ({ children }:{ children:React.ReactNode }) => {
  const { formData } = useContext(FormContext);
  const [optionData, setOptionData] =
    useState<Pick<IEstateDataContext, 'prefCode' |  'purpose' | 'year'>>({
      prefCode:'',
      purpose:'',
      year:'',
    });
  const [prefName, setPrefName] = useState<string>('');
  const [priceValue, setPriceValue] =
    useState<IEstateDataContext['priceValue']> (-1);
  const [nationalPriceValue, setNationalPriceValue] =
    useState<IEstateDataContext['nationalValue']> (-1);

  const purposeName = useMemo(()=>{
    const purpose = optionData.purpose;
    const purposeOption = formPurposeOptions.find((item)=>item.value === purpose);
    return purposeOption ? purposeOption.label : '';
  }, [optionData]);

  // Update the optionData when the form data changes
  // formDataが変更されるとoptionDataを更新
  useEffect(()=>{
    // Compare the values to see whether any of the fields has changed
    // データを比較して変更されたフィールドだけを更新
    const changedFields:[string, string | number][] = [];
    if (optionData.prefCode !== formData.prefCode) {
      changedFields.push(['prefCode', formData.prefCode]);
    }
    if (optionData.purpose !== formData.purpose) {
      changedFields.push(['purpose', formData.purpose]);
    }
    if (optionData.year !== formData.year) {
      changedFields.push(['year', formData.year]);
    }
    // 変更されたフィールドぎない場合は更新しない
    if (changedFields.length === 0) {
      return;
    }
    // Update the optionData
    // optionDataを更新
    setOptionData((prev)=>({
      ...prev,
      ...Object.fromEntries(changedFields),
    }));
  }, [formData, optionData, setOptionData]);

  // Update the prefName and price values when the optionData changes
  // optionDataが変更されるとprefNameと価格を更新
  const updateData = useCallback(async () => {
    const [targetData, nationalData] = await Promise.all([
      getEstateData({
        prefCode: optionData.prefCode,
        year: optionData.year,
        displayType: optionData.purpose,
      }),
      getEstateData({
        year: optionData.year,
        displayType: optionData.purpose,
      }),
    ]);
    // Update the state
    // stateを更新
    if (targetData === null || nationalData === null) {
      setPriceValue(()=> -1);
      setNationalPriceValue(()=> -1);
      return;
    }
    setPrefName(()=>targetData.prefName);
    setPriceValue(()=>targetData.years[0]?.value ?? -1);
    setNationalPriceValue(()=>nationalData.years[0]?.value ?? -1);
  }, [optionData, setPrefName, setPriceValue, setNationalPriceValue]);

  // optionDataが更新されるとAPIからデータを取得
  useEffect(()=>{
    // Check if the optionData is valid
    // optionDataの有効性チェック
    if (
      optionData.prefCode === '' ||
      optionData.purpose === '' ||
      optionData.year === ''
    ) {
      return;
    }
    // Fetch the estate data
    // APIからデータを取得してstate更新
    updateData();
  }, [optionData, updateData]);

  const values = useMemo<IEstateDataContext>(()=>({
    prefCode: formData.prefCode,
    prefName,
    purpose: optionData.purpose,
    purposeName,
    year: optionData.year,
    priceValue,
    nationalValue: nationalPriceValue,
  }), [
    formData, optionData, priceValue, nationalPriceValue,
  ]);

  return (
    <EstateDataContext.Provider value={values}>
      {children}
    </EstateDataContext.Provider>
  );
};

export default EstateDataContext;
export { EstateDataProvider };
