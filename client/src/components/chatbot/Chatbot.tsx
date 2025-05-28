import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Loader } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

interface WebhookResponse {
  output?: string;
  response?: string;
  message?: string;
  sessionId?: string;
  timestamp?: string;
  success?: boolean;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', content: 'Hello! Ask me anything about Rao Mubasher\'s portfolio.' }
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sessionId] = useState<string>(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // n8n webhook URL (POST request)
  const WEBHOOK_BASE_URL = import.meta.env.VITE_CHATBOT_WEBHOOK_URL || 'https://n8n.srv801458.hstgr.cloud/webhook/7eb092cc-b9fd-48c2-9a6a-2fb8baa420d7';

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (): Promise<void> => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // POST request with JSON body
      const response = await fetch(WEBHOOK_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId,
          chatInput: userMessage,
          action: 'sendMessage'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: WebhookResponse = await response.json();

      console.log(data);
      
      // Handle the response - n8n might return it in different formats
      const botResponse = data.output || data.response || data.message || 'Sorry, I couldn\'t process that request.';
      
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'Sorry, I\'m having trouble connecting. Please try again later.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const setQuickMessage = (message: string): void => {
    setInputMessage(message);
  };

  return (
    <div className="flex flex-col h-full bg-background/95 backdrop-blur-sm">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`p-1.5 rounded-full ${message.type === 'user' ? 'bg-primary' : 'bg-secondary'}`}>
                {message.type === 'user' ? <User size={16} className="text-primary-foreground" /> : <Bot size={16} className="text-secondary-foreground" />}
              </div>
              <div className={`p-3 rounded-xl text-sm ${
                message.type === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card text-card-foreground shadow-sm'
              }`}>
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2 max-w-[80%]">
              <div className="p-1.5 rounded-full bg-secondary">
                <Bot size={16} className="text-secondary-foreground" />
              </div>
              <div className="bg-card text-card-foreground shadow-sm p-3 rounded-xl">
                <Loader className="animate-spin" size={16} />
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-border p-3">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="flex-1 py-2 px-3 text-sm border border-input rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent bg-background"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !inputMessage.trim()}
            className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
        
        {/* Quick Actions */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          <button
            onClick={() => setQuickMessage("Tell me about yourself")}
            className="text-xs px-2 py-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full transition-colors"
          >
            About
          </button>
          <button
            onClick={() => setQuickMessage("What are your skills?")}
            className="text-xs px-2 py-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => setQuickMessage("Tell me about your projects")}
            className="text-xs px-2 py-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => setQuickMessage("What's your experience?")}
            className="text-xs px-2 py-1 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full transition-colors"
          >
            Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;