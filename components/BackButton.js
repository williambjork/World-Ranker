import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function BackButton() {
  return (
    <div className="pl-3 pt-3">
        <button className="flex items-center bg-opacity-40 bg-gray-400 hover:bg-gray-300 hover:opacity-60 rounded-md p-2">
          <ChevronLeftIcon className="w-7 h-7" />
        </button>
      </div>
  )
}

export default BackButton