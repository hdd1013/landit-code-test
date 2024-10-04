import styleSheet from './LanditRadio.module.scss';

function LanditRadio ({ name, value, id, className, onChange, style, checked, disabled }:{
  name?:string,
  value?:string,
  id?:string,
  className?:string,
  style?:React.CSSProperties,
  onChange?:React.ChangeEventHandler<HTMLInputElement>,
  checked?:boolean,
  disabled?:boolean,
}) {
  return (
    <>
      <input type="radio"
        name={name}
        id={id}
        value={value}
        className={`${styleSheet.radio} ${className}`}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        style={{
          display: 'none',
        }}
      />
      <div
        className={`${styleSheet.radio} ${className}`}
        style={{
          ...style,
        }}>
      </div>
    </>
  );
}

export default LanditRadio;
