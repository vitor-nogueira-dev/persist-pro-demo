import React from 'react'

type Props = {}

export default function Footer({ }: Props) {
  return (
    <footer className='w-full p-4 flex justify-center gap-6'>
      <a
        href="https://github.com/vitor-nogueira-dev/persist-pro"
        className="group rounded-lg border px-5 py-4 transition-colors hover:bg-purple-900/20 border-[#808080d1] hover:border hover:border-white text-[#808080d1] hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="800"
      >
        <h2 className={` text-2xl font-semibold `}>
          Repositório{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Acesse o repositório do projeto no GitHub.
        </p>
      </a>
      <a
        href="https://www.npmjs.com/package/persist-pro"
        className="group rounded-lg border px-5 py-4 transition-colors hover:bg-purple-900/20 border-[#808080d1] hover:border hover:border-white text-[#808080d1] hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="300"
      >
        <h2 className={` text-2xl font-semibold`}>
          Pacote npm{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Acesse o pacote npm do projeto.
        </p>
      </a>
    </footer>
  )
}