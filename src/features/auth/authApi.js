import { apiSlice } from "../api/apiSLice";
import { userLoggedIn } from "./authSlice";

export const authApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        //endpoints here
        register:builder.mutation({
            query:(data)=>({
               url:"/register",
               method:"POST",
               body:data,
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                 try {
                    const result=await queryFulfilled;
                    localStorage.setItem("auth",JSON.stringify({
                        accessToken:result.data.accessToken,
                        user:result.data.user
                    }))
                    dispatch(userLoggedIn({
                        accessToken:result.data.accessToken,
                        user:result.data.user
                    }))
                 }catch(err){

                 }
            }
        }),
        login:builder.mutation({
            query:(data)=>({
               url:"/login",
               method:"POST",
               body:data,
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                   const result=await queryFulfilled;
                   localStorage.setItem("auth",JSON.stringify({
                       accessToken:result.data.accessToken,
                       user:result.data.user
                   }))
                   dispatch(userLoggedIn({
                       accessToken:result.data.accessToken,
                       user:result.data.user
                   }))
                }catch(err){
    
                }
           }
        }),
       
    })
})

export const {useLoginMutation,useRegisterMutation}=authApi