import React from 'react';
import '../../components/style/annAboutMe.css';

const AnnAboutMePage = () => {
    return (
        <>
            <body className="annBody">
                <div>
                    <dt className="me">About Me &#128151;
            <br /> Anothay Chansy
            </dt>
                </div>
                <div className="annA">
                    <a href="https://codestackacademy.org/" target="_blank">
                        <dt>CodeStack Academy Student</dt>
                    </a>
                    <em>2020-2021 |</em>
                    <a href="https://www.horoscope.com/us/index.aspx" target="_blank"><ins>Daily Horoscope</ins></a>
                </div>
                <div className="AnnAboutImg">
                    <img src="https://i.ibb.co/zQpscfD/aa.jpg" height="300" width="300" />
                </div>

                <div>
                    <p className="annAboutP">
                        I am a third-year full-time student at CodeStack Academy in Stockton CA, where I am pursuing a profession as
                        a Software Engineer.
                        An absolutely exciting journey it has been this past couple of months.
                        I started out as a student with zero understanding of any programming language, and now I can confidently
                        say I know how to build something.
                        I am excited to learn more and curious about how my journey will end.
            <br />
            Aside from being a full-time student, I am a wife, and a mother who enjoy taking a family outing to South
            Lake Tahoe.
            I really love the sceanry drive there with the stunning lake that we can relax at &#127958; and spending
            time with my family is a big luxury for me.
            <br />
            I am a cat geek, I have lots of plants, a tattoo junkie, will watch any horror movie,
            and have just taken up ice cream making&#127848;
        </p>
                </div>
                <div class="hobby">
                    <dt>Here are more things that I enjoy:</dt>
                    <dt>&#127907;:Fishing</dt>
                    <dt>&#127957;:Camping</dt>
                    <dt>&#127984;:Amusement Park</dt>
                    <dt>&#128187;:PC Game</dt>
                    <dt>&#129385;:Steak Lover</dt>
                    <dt>&#127874;:Baker</dt>
                </div>
                <br />
                <div id="socialMedia">
                    <a href="https://www.Facebook.com/anothay.chansylee" target="_blank">
                        <ins
                            style={{ color: "white" }}> Facebook |
                            </ins>
                    </a>
                    <a href="https://twitter.com/_aaiilee" target="_blank">
                        <ins
                            style={{ color: "white" }}> Twitter |
                                 </ins>
                    </a>
                    <a href="https://www.instagram.com/aaiilee_/" target="_blank">
                        <ins
                            style={{ color: "white" }}> Instagram |
                     </ins>
                    </a>
                    <a href="https://www.twitch.tv/victoriapink" target="_blank">
                        <ins
                            style={{ color: "white" }}> Twitch
                        </ins>
                    </a>
                </div>
            </body>
        </>
    );
}
export default AnnAboutMePage;