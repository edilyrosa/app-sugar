"use client";
import { useEffect, useRef, useState, CSSProperties } from "react";
import Image from "next/image";
import icon from "../assets/icon.png";
import card from "../assets/2.png";

export default function Inicio() {
  const [progress, setProgress] = useState(0);
  const [atBottom, setAtBottom] = useState(false);
  const nextSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!nextSectionRef.current) return;

      const sectionRect = nextSectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progreso normalizado entre 0 y 1
      const p = 1 - Math.max(0, Math.min(sectionRect.top / windowHeight, 1));
      setProgress(p);

      // Detectar si la imagen llegó al bottom del segundo div
      // Cuando la parte inferior del div está dentro del viewport
      setAtBottom(sectionRect.bottom <= windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar al montar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escala de 1 (30% ancho) a 0.5 (15% ancho)
  const scale = 1 - 0.8 * progress;
  const widthPercent = 35 * scale; // de 30% a 15%

  // Estilos dinámicos con tipo CSSProperties para evitar errores TS
//   const style: CSSProperties = { //!inicial
//     // width: `${widthPercent}%`,
//     width: `50%`,
//     // Posición horizontal:
//     left: atBottom ? "auto" : "50%",
//     right: atBottom ? "0%" : "auto", // padding derecho 100px en esquina
//     // Posición vertical:
//     bottom: !atBottom && progress < 1 ? 0 : "auto",
//     top: atBottom ? "-15vh" : progress === 1 ? 0 : "auto",


//     // Transformaciones:
//     // translateX(-50%) para centrar horizontalmente al inicio,
//     // cuando está en esquina no usamos translateX para evitar solapamientos
//     transform: atBottom
//       ? `scale(${scale})`
//       : `translateX(-50%) translateY(${(1 - progress) * 50}%) scale(${scale})`,

//     position: atBottom ? "fixed" : progress < 1 ? "fixed" : "absolute",

//     // Transiciones suaves y lentas para la subida a la esquina
//     transition:
//       `transform 1s cubic-bezier(0.22, 0.61, 0.36, 1), top 1s cubic-bezier(0.22, 0.61, 0.36, 1), 
//       bottom 1s cubic-bezier(0.22, 0.61, 0.36, 1), width 1.8s cubic-bezier(0.22, 0.61, 0.36, 1), 
//       right 1.8s cubic-bezier(0.22, 0.61, 0.36, 1), left 1.8s cubic-bezier(0.22, 0.61, 0.36, 1)`,

//     zIndex: 50,
//   };

  return (
    <div className="px-[20%] bg-yellow-100">
      <div className="flex flex-col gap-[1%] items-center justify-center h-screen bg-yellow-100 relative">
            
            <h1 className="text-[50px] font-bold text-center text-blue-500 alfa-slab-one-regular">
            yummy yummy !
            </h1>
            
            <h2 className=" pb-[5%] text-[30px] font-bold text-center text-blue-500 alfa-slab-one-regular">
            do you wanna try? !
            </h2>

        
                {/* <div
                    style={style}
                    className={`m-[10px] aspect-square overflow-hidden pointer-events-none select-none bg-red-600`}
                    >
                    <Image
                        src={icon}
                        alt="Imagen con efecto"
                        fill
                        className="object-contain"
                        priority
                />
                </div> */}
                <div
  style={{
    // aquí solo estilos dinámicos que no afectan el width
    left: atBottom ? "auto" : "50%",
    right: atBottom ? "0%" : "auto",
    bottom: !atBottom && progress < 1 ? 0 : "auto",
    top: atBottom ? "-15vh" : progress === 1 ? 0 : "auto",
    transform: atBottom
      ? `scale(${scale})`
      : `translateX(-50%) translateY(${(1 - progress) * 50}%) scale(${scale})`,
    position: atBottom ? "fixed" : progress < 1 ? "fixed" : "absolute",
    transition:
      `transform 1s cubic-bezier(0.22, 0.61, 0.36, 1), top 1s cubic-bezier(0.22, 0.61, 0.36, 1), 
      bottom 1s cubic-bezier(0.22, 0.61, 0.36, 1), right 1.8s cubic-bezier(0.22, 0.61, 0.36, 1), 
      left 1.8s cubic-bezier(0.22, 0.61, 0.36, 1)`,
    zIndex: 50,
  }}
  className="
    m-[10px] aspect-square pointer-events-none select-none
    w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]
  "
>
  <Image
    src={icon}
    alt="Imagen con efecto"
    fill
    className="object-contain"
    priority
  />
</div>

      
      </div>
      <div
  ref={nextSectionRef as React.RefObject<HTMLDivElement>}
  className="flex justify-center items-center h-screen bg-yellow-100 relative"
>
  <div className="flex justify-center items-center gap-[5%] 
        w-[100%] h-[100%] 
        sm:w-[85%] sm:h-[85%]
        md:w-[70%] md:h-[70%]
        lg:w-[60%] lg:h-[60%]
        xl:w-[50%] xl:h-[50%]
  ">
    <Image
      src={card}
      alt="card"
      className="object-cover"
    />
  </div>
</div>

    </div>
  );
}




