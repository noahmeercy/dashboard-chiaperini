import React from "react";
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <div className="tw-flex tw-h-screen">
      <Sidebar />

      <main className="tw-flex-1 tw-overflow-y-auto">{children}</main>
    </div>
  );
}

export default Layout;
