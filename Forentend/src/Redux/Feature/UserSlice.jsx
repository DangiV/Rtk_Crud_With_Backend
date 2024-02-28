import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { makeApi } from '../../api/MakeApi'

const initialState = {
    users: [],
    status: "Loaded",
    error: null,
}


// create  product api call here 
export const CreateProduct = createAsyncThunk('CreateProduct', async (data, { rejectWithValue }) => {
    try {
        const response = await makeApi('post', "/AddProduct", data)
        return response
    } catch (error) {
        return rejectWithValue(error)
    }
})

// get all product from backend api call here 
export const GetAllDetails = createAsyncThunk('GetAllDetails', async () => {
    try {
        const response = await makeApi('get', "/getAllProduct")
        return response;
    } catch (error) {
        throw Error("Error fetching product data");
    }
})


// Delete product api call here 
export const DeleteProduct = createAsyncThunk('DeleteProduct', async (id) => {
    try {
        const response = await makeApi('delete', `/Deleteproduct/${id}`)
        return response;
    } catch (error) {
        throw Error("Error fetching product data");
    }
})


// update product api call here 
export const EditProduct = createAsyncThunk('EditProduct', async ({ productData, id }, { rejectWithValue }) => {
    try {
        const response = await makeApi('put', `/EditProduct/${id}`, productData)
        return response
    } catch (error) {
        return rejectWithValue(error)
    }
})

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},


    extraReducers: (builder) => {
        // here we have handle logic for create product 
        builder
            .addCase(CreateProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(CreateProduct.fulfilled, (state, action) => {
                state.status = "success";
                const ResponseData = action.payload.data;
                state.users.push(ResponseData);
            })
            .addCase(CreateProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload.message;
            });


        // here we are getting all product list 
        builder
            .addCase(GetAllDetails.pending, (state) => {
                state.status = "loading";;
            })
            .addCase(GetAllDetails.fulfilled, (state, action) => {
                state.status = "success";
                state.users = action.payload;
            })
            .addCase(GetAllDetails.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload.message;
            });

        // here we have handle delete function response 
        builder
            .addCase(DeleteProduct.pending, (state) => {
                state.status = "loading";;
            })
            .addCase(DeleteProduct.fulfilled, (state, action) => {
                state.status = "success";
                const deletedItemId = action.meta.arg;
                state.users = state.users.filter((item) => item._id !== deletedItemId);
            })
            .addCase(DeleteProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload.message;
            });


        // here we have handle edit function response 
        builder
            .addCase(EditProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(EditProduct.fulfilled, (state, action) => {
                state.status = "success";
                state.users = action.payload;
            })
            .addCase(EditProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload.message;
            });
    },
})


export default userSlice.reducer;