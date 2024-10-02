
// components/VerticalTimeline.tsx
import React from 'react';
import TimelineItem from './TimelineItem';

// Define the Event type
interface Event {
  business: string;
  date: string;
  title: string;
  points: string[];
  logo: string;
}

// Define the props for the VerticalTimeline component
interface VerticalTimelineProps {
  events: Event[];  // Array of Event objects
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ events }) => {
  return (
    <div className="relative">
      {/* The timeline vertical line */}
      <div className="absolute w-1 bg-accent-light dark:bg-accent-dark h-full left-0 top-0"></div>

      {/* Render timeline items */}
      <div className="space-y-10">
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            business={event.business}
            date={event.date}
            title={event.title}
            points={event.points}
            logo={event.logo}
            isLast={index === events.length - 1}  // check if last item to avoid drawing the line
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalTimeline;
