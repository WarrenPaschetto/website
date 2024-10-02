"use client"

import React from 'react';
import TestamonialItem from './TestamonialItem';


// Define the Quote type
interface Quote {
    name: string;
    quote: string;
  }
// Define the props for the Testamonials component
interface TestamonialProps {
    events: Quote[];  // Array of Testamonial objects
  }

  const TestamonialQuote: React.FC<TestamonialProps> = ({ events }) => {
    return (
      <div className="flex flex-row p-10 justify-center">

        {/* Render Testamonials */}
        <div className="flex flex-row space-x-5 flex-wrap border-gray-900 shadow-md shadow-gray-900 dark:border-accent-dark dark:shadow-accent-dark bg-gray-100 dark:bg-gray-900 ">
          {events.map((event, index) => (
            <TestamonialItem
              key={index}
              name={event.name}
              quote={event.quote}
              isLast={index === events.length - 1}  // check if last item
            />
          ))}
        </div>
      </div>
    );
  };

  export default TestamonialQuote;
  