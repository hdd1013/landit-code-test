interface IGraphNode {
  name:string;
  value:number;
}

interface IGraphData {
  target:IGraphNode;
  national:Omit<IGraphNode, 'name'> & { name:'全国平均' };
}

export type { IGraphData, IGraphNode };
