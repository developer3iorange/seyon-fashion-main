import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import CustomCursor from './components/feature/CustomCursor';
import LoadingScreen from './components/feature/LoadingScreen';
import ScrollToTop from './components/feature/ScrollToTop';
import { ThemeProvider } from './contexts/ThemeContext';

declare const __BASE_PATH__: string;

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter basename={__BASE_PATH__}>
        <ScrollToTop />
        <LoadingScreen visible={loading} />
        <CustomCursor />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
