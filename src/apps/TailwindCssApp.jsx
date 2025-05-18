import React from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";

const Screen = () => {
  return (
    <div className="w-screen h-screen bg-[#242424] text-[rgba(255,255,255,0.87)] flex justify-center items-center">
      <div className="p-8 max-w-[418px] w-full mx-auto text-center">
        <div className="flex gap-12 justify-center items-center">
          <a href="https://vitejs.dev" className="shrink-0" target="_blank">
            <img
              src={viteLogo}
              className="h-24 hover:[filter:drop-shadow(0_0_2em_#646cffaa)]"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" className="shrink-0" target="_blank">
            <img
              src={reactLogo}
              className="h-24 animate-spin [animation-duration:20s] hover:[filter:drop-shadow(0_0_2em_#61dafbaa)]"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="text-5xl font-bold my-12">Vite + React</h1>
        <div className="card">
          <button className="hover:border-[#646cff] transition-all border border-transparent rounded-lg bg-[#1a1a1a] px-[19.2px] py-[9.6px]">
            count is 0
          </button>
          <p className="my-4 text-sm cursor-pointer font-light">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-[#888] mt-16">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
};

const Animation = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-6 m-8">
        <div className="hover:translate-x-9 transition-all duration-1000 hover:bg-gray-500 hover:border-2 hover:border-gray-100 shadow border-4 border-gray-900 rounded w-32 shrink-0 h-32 bg-red-500 ease-out" />
        <div className="shadow-sm animate-wiggle border-x-2 border-dotted border-red-900 rounded-lg w-32 shrink-0 h-32 bg-green-500" />
        <div className="shadow-md animate-spin border-t-4 border-dashed border-gray-900 rounded-xl w-32 shrink-0 h-32 bg-amber-500" />
        <div className="shadow-lg hover:animate-bounce rounded-2xl w-32 shrink-0 h-32 bg-slate-500" />
        <div className="shadow-xl animate-pulse rounded-full w-32 shrink-0 h-32 bg-yellow-500" />
        <div className="shadow-2xl animate-ping rounded-tr-full rounded-bl-full w-32 shrink-0 h-32 bg-indigo-500" />
      </div>

      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>

      <div className="border border-blue-300 bg-gray-800 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TypographyPlugin = () => {
  return (
    <div className="prose">
      <h1>Hello, this is a heading tag</h1>
      <p>This is a nice short paragraph on this heading tag</p>

      <ul>
        <li>This is point 1</li>
        <li>This is point 2</li>
        <li>This is point 3</li>
      </ul>

      <ol>
        <li>This is point 1</li>
        <li>This is point 2</li>
        <li>This is point 3</li>
      </ol>
    </div>
  );
};

const Shadow = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-6 m-8">
        <div className="shadow w-32 shrink-0 h-32 bg-red-500" />
        <div className="shadow-sm w-32 shrink-0 h-32 bg-green-500" />
        <div className="shadow-md w-32 shrink-0 h-32 bg-amber-500" />
        <div className="shadow-lg w-32 shrink-0 h-32 bg-slate-500" />
        <div className="shadow-xl w-32 shrink-0 h-32 bg-yellow-500" />
        <div className="shadow-2xl w-32 shrink-0 h-32 bg-indigo-500" />
      </div>
    </div>
  );
};

const Responsive = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:gap-4">
        <div className="shrink-0 h-32 bg-red-400" />
        <div className="shrink-0 h-32 bg-green-400" />
        <div className="shrink-0 h-32 bg-amber-400" />
        <div className="shrink-0 h-32 bg-slate-400" />
        <div className="shrink-0 h-32 bg-yellow-400" />
        <div className="shrink-0 h-32 bg-indigo-400" />
      </div>
    </div>
  );
};

const Jit = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-1">
        <div className="h-32 col-span-2 bg-red-400" />
        <div className="[background:#eeeeee] h-[50px] col-span-3" />
        <div className="h-32 bg-amber-400" />
        <div className="h-32 bg-slate-400" />
        <div className="h-32 bg-yellow-400" />
      </div>
    </div>
  );
};

const Hover = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-6 m-8">
        <div className="hover:translate-x-9 transition-all duration-1000 hover:bg-gray-500 hover:border-2 hover:border-gray-100 shadow border-4 border-gray-900 rounded w-32 shrink-0 h-32 bg-red-500 ease-out" />
        <div className="shadow-sm border-x-2 border-dotted border-red-900 rounded-lg w-32 shrink-0 h-32 bg-green-500" />
        <div className="shadow-md border-t-4 border-dashed border-gray-900 rounded-xl w-32 shrink-0 h-32 bg-amber-500" />
        <div className="shadow-lg rounded-2xl w-32 shrink-0 h-32 bg-slate-500" />
        <div className="shadow-xl rounded-full w-32 shrink-0 h-32 bg-yellow-500" />
        <div className="shadow-2xl rounded-tr-full rounded-bl-full w-32 shrink-0 h-32 bg-indigo-500" />
      </div>
    </div>
  );
};

