import logo from './assets/logo-landit.png';
import logo2x from './assets/logo-landit@2x.png';
import backgroundImage from './assets/background.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';


function App () {

  return (
    <div className="view flex-auto flex flex-col">
      <header className="bg-white flex items-center h-[74px]">
        <a href="" className='block h-[60px] ml-0.5'>
          <img src={logo} alt="" className='block h-[60px] w-auto' srcSet={
            `${logo} 1x, ${logo2x} 2x`
          } />
        </a>
      </header>
      <div className="body flex-auto" style={{
        backgroundImage: `url(${backgroundImage})`,
      }}></div>
      <footer className="bg-primary border-t h-[50px] border-white border-opacity-20 flex justify-between items-center pl-8">
        <div className="links flex flex-row -mx-3">
          <a href="" className="link text-xs text-white leading-none mx-3">
            利用規約
            <FontAwesomeIcon icon={faWindowRestore} className='opacity-20 ml-2'/>
          </a>
          <a href="" className="link text-xs text-white leading-none mx-3">
            プライバシーポリシー
            <FontAwesomeIcon icon={faWindowRestore} className='opacity-20 ml-2'/>
          </a>
        </div>
        <div className="copyright pr-8 pb-1 leading-none">
          <span className="text-xs text-white ">
            © 2023 Landit Inc.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
