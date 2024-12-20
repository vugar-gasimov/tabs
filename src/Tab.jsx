import React from 'react';
import Duties from './Duties';

const Tab = ({ tab }) => {
  const { title, company, dates, duties } = tab;
  return (
    <article>
      <h3> {title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default Tab;
