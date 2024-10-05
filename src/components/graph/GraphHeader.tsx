import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faLocationDot,
  faCalendarCheck,
  faShapes,
} from '@fortawesome/free-solid-svg-icons';

import { IGraphData } from '../../interfaces/IGraphData';

interface IGraphHeaderProps {
  year:IGraphData['year'];
  purpose:IGraphData['purpose'];
  area:IGraphData['target']['name'];
};

function Item ({ icon, label, style }:{
  icon:IconDefinition,
  label:string,
  style?:React.CSSProperties,
}) {
  return (
    <div className="flex flex-row items-center text-white text-xl mx-6"
      style={style}
    >
      <FontAwesomeIcon icon={icon} className="" style={{
        marginRight: '0.8rem',
        height: '1.1rem',
      }}/>
      <span>{label}</span>
    </div>
  );
}
function GraphHeader ({ area, year, purpose }:IGraphHeaderProps) {
  return (
    <div className="flex justify-center" style={{
      marginBottom: '78px',
      paddingLeft: '0.6rem',
    }}>
      <div className="flex flex-row space-around -mx-6">
        <Item icon={faLocationDot} label={area}/>
        <Item icon={faCalendarCheck} label={`${year}年`}/>
        <Item icon={faShapes} label={purpose}/>
      </div>
    </div>
  );
}

export default GraphHeader;
