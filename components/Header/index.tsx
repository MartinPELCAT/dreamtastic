import { AuthenticationContext } from "contexts/AuthenticationContext";
import Link from "next/link";
import { useContext } from "react";
import Connected from "./Connected";
import NotConnected from "./NotConnected";

export default function Header() {
  const { user } = useContext(AuthenticationContext);

  return (
    <div className="bg-main-header bg-opacity-75 flex px-4 py-2 text-2xl leading-none shadow-md">
      <div className="text-white flex-1 flex ">
        <Link href="/">
          <a>
            <img src="/logo.png" alt="Dreamstatic" className="h-12 w-12" />
          </a>
        </Link>
      </div>
      {user ? <Connected /> : <NotConnected />}
    </div>
  );
}
