import React, { Component} from 'react';
import CardComponent from './cardUI';

import './card.css';

//import images
import poppyPix from '../images/poppyPix.png';
import hamsterHotelPix from '../images/hamster.png';
import multiPix from '../images/multiPix.png';
import puppyPix from '../images/puppyPix.png';



class CardDisplay extends Component {
    render() {
        return (
          
            <div className="d-flex justify-content-center">
                <div className="row">

                    <div className="col-md-3">
                        <CardComponent imgsrc={poppyPix}
                            title="Business Redevelopment Website"
                            text="In this team project, we were able to choose a local business and redevelop their website." 
                            projectBtn="/pages/businessRedo"/>  
                    </div>

                    <div className="col-md-3">
                        <CardComponent imgsrc={hamsterHotelPix}
                            title="Hamster Hotel"
                            text="In this project, we had to take the following mockup and make it into a fully functioning website." 
                            projectBtn= "/pages/hamsterHotel"/>
                    </div>

                    <div className="col-md-3">
                        <CardComponent imgsrc={multiPix}
                            title="Top 10 Favorites"
                            text="In this team project, we are to make a multi-page website that talks about our favorite video games and anime. 
                            We are required to have at least 10 favorite video games and 10 favorite anime."
                            projectBtn= "/pages/topTenFav" />
                    </div>
                    
                    <div className="col-md-3">
                        <CardComponent imgsrc={puppyPix}
                            title="Mock Puppy Restaurant"
                            text="In this team project, we had to take the following mockup and make it into a fully functioning and fully responsive website."
                            projectBtn="/pages/mockPuppy"/>
                    </div>

                </div>
            </div>
     
         

           

        );
    }
}
export default CardDisplay;









