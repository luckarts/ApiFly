/**
 *
 * Private Route
 *
 */

import LoadingIndicator from 'components/LoadingIndicator';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n, useAdmin } from 'src/contexts';
import { OnlyChildrenProps } from 'src/containers/type';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function PrivateRoute({ children }: OnlyChildrenProps) {
  const { isAdmin } = useAdmin();
  const navigate = useNavigate();
  const { language } = useI18n();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const redirect = async () => {
      if (!isAdmin) {
        await sleep(1000);
        navigate(`/${language}/`);
      } else {
        setIsLoading(false);
      }
    };
    redirect();
  }, [isAdmin]);

  return isLoading ? <LoadingIndicator /> : children;
}

export default PrivateRoute;
