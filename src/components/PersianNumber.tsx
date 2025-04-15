import { formatNumber } from '@/utils/persianUtils';
import { useLanguage } from '@/contexts/LanguageContext';

interface PersianNumberProps {
  number: number | string;
  className?: string;
}

/**
 * کامپوننت نمایش اعداد فارسی
 * این کامپوننت به طور خودکار اعداد را براساس زبان فعلی به فارسی یا انگلیسی نمایش می‌دهد
 */
const PersianNumber: React.FC<PersianNumberProps> = ({ number, className }) => {
  const { language } = useLanguage();
  
  return (
    <span className={`farsi-digits ${className || ''}`}>
      {formatNumber(number, language as 'fa' | 'en')}
    </span>
  );
};

export default PersianNumber; 