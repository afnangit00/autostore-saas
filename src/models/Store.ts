import mongoose ,{ Schema, model, models } from 'mongoose';

const StoreSchema = new Schema({
        ownerId: {
                type: String,
                required: true,
        },
         name: {
                type: String,
                required: true,
         },
          slug: {
                type: String,
                required: true,
                unique: true,
          },
            description: {
                type: String,
            },
},
   {
        timestamps: true,
   }
);

const Store = models.Store || model("Store", StoreSchema);

export default Store;