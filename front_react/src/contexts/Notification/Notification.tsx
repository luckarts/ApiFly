import { useEffect } from 'react';
import { useNotification } from './useContextNotification';
import { NotificationHooks } from './type';

enum AlertStatus {
  Error = 'alert_error',
  Success = 'alert_success'
}

export const Notification = () => {
  const { notifications, setNotifications } = useNotification() as NotificationHooks;

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications([]);
    }, 10000);
    return () => clearTimeout(timer);
  }, [notifications]);
  const clearNotifications = () => {
    setNotifications([]);
  };
  const alertStatus = (type: string): AlertStatus => {
    return type === 'pattern' || type === 'required' ? AlertStatus.Error : AlertStatus.Success;
  };
  return (
    <div className="alert_container">
      {notifications?.map(({ type, message }, index: number) => {
        return (
          <div className={alertStatus(type)} key={index} role="alert">
            <span className="block sm:inline">{message}</span>
            <span className="alert_svg_container">
              <svg
                className={`text_${type} alert_svg`}
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={() => clearNotifications()}
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        );
      })}
    </div>
  );
};
