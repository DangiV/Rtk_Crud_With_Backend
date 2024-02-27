import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    status: "Loaded",
    error: null,
}


// create  product api call here 
export const CreateProduct = createAsyncThunk('CreateProduct', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://localhost:3020/AddProduct', data)
        console.log("data", response);
        return response
    } catch (error) {
        return rejectWithValue(error)
    }
})

// get all product from backend api call here 
export const GetAllDetails = createAsyncThunk('GetAllDetails', async () => {
    try {
        const response = await axios.get('http://localhost:3020/getAllProduct')
        console.log("data", response);
        return response;
    } catch (error) {
        throw Error("Error fetching product data");
    }
})


// Delete product api call here 
export const DeleteProduct = createAsyncThunk('DeleteProduct', async (id) => {
    console.log("id for delete", id);
    try {
        const response = await axios.delete(`http://localhost:3020/Deleteproduct/${id}`)
        console.log("data", response);
        return response;
    } catch (error) {
        throw Error("Error fetching product data");
    }
})


// update product api call here 
export const EditProduct = createAsyncThunk('EditProduct', async ({ productData, id }, { rejectWithValue }) => {
    console.log("data at slice ", productData, id);
    try {
        const response = await axios.put(`http://localhost:3020/EditProduct/${id}`, productData)
        console.log("data", response);
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
                state.status = true;
            })
            .addCase(GetAllDetails.fulfilled, (state, action) => {
                state.status = "success";
                state.users = action.payload.data;
            })
            .addCase(GetAllDetails.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload.message;
            });

        // here we have handle delete function response 
        builder
            .addCase(DeleteProduct.pending, (state) => {
                state.status = true;
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

console.log(userSlice.actions);

export default userSlice.reducer;