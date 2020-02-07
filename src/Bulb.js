import React, { useState,useEffect } from 'react';

import './gsass.sass';

function Bulb() {
  useEffect(() => {
    document.title = `Bulb`;
  },[]);
  let [srca,setSrc] = useState("https://www.w3schools.com/js/pic_bulboff.gif");
  return (
    <div className="Bulb"><br/><br/>
    {srca.match("bulboff")?<p>👇don't touch 💡</p>:<p>😡 save electricity turn off 💡</p>}
      <img src={srca} onClick={(img) =>img.target.src.match("bulboff")?setSrc("https://www.w3schools.com/js/pic_bulbon.gif"):setSrc("https://www.w3schools.com/js/pic_bulboff.gif")}/>
    </div>
  );
}

export default Bulb;
