import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AccessibilityContextType {
  fontSize: number;
  isReadable: boolean;
  isColorBlind: boolean;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  toggleReadable: () => void;
  toggleColorBlind: () => void;
  resetAccessibility: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fontSize, setFontSize] = useState(100); // percentage
  const [isReadable, setIsReadable] = useState(false);
  const [isColorBlind, setIsColorBlind] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('accessibility_settings');
    if (saved) {
      const settings = JSON.parse(saved);
      setFontSize(settings.fontSize || 100);
      setIsReadable(settings.isReadable || false);
      setIsColorBlind(settings.isColorBlind || false);
    }
  }, []);

  useEffect(() => {
    const settings = { fontSize, isReadable, isColorBlind };
    localStorage.setItem('accessibility_settings', JSON.stringify(settings));
    
    // Apply to DOM
    document.documentElement.style.setProperty('--accessibility-font-size', `${fontSize}%`);
    
    if (isReadable) {
      document.documentElement.classList.add('accessibility-readable');
    } else {
      document.documentElement.classList.remove('accessibility-readable');
    }
    
    if (isColorBlind) {
      document.documentElement.classList.add('accessibility-colorblind');
    } else {
      document.documentElement.classList.remove('accessibility-colorblind');
    }
  }, [fontSize, isReadable, isColorBlind]);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 10, 150));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 10, 80));
  const toggleReadable = () => setIsReadable(prev => !prev);
  const toggleColorBlind = () => setIsColorBlind(prev => !prev);
  const resetAccessibility = () => {
    setFontSize(100);
    setIsReadable(false);
    setIsColorBlind(false);
  };

  return (
    <AccessibilityContext.Provider value={{ 
      fontSize, isReadable, isColorBlind, 
      increaseFontSize, decreaseFontSize, 
      toggleReadable, toggleColorBlind, 
      resetAccessibility 
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
