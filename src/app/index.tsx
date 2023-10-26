import { RouterProvider } from 'react-router-dom';
import { router } from './providers';
import { Container } from '@/shared/ui/Container';
import '@/shared/styles/index.scss';

function App() {
  return (
    <Container>
      <RouterProvider router={ router }/>
    </Container>
  );
}

export default App;

