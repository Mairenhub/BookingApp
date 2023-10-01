

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-5 border-b border-gray-300">
        <div className="flex items-center">
          <img src="/path/to/your/image.jpg" alt="Logo" className="h-12" />
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:underline">Option 1</a>
          <a href="#" className="text-gray-700 hover:underline">Option 2</a>
        </div>
      </nav>
    </header>
    
  );
};

export default Navbar;
