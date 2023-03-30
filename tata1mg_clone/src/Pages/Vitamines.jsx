import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useLocation, useNavigate } from "react-router-dom";
import { VitaminsData } from "../Redux/Products/action";

import { useSearchParams } from "react-router-dom";
export const VitaminsList = () => {
  const location=useLocation()
    let [searchParams, setSearchParams] = useSearchParams();
  const dispatch=useDispatch()
  const store=useSelector(store=>console.log(store))
  const data={
    params:{
      batch:searchParams.getAll("batch"),
      _limit:10,
      _page:searchParams.get("page"),
    }
  }
  useEffect(()=>{
    dispatch(VitaminsData(data))
  },[location.search])
  return (
    <div>
      <div data-testid="student-list"  style={{display:"grid",gridTemplateColumns:"repeat(5,1fr"}}>
        {/* {store.map((el)=>{
        return  <StudentCard key={el.id} {...el} />
        })} */}
     
        
      </div>
    </div>
  );
};
