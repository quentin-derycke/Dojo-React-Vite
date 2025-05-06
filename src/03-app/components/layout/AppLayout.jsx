import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export default function AppLayout() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Header visible en mobile */}
        <div className="w-full navbar bg-base-100 lg:hidden">
          <label htmlFor="sidebar-drawer" className="btn btn-ghost">
            ☰
          </label>
          <span className="ml-2 font-bold text-lg">Code Dojo</span>
        </div>

        {/* Contenu principal */}
        <main className="p-4 overflow-auto">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  );
}
