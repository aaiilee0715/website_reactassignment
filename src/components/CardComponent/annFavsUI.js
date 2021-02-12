import React from 'react';
import '../style/top10Main.css';

const AnnFavesPage = props => {
    return (
       <>
         <a href={props.link}>
                <img src={props.imgsrc} alt="Joseph and Ann's Glasses Logo" />
            </a>
          </>

    );
}
export default AnnFavesPage;