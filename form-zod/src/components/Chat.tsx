import { useState, useContext } from "react";
import { useUser } from "@/contexts/UsersCtx";
import { ChatCtx } from "@/contexts/ChatCtx";
import { NameInput } from "./NameInput";

export const Chat = () => {
  const UserCtx = useUser();
  const ChatContext = useContext(ChatCtx);
  const [messageText, setMessageText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!UserCtx) return null;
  if (!UserCtx.user) return <NameInput />;
  if (!ChatContext) return null;

  const { chat, addMessage } = ChatContext;


  const sendToAI = async (userMessage: string) => {
    addMessage(UserCtx.user, userMessage); 
    setIsTyping(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      addMessage("Bot", data.reply); 
    } catch (err) {
      addMessage("Bot", "Erro");
    } finally {
      setIsTyping(false);
    }
  };
  const handleSendMessage = () => {
    const trimmed = messageText.trim();
    if (trimmed === '') return;
    sendToAI(trimmed);
    setMessageText('');
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <div className="border border-white/30 rounded-md p-4 flex flex-col gap-4 h-[400px]">
      <div className="flex-1 overflow-y-auto">
        {chat.map(msg => (
          <div key={msg.id} className="mb-2">
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
        {isTyping && <div className="text-gray-400">Bot está digitando...</div>}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={messageText}
          onChange={e => setMessageText(e.target.value)}
          onKeyUp={handleKeyUp}
          placeholder="Digite sua mensagem..."
          className="flex-1 border border-white/30 rounded-md px-3 py-2 bg-white/10 text-white outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};
