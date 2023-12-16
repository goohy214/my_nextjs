export const Home = ({ user }: { user: React.ReactNode }) => {
  return (
    <div className="font-sans antialiased h-screen flex">
      <div className="bg-gray-900 text-purple-lighter flex-none w-24 p-6 hidden md:block">
        <div className="cursor-pointer mb-4 border-b border-gray-600 pb-2">
          <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
            <img src="https://cdn.discordapp.com/embed/avatars/0.png" alt="" />
          </div>
        </div>
        <div className="cursor-pointer mb-4">
          <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-xl mb-1 overflow-hidden">
            <img src="https://cdn.discordapp.com/embed/avatars/0.png" alt="" />
          </div>
        </div>
        <div className="cursor-pointer mb-4">
          <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
            <img src="https://cdn.discordapp.com/embed/avatars/1.png" alt="" />
          </div>
        </div>
        <div className="cursor-pointer mb-4">
          <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
            <img src="https://cdn.discordapp.com/embed/avatars/2.png" alt="" />
          </div>
        </div>
        <div className="cursor-pointer mb-4">
          <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
            <img src="https://cdn.discordapp.com/embed/avatars/3.png" alt="" />
          </div>
        </div>
        <div className="cursor-pointer mb-4">
          <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
            <img src="https://cdn.discordapp.com/embed/avatars/4.png" alt="" />
          </div>
        </div>
        <div className="cursor-pointer mb-4">
          <div className="bg-white opacity-25 h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
            <svg
              className="fill-current h-10 w-10 block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-purple-lighter flex-none w-64 pb-6 hidden md:block">
        <div className="text-white mb-2 mt-3 px-4 flex justify-between border-b border-gray-600 py-1 shadow-xl">
          <div className="flex-auto">
            <h1 className="font-semibold text-xl leading-tight mb-1 truncate">
              My Server
            </h1>
          </div>
          <div className="flex-none absolute bottom-0 ">{user}</div>
          <div>
            <svg
              className="arrow-gKvcEx icon-2yIBmh opacity-50 cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="mb-8">
          <div className="px-4 mb-2 text-white flex justify-between items-center">
            <div className="opacity-75 cursor-pointer">GENERAL</div>
            <div>
              <svg
                className="fill-current h-5 w-5 opacity-50 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
              </svg>
            </div>
          </div>
          <div className="bg-teal-dark cursor-pointer font-semibold py-1 px-4 text-gray-300">
            # general
          </div>
        </div>
        <div className="mb-8">
          <div className="px-4 mb-2 text-white flex justify-between items-center">
            <div className="opacity-75 cursor-pointer">VOICE</div>
            <div>
              <svg
                className="fill-current h-5 w-5 opacity-50 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
              </svg>
            </div>
          </div>
          <div className="bg-teal-dark hover:bg-gray-800 cursor-pointer font-semibold py-1 px-4 text-gray-300">
            ? General
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-gray-700 overflow-hidden">
        <div className="border-b border-gray-600 flex px-6 py-2 items-center flex-none shadow-xl">
          <div className="flex flex-col">
            <h3 className="text-white mb-1 font-bold text-xl text-gray-100">
              <span className="text-gray-400">#</span> general
            </h3>
          </div>
        </div>
        <div className="px-6 py-4 flex-1 overflow-y-scroll">
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/0.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">09:23</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/3.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">09:24</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/1.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">09:26</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/2.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">10:00</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/3.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">10:20</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/4.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">10:23</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/0.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">10:30</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/1.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">10:50</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/2.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">11:30</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/3.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">11:37</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/4.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">11:45</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/1.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">11:50</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/2.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">11:55</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/3.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">11:59</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
          <div className="border-b border-gray-600 py-3 flex items-start mb-4 text-sm">
            <img
              src="https://cdn.discordapp.com/embed/avatars/4.png"
              className="cursor-pointer w-10 h-10 rounded-3xl mr-3"
            />
            <div className="flex-1 overflow-hidden">
              <div>
                <span className="font-bold text-red-300 cursor-pointer hover:underline">
                  User
                </span>
                <span className="font-bold text-gray-400 text-xs">12:00</span>
              </div>
              <p className="text-white leading-normal">Discord is awesome!</p>
            </div>
          </div>
        </div>
        <div className="pb-6 px-4 flex-none">
          <div className="flex rounded-lg overflow-hidden">
            <span className="text-3xl text-grey border-r-4 border-gray-600 bg-gray-600 p-2">
              <svg
                className="h-6 w-6 block bg-gray-500 hover:bg-gray-400 cursor-pointer rounded-xl"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
                  fill="#FFFFFF"
                />
              </svg>
            </span>
            <input
              type="text"
              className="w-full px-4 bg-gray-600"
              placeholder="Message #general"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
