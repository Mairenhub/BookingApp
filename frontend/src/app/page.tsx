import React, { useEffect, useState } from 'react';
import { Hygienist } from '@/utils/Calendar.models';
import { fetchHygienists } from '@/utils/Calendar.svc';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function Home () {
  const hygienists: Hygienist[] = await fetchHygienists()
  console.log(hygienists)

  return (
    <>
      <Header/>
      <main className='overflow-hidden'>
        {hygienists.map((hygienist, index) => (
          <div>
            {hygienist.name}
          </div>
          
        ))}
      </main>
      <Footer/>
    </>

  );
};
