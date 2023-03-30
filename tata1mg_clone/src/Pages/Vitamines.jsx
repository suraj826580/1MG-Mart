import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useLocation, useNavigate } from "react-router-dom";

import {VitaminsData} from "../redux/Products/action"
import { useSearchParams } from "react-router-dom";
import { ProductCart } from "./ProductCard";
export const VitaminsPage = () => {
 // const location=useLocation()
    //let [searchParams, setSearchParams] = useSearchParams();
  const dispatch=useDispatch()
  const store=useSelector(store=>store.ProductsReducer.Vitamins)
  // const data={
  //   params:{
  //     batch:searchParams.getAll("batch"),
  //     _limit:10,
  //     _page:searchParams.get("page"),
  //   }
  // }
  console.log(store)
  useEffect(()=>{
    dispatch(VitaminsData)
  },[])
  return (
    <div>
      <div data-testid="student-list"  style={{display:"grid",gridTemplateColumns:"repeat(5,1fr"}}>
        {store.map((el)=>{
        return  <ProductCart key={el.id} {...el} />
        })}
     
        
      </div>
    </div>
  );
};
