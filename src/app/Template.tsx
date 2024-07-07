"use client";

function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div
      id="banner"
      className="min-h-screen w-full bg-slate-400 fixed top-0 left-0 z-10"
    ></div>
    {children}
    </div>
  );
}

export default Template;
