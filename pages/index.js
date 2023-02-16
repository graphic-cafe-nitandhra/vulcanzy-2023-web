import { LoadingAnimation } from '@/components/LoadingAnimation';
import { Navbar } from '@/components/Navbar';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Navbar />
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </>
      )}
    </>
  );
}
