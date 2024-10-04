import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

function LanditField ({
  icon, label, children, labelAlign,
}:{
  icon?:IconDefinition,
  label:string,
  children:React.ReactNode,
  labelAlign?:'top' | 'center'
}) {
  return (
    <div className={`
      flex flex-row py-[1.5rem] min-h-10 pr-0.5 border-t border-border
      ${labelAlign === 'top' ? 'items-start' : 'items-center'}
    `}>
      <div className='w-[4.5rem] text-sm flex flex-row items-center'>
        {
          icon
            ? <FontAwesomeIcon icon={icon} className='mr-1'/>
            : null
        }
        <span>{label}</span>
      </div>
      <div className="flex flex-col flex-auto min-h-10">
        {children}
      </div>
    </div>
  );
}

export default LanditField;
