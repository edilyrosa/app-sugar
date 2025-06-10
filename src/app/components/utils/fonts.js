// utils/fonts.js (or any path you prefer)
import { Alfa_Slab_One, Open_Sans, Geist, Geist_Mono, Poppins, Montserrat } from 'next/font/google';
import {  } from "next/font/google";

export const alfaSlabOne = Alfa_Slab_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-alfa-slab-one',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans',
});


export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // You can specify multiple weights
  variable: '--font-open-sans', // Define a CSS variable for Tailwind
});

export const montserrat =  Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


