// Form Context
// Takes care of the form data and form options
// Formデータとフォームオプションを管理
import {
  useState, useMemo, useEffect, useCallback, createContext,
  Dispatch, SetStateAction,
} from 'react';

import localforage from 'localforage';

import { get as getPrefectures } from '../models/prefectureModel';
import { formYearOptions, formPurposeOptions } from '../models/formOptionModel';
import { IResasPrefectureData } from '../interfaces/IResasPrefectureData';
import { IFormData } from '../interfaces/IFormData';

interface IFormContext {
  prefectures:IResasPrefectureData[] | null;
  years:typeof formYearOptions | null;
  purposes:typeof formPurposeOptions | null;
  formOptionsReady:boolean;
  formData:IFormData;
  setFormData:Dispatch<SetStateAction<IFormData>>;
}

const FormContext = createContext<IFormContext>({
  prefectures: null,
  years: null,
  purposes: null,
  formOptionsReady: false,
  formData: {
    prefCode: '13',
    year: '2021',
    purpose: '1',
  } as IFormData,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormData: ()=>{},
});

function FormProvider ({ children }:{ children:React.ReactNode }) {
  // States
  // formData: フォームのデータ
  const [formData, setFormData] = useState<IFormData>({
    prefCode: '13',
    year: '2021',
    purpose: '1',
  }); // デフォルトデータで初期化
  // prefectures: 県のデータ
  const [prefectures, setPrefectures] = useState<null | IResasPrefectureData[]>(null);
  // 年度と不動産の用途の選択肢データ
  // APIから読み込む必要はないが、一貫性のためモデルから読み込む
  const years = formYearOptions;
  const purposes = formPurposeOptions;

  const formOptionsReady = useMemo(()=>{
    // フォームのオプションの準備状態を返す。
    return (prefectures !== null && years !== null && purposes !== null);
  }, [prefectures, years, purposes]);

  // Callbacks
  const updatePrefectures = useCallback(async ()=>{
    // Check if the cached data in in Localforage
    // 県の選択肢データはよく変わらないので、キャッシュを使う
    const cacheKey = 'prefectures';
    const cachedData = await localforage.getItem(cacheKey) ?? null;
    if (cachedData !== null) {
      setPrefectures(cachedData as IResasPrefectureData[]);
      return;
    }
    // If not, fetch the data from the API
    // キャッシュできていない場合はAPIからデータを取得
    const fetchedData = await getPrefectures();
    // After fetching the data, store it in Localforage
    // and set the data in the state
    // データを取得したら、Localforageに保存して、stateにセット
    localforage.setItem(cacheKey, fetchedData);
  }, [prefectures, getPrefectures]);

  const values = useMemo(() => ({
    prefectures,
    years,
    purposes,
    formOptionsReady,
    formData,
    setFormData,
  }), [
    prefectures, years, purposes, formOptionsReady,
    formData, setFormData,
  ]);

  // Effects
  // コンテキストを初期化
  useEffect(()=>{
    if (prefectures === null) {
      updatePrefectures();
    }
  }, [prefectures, updatePrefectures]);

  return (
    <FormContext.Provider value={values}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;

export { FormProvider };
