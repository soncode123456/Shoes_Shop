import { createSlice } from '@reduxjs/toolkit'
import { http, setCookie, TOKEN, USER_LOGIN } from '../../util/setting';



const getUserLoginDefault = () => {
    if(localStorage.getItem(USER_LOGIN)){
      const userDefault = JSON.parse(localStorage.getItem(USER_LOGIN));
      return userDefault;
    }
    return null;
  }
  const initialState = {
    userRegister: {
        "email": "",
        "password": "",
        "passwordconfirm" :"",
        "name": "",
        "phone": "",
        "gender": true
        
    },
    userLogin: getUserLoginDefault()
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
      handleChangeInputAction: (state, action) => {
        //Xu lys setState
        const {id,value} = action.payload;
        state.userRegister[id] = value;
      },
      setUserLoginAction:(state,action) => {
        state.userLogin = action.payload;
      },
      setProfileAction:(state, action) => {
        state.profile = action.payload;
      }
    }
  });

  export const {handleChangeInputAction,setUserLoginAction,setProfileAction} = userSlice.actions

  //action async
export const loginActionAsync =(userLoginModel) => {

    return async (dispatch,getState) => {
      const res = await http.post('https://apistore.cybersoft.edu.vn/api/Users/signin',userLoginModel);
        //lưu token vào client (localstorage, cookie)
        //localstorage (server ko lấy đc)
        console.log(res.data.content)
  
        const token = res.data.content.accessToken;
        const userLogin = JSON.stringify(res.data.content);
        localStorage.setItem(TOKEN,token);
        localStorage.setItem(USER_LOGIN,userLogin);
        //Lưu Cookie
        setCookie(TOKEN,token,7);
        //Nạp dữ liệu lên store
        const actionPayload = setUserLoginAction(res.data.content);
        dispatch(actionPayload)
  
        //gọi api
        const actionAsync = getProfileActionAsync;
        dispatch(actionAsync)
  
        const globalState = getState();
        console.log(globalState)
    }
  }
  // export const getProfileActionAsync = async(dispatch) => {
  //   try{
  //     //xử lý logic api
  //     const res = await http.post('https://apistore.cybersoft.edu.vn/api/Users/getProfile');
  //   //sau khi lấy dữ liệu thành công từ api => dùng action payload để đưa lên store
  //   const actionPayload = setProfileAction(res.data.content);
  //   dispatch(actionPayload);
  //   }catch(err){
  //     console.log(err)
  //   }
  
  
  // }  