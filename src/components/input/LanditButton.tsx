import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function LanditButton ({ id, type = 'button', className, children, style, onClick, onHover, onActive, onFocus, onBlur, disabled, working }:{
  id?:string,
  className?:string,
  type?:'button' | 'submit' | 'reset',
  children?:React.ReactNode,
  style?:React.CSSProperties,
  onClick?:React.MouseEventHandler<HTMLButtonElement>,
  onHover?:React.MouseEventHandler<HTMLButtonElement>,
  onActive?:React.MouseEventHandler<HTMLButtonElement>,
  onFocus?:React.FocusEventHandler<HTMLButtonElement>,
  onBlur?:React.FocusEventHandler<HTMLButtonElement>,
  disabled?:boolean,
  working?:boolean,
}) {
  return (
    <button
      id={id}
      type={type}
      className={`
        rounded-sm
        text-white
        border
        text-sm
        bg-text-link border-text-link
        hover:bg-text-link-dark hover:border-text-link-dark
        active:bg-text-link active:border-text-link
        disabled:bg-text-disabled disabled:border-text-disabled
        py-2
        ${className}
      `}
      style={{
        paddingLeft: working === true
          ? `${2.25}rem` : '1.625rem',
        paddingRight: working === true
          ? '1rem' : '1.625rem',
        minHeight: '2.5rem',
        ...style,
      }}
      onClick={onClick}
      onMouseOver={onHover}
      onMouseDown={onActive}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
    >
      {
        working === true
          ? <FontAwesomeIcon icon={faSpinner}
            className="text-base absolute -ml-[1.25rem] mt-1 "
            height="1rem"
          />
          : null
      }
      {children}
    </button>
  );

}

export default LanditButton;
