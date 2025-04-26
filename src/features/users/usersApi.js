import { apiSlice } from "../api/apiSLice";

export const usersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (email) => ({
                url: `/users?email=${email}`,
                method: 'GET',
            }),
        }),
    }),
});

// Export the hook for the endpoint
export const {useGetUserQuery} = usersApi;
 