'use client';
import useSearchModal from '@/app/hooks/useSearchModal';
import {BiSearch} from 'react-icons/bi'; 

const Search = () => {
  const searchModal =useSearchModal();
  return (
    <div
    onClick={searchModal.onOpen}
    className="
    border-[1px]
    w-full
    md:w-auto
    py-2
    rounded-full
    shadow-sm
    hover:shadow-md
    transition
    cursor-pointer">
      <div className="
         flex
         flex-row
         items-center
         justify-between">
        <div className="
        text-sm
        font-semibold
        px-6">
          Anywhere
        </div>
        <div className="
        hidden
        sm:block
        text-sm
        font-semibold
        px-6
        border-x-[1px]
        flex-1
        text-center">
          Any Weak
        </div>
        <div className="
        tetx-sm
        pl-6
        pr-2
        text-grey-600
        flex
        flex-row
        items-center
        gap-3">
          <div className="hidden sm:block">Any Guests</div>
          <div className="
          p-2
          bg-[#1e99b2]
          rounded-full
          text-white">
            <BiSearch size={18}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;