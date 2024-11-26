import React, { useState } from 'react';
import Tab from './Tab';
import TabBtns from './TabBtns';

const Tabs = ({ tabs }) => {
  const [chosenTab, setChosenTab] = useState(tabs[0]);
  const tabsBtnHandler = (id) => {
    const selectedTab = tabs.find((tab) => tab.id === id);
    setChosenTab(selectedTab);
  };
  return (
    <section className='jobs-center'>
      <TabBtns
        tabs={tabs}
        tabsBtnHandler={tabsBtnHandler}
        chosenTab={chosenTab}
      />
      <Tab tab={chosenTab} />
    </section>
  );
};

export default Tabs;
