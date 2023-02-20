import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Meta from './meta';

export default function Default({ children }) {
  return (
    <Meta>
      <Navbar />
      {children}
      <Footer />
    </Meta>
  );
}
