import React from 'react';
import '../../components/style/top10Main.css';

const JosephFavsPage = props => {
    return(
        <>
          <a href={props.link} className="nav-link">
                <img src={props.imgsrc} alt="Joseph and Ann's Glasses Logo" />
            </a>
        </>
    );

}
export default JosephFavsPage;