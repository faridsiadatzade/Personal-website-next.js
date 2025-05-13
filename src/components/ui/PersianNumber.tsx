import React from 'react';

interface PersianNumberProps {
  number: number;
}

export function PersianNumber({ number }: PersianNumberProps) {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const persianNumber = number.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
  
  return <span>{persianNumber}</span>;
} 