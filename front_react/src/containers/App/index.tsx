/**
 *
 * App.ts
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { Suspense, useState } from 'react';

import { useDisclosure } from '@chakra-ui/react';

import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom';
import Footer from 'components/Footer';
import { publicRoutes } from 'routes/publicRoutes';
import { useTranslation } from 'react-i18next';
import LoadingIndicator from 'components/LoadingIndicator';
import MiddlewareLanguage from './MiddlewareLanguage';
import { Notification, useNotification } from 'src/contexts';
import Navbar from 'components/Navbar/NavbarRTL.js';

export default function App() {
  const { t, ready } = useTranslation();
  const { notifications } = useNotification();
  const [fixed] = useState(false);

  //document.documentElement.dir = 'rtl';
  const { onOpen } = useDisclosure();
  if (!ready) return <LoadingIndicator className="bg-primary" />;

  return (
    <>
      <div className="min-h-screen sm:mb-4 relative">
        <Navbar onOpen={onOpen} logoText={'Quara'} fixed={fixed} />

        <Router>
          <MiddlewareLanguage>
            <Suspense fallback={<LoadingIndicator className="bg-primary h-screen" />}>
              <Routes>
                {publicRoutes.map(({ path, element }, id) => (
                  <Route path={`:lang` + t(path, { ns: 'routes' })} element={element} key={id} />
                ))}
                <Route path="*" element={<Navigate to={`fr` + t('/notfound', { ns: 'routes' })} />} />
              </Routes>
              <Footer />
            </Suspense>
          </MiddlewareLanguage>
        </Router>
      </div>
    </>
  );
}
