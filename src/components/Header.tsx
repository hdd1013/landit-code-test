import logo from '../assets/logo-landit.png';
import logo2x from '../assets/logo-landit@2x.png';

function Logo () {
  return (
    <a href="https://landit.co.jp/" className='block h-[60px] ml-0.5'>
      <img src={logo} alt="" className='block h-[60px] w-auto' srcSet={
        `${logo} 1x, ${logo2x} 2x`
      } />
    </a>
  );
}

function Header () {
  return (
    <header data-testid="header" className="bg-white flex items-center h-[74px]">
      <Logo />
    </header>
  );
}

export default Header;
