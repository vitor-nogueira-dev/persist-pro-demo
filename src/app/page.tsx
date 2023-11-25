'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'persist-pro';


export default function Home() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [localStorageS, setLocalStorage] = useState({});
  const [loading, setLoading] = useState(false);

  const [localStorageValue, setLocalStorageValue, removeLocalStorageValue] = useLocalStorage(key, value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalStorageValue(value);
    setKey('');
    setValue('');
    window.dispatchEvent(new Event('localStorageChanged'));
    setLoading(true);
  };

  useEffect(() => {
    const updateLocalStorageData = () => {
      const data = Object.keys(localStorage).reduce((acc, key) => {
        acc[key] = localStorage.getItem(key);
        return acc;
      }, {} as Record<string, any>);

      setLocalStorage(data);
      setLoading(false);
    };

    window.addEventListener('localStorageChanged', updateLocalStorageData);

    updateLocalStorageData();

    return () => {
      window.removeEventListener('localStorageChanged', updateLocalStorageData);
    };
  }, [loading]);

  return (
    loading ? (
      <div className="min-h-screen w-full border flex justify-center items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-purple-600 h-32 w-32">
        </div>
      </div>
    ) : (
      <main className="flex min-h-screen flex-col items-center justify-between p-3 pb-0 overflow-hidden">

        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          ⭐️ A biblioteca que cuida do seu armazenamento com facilidade: <strong> Persist Pro</strong>!
        </p> */}


        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-purple-800 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#ae00ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        </div>
        <h1 className="mb-3 text-6xl font-bold">Persist Pro ⭐️</h1>
        <p className="mb-6 text-xl">
          A biblioteca que cuida do seu armazenamento com facilidade.
        </p>
        <div className=''>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-wrap">
            <div className='flex gap-2'>
              <input
                type="text"
                placeholder="Key"
                className="border p-2 rounded bg-transparent w-1/2 outline-none"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
              <input
                type="text"
                placeholder="Value"
                className="border p-2 rounded bg-transparent w-1/2 outline-none"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white p-2 rounded flex-1 transition-all ease-in-out duration-300">
              Set LocalStorage
            </button>
          </form>
        </div>
        <div className='border h-[450px] max-w-[600px] overflow-auto'>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left bg-primary">
                <th className="w-1/3 py-2 px-3 text-lg font-medium text-white ">
                  Chave
                </th>
                <th className=" border-l w-1/3 py-2 px-3 text-lg font-medium text-white ">
                  Valor
                </th>
                <th className="border-l w-1/3 py-2 px-3 text-lg font-medium text-white ">
                  Remover
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(localStorageS).map((storageKey) => (
                <tr key={storageKey} className="border">
                  <td className="border-r p-2">{storageKey}</td>
                  <td className="border-r p-2">
                    {localStorage[storageKey].length > 20 ?
                      `${localStorage[storageKey].substring(0, 20)}...` :
                      localStorage[storageKey]}
                  </td>
                  <td className="p-3 flex items-center justify-center">
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        removeLocalStorageValue(storageKey);
                        window.dispatchEvent(new Event('localStorageChanged'));
                      }}
                      className="hover:text-red-500 text-red-500/40 w-32 rounded-full bg-gray-900/50 hover:bg-gray-900/90 transition-all ease-in-out duration-300 hover:border border-red-500"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className='w-full p-4 flex justify-center'>
          <a
            href="https://github.com/vitor-nogueira-dev/persist-pro"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-900/60"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={` text-2xl font-semibold`}>
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
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-900/60"
            target="_blank"
            rel="noopener noreferrer"
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
      </main>
    )
  )
}
