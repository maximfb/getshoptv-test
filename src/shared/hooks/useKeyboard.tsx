import { KeyboardContext } from '@/shared/context/Keyboard/provider.tsx';
import { useContext } from 'react';

export function useKeyboard() {
  const context = useContext(KeyboardContext);

  if (!context) {
    throw new Error('useNumPud must be used within NumPadContext');
  }

  return context;
}
