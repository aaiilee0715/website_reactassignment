import React from 'react';
import '../components/style/top10Main.css';
import Top10MainDisplay from '../components/CardComponent/top10MainCard';

const TopTenFavoriteCenter = () => {
  return (
    <>
      <body className="top10MainBody">
        <div className="brightGreen align-item-start">
          <a className="nav-link" href='/'>Back To Main</a>
        </div>
        <Top10MainDisplay />
      </body>
    </>
  );
}
export default TopTenFavoriteCenter;