import { Schema, model, models } from 'mongoose';

const VehicleSchema = new Schema({
        storeId: {
                type: String,
                required: true,
        },

        title: {
                type: String,
                required: true,
        },

        brand: {
                type: String,
                required: true,
        },

        price: {
                type: String,
                required: true,
        },
        year: {
                type: String,
                required: true,
        },
        fuelType: {
                type: String,
        },
        description: {
                type: String,
        },
        slug: {
                type: String,
                required: true,
                unique: true,
        },
        imageUrl: {
                type: String,
                default: "",
        },
}, {
        timestamps: true,
    }
 );

 const Vehicle = models.Vehicle || model('Vehicle', VehicleSchema);

 export default Vehicle;

 //14 days