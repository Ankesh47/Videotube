import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId,
        ref: "User"  // individual user
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: "User"   // channel
    }

}, { timestamps: true } );

export const Subscription = mongoose.model("Subscription", subscriptionSchema);