const Grid = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-1">
        <div className="h-32 col-span-2 bg-red-400" />
        <div className="h-32 col-span-3 bg-green-400" />
        <div className="h-32 bg-amber-400" />
        <div className="h-32 bg-slate-400" />
        <div className="h-32 bg-yellow-400" />
      </div>
    </div>
  );
};

function FormExample1() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                for="username"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                    workcation.com/
                  </div>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    placeholder="janesmith"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                for="about"
                className="block text-sm/6 font-medium text-gray-900"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  name="about"
                  id="about"
                  rows="3"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>

            <div className="col-span-full">
              <label
                for="photo"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <svg
                  className="size-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label
                for="cover-photo"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <svg
                    className="mx-auto size-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div className="mt-4 flex text-sm/6 text-gray-600">
                    <label
                      for="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                for="first-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="last-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                for="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                for="country"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Country
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                <svg
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="col-span-full">
              <label
                for="street-address"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Street address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                for="city"
                className="block text-sm/6 font-medium text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autocomplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                for="region"
                className="block text-sm/6 font-medium text-gray-900"
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autocomplete="address-level1"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                for="postal-code"
                className="block text-sm/6 font-medium text-gray-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autocomplete="postal-code"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">
            Notifications
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900">
                By email
              </legend>
              <div className="mt-6 space-y-6">
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        checked
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                      />
                      <svg
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          className="opacity-0 group-has-checked:opacity-100"
                          d="M3 8L6 11L11 3.5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          className="opacity-0 group-has-indeterminate:opacity-100"
                          d="M3 7H11"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <label for="comments" className="font-medium text-gray-900">
                      Comments
                    </label>
                    <p id="comments-description" className="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        id="candidates"
                        aria-describedby="candidates-description"
                        name="candidates"
                        type="checkbox"
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                      />
                      <svg
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          className="opacity-0 group-has-checked:opacity-100"
                          d="M3 8L6 11L11 3.5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          className="opacity-0 group-has-indeterminate:opacity-100"
                          d="M3 7H11"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <label
                      for="candidates"
                      className="font-medium text-gray-900"
                    >
                      Candidates
                    </label>
                    <p id="candidates-description" className="text-gray-500">
                      Get notified when a candidate applies for a job.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        id="offers"
                        aria-describedby="offers-description"
                        name="offers"
                        type="checkbox"
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                      />
                      <svg
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          className="opacity-0 group-has-checked:opacity-100"
                          d="M3 8L6 11L11 3.5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          className="opacity-0 group-has-indeterminate:opacity-100"
                          d="M3 7H11"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm/6">
                    <label for="offers" className="font-medium text-gray-900">
                      Offers
                    </label>
                    <p id="offers-description" className="text-gray-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900">
                Push notifications
              </legend>
              <p className="mt-1 text-sm/6 text-gray-600">
                These are delivered via SMS to your mobile phone.
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-everything"
                    name="push-notifications"
                    type="radio"
                    checked
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label
                    for="push-everything"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Everything
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-email"
                    name="push-notifications"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label
                    for="push-email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Same as email
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-nothing"
                    name="push-notifications"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label
                    for="push-nothing"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    No push notifications
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}

const Flexbox = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-1">
        <div className="w-32 shrink-0 h-32 bg-red-400" />
        <div className="w-32 shrink-0 h-32 bg-green-400" />
        <div className="w-32 shrink-0 h-32 bg-amber-400" />
        <div className="w-32 shrink-0 h-32 bg-slate-400" />
        <div className="w-32 shrink-0 h-32 bg-yellow-400" />
      </div>
    </div>
  );
};

const Directive = () => {
  return (
    <div>
      <h1>Hello, this is a heading tag</h1>
      <p>This is a nice short paragraph on this heading tag</p>

      <ul>
        <li>This is point 1</li>
        <li>This is point 2</li>
        <li>This is point 3</li>
      </ul>

      <ol>
        <li>This is point 1</li>
        <li>This is point 2</li>
        <li>This is point 3</li>
      </ol>

      <button className="btn-blue">hello</button>
    </div>
  );
};

const Radius = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-6 m-8">
        <div className="shadow border-4 border-gray-900 rounded w-32 shrink-0 h-32 bg-red-500" />
        <div className="shadow-sm border-x-2 border-dotted border-red-900 rounded-lg w-32 shrink-0 h-32 bg-green-500" />
        <div className="shadow-md border-t-4 border-dashed border-gray-900 rounded-xl w-32 shrink-0 h-32 bg-amber-500" />
        <div className="shadow-lg rounded-2xl w-32 shrink-0 h-32 bg-slate-500" />
        <div className="shadow-xl rounded-full w-32 shrink-0 h-32 bg-yellow-500" />
        <div className="shadow-2xl rounded-tr-full rounded-bl-full w-32 shrink-0 h-32 bg-indigo-500" />
      </div>
    </div>
  );
};

const TailwindCssApp = () => {
  return (
    <div>
      TailwindCssApp
      <Screen />
      <Animation />
      <TypographyPlugin />
      <Shadow />
      <Responsive />
      <Jit />
      <Hover />
      <Grid />
      <FormExample1 />
      <Flexbox />
      <Directive />
      <Radius />
    </div>
  );
};

export default TailwindCssApp;
