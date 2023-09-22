import React, { useState } from 'react';
import './MenuBar.scss'

interface Props {
  onNew: () => void;
}

const MenuBar: React.FC<Props> = ({ onNew }) => {
  const [isFileMenuOpen, setIsFileMenuOpen] = useState(false);
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);

  const openDevTools = () => {
    if (window.electronAPI) {
      try {
          window.electronAPI.openDevTools();
      } catch (error) {
          console.warn('Error when trying to open DevTools:', error);
      }
    } else {
        console.warn('Not running inside Electron with preload, cannot open DevTools from here.');
    }
}



  return (
    <div className="custom-menu">
      <div 
        className="menu-item" 
        onMouseEnter={() => setIsFileMenuOpen(true)} 
        onMouseLeave={() => setIsFileMenuOpen(false)}
      >
        File
        {isFileMenuOpen && (
          <div className="sub-menu">
            <div className="sub-menu-item" onClick={onNew}>New</div>
          </div>
        )}
      </div>

      <div 
        className="menu-item" 
        onMouseEnter={() => setIsHelpMenuOpen(true)} 
        onMouseLeave={() => setIsHelpMenuOpen(false)}
      >
        Help
        {isHelpMenuOpen && (
          <div className="sub-menu">
            <div className="sub-menu-item" onClick={openDevTools}>Open Dev-Tools</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuBar;