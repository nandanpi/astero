import Link from "next/link";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import { links } from "~/constants/links";
import { navItems } from "~/constants/nav-items";

import GoogleTranslate, { getPrefLangCookie } from "../googleTranslate";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="flex h-auto justify-center border-t bg-white">
      <div className="flex w-full max-w-[90rem] flex-col items-center justify-center border-t">
        {/* <!-- logo --> */}
        <h1 className="notranslate mt-10 h-fit w-fit text-3xl font-bold">
          Astero by Goofy Gophers
        </h1>

        {/* <!-- social handles --> */}
        <div className="mt-8 flex gap-8 opacity-50">
          <a href="https://github.com/Team-Goofy-Gophers/website" target="_blank">
            <FaGithub
              className="size-10"
            />
          </a>
        </div>

        <div className="flex-grow">
          {/* <!-- nav items --> */}
          <ul className="mx-10 mt-8 flex flex-grow flex-wrap items-center justify-center gap-x-10 text-center text-lg font-semibold opacity-80">
            {navItems.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className={`${router.pathname === item.link ? "underline" : ""}`}
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-8">
          <GoogleTranslate prefLangCookie={getPrefLangCookie()} />
        </div>

        {/* <!-- copyright --> */}
        <div className="my-8 text-center text-sm opacity-70">
          <p>&copy; 2024 Goofy Gophers</p>
        </div>
      </div>
    </footer>
  );
}
