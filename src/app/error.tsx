"use client"

export default function Error({error , reset}) {
  return (
    <main className=''>
      <h1 className=''>Something went wrong!</h1>
      <p className='text-lg'>{error.message}</p>

      <button className='' onClick={reset}>
        Try again
      </button>
    </main>
  );
}
