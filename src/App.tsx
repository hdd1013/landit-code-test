import { useState, useEffect } from 'react';

import { faSquarePollVertical, faLocationDot, faCalendarCheck, faShapes } from '@fortawesome/free-solid-svg-icons';

import View from './components/View';
import Body from './components/Body';
import Title from './components/Title';


import LanditButton from './components/input/LanditButton';

import LanditField from './components/form/LanditField';
import LanditSelect from './components/input/LanditSelect';
import LanditRadio from './components/input/LanditRadio';

import LanditGraph from './components/LanditGraph';

import { get as getAreas } from './models/areaModel';

function App () {
  const [areas, setAreas] = useState(null);

  useEffect(()=>{
    if (areas === null) {
      getAreas().then((data)=>{
        setAreas(data);
      });
    }
    console.log(areas);
  }, [areas, setAreas]);

  return (
    <View>
      <Body>
        {/* Body Title */}
        <Title icon={faSquarePollVertical} title="取引価格" subtitle="※取引面積1㎡あたり" />
        {/* Body Content */}
        <div className="p-10 flex-auto flex flex-col">
          <div className="w-100 grid flex-auto" style={{
            gridTemplate: '"g f" 1fr / 1fr 20%',
          }}>
            <div className="flex items-center justify-center" style={{
              gridArea: 'g',
            }}>
              <LanditGraph data={{
                year: 2022,
                purpose: '土地（住宅地）',
                target: { name: '東京都', value: 58500 },
                national: { name: '全国平均', value: 42680 },
              }}/>
            </div>
            <div className="flex flex-col pl-2" style={{
              gridArea: 'f',
            }}>
              <div className="w-100 flex-auto p-6 flex flex-col bg-primary-light">
                <div className="flex flex-col flex-auto">
                  {/* Form Header */}
                  <div className="w-full pt-[3px] pb-7 leading-none">
                    表示内容を選択
                  </div>
                  {/* Form body */}
                  <div className="flex flex-col w-full">
                    <LanditField
                      icon={faLocationDot}
                      label='場所'
                    >
                      <LanditSelect className='h-10' options={[
                        { key:'1', value: '1', text: '東京都' },
                      ]}/>
                    </LanditField>
                    <LanditField
                      icon={faCalendarCheck}
                      label='年度'
                    >
                      <LanditSelect className='h-10' options={[
                        { key:'1', value: '1', text: '東京都' },
                      ]}/>
                    </LanditField>
                    <LanditField
                      icon={faShapes}
                      label='種類'
                      labelAlign='top'
                    >
                      <div className="-my-3">
                        <label className='flex flex-row my-3'>
                          <LanditRadio name="type" className='mr-2' value="res"/>
                          <span className='text-sm'>土地（住宅地）</span>
                        </label>
                        <label className='flex flex-row my-3'>
                          <LanditRadio name="type" className='mr-2' value="com"/>
                          <span className='text-sm'>土地（商業地）</span>
                        </label>
                        <label className='flex flex-row my-3'>
                          <LanditRadio name="type" className='mr-2' value="man"/>
                          <span className='text-sm'>中古マンション等</span>
                        </label>
                        <label className='flex flex-row my-3'>
                          <LanditRadio name="type" className='mr-2' value="frm"/>
                          <span className='text-sm'>農地</span>
                        </label>
                        <label className='flex flex-row my-3'>
                          <LanditRadio name="type" className='mr-2' value="grn"/>
                          <span className='text-sm'>林地</span>
                        </label>
                      </div>
                    </LanditField>
                  </div>
                </div>
                <div className="flex flex-row">
                  <LanditButton className='flex-auto text-base py-4 h-[3.25rem]'>データをダウンロード</LanditButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </View>
  );
}

export default App;
