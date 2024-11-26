import React from 'react';

const TabBtns = ({ tabs, chosenTab, tabsBtnHandler }) => {
  return (
    <>
      {tabs.map((tab, i) => (
        <button
          type='button'
          key={tab.id || i}
          style={{
            backgroundColor: chosenTab.id === tab.id ? 'green' : 'transparent',
          }}
          onClick={() => tabsBtnHandler(tab.id)}
        >
          {tab.company}
        </button>
      ))}
    </>
  );
};

export default TabBtns;
