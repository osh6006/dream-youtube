import React from "react";

export const SearchBar = () => {
  return (
    <>
      <div className="flex p-5 gap-10 items-center sm:gap-20 md:gap-32 lg:gap-40 xl:gap-52">
        <div className="w-32">
          <img
            className="w-32 aspect-auto"
            src="/assets/YouTube_Logo_2017.svg"
            alt="logo"
          />
        </div>
        <div className="flex w-full flex-1 max-w-5xl items-center outline-none">
          <input
            className="text-2xl p-1 w-full outline-none"
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <button className="bg-slate-500 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className=""></div>
      </div>
      <hr className="h-[2px] bg-gray-600 border-0 dark:bg-gray-700" />
    </>
  );
};
