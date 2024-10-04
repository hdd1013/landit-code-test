import angleDownSolid from '../../assets/angle-down-solid.svg';

interface ILanditSelectOption {
  key:string;
  value:string;
  text:string;
}

function LanditSelect (
  { id, className, name, value, onChange, options,
    disabled,
  }:{
    id?:string,
    className?:string,
    name?:string,
    value?:string,
    onChange?:React.ChangeEventHandler<HTMLSelectElement>,
    options:ILanditSelectOption[],
    disabled?:boolean,
  },
) {
  return (
    <select name={name}
      id={id}
      className={`
        bg-white appearance-none text-sm
        ${className}
      `}
      value={value}
      onChange={onChange}
      disabled={disabled}
      style={{
        backgroundImage:`url(${angleDownSolid})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'right 0.7rem center',
        backgroundSize: '0.65rem',
        padding: '0.5rem 1.6rem 0.5rem 0.7rem',
      }}
    >
      {
        options?.map((option) => (
          <option key={option.key} value={option.value}>{option.text}</option>
        ))
      }
    </select>
  );
}


export default LanditSelect;
export type { ILanditSelectOption };
