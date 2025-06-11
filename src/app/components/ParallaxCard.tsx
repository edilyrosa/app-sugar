// 'use client';
// import React, { useRef } from 'react';
// import Image from 'next/image';
// import fondo from "../assets/fondo.png"; 
// import objetos from "../assets/objetos.png"; 
// import chica from "../assets/chica.png"; 
// type Props = {
//   width?: string;
//   height?: string;
// };

// export const ParallaxCard: React.FC<Props> = ({
//   width = 'w-[400px]',
//   height = 'h-[600px]',
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - left;
//     const y = e.clientY - top;

//     const offsetX = (x / width - 0.5) * 30;
//     const offsetY = (y / height - 0.5) * 30;

//     if (containerRef.current) {
//       containerRef.current.style.transform = `rotateY(${-offsetX}deg) rotateX(${offsetY}deg)`;
//     }
//   };

//   const resetTransform = () => {
//     if (containerRef.current) {
//       containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
//     }
//   };

//   return (
//     <div
//       className={`${width} ${height} perspective relative mx-auto`}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetTransform}
//     >
//       <div
//         ref={containerRef}
//           className="relative w-full h-full transition-transform duration-200 ease-out"
//           style={{ transformStyle: 'preserve-3d' }}
//         >
//           <Image
//             src={fondo}
//             alt="fondo"
//             fill
//             className="absolute top-0 left-0 w-full h-full object-cover z-0"
//             style={{ transform: 'translateZ(-30px) scale(1.1)' }}
//             priority
//           />
//         <Image
//           src={objetos}
//           alt="objetos"
//           fill
//           className="absolute top-0 left-0 w-full h-full object-contain z-10"
//           style={{ transform: 'translateZ(-10px)' }}
//           priority
//         />
//         <Image
//           src={chica}
//           alt="chica"
//           fill
//           className="absolute top-0 left-0 w-full h-full object-contain z-20"
//           style={{ transform: 'translateZ(10px)' }}
//           priority
//         />
//       </div>
//       </div>
//   );
// };













// 'use client';
// import React, { useRef } from 'react';
// import Image from 'next/image';
// import fondo from "../assets/fondo.png";
// import objetos from "../assets/objetos.png";
// import chica from "../assets/chica.png";

// type Props = {
//   width?: string;
//   height?: string;
// };

// export const ParallaxCard: React.FC<Props> = ({
//   width = 'w-[400px]',
//   height = 'h-[600px]',
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - left;
//     const y = e.clientY - top;

//     // Multiplica por más grados para exagerar el efecto (p. ej., 60 en vez de 30)
//     const offsetX = (x / width - 0.5) * 60;
//     const offsetY = (y / height - 0.5) * 60;

//     if (containerRef.current) {
//       containerRef.current.style.transform = `rotateY(${-offsetX}deg) rotateX(${offsetY}deg)`;
//     }
//   };

//   const resetTransform = () => {
//     if (containerRef.current) {
//       containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
//     }
//   };

//   return (
//     <div
//       className={`${width} ${height} perspective-[2000px] relative mx-auto`}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetTransform}
//     >
//       <div
//         ref={containerRef}
//         className="relative w-full h-full transition-transform duration-300 ease-out"
//         style={{ transformStyle: 'preserve-3d' }}
//       >
//         <Image
//           src={fondo}
//           alt="fondo"
//           fill
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//           style={{ transform: 'translateZ(-60px) scale(1.2)' }}
//           priority
//         />
//         <Image
//           src={objetos}
//           alt="objetos"
//           fill
//           className="absolute top-0 left-0 w-full h-full object-contain z-10"
//           style={{ transform: 'translateZ(-20px)' }}
//           priority
//         />
//         <Image
//           src={chica}
//           alt="chica"
//           fill
//           className="absolute top-0 left-0 w-full h-full object-contain z-20"
//           style={{ transform: 'translateZ(20px)' }}
//           priority
//         />
//       </div>
//     </div>
//   );
// };









'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
//import fondo from "../assets/fondo.png";
import objetos from "../assets/objetos.png";
import chica from "../assets/chica.png";
//import { alfaSlabOne, poppins, montserrat } from '@/app/components/utils/fonts'; // Adjust path as needed


type Props = {
  width?: string;
  height?: string;
};

