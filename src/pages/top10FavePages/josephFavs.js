import React from 'react';
import '../../components/style/top10Main.css';

import JosephFavsDisplay from '../../components/CardComponent/josephFavsCard';

const JosephFavPageCenter = () => {
    return(
        <>
         <body className="top10Body">
        <JosephFavsDisplay />
        </body>
        </>
    );
}
export default JosephFavPageCenter;