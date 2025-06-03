import React from "react";

const AdminBarComponent = () => {
  return (
    <div className="flex justify-between p-4 bg-white rounded-2xl shadow-2xl">
      <div>
        <span className=" opacity-55">Search</span>
      </div>
      <div className="flex gap-2 ">
        <div className=" rounded-2xl p-1 shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-bell-ring-icon lucide-bell-ring"
          >
            <path d="M10.268 21a2 2 0 0 0 3.464 0" />
            <path d="M22 8c0-2.3-.8-4.3-2-6" />
            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            <path d="M4 2C2.8 3.7 2 5.7 2 8" />
          </svg>
        </div>
        <div className=" rounded-2xl p-1 shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user-pen-icon lucide-user-pen"
          >
            <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
            <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
            <circle cx="10" cy="7" r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AdminBarComponent;
