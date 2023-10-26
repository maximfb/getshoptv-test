import { FC, ImgHTMLAttributes } from 'react';
import styles from './Image.module.scss';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  element: string;
}

export const Image: FC<ImageProps> = ({ element, ...props }) => {
  return (
    <div className={ styles.image }>
      <img src={element} alt={ props.alt }/>
    </div>
  );
};
