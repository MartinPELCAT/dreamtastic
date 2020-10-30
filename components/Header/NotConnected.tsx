import Link from "next/link";
import React from "react";

export default function NotConnected() {
  return (
    <div className="space-x-4 flex font-semibold">
      <Link href="/signin">
        <a className="px-3 py-2 leading-none text-base text-white rounded-md border border-white my-auto">
          SignIn
        </a>
      </Link>
      <Link href="/signup">
        <a className="px-3 py-2 leading-none text-base bg-white rounded-md border border-white my-auto">
          SignUp
        </a>
      </Link>
    </div>
  );
}
