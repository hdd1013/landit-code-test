import { useMemo } from 'react';

function MeasureMark ({ value, yPosition }:{ value:string, yPosition:number }) {
  return (
    <div className="block absolute text-white" style={{
      bottom: `${yPosition}%`,
      right: 0,
      height: '1rem',
      marginBottom: '-0.5rem',
    }}>
      <span className="block absolute text-xs leading-none" style={{
        bottom: '50%',
        right: '0.5rem',
        paddingRight: '0.25rem',
        transform: 'translateY(50%)',
        marginBottom: '0.1rem',
      }}>{value}</span>
      <div className="block absolute" style={{
        bottom: '50%',
        right: '-1px',
        width: '0.5rem',
        height: 0,
        boxSizing: 'content-box',
        borderTop: '1px solid white',
      }}
      />
    </div>
  );
}

function Measures ({ maxValue }:{ maxValue:number }) {
  const measures = useMemo(()=>{
    const measureList = [];
    let v = 0;
    while (v < maxValue) {
      measureList.push(v);
      v += 5000;
    }
    measureList.push(v);
    return measureList;
  }, [maxValue]);
  return (
    <div className="graph-measures absolute" style={{
      height: '100%',
      right: '100%',
      top: 0,
    }}>
      {measures.map((v, i, array)=>{
        return (
          <MeasureMark key={v} value={v.toLocaleString()} yPosition={100 / array.length * i}/>
        );
      })}
      {/* Additional grid mark for spacing */}
      <MeasureMark value="" yPosition={100}/>
    </div>
  );
}

export default Measures;
