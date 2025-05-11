import Image from 'next/image';

export function MyPhoto() {
  return (
    <div className="relative w-32 h-32 rounded-full overflow-hidden">
      <Image
        src="/images/profile.jpg"
        alt="F.Siadatzadeh"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
} 