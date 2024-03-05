import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { increment, setcounter } from '../redux/slice/counter';
// import { AddNewItem } from '../redux/slice/Pruchase';
import { setLogedInUser } from '../redux/slice/logedInUser';
// import Swal from 'sweetalert2';

const PremiumRecipes = () => {
    let[PremiumRecipes,setPremiumRecipes]=useState([]);  //array to store the recipe data fetched from server.
    let logedInUser=useSelector((state) => state.logedInUser.logedInUser);
    // let[purchasedRecipes,setpurchasedRecipes]=useState(logedInUser.purchased);  //array to store the recipe data fetched from server.

   useEffect(()=>{
    axios.get("http://localhost:3001/recipes")
    .then(Response=>setPremiumRecipes(Response.data))
   },[])

  //  let [updateLogInUser,setupdateLogInUser]=useState({})

 


const dispatch = useDispatch();

// const purchasedArray = logedInUser.purchased || [];
// console.log(purchasedArray)
  //  const handleAddToCard=(e)=>{
  // //  console.log( PremiumRecipes)
  //   // dispatch(increment(e));
  //   // dispatch(AddNewItem(e))
    
  //   // purchasedArray.push(e);
    
    
  //   console.log(logedInUser);
  //   console.log(e)
  //   let index=logedInUser.purchased.findIndex((m)=>m.idMeal === e.idMeal)
  //   let purchased=logedInUser.purchased
  //   console.log(purchased)
  //   if(index !==-1) alert('This recipe is already in your cart')
  //   else{
  // axios.patch(`http://localhost:3001/Users/${logedInUser.id}`,{"purchased":[...purchasedRecipes, e]})
  // .then((res)=>{
  //   console.log("success")
  //   setpurchasedRecipes((prevpurchasedRecipes)=>[...prevpurchasedRecipes,e])
  //           console.log(purchasedRecipes.length)})

  //           axios.get(`http://localhost:3001/Users/${logedInUser.id}`)
  //           .then((res)=>{
  //                       console.log(res.data)
  //                     // setupdateLogInUser(res.data)
  //                     const updatedUser = res.data;
  //                     // setupdateLogInUser(()=>{  return updatedUser;}); // This might still be asynchronous
  //                     // console.log("Updated user data:", updatedUser);
  //                     console.log("updated success")
  //                     console.log(updatedUser)
  //                     dispatch(setLogedInUser(updatedUser));
  //                     console.log(" dispatch updated success")
  //                 })
  //                 // if(updateLogInUser)
  //                 // {
  //                 //   dispatch(setLogedInUser(updateLogInUser));
  //                 //   console.log(" dispatch updated success")

  //                 // }
  //                 // else{
  //                 //   console.log("faild")
  //                 // }

              
  //    }

  // //   setpurchasedRecipes((prevpurchasedRecipes)=>[...prevpurchasedRecipes,e])
 
  // // let index=logedInUser.purchased.findIndex((m)=>m.idMeal === e.idMeal)
  // // if(index !==-1) alert('This recipe is already in your cart')
  // // else{
  // //   axios.patch(`http://localhost:3001/Users/${logedInUser.id}`,{"purchased":[...purchasedRecipes, e]})
  // //   // axios.patch(`http://localhost:3001/Users/${logedInUser.id}`, {purchased: purchasedRecipes})
  // //         .then(Response => { 
  // //   //         // setpurchasedRecipes([...purchasedRecipes,e])
  // //   //         // console.log('Response.data', Response.data)
  // //   //         // console.log('logedInUser', logedInUser)
  // //   //         // console.log('e', e)
  // //       // dispatch(setcounter(logedInUser.purchased.length))
  // //       console.log(logedInUser.purchased.length)
  // //       console.log(logedInUser)
  // //         })
  // // }


  //  }
  const handleAddToCard = (e) => {
    console.log(logedInUser);
    console.log(e);
  
    // Check if the recipe is already in the user's favorites
    const index = logedInUser.purchased.findIndex((m) => m.idMeal === e.idMeal);
  
    if (index !== -1) {
      // Recipe is already in favorites, show an alert
      alert('This recipe is already in your cart');
    } else {
      // Recipe is not in favorites, add it
      axios.patch(`http://localhost:3001/Users/${logedInUser.id}`, {
        purchased: [...logedInUser.purchased, e]
      })
      .then((res) => {
        console.log('Success');
        const updatedUser = res.data;
        // setupdateLogInUser(updatedUser);
        // console.log('Updated user data:', updatedUser);
        
        // Update the Redux state
        dispatch(setLogedInUser(updatedUser));
        console.log('Dispatch updated success');
        console.log(updatedUser.purchased.length);
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
      // let counterr= logedInUser.purchased.length
      // dispatch(setcounter(counterr))

//       // Dispatch setcounter with purchased array
// dispatch(setcounter({ purchased: logedInUser.purchased }));
    }
  }
  

   return (
    <>
      <div className="mb-2" style={{ marginTop: '5em' }}>
        <div className="container-fluid">
          <div className="row g-5 mx-auto">
        
             {PremiumRecipes ? (
            PremiumRecipes.map((m) => {
              return (
                <div className="col-md-4 col-sm-6" key={m.idMeal}>
                  <div
                    className="border rounded overflow-hidden position-relative"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className='border rounded h-100'>
                    <div className="w-100">
                      <img
                        className="w-100"
                        src={m.strMealThumb}
                        alt={m.strMeal}
                      />
                      <div
                        className="position-absolute bg-white rounded py-1 px-2"
                        style={{ top: '10px', right: '20px' }}
                      >
                        {/* <i class="bi bi-bookmark"></i> */}
                        <i
                          className="bi bi-bookmark-fill"
                          style={{ color: '#198754' }}
                        ></i>
                      </div>
                    </div>

                    <div className="p-3">
                      <h5 className="fw-700 m-2">{m.strMeal}</h5>
                        <div className='d-flex justify-content-between align-items-center'>
                          <h6 className="ms-2 text-muted mb-0">price :${m.price}</h6>
                          <i className="bi bi-cart4 " style={{ fontSize:"23px",color: 'rgb(25, 135, 84)', marginLeft:"100px" }} onClick={()=>handleAddToCard(m)}></i>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              );
            })
            ) : (
                <h1>Not found</h1>
                )}
          </div>
        </div>
      </div>
</>
   )}



export default PremiumRecipes;


