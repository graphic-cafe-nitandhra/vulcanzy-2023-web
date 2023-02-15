import { Navbar } from '@/components/Navbar';

export default function Default({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
