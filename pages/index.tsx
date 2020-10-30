import Header from "@components/header";
import DreamCard from "@components/DreamCard";
export default function Home() {
  return (
    <>
      <Header />
      <div className="container  mx-auto py-10">
        <div className="space-y-10"> {Array(8).fill(<DreamCard />)}</div>
      </div>
    </>
  );
}
