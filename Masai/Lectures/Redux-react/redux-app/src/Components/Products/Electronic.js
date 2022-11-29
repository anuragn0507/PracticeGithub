import React, { useEffect } from "react";
import { electronicAction } from "../../Actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { productActionCreator } from '../../ActionCreator/productActionCreator'
import {bindActionCreator, bindActionCreators} from 'redux';

function Electronic() {
  const dispatch = useDispatch();
  const electronicData = useSelector((storeData) => {
    return storeData.productReducer.electronics;
  });

  useEffect(() => {
    // electronicAction(dispatch)
  let actionCreator =  bindActionCreators(productActionCreator, dispatch);
  actionCreator();
  }, []);

  
  return (
    <div>
      <h2>Electronic product Title</h2>
      {electronicData.length > 0 ? (
        <ul>
          {electronicData.map((ele, i) => {
            return (
              <Link key={i + 1} to={`/productDetails/${ele.id}`}>
                <li key={i + 1} >{ele.title}</li>
              </Link>
            );
          })}
        </ul>
      ) : 
        <div>
          <h1>Data is not Available </h1>
        </div>
      }
    </div>
  );
}

export default Electronic;
