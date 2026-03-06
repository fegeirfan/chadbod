'use client';

export default function SuggestionButtons() {
  const suggestions = [
    'Reset Password',
    'Cara Membuat Akun',
    'Hubungi Admin',
  ];

  const handleClick = (suggestion: string) => {
    // Logic to send suggestion to chat will be added later
    console.log(suggestion);
  };

  return (
    <div className="p-4 bg-gray-50 border-t border-gray-200">
      <div className="flex flex-wrap justify-center gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => handleClick(suggestion)}
            className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-gray-300 rounded-full hover:bg-blue-50 transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}