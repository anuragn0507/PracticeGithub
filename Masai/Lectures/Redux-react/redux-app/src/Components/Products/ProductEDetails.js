import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductEDetails() {
  const [state, setState ] = useState([]);
  const { id } = useParams();
  let data = useSelector((storeData) => storeData.productReducer.electronics);
  console.log(id);
  console.log(data);
  useEffect(() => {
    setState(
      data.filter((ele) => {
        console.log(ele.id, id)
        return ele.id == id;
      })
    );
  }, []);
  // let eleData = data.filter((ele, index)=>{
  //     return ele.id == id;
  // })
  console.log(state);
  return (
    <div>
      <h2 style={{ color: "green" }}>Product details component</h2>
      {state.length > 0 ? (
        <div>
          <img src={state[0].image} />
          <h4>$ {state[0].price}</h4>
          <button>Add to cart</button>
        </div>
      ) : (
        <div>
          {" "}
          <h2>Data is not available</h2>
        </div>
      )}
    </div>
  );
}

export default ProductEDetails;
