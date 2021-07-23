import React from "react";

const TimelineItem = ({ data }) => {
  const {
    text,
    date,
    category: { tag, color },
    link,
  } = data;
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ backgroundColor: color }}>
          {tag}
        </span>
        <time className="date">{date}</time>

        <p className="title">{text}</p>
        {link && (
          <a href={link.url} target="_blank" rel="noreferrer noopener">
            {link.text}
          </a>
        )}
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default TimelineItem;
