export const ParticlesOptions = {
    background: {
        color: {
          value: "#fff",
        },
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
            parallax: {
                enable: true,
                force: 10,
                smooth: 20
            }
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.5,
          },
          grab: {
              distance: 150,
              links: {
                color: '#d62839',
                blink: true,
                consent: true,
                opacity: 1
              }
          }
        },
      },
      particles: {
        color: {
          value: "#fffcf2",
        },
        links: {
          color: "#fffcf2",
          distance: 150, 
          enable: true,
          opacity: 0.5,
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
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
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
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
      fullScreen: {
          enable:true,
          zIndex: -1
      }

}