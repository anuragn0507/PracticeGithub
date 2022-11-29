var initialData = {
  electronics: [],
  jewelery: [],
  mensWearing: [],
  womenWearing: [],
  cart:[],
};

const productReducer = (storeData = initialData, action) => {
  // console.log("Product Reducer are called");
  switch (action.type) {
    case "ELECTRONICS": {
      return {
        ...storeData,
        electronics: action.payload,
      };
    }
    case "JEWELERY": {
      return {
        ...storeData,

        jewelery: action.payload,
      };
    }
    case "CART":{
      
    }
    default: {
      return storeData;
    }
  }
};

export default productReducer;
