"use client"
// Define prop types using an interface
interface PriceCardProps {
    name: string;
    perSession: string;
    duration: string;
    numberSessions: string;
    price: string;
    isLast: boolean;
    bg: string;
  }

  const PriceCardItem: React.FC<PriceCardProps> = ({ name, duration, numberSessions, price, perSession, bg}) => {

    return (

      <tr className="w-full" style={{ backgroundColor: `${bg}`}}>
        <td className="px-4 py-3 w-[15%] text-lg font-bold text-accent">{name}</td>
        <td className="px-4 py-3 text-center w-[15%]">{duration}</td>
        <td className="px-4 py-3 text-center w-[15%]">{numberSessions}</td>
        <td className="px-4 py-3 text-center w-[15%]">{perSession}</td>
        <td className="px-4 py-3 text-center w-[15%] text-lg font-bold text-accent">{price}</td>
      </tr>
    );
  };

  export default PriceCardItem;