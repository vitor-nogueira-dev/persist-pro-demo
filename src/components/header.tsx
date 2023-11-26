import React from 'react'

type Props = {}

export default function Header({ }: Props) {
  return (
    <header className='text-center'>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-800 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#ae00ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>
      <h1 className="mb-3 md:text-6xl text-4xl font-bold mt-6">Persist Pro ⭐️</h1>
      <div>
        <h1 className="hidden md:block justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-1 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border lg:bg-gray-200 p-4 lg:dark:bg-zinc-800/30">
          ⭐️ A biblioteca que cuida do seu armazenamento com facilidade: <strong> Persist Pro</strong>!
        </h1>
      </div>
    </header>
  )
}