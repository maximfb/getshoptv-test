import { FC } from 'react';
import { useKeyboard } from '@/shared/hooks/useKeyboard.tsx';
import { Button } from '@/shared/ui/Button';

import styles from './NumPad.module.scss';

export const NumPad: FC = () => {
  const { keyboard, onPressKey } = useKeyboard();
  return (
    <div className={ styles.numpad }>
      { keyboard.numPad.map(k =>
        <Button
          type={ 'button' }
          key={ k.name }
          data-value={ k.value }
          mix={ [ styles.numpad__key, k.active ? styles.active : '' ] }
          onClick={ () => onPressKey(k) }
        >
          { k.name }
        </Button>
      ) }
    </div>
  );
};