export const ParallaxCard: React.FC<Props> = ({
  width = 'w-[300px]',
  height = 'h-[500px]',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Movimiento exagerado (multiplicador 60)
    const offsetX = (x / width - 0.5) * 60;
    const offsetY = (y / height - 0.5) * 60;

    if (containerRef.current && textRef.current) {
      // Rota el contenedor principal con movimiento exagerado
      containerRef.current.style.transform = `rotateY(${-offsetX}deg) rotateX(${offsetY}deg)`;

      // El texto se mueve con translate, proporcional pero más intenso para que se note bien
      // Aquí usamos valores más grandes para el texto en px, con un factor para exagerar
      const textTranslateX = (x / width - 0.5) * 80; // ±40px aprox
      const textTranslateY = (y / height - 0.5) * 80; // ±40px aprox

      textRef.current.style.transform = `translate3d(${textTranslateX}px, ${textTranslateY}px, 40px)`;
    }
  };

  const resetTransform = () => {
    if (containerRef.current && textRef.current) {
      containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
      textRef.current.style.transform = `translate3d(0, 0, 40px)`;
    }
  };

  return (
   
    <div
      className={`${width} ${height} perspective-[2000px] relative mx-auto select-none`}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      <div
        ref={containerRef}
        className="relative w-full h-full transition-transform duration-300 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
       
        
          className="w-full h-full z-0 bg-orange-600 rounded-2xl"
          style={{ transform: 'translateZ(-60px) scale(1.2)', transition: 'transform 0.3s ease-out' }}
        />
        <Image
          src={objetos}
          alt="objetos"
          className="absolute top-0 left-0 w-full h-full object-cover z-10"
          style={{ transform: 'translateZ(-20px)', transition: 'transform 0.3s ease-out' }}
          priority
        />
        <Image
          src={chica}
          alt="chica"
          fill
          className="absolute top-0 left-0 w-full h-full object-contain z-20"
          style={{ transform: 'translateZ(20px)', transition: 'transform 0.3s ease-out' }}
          priority
        />

        
      </div>
      
         <h2
          ref={textRef}
          className="absolute top-0 left-1/2 -translate-x-1/2 z-3 text-[rgba(60,6,94,0.8)] 
           font-bold text-center w-[70vw] text-[30px] sm:text-[50px] lg:text-[70px] 2xl:text-[80px]
          "
          style={{
        
       
            lineHeight: '1.1',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.3s ease-out',
       
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
            THE EVERYTHING WALLET
        </h2>
    </div>
  );
};














// 'use client';
// import React, { useRef } from 'react';
// import Image from 'next/image';
// import objetos from "../assets/objetos.png";
// import chica from "../assets/chica.png";

// type Props = {
//   width?: string;
//   height?: string;
// };

// export const ParallaxCard: React.FC<Props> = ({
//   width = 'w-[300px]',
//   height = 'h-[500px]',
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLHeadingElement>(null);
//   const textOuterRef = useRef<HTMLHeadingElement>(null);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - left;
//     const y = e.clientY - top;

//     const offsetX = (x / width - 0.5) * 60;
//     const offsetY = (y / height - 0.5) * 60;

//     if (containerRef.current && textRef.current && textOuterRef.current) {
//       containerRef.current.style.transform = `rotateY(${-offsetX}deg) rotateX(${offsetY}deg)`;

//       const textTranslateX = (x / width - 0.5) * 80;
//       const textTranslateY = (y / height - 0.5) * 80;

//       textRef.current.style.transform = `translate3d(${textTranslateX}px, ${textTranslateY}px, 40px)`;
//       textOuterRef.current.style.transform = `translate3d(${textTranslateX}px, ${textTranslateY}px, 40px)`;
//     }
//   };

//   const resetTransform = () => {
//     if (containerRef.current && textRef.current && textOuterRef.current) {
//       containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
//       textRef.current.style.transform = `translate3d(0, 0, 40px)`;
//       textOuterRef.current.style.transform = `translate3d(0, 0, 40px)`;
//     }
//   };

//   return (
//     <div
//       className={`${width} ${height} perspective-[2000px] relative mx-auto select-none`}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetTransform}
//     >
//       <div
//         ref={containerRef}
//         className="relative w-full h-full transition-transform duration-300 ease-out"
//         style={{ transformStyle: 'preserve-3d' }}
//       >
//         <div
//           className="w-full h-full z-0 bg-orange-600 rounded-2xl"
//           style={{ transform: 'translateZ(-60px) scale(1.2)', transition: 'transform 0.3s ease-out' }}
//         />
//         <Image
//           src={objetos}
//           alt="objetos"
//           className="absolute top-0 left-0 w-full h-full object-cover z-10"
//           style={{ transform: 'translateZ(-20px)', transition: 'transform 0.3s ease-out' }}
//           priority
//         />
//         <Image
//           src={chica}
//           alt="chica"
//           fill
//           className="absolute top-0 left-0 w-full h-full object-contain z-20"
//           style={{ transform: 'translateZ(20px)', transition: 'transform 0.3s ease-out' }}
//           priority
//         />
//       </div>

//       {/* TEXTO CLARO dentro de la tarjeta */}
//       <h2
//         ref={textRef}
//         className="absolute top-0 left-1/2 -translate-x-1/2 z-30 text-[#c084fc] font-bold text-center w-[80vw]
//           text-[30px] sm:text-[50px] lg:text-[70px] 2xl:text-[80px]
//           overflow-hidden pointer-events-none select-none"
//         style={{
//           lineHeight: '1.1',
//           transformStyle: 'preserve-3d',
//           transition: 'transform 0.3s ease-out',
//           clipPath: `inset(0 0 0 0 round 30px)`,
//         }}
//       >
//         THE EVERYTHING WALLET
//       </h2>

//       {/* TEXTO OSCURO fuera de la tarjeta */}
//       <h2
//         ref={textOuterRef}
//         className="absolute top-0 left-1/2 -translate-x-1/2 z-20 text-[#3b0764] font-bold text-center w-[80vw]
//           text-[30px] sm:text-[50px] lg:text-[70px] 2xl:text-[80px]
//           pointer-events-none select-none"
//         style={{
//           lineHeight: '1.1',
//           transformStyle: 'preserve-3d',
//           transition: 'transform 0.3s ease-out',
//         }}
//       >
//         THE EVERYTHING WALLET
//       </h2>
//     </div>
//   );
// };
