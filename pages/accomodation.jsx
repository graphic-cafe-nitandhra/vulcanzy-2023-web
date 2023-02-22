import Default from '@/layouts/default';

function About() {
  return (
    <Default>
      <div className="mt-[120px] text-white bg-black">
        <div className="mt-[12.5rem] flex flex-col  items-center">
          <h1 className="text-[1.75rem] flex items-center justify-center px-3 h-[50px] rounded-[50px]  border-spacing-16 bg-[#DC4B5D]">
            Rules & Regulations
          </h1>
          <div className="pl-10 pr-5 mt-[3rem] text-xl">
            <ol start="1" className="list-decimal">
              <li>
                There will be no spot registration for hostel accommodation. All
                the interested students have to do pre-registration through
                Vulcanzy website.
              </li>
              <li>
                Room allotment will be done on a first come first serve basis as
                there are only a few rooms available.{' '}
              </li>
              <li>
                After registering for their stay in the campus, they will be
                provided with a registration slip which they need to submit on
                visiting the campus to get their visiting ID-cards in return.
              </li>
              <li>
                Accommodation will be provided with one iron cot, mattress and
                one cupboard based on the availability.
              </li>
              <li>
                Registration will begin from 22nd February 2023 and the
                registration portal will be closed when all the rooms are
                filled.
              </li>
              <li>
                Visitors should carry their college ID Card and any government
                ID Card (like Aadhaar card, driving license, PAN Card, etc.) –
                original and photocopy & 2 passport size photographs.
              </li>
              <li>
                Registered students have to directly report to the hostel office
                for fee payment and further procedures.(The Hostel office is
                located at the Ground floor of Central vista).
              </li>
              <li>
                The registration fee for staying in the campus is ₹. 330 per day
                including food and lodging and the payment can be done through
                cash/UPI.
              </li>
              <li>
                Visitors are responsible for their own valuables & bring their
                own lock & keys. 10. Visitors are not allowed to carry any
                electrical gadgets like iron box, electric kettle, immersion
                rod, etc.
              </li>
              <li>The room will be on a sharing basis.</li>
              <li>
                No visitors will be allowed to stay after 10:00 AM on 26th
                February, 2023.
              </li>
              <li>
                All the guests have to strictly adhere to the institute rules,
                regulations and guidelines.
              </li>
            </ol>
          </div>
          <a
            href="https://forms.gle/PduDF95F8HBxZDt38"
            target="_blank"
            className="my-10 text-[1.75rem] flex items-center justify-center px-3 h-[50px] rounded-[50px]  border-spacing-16 bg-[#DC4B5D]"
          >
            Register here
          </a>
        </div>
      </div>
    </Default>
  );
}
export default About;
