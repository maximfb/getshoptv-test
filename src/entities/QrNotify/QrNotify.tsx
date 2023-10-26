import { FC } from 'react';
import { Image } from '@/shared/ui/Image';

import qrCode from '@/shared/assets/img/qr-code.png';
import styles from './QrNotify.module.scss';

export const QrNotify: FC = () => {
  return (
    <div className={ styles.notify }>
      <p>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
      <Image element={ qrCode }/>
    </div>
  );
};
