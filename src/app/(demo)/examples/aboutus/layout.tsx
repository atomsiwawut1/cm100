import React from "react";
import Link from "next/link";
type Props = {};

export default function AboutUslayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
    <nav>
    <a href="/examples/dashboard/"> Dashboard</a>
    <a href="/examples/aboutus/">AboutUs</a>
    
    <Link href="/examples/dashboard/">  Next link Dashboard </Link>
    <Link href="/examples/aboutus/">  Next link  AboutUs</Link>


    </nav>

    {children}
    AboutUslayout
    </div>;
}
