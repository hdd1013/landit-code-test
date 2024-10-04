import View from './components/View';
import Body from './components/Body';
import Title from './components/Title';

import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';

function App () {

  return (
    <View>
      <Body>
        {/* Body Title */}
        <Title icon={faSquarePollVertical} title="取引価格" subtitle="※取引面積1㎡あたり" />
        <div className="">
          {/* Graph */}
          <div>Graph</div>
          {/* Form */}
          <div className='flex flex-col'>
            <div className="flex-auto bg-primary-light"></div>
          </div>
        </div>
      </Body>
    </View>
  );
}

export default App;
