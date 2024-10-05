import { useContext } from 'react';

import GraphHeader from './GraphHeader';
import GraphFigure from './GraphFigure';

import EstateDataContext from '../../contexts/EstateDataContext';


function LanditGraph () {
  /*
    Draw the graph
    Since it's a simple graph, we won't use any library
    Specifications:
    Measures: automatically draw measures in 5,000 interval.
    Add another one as a spacer at the top.
    ========================================
    グラフを作る
    簡単なグラフなのでライブラリは使いません。
    目盛りは5000円刻みで生成します。
    スペーサーとして一番上に空白盛りを追加します。
  */
  /*
    Update:
    If the price is too high, resulting in too many measures,
    increase the interval by 5,000.
    ========================================
    価格が高すぎて目盛りが多すぎる場合は、 5000円刻みで間隔を広げます。
  */

  const { prefName, purposeName, year, priceValue, nationalValue } =
    useContext(EstateDataContext);

  return (
    <div className="graph relative flex flex-col" style={{
      // デザインに合わせて整列
      margin: '1.4rem 1.6rem 0 0px',
    }}>
      <GraphHeader
        area={prefName}
        year={Number(year)}
        purpose={purposeName}
      />
      <GraphFigure data={{
        target: {
          name: prefName,
          value: priceValue,
        },
        national: {
          name: '全国平均',
          value: nationalValue,
        },
      }}/>
    </div>
  );
}

export default LanditGraph;
