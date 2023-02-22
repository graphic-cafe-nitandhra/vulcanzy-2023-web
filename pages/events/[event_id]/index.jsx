import { useRouter } from 'next/router';
import Default from '@/layouts/default';
function Event() {
  const router = useRouter();
  const eventID = router.query.event_id;
  return (
    <Default>
      <div className="mt-[120px] h-screen">
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl text-white text-center">Page Not Found ;)</h1>
        </div>
      </div>
    </Default>
  );
}
export default Event;
