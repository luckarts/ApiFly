import { AdminContextProvider } from '../../contexts/AdminContext/AdminContextProvider';
import { I18nContextProvider } from '../../contexts/I18nContext/I18nContextProvider';
import { NotificationContextProvider } from '../../contexts/Notification/NotificationContextProvider';
import { StoreContextProvider } from '../../contexts/store/StoreContextProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { OnlyChildrenProps } from 'containers/type';

const WrapperContext = ({ children }: OnlyChildrenProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AdminContextProvider>
        <I18nContextProvider>
          <NotificationContextProvider>
            <StoreContextProvider>{children}</StoreContextProvider>
          </NotificationContextProvider>
        </I18nContextProvider>
      </AdminContextProvider>
    </QueryClientProvider>
  );
};
export default WrapperContext;
