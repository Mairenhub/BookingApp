import React from 'react';
import { Hygienist } from '@/utils/Calendar.models';

interface HygienistListComponentProps {
  hygienists: Hygienist[];
}

const HygienistListComponent: React.FC<HygienistListComponentProps> = ({ hygienists }) => {
  return (
    <div>
      {hygienists.map((hygienist, index) => (
        <div key={index}>
          <h2>{hygienist.name}</h2>
          <p>Qualification: {hygienist.qualification}</p>
          <p>Description: {hygienist.description}</p>
          <p>Price: {hygienist.price}</p>
        </div>
      ))}
    </div>
  );
};

export default HygienistListComponent;
