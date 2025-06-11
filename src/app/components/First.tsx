// "use client";
// import { useEffect, useRef, useState, CSSProperties } from "react";
// import Image from "next/image";
// import icon from "../assets/icon.png";
// import card from "../assets/card.png"; // Assuming this is your "phone" image
// // import { alfaSlabOne, openSans, geistMono, geistSans } from '@/app/components/utils/fonts'; // Adjust path as needed

// import Second from './Second';
// import Header from "./Header";

// const iconFinalPositions = [
//   { min: 1536, top: "-10vh", right: "20vw" },
//   { min: 1280, top: "-15vh", right: "10vw" },
//   { min: 1024, top: "-20vh", right: "5vw" },
//   { min: 900, top: "-20vh", right: "-5vw" },
//   { min: 768, top: "-15vh", right: "-5vw" },
//   { min: 640, top: "-22vh", right: "-25vw" },
//   { min: 400, top: "-15vh", right: "-25vw" },
//   { min: 0, top: "-5vh", right: "-20vw" },
// ];

// function getIconFinalPosition() {
//   const width = typeof window !== "undefined" ? window.innerWidth : 1536;
//   return (
//     iconFinalPositions.find((bp) => width >= bp.min) ||
//     iconFinalPositions[iconFinalPositions.length - 1]
//   );
// }

// export default function Inicio() {
//   const [progress, setProgress] = useState(0);
//   const [atBottom, setAtBottom] = useState(false);
//   const [iconFinal, setIconFinal] = useState(getIconFinalPosition());
//   const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
//   const [animatePerspective, setAnimatePerspective] = useState(false);

//   const scrollContainerRef = useRef<HTMLDivElement | null>(null);
//   const section1Ref = useRef<HTMLDivElement | null>(null);
//   const section2Ref = useRef<HTMLDivElement | null>(null);
//   const lastScrollTop = useRef(0);

