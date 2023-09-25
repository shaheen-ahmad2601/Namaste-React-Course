import React, { useEffect, useState } from "react";

const useRestroMenu = (resId) => {
const [resInfo,setResInfo]= useState(null)
    useEffect(()=>{
      fetchData()
    },[])


   const fetchData = async() => {
    const data = await fetchData(MENU_API + resId)
    const json = await data.json();
    setResInfo(josn)

   }

  return resInfo;
};

export default useRestroMenu;


