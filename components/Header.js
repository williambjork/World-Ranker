import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <div className="flex">
      <div className="pl-3 pt-3">
        <button className="flex items-center bg-opacity-40 bg-gray-400 hover:bg-gray-300 hover:opacity-60 rounded-md p-2">
          <ChevronLeftIcon className="w-7 h-7" />
        </button>
      </div>

    <div className="flex justify-center pt-3">
      <div class="relativeflex">
        <label class="sr-only" for="email">
          {" "}
          Search{" "}
        </label>

        <input
          class="w-50 py-3 pl-3 pr-12 ml-9 text-sm bg-gray-700  border-none rounded"
          id="email"
          type="email"
          placeholder="Search"
        />

          <span class="absolute text-gray-400 pointer-events-none -translate-y-1/2 top-1/2 right-4">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
