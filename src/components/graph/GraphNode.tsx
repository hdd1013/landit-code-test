import stylesheet from './graph.module.scss';

function GraphNode ({ label, value, maxHeight, type }:{
  label:string,
  value:number,
  maxHeight:number,
  type:'target' | 'national'
}) {
  const barTypeClassName = type === 'target'
    ? stylesheet.targetgraph
    : stylesheet.nationalgraph;
  return (
    <div className="graph-node relative" style={{
      width: '200px',
      height: '100%',
      margin: '0 30px',
    }}>
      <div
        className={`absolute bottom-0 w-full ${barTypeClassName}`} style={{
          height: `${value / maxHeight * 100}%`,
        }}
        title={`${label}: ${value.toLocaleString()}円`}
      />
      <div
        className={`
        absolute w-full top-full text-center text-white
        ${type === 'target' ? 'font-bold' : 'text-sm'}
      `}
        style={{
          marginTop: '0.5rem',
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default GraphNode;
