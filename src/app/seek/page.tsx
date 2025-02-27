'use client'

import React, { useEffect, Suspense } from "react";
import Link from "next/link";
import Seeker from "./Seeker";

export default function Page() {
  useEffect(() => {
      document.title = 'bcnext/seek';
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}> 
      <Link href="/" className="font-bold hover:text-green-600 px-1">bcnext</Link>|
      <Link href="/normal" className="hover:text-green-600 px-1">Normal</Link>|
      <Link href="/rare" className="hover:text-green-600 px-1">Rare</Link>|
      <Link href="/seek" className="text-green-500 hover:text-green-600 px-1">Seek</Link>|
      <hr />
      <Seeker />
    </Suspense>
  );

}
