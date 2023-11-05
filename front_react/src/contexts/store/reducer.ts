type Action<T> = { type: 'SET_DATA'; key: string; payload: T };

export function storeReducer<T>(state: Record<string, T>, action: Action<T>) {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, [action.key]: action.payload };

    default:
      return state;
  }
}