//   useEffect(() => {
//     const updateIconFinal = () => setIconFinal(getIconFinalPosition());
//     window.addEventListener("resize", updateIconFinal);
//     updateIconFinal();
//     return () => window.removeEventListener("resize", updateIconFinal);
//   }, []);

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     const onScrollDirection = () => {
//       const currentScrollTop = container.scrollTop;
//       if (currentScrollTop > lastScrollTop.current) {
//         setScrollDirection("down");
//       } else if (currentScrollTop < lastScrollTop.current) {
//         setScrollDirection("up");
//       }
//       lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
//     };

//     container.addEventListener("scroll", onScrollDirection);
//     return () => container.removeEventListener("scroll", onScrollDirection);
//   }, []);

//   useEffect(() => {
//     if (!section2Ref.current) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setAtBottom(true);
//           setProgress(1);
//         } else {
//           setAtBottom(false);
//         }
//       },
//       { threshold: 0.6 }
//     );
//     observer.observe(section2Ref.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (atBottom) return;
//     const handleScroll = () => {
//       if (
//         !scrollContainerRef.current ||
//         !section1Ref.current ||
//         !section2Ref.current
//       )
//         return;

//       const container = scrollContainerRef.current;
//       const scrollTop = container.scrollTop;
//       const section1Top = section1Ref.current.offsetTop;
//       const section2Top = section2Ref.current.offsetTop;
//       const sectionHeight = section2Top - section1Top;

//       let p = (scrollTop - section1Top) / sectionHeight;
//       p = Math.max(0, Math.min(p, 1));
//       setProgress(p);

//       // Activar animación la primera vez que el usuario hace scroll (si no está activa)
//       if (!animatePerspective && scrollTop > 0) {
//         setAnimatePerspective(true);
//       }
//     };

//     const container = scrollContainerRef.current;
//     if (container) {
//       container.addEventListener("scroll", handleScroll);
//       handleScroll();
//     }
//     return () => {
//       if (container) container.removeEventListener("scroll", handleScroll);
//     };
//   }, [atBottom, animatePerspective]);

//   // Escala para icono
//   const scale = 1 - 0.8 * progress;

//   // Estilos icono
//   const styleIcon: CSSProperties = !atBottom
//     ? {
//         left: "50%",
//         right: "auto",
//         top: "auto",
//         bottom: 0,
//         transform: `translateX(-50%) translateY(${(1 - progress) * 50}%) scale(${scale})`,
//         position: "fixed",
   
//         transition:
//           `transform 1s cubic-bezier(0.22, 0.61, 0.36, 1),
//           top 1s cubic-bezier(0.22, 0.61, 0.36, 1),
//           left 1s cubic-bezier(0.22, 0.61, 0.36, 1),
//           right 1s cubic-bezier(0.22, 0.61, 0.36, 1)`,
//         zIndex: 50,
//       }
//     : {
//         left: "auto",
//         right: iconFinal.right,
//         top: iconFinal.top,
//         bottom: "auto",
//         transform: `scale(${scale})`,
//         position: "fixed",
       
//         transition:
//           `transform 1s cubic-bezier(0.22, 0.61, 0.36, 1),
//           top 1s cubic-bezier(0.22, 0.61, 0.36, 1),
//           left 1s cubic-bezier(0.22, 0.61, 0.36, 1),
//           right 1s cubic-bezier(0.22, 0.61, 0.36, 1)`,
//         zIndex: 50,
//       };



// // !****************************TEST
//   const styleRings: CSSProperties = !atBottom
//     ? {
 
//         borderRadius: "2rem", /* rounded-lg */
//         boxShadow: "0 0 0 5px white",
//         rotate:'10deg',
//         transform: `translateX(-50%) translateY(${(1 - progress) * 50}%) scale(${scale})`,
//         transition:
//           `
//             transform 1s boxShadow 0 0 0 40px black
//                transform 1s  backgroundColor red
//          `,
//         zIndex: 50,
//       }
//     : {
     
//         backgroundColor:'blue',
//         borderRadius: "2rem",
//         boxShadow: "0 0 0 5px red",
//         rotate:'32deg',
//         transition:
//           `
//           transform 1s boxShadow 0 0 0 40px black
//            transform 1s rotate 20deg
          
//          `,
//         zIndex: 50,
//       };





//   // --- NEW: Dynamic styles for the phone container (based on target rules) ---
//   const initialRotateX = 43.6046; // Target initial rotateX
//   const initialRotateY = 27.1317; // Target initial rotateY
//   const initialRotateZ = -4.7583; // Target initial rotateZ (from rotate(-4.7583deg))
//   const initialScale = 1.0709;   // Target initial scale

//   // You need to decide how these values change with 'progress'.
//   // For demonstration, let's make them ease out as progress goes from 0 to 1.
//   // We'll interpolate between the "initial" state (at progress 0) and a "final" state (at progress 1).
//   // The 'final' state could be flat (no rotation, scale 1) or another set of values.

//   // For simplicity, let's say at progress = 1, it becomes flat and scale 1.
//   const currentRotateX = initialRotateX * (1 - progress);
//   const currentRotateY = initialRotateY * (1 - progress);
//   const currentRotateZ = initialRotateZ * (7 - progress);
//   const currentScale = initialScale - (initialScale - 1) * progress; // Scales from initial to 1

//   // The translate3d(0px, 0px, 0px) is just a placeholder, but we keep it for 3D context.
//   const stylePhoneContainer: CSSProperties = {
//     opacity: 0.2913 + (1 - 0.2913) * progress, // Fades in as it approaches 1
//     transform: `
//       translate3d(0px, 0px, 0px)
//       rotate(${currentRotateZ + 10}deg) 
//       rotateY(${currentRotateY}deg)
//       rotateX(${currentRotateX}deg)
//       scale(${currentScale}, ${currentScale})
//     `,
//     // Keep transformStyle for 3D effects on children if needed
//     transformStyle: "preserve-3d",
//     transition: "transform 1s ease-out, opacity 1s ease-out", // Smooth transitions
//     visibility: "inherit", // Or "visible"
//     // Add position relative and other layout styles if this div needs to be positioned
//     position: 'absolute', // Example positioning, adjust as needed
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   };





