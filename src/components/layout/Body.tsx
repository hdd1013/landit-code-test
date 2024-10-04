import backgroundImage from '../../assets/background.webp';

function Body ({ children }:{ children:React.ReactNode }) {
  return (
    <div className="flex flex-col flex-auto bg-cover bg-center" style={{
      backgroundImage: `url(${backgroundImage})`,
    }}>
      {children}
    </div>
  );
}

export default Body;
