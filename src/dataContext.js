import React, { useState, useContext, useEffect, useReducer } from "react";
import { videos, categories } from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [videosDb, setVideosDb ] = useState(videos)
    const [categoriesDb, setCategoriesDb] = useState(categories)
    const [query, setQuery] = useState("")
    const [watchLater, setWatchLater] = useState([])
    const [playlist, setPlaylist] = useState([])

    
return <AppContext.Provider value={{videosDb, categoriesDb, watchLater, setWatchLater, query, setQuery, playlist, setPlaylist}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider};