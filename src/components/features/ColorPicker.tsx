import { Button } from '../ui/button';

interface ColorPickerProps {
  colors: string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

export function ColorPicker({ colors, selectedColor, onColorSelect }: ColorPickerProps) {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <Button
          key={color}
          variant="ghost"
          size="icon"
          className={`w-8 h-8 rounded-full ${
            selectedColor === color ? 'ring-2 ring-primary ring-offset-2' : ''
          }`}
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
        />
      ))}
    </div>
  );
} 