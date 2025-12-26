import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0071DC] text-white flex flex-col">
        <div className="px-6 py-4 text-xl font-bold border-b border-blue-400">
          WM Control Tower
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavItem label="Dashboard" />
          <NavItem label="Inventory" />
          <NavItem label="Rules" />
          <NavItem label="Upload" />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-14 bg-white border-b px-6 flex items-center justify-between">
          <h1 className="font-semibold text-gray-800">
            Walmart Reverse Operations
          </h1>
          <span className="text-sm text-gray-500">ReturnPro</span>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

function NavItem({ label }: { label: string }) {
  return (
    <div className="px-4 py-2 rounded cursor-pointer hover:bg-[#004F9F]">
      {label}
    </div>
  );
}