//   return (
//     <div
//       ref={scrollContainerRef}
//       className="h-screen overflow-y-scroll snap-y snap-mandatory px-[20%] bg-[rgb(255,241,235)]"
//     >

//       {/* Primera sección */}
//       <div
//         ref={section1Ref}
//         className="h-screen snap-start flex flex-col items-center justify-center relative"
//       >

//         <div
//           id="titles"
//           className={`
//               text-[rgb(60,6,94)]
//               text-center alfa-slab-one-regular leading-none
//               transition-transform duration-1000 ease-in-out
//               ${scrollDirection === "down" ? "-translate-y-30 opacity-0" : "translate-y-0 opacity-100"}
//             `}
//         >
//           <Header />
//           <h1 className={
//             `mb-4 text-[30px] sm:text-[50px] lg:text-[70px] 2xl:text-[80px]
//             `}>
//             YOUR HOME IS WEB3
//           </h1>
//           <h2 className="font-geist-mono pb-[5%] text-[20px] sm:text-[30px] lg:text-[50px] 2xl:text-[60px]">
//             do you wanna try? !
//           </h2>
//         </div>

//         <div
//           style={styleIcon}
//           className="aspect-square overflow-hidden pointer-events-none select-none w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] mx-auto"
//         >
//           <div className="relative w-full h-full">
//             <Image
//               src={icon}
//               alt="Imagen con efecto"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       {/* Segunda sección con efecto naipe */}
//       <div
//         ref={section2Ref}
//         className="h-screen snap-start flex justify-center items-center relative"
//       >
//         {/* NEW: Apply the complex styles to a wrapper div */}
//         <div
//          style={stylePhoneContainer}
//           className={`
//             w-[90%] sm:w-[65%] md:w-[55%] lg:w-[40%]
//             h-[50%] sm:h-[60%] md:h-[80%] lg:h-[70%]
           
//             ${
//               animatePerspective
              
//                 ? "-rotate-25 animate-perspective-transition opacity-100 transition-opacity duration-1000 ease-in-out"
//                 : "perspective-[800px] opacity-10 transition-opacity duration-1000 ease-in-out" // This class still sets perspective
//             }
//           `}
//         >
//           {/* Your Image component inside the styled wrapper */}
//             <div 
//             className={
//               `inline-block rounded-lg
//               `
//             }
            
//             style={styleRings}
//             >
//               <div className="m-2 rounded-lg ring-2 ring-white transform rotate-12"
     
//               >
//                     <Image
//                       src={card}
//                       alt="card"
//                       className="object-contain p-2 ring-1 ring-white transform rotate-[40] "
//                       draggable={false}
//                     />
//               </div>
//             </div>



//         </div>
//       </div>

//       {/* Tercera sección */}
//       <div className="h-screen snap-start flex justify-center items-center relative">
//         <Second />
//       </div>
//     </div>

//   );
// }



"use client";
import { useEffect, useRef, useState, CSSProperties } from "react";
import Image from "next/image";
import icon from "../assets/icon.png";
import card from "../assets/card.png";
import Second from './Second';
import Header from "./Header";

