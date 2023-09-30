import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    cartItems:[
        {
            product:{
                type:mongoose.Types.ObjectId,
                ref:"product"
            },
            quantity:{
                type:Number,
                default:1
            },
            price:Number
        }
    ],
    totalPrice:Number,
    discount:Number,
    totalPriceAfterDiscount:Number
    

});
export const cartModel= mongoose.model("Cart", CartSchema);
