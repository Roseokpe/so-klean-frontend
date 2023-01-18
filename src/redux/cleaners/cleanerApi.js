import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const cleanerApi = createApi({
    reducerPath: 'cleanerApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000//api/v1/'}),
    tagTypes: ['User', 'Cleaner', 'Reservation'],
    endpoints:(build) =>({
        getCleaners: build.query({
            query: () => '/cleaners',
        }),
        getUsers:build.query({
            query:() => '/users',
        }),
        getReservations:build.query({
            query:() => '/users',
        }),
        AddClearner: build.mutation({
            query: (body)=>({
                url: 'cleaner',
                method: 'POST',
                body,
            })    
        }),
        AddReservation: build.mutation({
            query: (body)=>({
                url: 'reservation',
                method: 'POST',
                body,
            })
        })   
    }),
})