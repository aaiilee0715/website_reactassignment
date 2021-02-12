import React, {Component} from 'react';
import '../style/top10Main.css';
import JosephFavPage from './josephFavUI';

class JosephDisplay extends Component {
    render(){
        return(
            <>
            <nav>
                    <div className="row brightGreen navPad">
                        <div className="col-4">
                            <a className="josefin" href="/pages/mockPuppyPages/JosephFavsPage">J.R.</a>
                        </div>
                        <div className="col-4 center ">
                            <Top10MainPageCardComponent
                                imgsrc={GlassesPix}
                                link="/pages/mockPuppyPages/Top10MainPage"
                                
                            />
                        </div>
                        <div className="col-4 rightAlign">
                            <a className="josefin" href="/pages/mockPuppyPages/AnnFavsPage">A.C.</a>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}
export default JosephFavPage;