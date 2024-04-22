"use client"

import { useState } from "react"   //when we use hhoks we need the to use client

import SearchManufacturer from "./SearchManufacturer"

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')

    const hundleSearch = () => {
        
    }
  return (
    <form className=" searchbar" onSubmit={hundleSearch}>
        <div className="searchbar_item">
            <SearchManufacturer manufacturer={manufacturer} 
                                setManufacturer={setManufacturer} 
                                />
        </div>

    </form>
  )
}

export default SearchBar