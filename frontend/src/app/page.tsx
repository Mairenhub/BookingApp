'use client'
import React, { useEffect, useState } from 'react';
import { Hygienist } from '@/utils/Calendar.models';
import HygienistListComponent from '@/components/HygienistList';
import http from '../../config/Http';
import {GetStaticProps} from 'next'

interface HomeProps {
  staticHygienists: Hygienist[];
}

const Home: React.FC<HomeProps> = ({ staticHygienists }) => {
  const [hygienists, setHygienists] = useState<Hygienist[]>(staticHygienists);

  useEffect(() => {
    const fetchHygienists = async () => {
      try {
        const response = await http.get<Hygienist[]>('/hygienist/');
        setHygienists(response.data);
      } catch (error) {
        console.error('error fetching hygienists!', error);
      }
    };

    fetchHygienists();
  }, []);

  return (
    <div>
      <HygienistListComponent hygienists={hygienists} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let staticHygienists: Hygienist[] = [];

  try {
    const response = await http.get<Hygienist[]>('/hygienist/');
    staticHygienists = response.data;
  } catch (error) {
    console.error('error fetching hygienists!', error);
  }

  return {
    props: {
      staticHygienists,
    },
  };
};

export default Home;
