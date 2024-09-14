import { createSlice } from '@reduxjs/toolkit';


// import {
//     http,
//     setCookie,
//     TOKEN,
//     USER_LOGIN,
//   } from "../../components/util/setting";

// let getUserLoginDefault = () => {
//     if (localStorage.getItem(USER_LOGIN)) {
//       const usDefault = JSON.parse(localStorage.getItem(USER_LOGIN));
//       return usDefault;
//     }
//     return null;
//   };

// const initialState = {
//     userRegister: {
//       id: 0,
//       email: "",
//       password: "",
//       name: "",
//       gender: true,
//       phone: "",
//     },
//     userLogin: getUserLoginDefault(),
//     profile: {} //B1
//   };


  

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => action.payload,
        clearUser: () => null,

        // handleChangeInputAction: (state, action) => {
        //     //Xử lý state
        //     const { id, value } = action.payload;
        //     state.userRegister[id] = value;
        //   }
    },
    
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
