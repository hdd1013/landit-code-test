import { useMemo } from 'react';

import { IGraphData } from '../../interfaces/IGraphData';
import GraphNode from './GraphNode';
import Measures from './Measures';

function Figure ({ target, national, maxValue, measureInterval }:{
  target:IGraphData['target'],
  national:IGraphData['national'],
  maxValue:number,
  measureInterval:number,
}) {
  const maxGraphHeight = useMemo(()=>
    (Math.ceil(maxValue / measureInterval) + 1) * measureInterval
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
      {
        target.value >= 0 && national.value >= 0
          ? (<>
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
          </>)
          : (
            // データが有効でない場合はメッセージを表示
            <div
              className={`
              absolute top-1/2 -translate-y-1/2
              p-8 flex flex-col justify-center items-center
              bg-black bg-opacity-10
              rounded-md
            `}
            >
              <div className="text-center text-white text-sm">
                データがありません。
              </div>
            </div>
          )
      }
    </div>
  );
}

function GraphFigure ({ data }:{ data:Pick<IGraphData, 'target' | 'national'> }) {
  const maxValue = useMemo(()=>Math.max(
    data.target.value,
    data.national.value,
  ), [data]);

  const measureInterval = useMemo(()=>{
    // Calculate the interval of the measures so that they
    // are not drawn too crowded.
    // 目盛りが密集しすぎないように、目盛りの間隔を調整
    // 5000から始めて5000ずつ増やす
    let interval = 5000;
    let measureCount = 0;
    measureCount = Math.floor(maxValue / interval) + 1;
    while (measureCount > 15) {
      interval += 5000;
      measureCount = Math.floor(maxValue / interval) + 1;
    }

    return interval;
  }, [data]);

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
      <Measures
        maxValue={Math.max(data.target.value, data.national.value)}
        measureInterval={measureInterval}
      />
      <Figure
        target={data.target}
        national={data.national}
        maxValue={maxValue}
        measureInterval={measureInterval}
      />
    </div>
  );
}

export default GraphFigure;
