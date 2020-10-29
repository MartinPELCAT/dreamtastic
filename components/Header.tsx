import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-header-background bg-opacity-75 flex px-4 py-2 text-2xl leading-none border-b border-header">
      <div className="text-white flex-1 flex ">
        <Link href="/">
          <a>
            <img
              src="/static/logo.png"
              alt="Dreamstatic"
              className="h-12 w-12"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
