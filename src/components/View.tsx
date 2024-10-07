import Header from './Header';
import Footer from './Footer';

function View ({ id, className, children, testId }:{
  id?:string,
  className?:string,
  children:React.ReactNode,
  testId?:string,
}) {
  return (
    <div id={id} className={`flex-auto flex flex-col ${className}`}
      data-testid={testId}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default View;
