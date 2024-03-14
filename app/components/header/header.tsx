'use client';

import Navigation from "@/app/components/navigation/navigation";
import Banner from "../banner/banner";

export default function Header() {

  return (
    <>
      <header>
        <Navigation />
        <Banner />
      </header>
    </>
  );
};