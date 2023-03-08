// import React, { useState } from "react";
// import { Outlet, Navigate } from "react-router-dom";
// const Private = ({ userData2 }) => {
//   let userData = JSON.parse(localStorage.getItem("userData"));


  // function Test() {
  //   if (userData) {
  //     return <Outlet />;
  //   } else {
  //     return <Navigate to={"/login"} />;
  //   }
    // if (userData.check) {
    //   setCheckBox(true)
    // }
    // setTimeout(() => {
    //   if (!checkBox) {
    //     setCheck(false);
    //   } else {
    //     setInterval(() => {
    //       console.log("userData");
    //     }, 10000);
    //   }
    // }, 2000);
    // if (userData) {
    //   if (check) {
    //     return <Outlet />;
    //   } else {
    //     return <Navigate to={"/login"} />;
    //   }
    // } else {
    //   return <Navigate to={"/login"} />;
    // }
    // setInterval(() => {
    //   if (userData) {
    //     setCheck(true);
    //   }
    //   if (check) {
    //     return <Outlet />;
    //   } else {
    //     return <Navigate to={"/login"} />;
    //   }
    // }, 1000);
    // return <Navigate to={"/login"} />;
    // return <Outlet/>
    // setInterval(() => {
    //   if (userData) {
    //     setCheck(true)
    //   }
    // }, 1);
    //   if (check) {
    //         // setInterval(() => {
    //         //   if (token) {
    //         //     // console.log(token);
    //         //   } else {
    //         //     // console.log("TOken yo'q");
    //         //   }
    //         // }, 1000);
    //     return <Outlet />
    //   } else {
    //     return (
    //       <>
    //         {
    //           setInterval(() => {
    //             check ? <Outlet /> : <Navigate to={"/login"} />;
    //           },1000)
    //         }
    //       </>
    //     );
    //   }
//   }
//   return <>{Test()}</>;
// };

// export default Private;
