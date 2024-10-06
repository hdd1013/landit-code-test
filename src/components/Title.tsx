
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

function Title ({ icon, title, subtitle }:{ icon?:IconDefinition, title:string, subtitle?:string }) {
  return (
    <div className="app-page-title flex flex-col p-10 pb-0">
      <div className="flex-0 pb-5 flex border-b border-white border-opacity-20">
        <div className="flex flex-row text-white items-end">
          <div className="flex flex-row items-center mt-1 leading-none">
            {icon
              ? <FontAwesomeIcon icon={icon} className='text-2xl -mb-1' height={'0.95em'}/>
              : null
            }
            <h2 className='text-2xl ml-2'>{title}</h2>
          </div>
          {
            subtitle
              ? <span className='text-sm ml-4 leading-none'>{subtitle}</span>
              : null
          }
        </div>
      </div>
    </div>
  );
}

export default Title;
