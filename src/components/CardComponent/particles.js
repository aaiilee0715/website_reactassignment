import React, {Component} from 'react';
import Particles from "react-tsparticles";

class ParticlesBackground extends Component {
  render() {
    return (
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#9e6161",
            },
            links: {
              color: "#233067",
              distance: 150,
              enable: true,
              opacity: 0.9,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 7,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 190,
            },
            opacity: {
              value: 6.0,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 8,
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}
export default ParticlesBackground;