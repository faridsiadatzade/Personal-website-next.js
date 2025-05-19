'use client';

import React, { useState, useEffect } from "react";

const Logo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative inline-block text-4xl font-bold opacity-0" style={{ fontFamily: 'initial !important' }}>
        <span className="text-4xl italic" style={{ fontFamily: 'initial !important' }}>Farid</span>Si
      </div>
    );
  }

  return (
    <div className="relative inline-block text-4xl font-bold" style={{ fontFamily: 'initial !important' }}>
      <span className="text-4xl italic" style={{ fontFamily: 'initial !important' }}>Farid</span>Si
      <div className="absolute top-[-10px] left-[-20px] w-0 h-0 border-l-4 border-primary"></div>
      <div className="absolute top-[-10px] right-[-20px] w-5 h-5 border-t-4 border-r-4 border-primary"></div>
      <div className="absolute bottom-[-10px] left-[-20px] w-5 h-5 border-b-4 border-l-4 border-primary"></div>
      <div className="absolute bottom-[-10px] right-[-20px] w-0 h-0 border-r-4 border-primary"></div>
    </div>
  );
};

export default Logo;
