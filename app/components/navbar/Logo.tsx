"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    // <Image
    //   alt="logo"
    //   className="hidden md:block cursor-pointer"
    //   height="100"
    //   width="100"
    //   src="/images/logo.svg"
    // />
    <h1 className="text-xl font-medium text-gray-500">MISO</h1>
  );
};

export default Logo;
