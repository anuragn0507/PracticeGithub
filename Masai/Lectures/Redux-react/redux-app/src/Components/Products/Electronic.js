import React, {useEffect} from "react";
import { electronicAction } from "../../Actions/ProductActions"
import { useDispatch, useSelector } from 'react-redux';

function Electronic() {
    const dispatch = useDispatch();
    const electronicData = useSelector((storeData)=>{
      return storeData.productReducer.electronics;
    })

    useEffect(() => {
        getData();
    },[]);

  const getData = () => {
    fetch(`https://fakestoreapi.com/products/category/electronics`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        electronicAction(data, dispatch)
      });
  };
  return (
    <div>
      <h2>Electronic product details</h2>
      {
        electronicData.length > 0 ? <ul>{
            electronicData.map((ele, i)=>{
              return <li key={i+1}>{
                ele.title
              }</li>
            })
          }
          </ul> : <div><h1>Data is not Available </h1></div>
      }
    </div>
  );
}

export default Electronic;
