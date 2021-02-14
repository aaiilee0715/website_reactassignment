import React, { useState, lgShow } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../style/top10Main.css';

import JosephPix from '../../images/top10FavImage/Joseph.jpg';
import PokemonSSPix from '../../images/top10FavImage/PokemonSS.jpg';
import PokemonYTPix from '../../images/top10FavImage/PokemonYT.png';

function PokemonModalArea() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    return (
        <>
            <span className="badge animePurple" onClick={() => setLgShow(true)}>SEE JOSEPH'S REVIEW</span>
            <Modal className="top10MainBodyh4"
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <img src={JosephPix} className="fullWidth imgFloat" />
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h2 className="modal-title" id="exampleModalLabel">Pokemon <span
                            className="badge badge-pill badge-primary">#Anime</span></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-5 vl">
                            <img src={PokemonSSPix} className="fullWidth" />
                            Screenshot of Pokemon
                        <hr />
                            <img src={PokemonYTPix} className="fullWidth" />
                            <div>
                                <a href="https://www.youtube.com/watch?v=cZpvCC6_RiU" type="button"
                                    className="sm-btn btn-primary red center" target="_blank">WATCH REVIEW</a>
                            </div>
                        </div>
                        <div className="col-7">
                            <h4>Joseph Review</h4>
                            <p>
                                Who's that Pokemon?! It's Mew! Oh wait, there's Mew Two. A classic. Saturday morning cartoons, Ash, Brock, Misty, Pikaaaaaa. I miss this show and I really enjoyed watching the series as well as playing the games (Blue and Crystal are the ones I played the most).<br />
                                <br />
                                From wiki:<em>Pokémon, also known as Pocket Monsters in Japan, is a Japanese media franchise managed by the Pokémon Company, a company founded by Nintendo, Game Freak, and Creatures. The franchise was created by Satoshi Tajiri in 1995, and is centered on fictional creatures called "Pokémon", which humans, known as Pokémon Trainers, catch and train to battle each other for sport. Works within the franchise are set in the Pokémon universe. The English slogan for the franchise is "Gotta Catch 'Em All".</em>
                                <br />
                                <br />
                                Maybe one day I'll rewatch a few episodes (maybe even the newer seasons) but for now I'll let the nostalgia play in my mind.
                                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="transparent" onClick={handleClose}>
                        Close
                            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default PokemonModalArea;