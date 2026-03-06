'use client';

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 rounded-t-lg">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            B
          </div>
          <span className="absolute bottom-0 right-0 block h-3 w-3 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <div className="flex flex-col">
            <h2 className="text-md font-semibold text-gray-800">FAQ Assistant</h2>
            <p className="text-xs text-gray-500">Online</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </div>
    </div>
  );
}