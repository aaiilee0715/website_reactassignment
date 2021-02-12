import React from 'react'
import '../../components/style/top10Main.css';

import AnnFavsDisplay from '../../components/CardComponent/annFavsCard';

const AnnsFavPageCenter = () => {
    return(
        <>
         <body className="top10Body">
        <AnnFavsDisplay />
        </body>
        </>
    );
}
export default AnnsFavPageCenter;