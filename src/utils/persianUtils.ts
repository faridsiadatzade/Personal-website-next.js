/**
 * تبدیل اعداد انگلیسی به فارسی
 * @param num عدد یا رشته عددی به انگلیسی
 * @returns رشته عددی به فارسی
 */
export const toPersianDigits = (num: number | string): string => {
  if (num === null || num === undefined) return '';
  
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num
    .toString()
    .replace(/[0-9]/g, (match) => persianDigits[parseInt(match)]);
};

/**
 * تبدیل اعداد فارسی به انگلیسی
 * @param num رشته عددی به فارسی
 * @returns رشته عددی به انگلیسی
 */
export const toEnglishDigits = (num: string): string => {
  if (num === null || num === undefined) return '';
  
  return num
    .toString()
    .replace(/[۰-۹]/g, (match) => {
      return String(
        '۰۱۲۳۴۵۶۷۸۹'.indexOf(match)
      );
    });
};

/**
 * تبدیل ارقام انگلیسی به فارسی
 */
export const convertToPersianNumbers = (input: string | number): string => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return input.toString().replace(/[0-9]/g, (match) => persianDigits[parseInt(match)]);
};

/**
 * قالب‌بندی اعداد بر اساس زبان
 */
export const formatNumber = (number: string | number, language: 'fa' | 'en'): string => {
  const stringNumber = number.toString();
  
  if (language === 'fa') {
    return convertToPersianNumbers(stringNumber);
  }
  
  return stringNumber;
};

/**
 * تبدیل تاریخ به فرمت فارسی
 * @param date تاریخ
 * @param language زبان فعلی ('fa' یا 'en')
 * @returns رشته تاریخ به فارسی یا انگلیسی براساس زبان
 */
export const formatDate = (date: Date | string, language: 'fa' | 'en'): string => {
  try {
    const d = new Date(date);
    
    // فرمت تاریخ انگلیسی: Jan 1, 2023
    if (language === 'en') {
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    }
    
    // فرمت تاریخ فارسی: ۱ فروردین ۱۴۰۲
    const persianMonths = [
      'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
      'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
    ];
    
    // این یک تقریب ساده است - برای تاریخ دقیق از کتابخانه‌های تبدیل تاریخ شمسی استفاده کنید
    const persianYear = d.getFullYear() - 621;
    const persianMonth = (d.getMonth() + 10) % 12;
    const persianDay = d.getDate();
    
    return `${toPersianDigits(persianDay)} ${persianMonths[persianMonth]} ${toPersianDigits(persianYear)}`;
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
}; 