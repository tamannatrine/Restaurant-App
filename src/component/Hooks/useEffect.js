import React  from 'react';
import "./style.css";

const UseEffect = () => {
    const [myNum, setmyNum] = React.useState(0);
    
    React.useEffect(() => {
        document.title = `Chat(${myNum})`
    });
    

  return (
    <>
      <div className='center_div'>
        <p>{myNum}</p>
        <div className="button2" onClick={()=>setmyNum(myNum+1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;
