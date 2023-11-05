import { useEffect, useState, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import i18n from 'i18next';

export interface MiddlewareLanguageProps {
  children: ReactNode;
}

const MiddlewareLanguage = ({ children }: MiddlewareLanguageProps) => {
  const location = useLocation();
  const language = location.pathname.split('/')[1];

  const [currentLanguage, setCurrentLanguage] = useState([i18n.language]);
  useEffect(() => {
    const languages = i18n.languages.length > 0 ? i18n.languages : [i18n.language];
    if (languages.includes(language)) {
      setCurrentLanguage([i18n.language]);
    }
  }, [i18n.language]);

  if (!currentLanguage.includes(language)) {
    return <Navigate to={'/' + i18n.language + '/'} />;
  } else {
    return children;
  }
};

export default MiddlewareLanguage;
