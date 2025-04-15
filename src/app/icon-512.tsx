import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const contentType = 'image/png';
export const size = { width: 512, height: 512 };

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 300,
          background: 'linear-gradient(to bottom right, #e11d48, #220C0F)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '50%',
          fontWeight: 'bold',
        }}
      >
        FS
      </div>
    ),
    { ...size }
  );
} 