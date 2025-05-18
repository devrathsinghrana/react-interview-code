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
    <form className="space-y-8 divide-y divide-gray-200 p-12">
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Username
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    workcation.com/
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                About
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={""}
                />
                <p className="mt-2 text-sm text-gray-500">
                  Write a few sentences about yourself.
                </p>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="flex items-center">
                  <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <button
                    type="button"
                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Cover photo
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
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
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                First name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Last name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Email address
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Country
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Street address
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                City
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                State / Province
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                ZIP / Postal code
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Notifications
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">
            <div className="pt-6 sm:pt-5">
              <div role="group" aria-labelledby="label-email">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                  <div>
                    <div
                      className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                      id="label-email"
                    >
                      By Email
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg space-y-4">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="comments"
                            className="font-medium text-gray-700"
                          >
                            Comments
                          </label>
                          <p className="text-gray-500">
                            Get notified when someones posts a comment on a
                            posting.
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="candidates"
                              name="candidates"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="candidates"
                              className="font-medium text-gray-700"
                            >
                              Candidates
                            </label>
                            <p className="text-gray-500">
                              Get notified when a candidate applies for a job.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="offers"
                              className="font-medium text-gray-700"
                            >
                              Offers
                            </label>
                            <p className="text-gray-500">
                              Get notified when a candidate accepts or rejects
                              an offer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6 sm:pt-5">
              <div role="group" aria-labelledby="label-notifications">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                  <div>
                    <div
                      className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                      id="label-notifications"
                    >
                      Push Notifications
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="max-w-lg">
                      <p className="text-sm text-gray-500">
                        These are delivered via SMS to your mobile phone.
                      </p>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push-everything"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Everything
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push-email"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            Same as email
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="ml-3 block text-sm font-medium text-gray-700"
                          >
                            No push notifications
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
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
