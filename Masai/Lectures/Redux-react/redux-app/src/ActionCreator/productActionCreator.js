
export const productActionCreator=()=>{
    return(dispatch, getState)=>{
        console.log(dispatch);
        console.log(getState());

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

         if(getState().productReducer.electronics.length ===0){
            getData();
         }
    }
}