import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Farid Siadatzade - Frontend Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom, #4F46E5, #1D4ED8)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            backgroundImage: 'linear-gradient(to bottom, #FFFFFF, #E2E8F0)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: '80px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Farid Siadatzade
        </div>
        <div
          style={{
            backgroundImage: 'linear-gradient(to bottom, #FFFFFF, #E2E8F0)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: '40px',
            opacity: 0.9,
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          Frontend Developer
        </div>
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          {['React', 'TypeScript', 'Next.js', 'Redux'].map((tech) => (
            <div
              key={tech}
              style={{
                fontSize: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '8px 16px',
                borderRadius: '9999px',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 