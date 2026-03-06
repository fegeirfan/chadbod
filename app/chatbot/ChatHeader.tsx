export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <h1 className="text-lg font-semibold">FAQ Assistant</h1>
      </div>
      <div className="flex items-center space-x-2">
        <span className="relative flex w-3 h-3">
          <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
          <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
        </span>
        <p className="text-sm text-gray-500">Online</p>
      </div>
    </div>
  );
}