
import Navbar from "@/components/ui/Navbar";

function GoulashLayout({children} : {children: React.ReactNode }) {
  return (
      <div className="flex-1 flex flex-col h-screen">
        <Navbar />
        <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">{children}</main>
      </div>
  );
}

export default GoulashLayout;