import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Background = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await (container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className="background"
            options={{
                background: {
                    opacity: 0,
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "repulse",
                        },
                        onHover: {
                            enable: false,
                          },
                          resize: {
                            delay: 0.5,
                            enable: true
                          }
                        },
                    modes: {
                        repulse: {
                            distance: 300,
                            duration: 0.5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#D3D3D3"
                      },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: false,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: false,
                            area: 1000,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: { min: 0.03, max: 0.08},
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 20, max: 100 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default Background