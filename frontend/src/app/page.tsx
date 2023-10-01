import React, { useEffect, useState } from 'react';
import { Hygienist } from '@/utils/Calendar.models';
import { fetchHygienists } from '@/utils/Calendar.svc';
import HygienistCard from '@/components/HygienistCard';


export default async function Home () {
  const hygienists: Hygienist[] = await fetchHygienists()



  return (
    <>
      <main className='overflow-hidden flex flex-wrap p-4 gap-10 justify-center'>
        {hygienists.map((hygienist, index) => (
          <div key={hygienist.id} className='flex flex-col p-4 bg-neutral-900 h-[600px] min-w-[300px]
          rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'>
            <HygienistCard hygienist={hygienist} />
          </div>
        ))}
      </main>
    </>

  );
};
