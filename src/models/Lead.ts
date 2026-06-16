import {
  Schema,
  model,
  models,
} from "mongoose";

const LeadSchema =
  new Schema(
    {
      storeId: {
        type: String,
        required: true,
      },

      vehicleId: {
        type: String,
        required: true,
      },

      name: {
        type: String,
        required: true,
      },

      phone: {
        type: String,
        required: true,
      },

      message: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

const Lead =
  models.Lead ||
  model(
    "Lead",
    LeadSchema
  );

export default Lead;