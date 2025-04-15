import React from 'react';
import { formatNumber } from '@/utils/persianUtils';
import { useLanguage } from '@/contexts/LanguageContext';

interface PersianNumberProps {
  number: string | number;
  className?: string;
}

/**
 * کامپوننت نمایش اعداد به صورت فارسی یا انگلیسی براساس زبان فعلی
 */
export default function PersianNumber({ number, className }: PersianNumberProps) {
  const { language } = useLanguage();
  
  return (
    <span className={className}>
      {formatNumber(number, language)}
    </span>
  );
} 