import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const contentType = 'image/png';
export const size = { width: 192, height: 192 };

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
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