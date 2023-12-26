import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/product/' }),
    endpoints: (builder) => ({

        createProduct: builder.mutation({
            query: (credential) => ({
                url: '/',
                method: 'POST',
                body: credential,
            }),
        }),

        updateProduct: builder.mutation({
            query: (credential) => ({
                url: `/${credential.id}`,
                method: 'PUT',
                body: credential,
            }),
        }),

        deleteProduct: builder.mutation({
            query: (credential) => ({
                url: `/${credential.id}`,
                method: 'DELETE',
            }),
        }),

    }),
});

export const {
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productApi;