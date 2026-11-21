import React, { createContext, useContext, useState, useEffect } from 'react';

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Read path from location.pathname or hash
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/';
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      return window.location.hash.slice(1);
    }
    return window.location.pathname || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        setCurrentPath(window.location.hash.slice(1));
      } else {
        setCurrentPath(window.location.pathname || '/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
