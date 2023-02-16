import { createContext, useState, useEffect} from "react";



const ItemsContext = createContext()
const ItemsProvider = ({children}) => {
  const [items, setItems] =useState([])
  useEffect(()=>(
    fetch('/items')
    .then((r)=>r.json())
    .then((itemsFromServer)=> setItems(itemsFromServer))
  ),[])
  return (
  <ItemsContext.Provider value={{items, setItems}}>
    {children}
  </ItemsContext.Provider>
  )
}

export { ItemsContext, ItemsProvider }