import View from './components/layout/View';
import Body from './components/layout/Body';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';

function App () {

  return (
    <View>
      <Body>
        <div className="flex-auto flex flex-col p-10">
          {/* Body Title */}
          <div className="flex-0 pb-5 flex border-b border-border">
            <div className="flex flex-row text-white items-end">
              <div className="flex flex-row items-center mt-1 leading-none">
                <FontAwesomeIcon icon={faSquarePollVertical} className='text-2xl -mb-1' height={'0.95em'}/>
                <h2 className='text-2xl ml-2'>取引価格</h2>
              </div>
              <span className='text-sm ml-4 leading-none'>※取引面積1㎡あたり</span>
            </div>
            <div className=""></div>
          </div>
        </div>
      </Body>
    </View>
  );
}

export default App;
