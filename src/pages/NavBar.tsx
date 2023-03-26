import Link from 'next/link';
import { useEffect } from 'react';
import { css } from '@emotion/react';

export default function NavBar() {
  return (
    <div>
      <Link href={'/'}>
        <p>home</p>
      </Link>
      <Link href={'/test'}>
        <p>test</p>
      </Link>
    </div>
  );
}
