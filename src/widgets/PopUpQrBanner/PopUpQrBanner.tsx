import { useEffect, useState } from 'react';
import { QrBanner } from '@/entities/QrBanner';
import { Float } from '@/shared/ui/Float';

export const PopUpQrBanner = ({ ms }: { ms: number }) => {
  const [ visible, setVisible ] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, ms);
  }, []);

  return (
    <>
      { visible &&
        <Float sides={ { right: '0', bottom: '143px' } }>
          <QrBanner/>
        </Float>
      }
    </>
  );

};
