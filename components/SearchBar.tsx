"use client"
import Image from "@/node_modules/next/image";

import { useRouter } from "@/node_modules/next/navigation";

import React, { useState } from "react"   //when we use hhoks we need the to use client

import SearchManufacturer from "./SearchManufacturer"

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml3 z-10 ${otherClasses}`}>
      <Image src="/magnifying-glass.svg" width={40} height={40} alt="magnifying glass" />
    </button>
  )
}

const SearchBar = ({setManufacturer, setModel}) => {
  const [searchManufacturer, setSearchManufacturer] = useState('')
  const [searchModel, setSearchModel] = useState('');
  const router = useRouter();

  const hundleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer === '' && searchModel === '') {
      return alert('Please fill in the search bar')
    }

    setModel(searchModel)
    setManufacturer(searchManufacturer)
  }

  return (
    <form className=" searchbar" onSubmit={hundleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer selected={searchManufacturer}
                            setSelected={setSearchManufacturer}
        />

        <SearchButton otherClasses={"sm:hidden"} />
      </div>

      <div className="searchbar__item">
        <Image src="/model-icon.png"
          width={25} 
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />

      </div>
      <SearchButton otherClasses="max-sm:hidden" />

    </form>
  )
}
export default SearchBar