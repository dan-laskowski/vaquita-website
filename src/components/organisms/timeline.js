import React from "react";
import TimelineItem from "../molecules/timelineItem";

const Timeline = ({ achievements }) => (
  <div className="timeline">
    {achievements.map((item, index) => (
      <TimelineItem
        index={index}
        key={item.name}
        date={item.date}
        name={item.name}
        text={item.text}
      />
    ))}
  </div>
);

export default Timeline;
