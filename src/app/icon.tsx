import { ImageResponse } from 'next/og';

// Metadata to generate icon.png in the /public directory
export const dynamic = 'force-static';
export const contentType = 'image/png';
export const size = { width: 32, height: 32 };
export const alt = 'Farid Siadatzade';

// This will generate icon.png
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
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