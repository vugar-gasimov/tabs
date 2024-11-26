import React from 'react';

const TabBtns = ({ tabs, chosenTab, tabsBtnHandler }) => {
  return (
    <div className='btn-container'>
      {tabs.map((tab, i) => (
        <button
          type='button'
          key={tab.id || i}
          onClick={() => tabsBtnHandler(tab.id)}
          className={
            tab.id === chosenTab.id ? 'job-btn active-btn' : 'job-btn '
          }
        >
          {tab.company}
        </button>
      ))}
    </div>
  );
};

export default TabBtns;
