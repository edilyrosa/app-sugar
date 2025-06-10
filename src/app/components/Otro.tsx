// HeroPhone.tsx
'use client';

import Image from 'next/image';
import { FC } from 'react';

interface HeroPhoneProps {
  balance: number;
  delta: number;
  deltaPercent: number;
  assetTotal: number;
  assetDelta: number;
  headerSrc: string;
  balanceChartSrc: string;
  actionMenuSrc: string;
  assetCollectionSrc: string;
  className?: string;
}

const HeroPhone: FC<HeroPhoneProps> = ({
  balance,
  delta,
  deltaPercent,
  assetTotal,
  assetDelta,
  headerSrc,
  balanceChartSrc,
  actionMenuSrc,
  assetCollectionSrc,
  className = '',
}) => {
  const isNegative = delta < 0;

  return (
    <div className={`relative w-full max-w-sm mx-auto ${className}`}>
      {/* Phone Shadow */}
      <div className="absolute inset-0 opacity-75 blur-xl bg-black/20 rounded-3xl z-[-1]" />
      {/* Phone Container */}
      <div className="relative rounded-[2rem] overflow-hidden border border-gray-300 bg-white shadow-lg">
        {/* Header Image */}
        <Image
          src={headerSrc}
          alt="App header"
          width={704}
          height={165}
          className="w-full h-auto"
        />

        {/* Balance Summary */}
        <div className="p-4 text-center">
          <div className="text-2xl font-bold">${balance.toFixed(2)}</div>
          <div className={`text-sm ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
            <i>
              {isNegative ? '-' : '+'}${Math.abs(delta).toFixed(2)} ({deltaPercent}%)
            </i>
          </div>
        </div>

        {/* Balance Chart */}
        <Image
          src={balanceChartSrc}
          alt="Balance Summary"
          width={704}
          height={226}
          className="w-full h-auto"
        />

        {/* Action Menu */}
        <Image
          src={actionMenuSrc}
          alt="Action Menu"
          width={704}
          height={224}
          className="w-full h-auto"
        />

        {/* Asset Collection */}
        <div className="p-4 flex flex-col items-center gap-1">
          <span className="text-xl font-semibold">${assetTotal.toFixed(2)}</span>
          <span className="text-md text-gray-500">${assetDelta.toFixed(2)}</span>
        </div>
        <Image
          src={assetCollectionSrc}
          alt="Asset Collection"
          width={704}
          height={452}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroPhone;
