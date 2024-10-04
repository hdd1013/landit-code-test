import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollVertical, faLocationDot, faCalendarCheck, faShapes } from '@fortawesome/free-solid-svg-icons';

import View from './components/View';
import Body from './components/Body';
import Title from './components/Title';


import LanditButton from './components/input/LanditButton';

import LanditSelect from './components/input/LanditSelect';
import LanditRadio from './components/input/LanditRadio';

function App () {

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
            <div className="text-white" style={{
              gridArea: 'g',
            }}>Graph</div>
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
                    <div className="flex flex-row py-[1.5rem] items-center min-h-10 pr-0.5 border-t border-border">
                      <div className='w-[4.5rem] text-sm flex flex-row items-center'>
                        <FontAwesomeIcon icon={faLocationDot} className='mr-1'/>
                        <span>場所</span>
                      </div>
                      <div className="flex flex-col flex-auto min-h-10">
                        <LanditSelect className='h-10' options={[
                          { key:'1', value: '1', text: '東京都' },
                        ]}/>
                      </div>
                    </div>
                    <div className="flex flex-row py-[1.5rem] items-center min-h-10 pr-0.5 border-t border-border">
                      <div className='w-[4.5rem] h-10 text-sm flex flex-row items-center'>
                        <FontAwesomeIcon icon={faCalendarCheck} className='mr-1'/>
                        <span>年度</span>
                      </div>
                      <div className="flex flex-col flex-auto min-h-10">
                        <LanditSelect className='h-10' options={[
                          { key:'1', value: '1', text: '東京都' },
                        ]}/>
                      </div>
                    </div>
                    <div className="flex flex-row py-[1.5rem] items-start min-h-10 pr-0.5 border-t border-border">
                      <div className='w-[4.5rem] text-sm flex flex-row items-center'>
                        <FontAwesomeIcon icon={faShapes} className='mr-1'/>
                        <span>種類</span>
                      </div>
                      <div className="flex flex-col flex-auto min-h-10">
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
                      </div>
                    </div>
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
