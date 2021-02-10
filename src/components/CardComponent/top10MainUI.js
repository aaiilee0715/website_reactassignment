import React from 'react';
import '../style/top10Main.css';

const Top10MainPage = props => {
    return (
       <>
         <a href={props.link}>
                <img src={props.imgsrc} alt="Joseph and Ann's Glasses Logo" />
            </a>
            
          </>

    );
}
export default Top10MainPage;