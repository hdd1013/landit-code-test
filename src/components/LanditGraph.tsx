import { IGraphData } from '../interfaces/IGraphData';

import GraphHeader from './graph/GraphHeader';
import GraphFigure from './graph/GraphFigure';


function LanditGraph ({ data }:{ data:IGraphData }) {
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

  return (
    <div className="graph relative flex flex-col" style={{
      // デザインに合わせて整列
      margin: '1.4rem 1.6rem 0 0px',
    }}>
      <GraphHeader
        area={data.target.name}
        year={data.year}
        purpose={data.purpose}
      />
      <GraphFigure data={data}/>
    </div>
  );
}

export default LanditGraph;
