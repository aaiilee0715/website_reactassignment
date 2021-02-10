import React, { Component } from 'react';
import '../style/mockPuppy.css';

import PuppyAboutCardComponent from '../CardComponent/puppyAboutUI';
import MuzzleLogoPix from '../images/puppyMockupImage/MuzzlesLogo.png';

class PuppyAboutDisplay extends Component {
    render() {
        return (
            <>
                <div class="container containerwidth">
                    <nav class="puppyNavbar navbar navbar-light bg-light col-xl-auto col-lg-12 col-md-12 col-sm-12 ">
                        <PuppyAboutCardComponent
                            imgsrc={MuzzleLogoPix}
                            href="/pages/mockPuppy"
                        />
                        <ul class="nav justify-content-end">
                            <li class="nav-item puppyNavText">
                                <a class="nav-link puppyNavText" href="../pages/about.html">About</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link puppyNavText" href="../pages/foodMenu.html">Menu</a>
                            </li>
                            <li class="nav-item puppyNavText">
                                <a class="nav-link puppyNavText" href="../pages/catering.html">Catering</a>
                            </li>
                            <li class="nav-item puppyNavText">
                                <a class="nav-link puppyNavText" href="../pages/photos.html">Photos</a>
                            </li>
                        </ul>
                    </nav>
                    <br />
                </div>
                <div></div>

            </>
        );
    }
}
export default PuppyAboutDisplay;