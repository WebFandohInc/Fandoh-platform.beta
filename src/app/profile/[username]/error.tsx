'use client'

const error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="mx-2 min-h-screen max-w-[1180px] pb-10 pt-28 xl:m-auto">
      {error.message}
      error <button onClick={reset}>Try again</button>
    </div>
  )
}

export default error
