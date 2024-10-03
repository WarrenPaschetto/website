"use client"
// Define prop types using an interface
interface TestamonialProps {
    name: string;
    quote: string;
    isLast: boolean;
  }

  const TestamonialItem: React.FC<TestamonialProps> = ({ name, quote}) => {

    return (
      <div className="flex items-start w-[95%] md:max-w-[60%]">

        <div className='border-2 border-gray-900 shadow-gray-900 bg-gray-100 dark:border-accent-dark dark:shadow-accent-dark shadow-md md:p-6 rounded-lg'>
        <div className="ml-8 text-left">
        <h4 className="text-xl font-bold text-accent dark:text-[#fb9039]">&quot;{quote}&quot;</h4>
        <h4 className="text-xl font-bold text-accent dark:text-[#fb9039]">{name}</h4>
        </div>
        </div>
      </div>
    );
  };

  export default TestamonialItem;