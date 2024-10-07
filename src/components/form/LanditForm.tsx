import { useContext, useCallback } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot, faCalendarCheck, faShapes, faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import LanditField from './LanditField';
import LanditSelect, { ILanditSelectOption } from '../input/LanditSelect';
import LanditRadio from '../input/LanditRadio';
import DownloadButton from './DownloadButton';

import FormContext from '../../contexts/FormContext';

import { IFormData } from '../../interfaces/IFormData';


function FormBody () {
  const {
    prefectures, years, purposes,
    formData, setFormData,
  } = useContext(FormContext);

  const handleFormChange = useCallback((
    e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  )=>{
    const { name, value } = e.target;
    setFormData((prev:IFormData)=>({
      ...prev,
      [name]: value,
    }));
  }, [formData, setFormData]);
  return (<>
    <div className="flex-auto flex flex-col w-full">
      <LanditField
        icon={faLocationDot}
        label='場所'
      >
        <LanditSelect className='h-10'
          value={formData.prefCode}
          name='prefCode'
          onChange={handleFormChange}
          options={
            prefectures
              ? prefectures.map(p=>({
                key: `${p.prefCode}`,
                value: `${p.prefCode}`,
                text: `${p.prefName}`,
              } as ILanditSelectOption))
              : []
          }
        />
      </LanditField>
      <LanditField
        icon={faCalendarCheck}
        label='年度'
      >
        <LanditSelect className='h-10'
          name="year"
          value={formData.year}
          onChange={handleFormChange}
          options={
            years
              ? years.map(y=>({
                key: `${y}`,
                value: `${y}`,
                text: `${y}`,
              } as ILanditSelectOption))
              : []
          }
        />
      </LanditField>
      <LanditField
        icon={faShapes}
        label='種類'
        labelAlign='top'
      >
        <div className="-my-3">
          {purposes
            ? purposes.map(p=>(
              <label key={p.value} className='flex flex-row my-3'>
                <LanditRadio
                  name="purpose"
                  className='mr-2'
                  value={p.value}
                  onChange={handleFormChange}
                  checked={p.value === formData.purpose}
                />
                <span className='text-sm'>{p.label}</span>
              </label>
            ))
            : null
          }
        </div>
      </LanditField>
    </div>
    <div className="flex flex-row">
      <DownloadButton />
    </div>
  </>);
}

function LanditForm () {
  const {
    formOptionsReady,
  } = useContext(FormContext);

  return (
    <div className="w-100 flex-auto p-6 flex flex-col bg-primary-light rounded">
      {/* Form Header */}
      <div className="w-full pt-[3px] pb-7 leading-none">
        表示内容を選択
      </div>
      {/* Form body */}
      {/*
        formOptionsReadyがfalseの場合はローディングアイコンを表示
      */}
      {
        formOptionsReady
          ? <FormBody />
          : <div className="flex-auto flex flex-col items-center justify-center text-text-grey">
            <FontAwesomeIcon icon={faSpinner} className="text-lg mb-4" spin />
            <span className="text-sm">ロード中</span>
          </div>
      }
    </div>
  );
}

export default LanditForm;
