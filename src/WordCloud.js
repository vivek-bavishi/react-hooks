import React,{ useState,useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';

function WordCloud() {
  useEffect(() => {
    document.title = `word cloud`;
  },[]);
  let [word,setWord]=useState([{text:'',value:''}]);
  let [text,setText]=useState('');
  let [value,setValue]=useState('');
  const options = {
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
    enableTooltip: true,
    deterministic: false,
    fontFamily: 'impact',
    fontSizes: [5, 60],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 1,
    rotations: 9,
    rotationAngles: [0, 90],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1,
  };
  return (<div className="WordCloud"><br/><br/>
    text: <input onChange={(e)=>setText(e.target.value)}/><br/><br/>
    value:<input onChange={(e)=>setValue(Number(e.target.value))}/><br/><br/>
    <button onClick={() =>setWord([...word,{text:`${text}`,value:`${value}`}])}>
        add text
      </button>
      <button onClick={() =>setWord([{text:'',value:''}])}>
        reset
      </button><br/><br/>
    <div>
      <br/><br/>
      <ReactWordcloud options={options} words={word} />
    </div>
    </div>
  );
}


export default WordCloud;