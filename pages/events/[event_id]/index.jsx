import { useRouter } from 'next/router';
import Default from '@/layouts/default';
function Event() {
  const router = useRouter();
  const eventID = router.query.event_id;
  return (
    <Default>
      <div className="mt-[120px]">
        <h1>This event is:{eventID}</h1>
      </div>
    </Default>
  );
}
export default Event;
