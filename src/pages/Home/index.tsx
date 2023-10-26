import { Video } from '@/shared/ui/Video';
import { PopUpQrBanner } from '@/widgets/PopUpQrBanner';

import homeVideo from '@/shared/assets/videos/promo.mp4';
import homePlaceholder from '@/shared/assets/img/placeholder-home.png';

const Home = () => {
  return (
    <div className={ 'home' }>
      <Video element={ homeVideo } placeholder={ homePlaceholder } muted loop autoPlay/>
      <PopUpQrBanner ms={ 5000 }/>
    </div>
  );
};

export default Home;
