/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';


@Schema()
export class User extends Document {
  @Prop()
  name: string;


}

export const UserSchema = SchemaFactory.createForClass(User);


// export const UserSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     role: {
//       type: String,
//       required: true,
//     },
//     permissions: {
//       type: Array<Permission>,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true },
// );

// export interface User extends mongoose.Document {
//   _id: string;
//   username: string;
//   role: string;
//   permissions: Permission[];
//   password: string;
// }

// export interface Permission {
//   read: boolean;
//   write: boolean;
//   update: boolean;
//   delete: boolean;
// }
