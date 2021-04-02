import Head from "next/head";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl py-16">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="pb-8">
          <h1>New property</h1>
        </div>
        <form className="space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <div>
                <h3>Property information</h3>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-6">
                  <label
                    for="street_address"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="street_address"
                      id="street_address"
                      autocomplete="street-address"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    for="cover_photo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Photos
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
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

                <div className="sm:col-span-6">
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-700">
                      Property type
                    </legend>
                    <div className="mt-2 space-y-2">
                      <div class="flex items-center">
                        <input
                          id="push_everything"
                          name="push_notifications"
                          type="radio"
                          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label
                          for="push_everything"
                          class="ml-3 block text-sm text-gray-700"
                        >
                          Apartment
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="push_email"
                          name="push_notifications"
                          type="radio"
                          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label
                          for="push_email"
                          class="ml-3 block text-sm text-gray-700"
                        >
                          House
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="push_nothing"
                          name="push_notifications"
                          type="radio"
                          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label
                          for="push_nothing"
                          class="ml-3 block text-sm text-gray-700"
                        >
                          Studio
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="city"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Surface <span className="text-gray-400">(Optional)</span>
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="state"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Energy label{" "}
                    <span className="text-gray-400">(Optional)</span>
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="zip"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Construction year{" "}
                    <span className="text-gray-400">(Optional)</span>
                  </label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="zip"
                      id="zip"
                      autocomplete="postal-code"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
