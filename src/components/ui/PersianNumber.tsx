import React from 'react';
import { formatNumber } from '@/utils/persianUtils';
import { useLanguage } from '@/contexts/LanguageContext';

interface PersianNumberProps {
  number: number;
}

/**
 * کامپوننت نمایش اعداد به صورت فارسی یا انگلیسی براساس زبان فعلی
 */
export function PersianNumber({ number }: PersianNumberProps) {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const persianNumber = number.toString().replace(/\d/g, (d) => persianDigits[parseInt(d)]);
  
  return <span>{persianNumber}</span>;
} 