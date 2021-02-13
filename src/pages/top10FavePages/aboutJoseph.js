import React from 'react';
import '../../components/style/josephAboutMe.css';
import JosephAboutMePix from '../../components/images/aboutJosephImage/blue_headshot.png';
import JosephModernPix from '../../components/images/aboutJosephImage/jr modern round.png';

const JosephAboutMePage = () => {
    return (
        <>

            <body className="josephBody">
                <div>
                    <img src={JosephAboutMePix} alt="Joseph Racca's Headshot" width="300px" className="headShot" />
                </div>

                <div>
                    <h1 className="Josephh1">joseph racca</h1>
                    <h2 className="Josephh2">designer ∙ thinker ∙ student(er)</h2>
                    <hr className="rule"></hr>
                </div>

                <div className="row">
                    <div className="col-8">
                        <div className="yellow">
                            <p className="blackText Josephp">
                                Joseph is currently a <strong>student</strong> at Codestack Academy in Stockton, California. Prior
                to enrolling in the Academy, he
                worked as a <strong>graphic designer</strong>, which he hopes will come in handy as he learns
                development.
            </p>
                        </div>
                        <div className="blue">
                            <p className="blackText Josephp">
                                He is a <strong><ins>proud</ins></strong> father to two kids, <strong>Golden</strong> and
                <strong>Bruno</strong> (<a href="https://www.instagram.com/goldenshour/" target="_blank"
                                    className="smallLinkIG">🐾 </a>) and to over a hundred plants (<a
                                        href="https://www.instagram.com/chloro.fil/" target="_blank" className="smallLinkIG">🌱 </a>).
                During his breaks from studying... you'll find him doing freelance design to help cover his
                <del>appetite</del>
                                <ins><strong>love</strong></ins> for food. And with so much flora and fauna in his space, studying
                and working from home feels more like vacation in an urban rainforest.
            </p>
                        </div>
                        <div className="pink">
                            <p className="blackText Josephp">
                                <strong>Racca's</strong> mission is to experience continued growth in a collaborative environment.
                He is
                inspired by and curious about everything around him. He is a life-long learner, who loves to
                understand the way things work and he prides himself in working efficiently and effectively.
            </p>
                        </div>
                        <div className="white">
                            <p className="blackText Josephp"><b>Get
                in touch with Joseph ---></b>...<b>OR</b> check out Racca's <strong>process</strong> on <a
                                    href="PDFs/Deal or No Deal.pdf" className="smallLink Josepha">this project</a> he's currently working on
                improving for the Academy!</p>
                        </div>
                    </div>

                    <div className="col-4">
                        <div>
                            <h3 className="Josephh3">connect</h3>
                            <dl>
                                <dt>[INSTAGRAM]</dt>
                                <dd><a className="Josepha" href="https://www.instagram.com/jracca/" target="_blank">@jracca</a></dd>

                                <dt>[FACEBOOK]</dt>
                                <dd><a href="https://www.facebook.com/joseph.racca.1" target="_blank">/joseph.racca</a></dd>

                                <dt>[LINKEDIN]</dt>
                                <dd><a href="https://www.linkedin.com/in/josephracca/" target="_blank">/josephracca</a></dd>

                                <dt>[TWITTER]</dt>
                                <dd><a href="https://twitter.com/thejosephracca" target="_blank">@thejosephracca </a></dd>
                            </dl>

                            <h3 className="Josephh3">contact</h3>
                            <dl>
                                <dt>[EMAIL]</dt>
                                <dd><a href="mailto: josephracca@gmail.com">josephracca@gmail.com</a>
                                </dd>

                                <dt>[PHONE]</dt>
                                <dd><a href="tel:+16613048852" target="_blank">661.304.8852</a>
                                </dd>
                            </dl>

                            <h3 className="Josephh3">critique</h3>
                            <dl>
                                <dt>[MY WORK]</dt>
                                <dd><a href="/PDFs/JosephRacca_Resume.pdf" target="_blank">resume.pdf</a> && <a
                                    href="/PDFs/Racca_design_portfolio.pdf" target="_blank">portfolio.pdf</a>
                                </dd>
                            </dl>
                        </div>

                    </div >

                </div >
                <hr className="rule"></hr>
                <div>
                    <p className="logoType Josephp">JOSEPH <img src={JosephModernPix} alt="Joseph Racca's Logo" width="80"
                        height="80" /> RACCA</p>
                    <p className="Josephp"><strong>
                        <center>Thanks for visiting!</center>
                    </strong></p>
                </div>
            </body>
        </>
    );
}
export default JosephAboutMePage;