import backgroundImage from '../../assets/background.webp';

function Body ({ children }:{ children:React.ReactNode }) {
  return (
    <div className="body flex-auto" style={{
      backgroundImage: `url(${backgroundImage})`,
    }}>
      {children}
    </div>
  );
}

export default Body;
