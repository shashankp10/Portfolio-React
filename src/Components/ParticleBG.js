import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBG = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="background">
        <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
            background: {
            color: {
                value: "010B13",
            },
            },
            fpsLimit: 120,
            interactivity: {
            events: {
                onClick: {
                enable: true,
                mode: "pull",
                },
                onHover: {
                enable: true,
                mode: "repulse",
                },
                resize: true,
            },
            modes: {
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
                value: "#ffffff",
            },
            links: {
                color: "3E8EDE",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 3,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                enable: true,
                area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
            },
            detectRetina: true,
        }}
        />
    </div>
  );
};

export default ParticleBG;