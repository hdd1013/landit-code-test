import Header from './Header';
import Footer from './Footer';

function View ({ children }:{ children:React.ReactNode }) {
  return (
    <div className="view flex-auto flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default View;
