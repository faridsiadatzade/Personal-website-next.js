import { PersianNumber } from '../ui/PersianNumber';

interface TimelineItem {
  year: number;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-12">
            <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <PersianNumber number={item.year} />
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 