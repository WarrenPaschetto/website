"use client"

import React from 'react';
import PriceCardItem from './PriceCardItem';

// Define the Card type
interface Card {
    name: string;
    perSession: string;
    duration: string;
    numberSessions: string;
    price: string;
    bg: string;
  }

// Define the props for the PriceCard component
interface PriceCardProps {
  events: Card[];  // Array of Card objects
}

const PriceCard: React.FC<PriceCardProps> = ({ events }) => {
  return (

    <tbody>
        {events.map((event, index) => (
          <PriceCardItem
            key={index}
            name={event.name}
            perSession={event.perSession}
            duration={event.duration}
            numberSessions={event.numberSessions}
            price={event.price}
            isLast={index === events.length - 1}
            bg={event.bg}
          />
        ))}
    </tbody>
  );
};

export default PriceCard;
