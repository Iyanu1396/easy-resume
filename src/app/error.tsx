"use client"

export default function Error({ 
  error, 
  reset 
}: { 
  error: Error & { digest?: string }
  reset: () => void 
}) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}