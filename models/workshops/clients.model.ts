import mongoose, {model, ObjectId, Schema} from "mongoose";

export interface ClientsModel extends Document {
    _id: ObjectId;
    name: string;
    lastname: string;
    owner: string;
    phone: string;
    email: string;
    vehicles: string[];
    birth: string;
    ruc: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
}

const ClientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name."],
  },
  lastname: {
    type: String,
    required: [true, "Please provide a lastname."],
  },
  owner: {
    type: String,
    required: [true, 'Please provide a owner']
  },
  phone: {
    type: String,
    required: [true, "Please provide a phone."],
  },
  email: {
    type: String,
    required: [true, "Please provide a email."],
  },
  birth: {
    type: String
  },
  ruc: {
    type: String
  },
  vehicles: {
    type: Array,
    required: [false]
  },
  createdBy: {
    type: String
  },
  updatedBy: {
    type: String
  }
}, { timestamps: true },);
export default  mongoose.models.clients || model<ClientsModel>("clients", ClientSchema);
