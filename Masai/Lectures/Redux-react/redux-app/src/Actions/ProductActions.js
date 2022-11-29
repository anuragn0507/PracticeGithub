import { store } from '../ReduxStore/Store';

export const electronicAction =( dispatch ) => {
    const storeData = store.getState();

    const getData = () => {
        console.log("electronics api is called");
        fetch(`https://fakestoreapi.com/products/category/electronics`)
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            // electronicAction(data, dispatch);

            dispatch({
                type:"ELECTRONICS",
                payload:data,
            })
          });
      };
      if(storeData.productReducer.electronics.length ===0){
          getData();

      }

    
};