import { Nav } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1F1F1F]">
      <Nav />
      <main className="h-full pt-28">{children}</main>
    </div>
  );
};

export default MarketingLayout;
