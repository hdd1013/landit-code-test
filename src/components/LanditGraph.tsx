import { IGraphData } from '../interfaces/IGraphData';

import Measures from './graph/Measures';


function LanditGraph ({ data }:{ data:IGraphData }) {
  // Draw the graph
  // Since it's a simple graph, we won't use any library
  // Specifications:
  // Measures: automatically draw measures in 5,000 interval.
  // Add another one as a spacer based on the largest value
  //
  return (
    <div className="graph relative flex flex-col">
      <div className="graph-header"></div>
      <div className="w-100 flex-auto graph-figure relative" style={{
        width: '720px',
        height: '480px',
      }}>
        <div className="graph-legend text-white absolute text-xs" style={{
          right: '100%',
          bottom: '100%',
          marginBottom: '1em',
        }}>
          <span className="break-keep text-nowrap whitespace-nowrap">{'(円/㎡)'}</span>
        </div>
        <Measures maxValue={Math.max(data.target.value, data.national.value)}/>
        <div className="graph-main" style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderColor: 'white',
          borderStyle: 'solid',
          borderWidth: '0 0 1px 1px',
        }}></div>
      </div>
    </div>
  );
}

export default LanditGraph;
