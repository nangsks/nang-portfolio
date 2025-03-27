import React from "react";

const Header = () => {
  return (
    <nav className="fixed top-0 -z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-start">
            <button>
                Daxbox
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
