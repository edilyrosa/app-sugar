"use client";
import { useEffect, useRef, useState, CSSProperties } from "react";
import Image from "next/image";
import icon from "../assets/icon.png";
import card from "../assets/2.png";

import Second from './Second'

const iconFinalPositions = [
  { min: 1536, top: "-10vh", right: "20vw" },
  { min: 1280, top: "-15vh", right: "10vw" },
  { min: 1024, top: "-20vh", right: "5vw" },
  { min: 900, top: "-20vh", right: "-5vw" },
  { min: 768, top: "-15vh", right: "-5vw" },
  { min: 640, top: "-22vh", right: "-25vw" },
  { min: 400, top: "-15vh", right: "-25vw" },
  { min: 0, top: "-5vh", right: "-20vw" },
];

function getIconFinalPosition() { //!devuelve el obj confinuracion breakpoint
  const width = typeof window !== "undefined" // en SSR con Next.js podria no existir window
                                    ? window.innerWidth 
                                    : 1536; //Si no existe (servidor), se asigna un valor por defecto de 1536 (2xl:).
  return (
    iconFinalPositions.find((bp) => width >= bp.min) || //el ancho antual sea mayor o igual al breackpoint
    iconFinalPositions[iconFinalPositions.length - 1] //sino lo encuentra devuelve 0
  );
}

export default function Inicio() {
  const [progress, setProgress] = useState(0);
  const [atBottom, setAtBottom] = useState(false);
  const [iconFinal, setIconFinal] = useState(getIconFinalPosition());
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const section1Ref = useRef<HTMLDivElement | null>(null);
  const section2Ref = useRef<HTMLDivElement | null>(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const updateIconFinal = () => setIconFinal(getIconFinalPosition());
    window.addEventListener("resize", updateIconFinal);
    updateIconFinal();
    return () => window.removeEventListener("resize", updateIconFinal);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onScrollDirection = () => {
      const currentScrollTop = container.scrollTop;
      if (currentScrollTop > lastScrollTop.current) {
        setScrollDirection("down");
      } else if (currentScrollTop < lastScrollTop.current) {
        setScrollDirection("up");
      }
      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    container.addEventListener("scroll", onScrollDirection);
    return () => container.removeEventListener("scroll", onScrollDirection);
  }, []);

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
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, [atBottom]);

  // Escala para icon
  const scale = 1 - 0.8 * progress;

  // Estilos icon
  const styleIcon: CSSProperties = !atBottom
    ? {
        left: "50%",
        right: "auto",
        top: "auto",
        bottom: 0,
        transform: `translateX(-50%) translateY(${(1 - progress) * 50}%) scale(${scale})`,
        position: "fixed",
        transition:
          `transform 1s cubic-bezier(0.22, 0.61, 0.36, 1), 
          top 1s cubic-bezier(0.22, 0.61, 0.36, 1), 
          left 1s cubic-bezier(0.22, 0.61, 0.36, 1), 
          right 1s cubic-bezier(0.22, 0.61, 0.36, 1)`,
        zIndex: 50,
      }
    : {
        left: "auto",
        right: iconFinal.right,
        top: iconFinal.top,
        bottom: "auto",
        transform: `scale(${scale})`,
        position: "fixed",
        transition:
          `transform 1s cubic-bezier(0.22, 0.61, 0.36, 1), 
          top 1s cubic-bezier(0.22, 0.61, 0.36, 1), 
          left 1s cubic-bezier(0.22, 0.61, 0.36, 1), 
          right 1s cubic-bezier(0.22, 0.61, 0.36, 1)`,
        zIndex: 50,
      };

  // Efecto naipe para la card: rotación Y de 90° (perfil) a 0° (frontal)
  const rotateY = 85 - 90 * progress;

  const styleCardDoor: CSSProperties = {
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transformOrigin: "left center",
    perspective: "800px",
    transform: `perspective(800px) rotateY(${rotateY}deg) rotateX(385deg)`,
    transition: "transform 1s ease-out",
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
        <div
          id="titles"
          className={`
             text-[rgb(60,6,94)]
             font-bold text-center alfa-slab-one-regular leading-none
            transition-transform duration-1000 ease-in-out
            ${scrollDirection === "down" ? "-translate-y-30 opacity-0" : "translate-y-0 opacity-100"}
          `}
        >
          <h1 className=" mb-4 text-[30px] sm:text-[50px] lg:text-[70px] 2xl:text-[80px]">
            YOUR HOME IS WEB3
          </h1>
          <h2 className="pb-[5%] font-bold text-[20px] sm:text-[30px] lg:text-[50px] 2xl:text-[60px]">
            do you wanna try? !
          </h2>
        </div>

        <div
          style={styleIcon}
          className="aspect-square overflow-hidden pointer-events-none select-none
            w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] mx-auto"
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
        <div>
          <Image
              style={{ ...styleCardDoor}}
              
            src={card}
            alt="card"
            className="object-contain w-[90%] h-[50%] sm:w-[60%] sm:h-[60%] md:w-[50%] md:h-[80%] lg:w-[40%] lg:h-[70%]"
            draggable={false}
            
          />
        </div>
      </div>

         <div
        //  ref={section2Ref} tenemos que hacer que la imagen icono con el mismo tamano de scala baje al botton de esta nueva seccion
        className="h-screen snap-start flex justify-center items-center relative"
        >
            <Second/>

      </div>

   

 


    </div>
  );
}




