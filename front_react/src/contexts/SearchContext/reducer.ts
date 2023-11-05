type Action<T> = { type: 'SET_DATA'; key: string; payload: T[] } | { type: 'CLEAR_DATA'; key: string };

export function recordReducer<T>(state: Record<string, T[]>, action: Action<T>): Record<string, T[]> {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, [action.key]: action.payload };
    case 'CLEAR_DATA':
      const newState = { ...state };
      delete newState[action.key];
      return newState;
    default:
      return state;
  }
}
