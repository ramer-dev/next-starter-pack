import Head from 'next/head';

import axios from '~services/index';
import { useQuery } from '@tanstack/react-query';
import NavBar from '~pages/NavBar';
import { useState } from 'react';

interface fetchType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [fetchData, setData] = useState<string>('');
  useQuery(
    ['fetchData'],
    () => {
      return axios.get<fetchType>(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
    },
    {
      onSuccess: (data) => {
        console.log(data);
        setData(data.data.title);
      },
    }
  );

  return (
    <>

      <main>
        <NavBar />
        {fetchData}
      </main>
    </>
  );
}
