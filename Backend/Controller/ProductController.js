import ProductSchema from "../Model/productMode.js";

// create product
export const AddPrdoct = async (req, res) => {
    const { pName, pPrice, category } = req.body

    try {
        const dataCreate = await ProductSchema.create({
            pName: pName,
            pPrice: pPrice,
            category: category
        })
        res.status(200).json(dataCreate)

    } catch (error) {
        console.log(error);
    }
}

// get all product

export const GetAllData = async (req, res) => {
    console.log(req);
    try {

        const allData = await ProductSchema.find()
        res.status(200).json(allData)
    } catch (error) {
        console.log(error);
    }
}

// edt details  product

export const EditProduct = async (req, res) => {
  
    const { id } = req.params;

    try {
        const data = await ProductSchema.findByIdAndUpdate(id, req.body)
        res.status(200).json("data updated")
    } catch (error) {
        console.log(error);
    }
}

// delete product controller

export const DeleteProduct = async (req, res) => {
    const { id } = req.params

    try {
        const deleteData = await ProductSchema.findByIdAndDelete(id)
        res.status(200).json('item deleted')
    } catch (error) {
        console.log(error);
    }
}

// seach product controller with multi filed data 

export const SearchData = async (req, res) => {

    try {
        const findData = await ProductSchema.find({
            "$or": [
                { pName: { $regex: req.params.key } },
                { pPrice: { $regex: req.params.key } }
            ]
        })
        res.status(200).json(findData)

    } catch (error) {
        console.log(error);
    }
}