import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';

import View from './components/View';
import Body from './components/Body';
import Title from './components/Title';

import LanditGraph from './components/graph/LanditGraph';

import LanditForm from './components/form/LanditForm';

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
            <div className="flex items-center justify-center" style={{
              gridArea: 'g',
            }}>
              <LanditGraph />
            </div>
            <div className="flex flex-col pl-2" style={{
              gridArea: 'f',
            }}>
              <LanditForm />
            </div>
          </div>
        </div>
      </Body>
    </View>
  );
}

export default App;
