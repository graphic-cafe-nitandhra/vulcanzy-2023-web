import Default from '@/layouts/default';
import HomePage from '@/components/HomePage';
export default function Home() {
  return (
    <Default>
      <div className="hero">
        <HomePage />
      </div>
    </Default>
  );
}
