import axios from "axios";
export default axios.create(
    {
        baseURL:'https://api.rawg.io/api',
        params:{
            key:'4e8b610c49a84e20a67dce8d8867e75b'
            
        },
  httpsAgent: {
    rejectUnauthorized: false,
  },
    }
);