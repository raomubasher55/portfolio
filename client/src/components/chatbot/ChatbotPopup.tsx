import React, { useState, useEffect } from 'react';
import { MessageSquare, X, BellRing } from 'lucide-react';
import Chatbot from './Chatbot';

const ChatbotPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);

  // Show popup briefly on first load, then minimize it
  useEffect(() => {
    if (isFirstLoad) {
      setIsOpen(true);
      setIsFirstLoad(false);
      
      // Auto-minimize after 3 seconds on initial load
      const timer = setTimeout(() => {
        setIsAnimating(true);
        setIsOpen(false);
        
        // Reset animation state after animation completes
        setTimeout(() => {
          setIsAnimating(false);
          
          // Show welcome message bubble after 1 second
          setTimeout(() => {
            setShowWelcomeBubble(true);
            
            // Hide welcome bubble after 8 seconds
            setTimeout(() => {
              setShowWelcomeBubble(false);
              
              // Add notification dot 2 seconds after welcome bubble disappears
              setTimeout(() => {
                setHasNotification(true);
              }, 2000);
            }, 8000);
          }, 1000);
        }, 500); // Match this with your transition duration
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  const toggleChatbot = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with your transition duration
    
    // Hide welcome bubble and notifications when opening chat
    if (!isOpen) {
      setShowWelcomeBubble(false);
      setHasNotification(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Popup Chatbot */}
      <div 
        className={`
          overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 ease-in-out
          ${isOpen 
            ? 'opacity-100 scale-100 h-[600px] w-[360px]' 
            : 'opacity-0 scale-95 h-0 w-0'
          }
          ${isAnimating ? 'animate-bounce-once' : ''}
        `}
        style={{
          transformOrigin: 'bottom right',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
      >
        {isOpen && (
          <div className="flex flex-col h-full bg-background border border-border rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white p-4 flex justify-between items-center">
              <h2 className="font-bold">Chat with me</h2>
              <button 
                onClick={toggleChatbot}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex-grow overflow-hidden">
              <Chatbot />
            </div>
          </div>
        )}
      </div>

      {/* Welcome Speech Bubble */}
      {showWelcomeBubble && !isOpen && (
        <div 
          className="absolute bottom-20 right-0 bg-white dark:bg-card p-3 rounded-lg shadow-lg animate-slide-in-spring mb-2"
          style={{ 
            maxWidth: '220px',
            borderRadius: '18px',
            borderBottomRightRadius: '5px',
          }}
        >
          <p className="text-sm dark:text-white">👋 Hi there! Need help with anything?</p>
          <div 
            className="absolute w-4 h-4 bg-white dark:bg-card"
            style={{ 
              bottom: '0', 
              right: '10px', 
              transform: 'translateY(30%) rotate(45deg)',
              borderBottomRightRadius: '5px',
            }}
          ></div>
        </div>
      )}

      {/* Chat button with notification */}
      <div className="relative">
        <button
          onClick={toggleChatbot}
          className={`
            p-5 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 
            text-white shadow-lg hover:shadow-xl transition-all duration-300
            flex items-center justify-center
            ${!isOpen ? 'animate-pulse-slow' : ''}
            ${isAnimating && !isOpen ? 'animate-bounce-once' : ''}
          `}
          style={{
            boxShadow: !isOpen ? '0 0 15px rgba(147, 51, 234, 0.5)' : 'none'
          }}
        >
          <MessageSquare size={32} />
        </button>
        
        {/* Notification Badge */}
        {hasNotification && !isOpen && (
          <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center animate-spin-in">
            <BellRing size={14} className="animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotPopup;