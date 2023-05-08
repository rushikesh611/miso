"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiPaperPlane } from "react-icons/bi";

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
    <div
      onClick={() => router.push("/")}
      className="text-xl font-medium text-gray-500 hover:cursor-pointer flex flex-row items-center"
    >
      <BiPaperPlane />
      <h1 className="ml-2">M I S O</h1>
    </div>
  );
};

export default Logo;
