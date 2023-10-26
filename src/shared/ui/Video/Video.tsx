import { FC, VideoHTMLAttributes } from 'react';
import styles from './Video.module.scss';

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  element: string;
}

export const Video: FC<VideoProps> = ({ element, ...props }) => {
  return (
    <div className={ 'video-box' }>
      <video src={ element } { ...props } className={ styles.video }></video>
    </div>
  );
};
