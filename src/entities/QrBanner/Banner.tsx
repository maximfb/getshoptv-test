import { FC, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';

import { Button } from '@/shared/ui/Button';
import { Image } from '@/shared/ui/Image';

import qrCode from '@/shared/assets/img/qr-code.png';
import styles from './QrBanner.module.scss';

interface QrBannerProps {
  mix?: string | string[];
}

export const QrBanner: FC<QrBannerProps> = ({ mix }) => {

  const navigate = useNavigate();
  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/promo');
  };

  return (
    <div className={ cx(styles.banner, mix) }>
      <h2>ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!<br/>ПОДАРИТЕ ЕМУ СОБАКУ!</h2>
      <Image element={ qrCode } alt={ 'QR' }/>
      <p>Сканируйте QR-код<br/>или нажмите ОК</p>
      <Button type={ 'button' } mix={ styles.button } onClick={ clickHandler }>ОК</Button>
    </div>
  );

};
