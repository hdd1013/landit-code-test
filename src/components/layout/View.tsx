import Header from './Header';
import Footer from './Footer';

function View ({ children }:{ children:React.ReactNode }) {
  return (
    <div className="flex-auto flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default View;
