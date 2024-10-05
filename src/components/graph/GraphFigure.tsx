import { useMemo } from 'react';

import { IGraphData } from '../../interfaces/IGraphData';
import GraphNode from './GraphNode';
import Measures from './Measures';

function Figure ({ target, national, maxValue }:{
  target:IGraphData['target'],
  national:IGraphData['national'],
  maxValue:number,
}) {
  const maxGraphHeight = useMemo(()=>
    (Math.ceil(maxValue / 5000) + 1) * 5000
  , [maxValue]);
  return (
    <div className="graph-main flex flex-row justify-around" style={{
      position: 'relative',
      width: '660px',
      height: '440px',
      borderColor: 'white',
      borderStyle: 'solid',
      borderWidth: '0 0 1px 1px',
      padding: '0 69px',
    }}>
      <GraphNode
        label={target.name}
        value={target.value}
        maxHeight={maxGraphHeight}
        type="target"
      />
      <GraphNode
        label={national.name}
        value={national.value}
        maxHeight={maxGraphHeight}
        type="national"
      />
    </div>
  );
}

function GraphFigure ({ data }:{ data:IGraphData }) {
  const maxValue = useMemo(()=>Math.max(
    data.target.value,
    data.national.value,
  ), [data]);

  return (
    <div className="w-100 flex-auto graph-figure relative" style={{
      // 目盛りが表示させる空間を確保
      marginLeft: '4rem',
      marginBottom: '2rem',
    }}>
      <div className="graph-legend text-white absolute text-xs" style={{
        right: '100%',
        bottom: '100%',
        marginBottom: '1em',
      }}>
        <span className="break-keep text-nowrap whitespace-nowrap">{'(円/㎡)'}</span>
      </div>
      <Measures maxValue={Math.max(data.target.value, data.national.value)}/>
      <Figure
        target={data.target}
        national={data.national}
        maxValue={maxValue}
      />
    </div>
  );
}

export default GraphFigure;
