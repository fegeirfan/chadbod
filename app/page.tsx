import ChatHeader from "./components/chatbot/ChatHeader";
import ChatMessages from "./components/chatbot/ChatMessages";
import SuggestionButtons from "./components/chatbot/SuggestionButtons";
import ChatInput from "./components/chatbot/ChatInput";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100 font-sans">
      <div className="h-full w-full flex flex-col bg-white shadow-2xl">
        <ChatHeader />
        <ChatMessages />
        <SuggestionButtons />
        <ChatInput />
      </div>
    </div>
  );
}
