// StreakPopup.js
import React from 'react';
import PopupBox from 'react-popupbox';

const StreakPopup = ({ streakCount }) => {
  const popupOptions = {
    titleBar: {
      enable: true,
      text: `Streak: ${streakCount} days`,
    },
    content: (
      <div>
        <p>Congratulations!</p>
        <p>You've logged in for {streakCount} days in a row.</p>
      </div>
    ),
  };

  return <PopupBox {...popupOptions} />;
};

export default StreakPopup;
