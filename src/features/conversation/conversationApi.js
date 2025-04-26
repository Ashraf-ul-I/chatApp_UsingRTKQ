
import { apiSlice } from "../api/apiSLice";

export const conversationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getConversation: builder.query({
            query: (email) => ({
                url: `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&_limit=5`,
                method: 'GET',
            }),
        }),
        getConversations: builder.query({
            query: (userEmail,participantEmail) => ({
                url: `/conversations?participants_like=${userEmail}-${participantEmail}&&participants_like=${participantEmail}-${userEmail}`,
                method: 'GET',
            }),
        }),
        addConversation: builder.mutation({
            query: (data) => ({
                url: `/conversations`,
                method: 'POST',
                body:data
            }),
        }),
        editConversation: builder.mutation({
            query: ({id,data}) => ({
                url: `/conversations/${id}`,
                method: 'PATCH',
                body:data
            }),
        }),
    }),
});

// Export the hook for the endpoint
export const { useGetConversationQuery,
    useGetConversationsQuery,
useAddConversationMutation,
useEditConversationMutation } = conversationApi;
