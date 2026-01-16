"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Definimos os tipos de sessões baseados no seu novo plano
type SectionType = 'hero' | 'process' | 'footer' | 'default';

interface SectionContextData {
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
}

const SectionContext = createContext<SectionContextData>({} as SectionContextData);

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<SectionType>('hero');

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => useContext(SectionContext);