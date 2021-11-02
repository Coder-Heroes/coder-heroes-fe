import React from 'react';
import InstructorSidebar from './InstructorSidebar';
import InstructorCalender from './InstructorCalender';
import InstructorProfile from './InstructorProfile';

const InstructorHome = () => {
  return (
    <div>
      <InstructorSidebar />
      <InstructorCalender />
      <InstructorProfile />
    </div>
  );
};

export default InstructorHome;
