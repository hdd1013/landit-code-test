import FooterNav from './FooterNav';

function Footer () {
  return (
    <footer data-testid="footer" className="bg-primary border-t h-[50px] border-white border-opacity-20 flex justify-between items-center pl-8">
      <FooterNav />
      <div className="pr-8 pb-1 leading-none">
        <span className="text-xs text-white ">
          © 2023 Landit Inc.
        </span>
      </div>
    </footer>
  );

}

export default Footer;
