
import Image from 'next/image';

// Define prop types using an interface
interface TimelineItemProps {
  business: string;
  date: string;
  title: string;
  logo: string;
  points: string[];
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ business, date, title, logo, points}) => {

  return (
    <div className="flex items-start">
      {/* Circle and vertical line */}
      <div className="hidden md:block">
        <div className="flex flex-col items-center">
          <Image
            src={logo}
            className="absolute z-10 w-16 h-16 flex items-center justify-center border-2 border-accent-light dark:border-accent-dark bg-black rounded-full shadow-accent-light dark:shadow-accent-dark shadow-sm"
            alt="Logo"
            width={60}
            height={60}
          />
        </div>

        <div className="w-40 h-8 border-b-4 border-accent-light dark:border-accent-dark"></div>

      </div>

      {/* Event details */}
      <div className='border-4 border-accent-light shadow-accent-light dark:border-accent-dark dark:shadow-accent-dark shadow-md p-6 rounded-lg max-w-[95%] lg:max-w-[60%]'>
      <div className="ml-8 text-left">
      <h2 className="text-xl font-bold text-accent dark:text-[#fb9039]">{title}</h2>
      <h4 className="text-lg font-semibold text-black dark:text-white">{business}</h4>
      <div className="text-sm text-gray-500 dark:text-gray-300">{date}</div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points?.map((points, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
          {points}
        </li>
      ))}
    </ul>
      </div>
      </div>
    </div>
  );
};

export default TimelineItem;
