import { FC, useEffect, useMemo } from 'react';
import { Icon } from '@/shared/ui/Icon';

import styles from './CloseButton.module.scss';
import { Button } from '@/shared/ui/Button';
import { useKeyboard } from '@/shared/hooks/useKeyboard.tsx';
import { KKeyType } from '@/shared/context/Keyboard/types.ts';

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
  const { clicked, onShiftKey, onPressKey, getKeyByName } = useKeyboard();
  const closeBtn = useMemo<KKeyType>(() => getKeyByName('Закрыть'), [ onShiftKey ]);

  useEffect(() => {
    if (clicked?.name === 'Закрыть')
      onClick();
  }, [ onPressKey ]);

  return (
    <Button
      type={ 'button' }
      onClick={ () => onPressKey(closeBtn) }
      mix={ [ styles.close, closeBtn.active ? styles.close__active : '' ] }
    >
      <Icon name={ 'close' }/>
    </Button>
  );
};
