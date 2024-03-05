// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const UpdateRecipe = () => {
//     const { id } = useParams();
//     const [updatedata, setUpdateData] = useState([]); 

//     async function getDataById() {
//         const { data } = await axios.get(`http://localhost:3001/Admin/${id}`);
//         setUpdateData(data)
//         // console.log(data);
//     }

//     useEffect(() => {
//         getDataById();
//     }, [id]);
//     console.log(id)
//     return ( <div></div> );
// }
 
// export default UpdateRecipe;