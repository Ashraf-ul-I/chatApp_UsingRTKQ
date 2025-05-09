import { apiSlice } from "../api/apiSLice";

export const messagesApi=apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMessages: builder.query({
            query: (id) => ({
                url: `/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=1&_limit=5`,
                method: 'GET',
            }),
        }),
        addMessage: builder.mutation({
            query: (data) => ({
                url: `/messages`,
                method: 'POST',
                body:data
            }),
        }),
    }),
})

export const {useGetMessagesQuery,useAddMessageMutation} = messagesApi;