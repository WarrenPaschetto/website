"use client"

import React from 'react';
import TestimonialItem from './TestimonialItem';


// Define the Quote type
interface Quote {
    name: string;
    quote: string;
  }
// Define the props for the Testimonials component
interface TestimonialProps {
    events: Quote[];  // Array of Testimonial objects
  }

  const TestimonialQuote: React.FC<TestimonialProps> = ({ events }) => {
    return (
      <div className="flex flex-row p-10 justify-center">

        {/* Render Testimonials */}
        <div className="flex flex-row space-x-5 flex-wrap border-gray-900 shadow-md shadow-gray-900 dark:border-accent-dark dark:shadow-accent-dark bg-gray-100 dark:bg-gray-900 ">
          {events.map((event, index) => (
            <TestimonialItem
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

  export default TestimonialQuote;
