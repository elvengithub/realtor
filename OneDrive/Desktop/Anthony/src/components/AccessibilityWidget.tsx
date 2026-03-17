import { useState } from 'react';
import { Accessibility, X, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    fontSize, isReadable, isColorBlind, 
    increaseFontSize, decreaseFontSize, 
    toggleReadable, toggleColorBlind, 
    resetAccessibility 
  } = useAccessibility();

  return (
    <div className="accessibility-widget">
      <button 
        className="accessibility-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility Menu"
      >
        {isOpen ? <X size={28} /> : <Accessibility size={28} />}
      </button>

      {isOpen && (
        <div className="accessibility-menu active" style={{ opacity: 1, transform: 'none' }}>
          <h4>Accessibility Tools</h4>
          
          <div className="acc-option">
            <span>Readable Font</span>
            <div 
              className={`acc-toggle ${isReadable ? 'active' : ''}`} 
              onClick={toggleReadable}
            ></div>
          </div>

          <div className="acc-option">
            <span>Color Blind Mode</span>
            <div 
              className={`acc-toggle ${isColorBlind ? 'active' : ''}`} 
              onClick={toggleColorBlind}
            ></div>
          </div>

          <div className="acc-option">
            <span>Font Size ({fontSize}%)</span>
            <div className="acc-controls">
              <button className="acc-ctrl-btn" onClick={decreaseFontSize} title="Decrease Font Size">
                <ZoomOut size={16} />
              </button>
              <button className="acc-ctrl-btn" onClick={increaseFontSize} title="Increase Font Size">
                <ZoomIn size={16} />
              </button>
            </div>
          </div>

          <button className="acc-reset" onClick={resetAccessibility}>
            <RotateCcw size={14} style={{ marginRight: '8px' }} />
            RESET ALL SETTINGS
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityWidget;
