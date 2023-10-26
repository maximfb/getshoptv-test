import { useNavigate } from 'react-router-dom';
import { Float } from '@/shared/ui/Float';
import { QrNotify } from '@/entities/QrNotify';
import { KeyboardProvider } from '@/shared/context/Keyboard/provider.tsx';
import { PromoForm } from '@/widgets/PromoForm';
import { CloseButton } from '@/entities/CloseButton';

const Promo = () => {

  const navigate = useNavigate();

  return (
    <div className={ 'promo' }>
      <KeyboardProvider>
        <PromoForm/>
      </KeyboardProvider>
      <Float sides={ { top: '20px', right: '20px' } }>
        <KeyboardProvider>
          <CloseButton onClick={ () => navigate('/') } />
        </KeyboardProvider>
      </Float>
      <Float sides={ { bottom: '40px', right: '40px' } }>
        <QrNotify/>
      </Float>
    </div>
  );

};

export default Promo;