// Función para interpolar colores hex
function interpolateColor(color1: string, color2: string, factor: number) {
  const c1 = color1.match(/\w\w/g)!.map((c) => parseInt(c, 16));
  const c2 = color2.match(/\w\w/g)!.map((c) => parseInt(c, 16));
  const result = c1.map((v, i) => Math.round(v + (c2[i] - v) * factor));
  return `#${result.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

export default function Inicio() {
  const [progress, setProgress] = useState(0);
  const [atBottom, setAtBottom] = useState(false);
  const [animatePerspective, setAnimatePerspective] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!section2Ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAtBottom(true);
          setProgress(1);
        } else {
          setAtBottom(false);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(section2Ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (atBottom) return;
    const handleScroll = () => {
      if (
        !scrollContainerRef.current ||
        !section1Ref.current ||
        !section2Ref.current
      )
        return;

      const container = scrollContainerRef.current;
      const scrollTop = container.scrollTop;
      const section1Top = section1Ref.current.offsetTop;
      const section2Top = section2Ref.current.offsetTop;
      const sectionHeight = section2Top - section1Top;

      let p = (scrollTop - section1Top) / sectionHeight;
      p = Math.max(0, Math.min(p, 1));
      setProgress(p);

      if (!animatePerspective && scrollTop > 0) {
        setAnimatePerspective(true);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, [atBottom, animatePerspective]);

  // --- ESTILOS PARA EL WRAPPER CON RING Y ANIMACIÓN ---
  const bgColor = interpolateColor("ffffff", "0000ff", progress); // blanco a azul
  const ringColor = interpolateColor("ff0000", "000000", progress); // rojo a negro
  const wrapperRotate = 32 - 12 * progress; // de 32deg a 20deg

  const styleRings: CSSProperties = {
    backgroundColor: bgColor,
    borderRadius: "2rem",
    boxShadow: `0 0 0 5px ${ringColor}`,
    transform: `rotate(${wrapperRotate}deg)`,
    transition: "background-color 2s, box-shadow 2s, transform 2s",
    display: "inline-block",
    zIndex: 50,
  };

  // --- ESTILO PARA LA IMAGEN INTERNA (ROTACIÓN INDEPENDIENTE) ---
  const imgRotate = 40 - 28 * progress; // de 40deg a 12deg
  const styleImage: CSSProperties = {
    transform: `rotate(${imgRotate}deg)`,
    transition: "transform 2s",
    display: "block",
  };

  // --- ESTILOS PARA EL CONTENEDOR DEL PHONE (puedes ajustar según tu lógica) ---
  const stylePhoneContainer: CSSProperties = {
    opacity: 0.2913 + (1 - 0.2913) * progress,
    transition: "transform 1s ease-out, opacity 1s ease-out",
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div
      ref={scrollContainerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory px-[20%] bg-[rgb(255,241,235)]"
    >
      {/* Primera sección */}
      <div
        ref={section1Ref}
        className="h-screen snap-start flex flex-col items-center justify-center relative"
      >
        <div id="titles" className="text-[rgb(60,6,94)] text-center alfa-slab-one-regular leading-none">
          <Header />
          <h1 className="mb-4 text-[30px] sm:text-[50px] lg:text-[70px] 2xl:text-[80px]">
            YOUR HOME IS WEB3
          </h1>
          <h2 className="font-geist-mono pb-[5%] text-[20px] sm:text-[30px] lg:text-[50px] 2xl:text-[60px]">
            do you wanna try? !
          </h2>
        </div>
        <div
          className="aspect-square overflow-hidden pointer-events-none select-none w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] mx-auto"
        >
          <div className="relative w-full h-full">
            <Image
              src={icon}
              alt="Imagen con efecto"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Segunda sección con efecto naipe */}
      <div
        ref={section2Ref}
        className="h-screen snap-start flex justify-center items-center relative"
      >
        <div style={stylePhoneContainer}
          className="w-[90%] sm:w-[65%] md:w-[55%] lg:w-[40%] h-[50%] sm:h-[60%] md:h-[80%] lg:h-[70%]"
        >
          <div
            className="inline-block rounded-lg"
            style={styleRings}
          >
            <div className="m-2 rounded-lg ring-2 ring-white">
              <Image
                src={card}
                alt="card"
                className="object-contain p-2 ring-1 ring-white"
                style={styleImage}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tercera sección */}
      <div className="h-screen snap-start flex justify-center items-center relative">
        <Second />
      </div>
    </div>
  );
}
