import Link from "next/link";
import React from "react";

export default function NotConnected() {
  return (
    <div className="space-x-4 flex font-semibold text-base">
      <Link href="/signin">
        <a className="px-3 py-2 leading-none text-white rounded-md border-2 border-white my-auto">
          SignIn
        </a>
      </Link>
      <Link href="/signup">
        <a className="px-3 py-2 leading-none  bg-white rounded-md border-2 border-white my-auto text-signup">
          SignUp
        </a>
      </Link>
    </div>
  );
}
