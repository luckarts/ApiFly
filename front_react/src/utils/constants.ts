import { IStatusCodesList } from './type';
export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const POST = 'post';
export const GET = 'get';
export const DELETE = 'delete';
export const PUT = 'put';

export const statusCodesList: IStatusCodesList = {
  400: 'Bad Request: Invalid request parameters',
  401: 'Unauthorized: Authentication failed',
  403: 'Forbidden: Insufficient permissions',
  409: 'Conflict: This already exists',
  422: 'Conflict: This already exists',
  200: 'Success',
  1002: 'ValidationError',
  1003: 'InternalServerError',
  1004: 'Not Found',
  425: 'TokenExpired',
  426: 'TokenExpired',
  427: 'ServiceUnAvailable',
  428: 'ThrottleError',
  429: 'Forbidden',
  430: 'IncorrectOldPassword',
  431: 'UserInactive',
  432: 'InvalidCredentials',
  433: 'BadRequest',
  434: 'InvalidCredentials',
  435: 'InvalidRefreshToken',
  436: 'UnsupportedFileType',
  438: 'OtpRequired',
  439: 'defaultItemDeleteError',
  440: 'RefreshTokenExpired',
  504: 'Gateway Timeout'
};
