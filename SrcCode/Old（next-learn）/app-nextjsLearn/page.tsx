import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

import AcmeLogo from "@/app/ui/acme-logo";
import { zenOldMincho } from "@/app/ui/fonts";
// import Form from "next/form";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            {/* <strong>歡迎來到北半球.</strong> 這是一個dashboard example{" "} */}
            歡迎來到北半球.這是一個dashboard example{" "}
            <a className="text-blue-500" href="https://nextjs.org/learn/">
              Next.js 學習課程
            </a>
            , 由 Vercel 技術支援.
          </p>
          <Link
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 
            py-3 font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            href="/login"
          >
            <span className={`${zenOldMincho.className} text-xl`}>登錄</span>{" "}
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            priority
            alt="AAA"
            className="hidden md:block"
            height={1560}
            src="/hero-desktop.png"
            width={2000}
          />
          <Image
            alt="BBB"
            className="block md:hidden"
            height={620}
            src="/hero-mobile.png"
            width={560}
          />
        </div>
      </div>
    </main>
  );
}
