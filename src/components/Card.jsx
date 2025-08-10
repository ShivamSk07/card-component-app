import React, { useState } from 'react';
import './Card.css';

const Card = ({ title }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-status">
        <span className={`status-label ${isLiked ? 'liked' : 'not-liked'}`}>
          {isLiked ? 'Liked' : 'Not Liked'}
        </span>
      </div>
      <button 
        className={`like-button ${isLiked ? 'liked' : ''}`}
        onClick={handleLikeToggle}
      >
        {isLiked ? '❤️ Unlike' : '🤍 Like'}
      </button>
    </div>
  );
};

export default Card;
