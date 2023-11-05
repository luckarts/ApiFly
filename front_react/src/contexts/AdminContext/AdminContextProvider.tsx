import { useEffect, useState } from 'react';
import { AdminContext } from './AdminContext';
import { useQuery } from 'react-query';
import { GetAdminUser } from 'utils/api';
import { OnlyChildrenProps } from 'containers/type';

export const AdminContextProvider = ({ children }: OnlyChildrenProps) => {
  //const [user, setUser] = useState<AdminUser>({ enabled: false });
  const [enable, setEnable] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const { data, error } = useQuery<any, Error>('getUserAdmin', () => GetAdminUser(), {
    enabled: enable,
    retry: false
  });

  useEffect(() => {
    if (!isAdmin) {
      if (localStorage.getItem('token')) {
        setEnable(true);
        //setUser({ enabled: true });
      }
    }
    if (error) console.log(error, 'remore');
    //if (error) localStorage.removeItem('token');
    if (data) {
      setIsAdmin(true);
    }
  }, [data, error, isAdmin]);

  return <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>{children}</AdminContext.Provider>;
};
